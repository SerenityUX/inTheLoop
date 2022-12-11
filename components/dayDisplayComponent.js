import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import EventPreview from "./eventPreview";
import { useState, useEffect } from "react";
import { getEvents } from "../api";

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

export default function dayDisplay({
  date,
  setModalVisible,
  setModalData,
  setAbsentVisible,
  role,
}) {
  const dayofweek = require("dayofweek");
  const [seeUpcomingEvents, setSeeUpcomingEvents] = useState(false);

  const [events, setEvents] = useState([
    {
      date: [0, 0, 0],
      name: "Loading",
    },
  ]);
  const noEvents =
    events.filter(
      (selectedEvent, i) =>
        [
          selectedEvent.date[1] + "",
          selectedEvent.date[2] + "",
          selectedEvent.date[0],
        ] +
          "" ==
        [date[2][0] + "", date[1] + "", date[3] + ""]
    ).length != 0;

  useEffect(() => {
    const results = fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/events`
    ).then((result) => {
      result.json().then((data) => {
        setEvents(data);
      });
    });
  }, []);
  function reloadResults() {
    results = fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/events`
    ).then((result) => {
      result.json().then((data) => {
        setEvents(data);
      });
    });
  }

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        backgroundColor: "#F4F4F4",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          marginLeft: 16,
          marginRight: 16,
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "500" }}>
          {seeUpcomingEvents
            ? "Upcoming Events"
            : dayofweek(date[3], date[2][0], date[1], "long") +
              ", " +
              date[2][0] +
              "/" +
              date[1] +
              "/" +
              date[3]}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {seeUpcomingEvents ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSeeUpcomingEvents(false)}
            >
              <Image
                source={require("../icons/upcomingBlue.png")}
                style={{
                  height: 32,
                  width: 32,
                  marginLeft: 16,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSeeUpcomingEvents(true)}
            >
              <Image
                source={require("../icons/todayBlue.png")}
                style={{
                  height: 32,
                  width: 32,
                  marginLeft: 16,
                }}
              />
            </TouchableOpacity>
          )}
          {role == 4 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setAbsentVisible(true)}
            >
              <Image
                source={require("../icons/editBlue.png")}
                style={{
                  height: 32,
                  width: 32,
                  marginLeft: 16,
                }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {!noEvents && !seeUpcomingEvents ? (
        <View
          style={{
            height:
              windowHeight < 800
                ? (windowWidth - 48) / 1.75 + 108
                : (windowWidth - 48) / 1.25 + 108 + 16,
          }}
        >
          <View style={{justifyContent: 'center', height: "100%"}}>
          <Text style={{fontSize: 18, fontWeight: "600", width: windowWidth, textAlign: "center"}}>No events will be hosted on this date</Text>

          <TouchableOpacity style={{textAlign: "center", width: windowWidth}}>
            <Text style={{textAlign: "center", color: "#2D78E8", fontSize: 16, textDecoration: "underline", width: windowWidth}} onPress={() => setSeeUpcomingEvents(true)}>
              View Upcoming Events
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
        {!seeUpcomingEvents
          ? events?.map((selectedEvent, i) => (
              <View key={i}>
                {[
                  selectedEvent?.date[1] + "",
                  selectedEvent?.date[2] + "",
                  selectedEvent?.date[0],
                ] +
                  "" ==
                [date[2][0] + "", date[1] + "", date[3] + ""] ? (
                  <TouchableOpacity
                    onPress={() => {
                      reloadResults();
                      setModalData(selectedEvent);

                      setModalVisible(true);
                    }}
                  >
                    <EventPreview
                      selectedEvent={selectedEvent}
                      windowWidth={windowWidth}
                      isFinal={i == events.length - 1}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            ))
          : events?.map((selectedEvent, i) => (
              <View key={i}>
                {[selectedEvent?.date[1] + "", selectedEvent?.date[0]] + "" ==
                  [date[2][0] + "", date[3] + ""] &&
                !(parseInt(selectedEvent?.date[2]) < parseInt(date[1])) &&
                [selectedEvent?.date[1] + "", selectedEvent?.date[0]] + "" ==
                  [date[2][0] + "", date[3] + ""] ? (
                  <TouchableOpacity
                    onPress={() => {
                      reloadResults();
                      setModalData(selectedEvent);
                      console.log([
                        selectedEvent.date[1],
                        selectedEvent.date[2],
                        selectedEvent.date[0],
                      ]);
                      setModalVisible(true);
                    }}
                  >
                    <EventPreview
                      selectedEvent={selectedEvent}
                      windowWidth={windowWidth}
                      isFinal={i == events.length - 1}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            ))}
      </ScrollView>
    </View>
  );
}
