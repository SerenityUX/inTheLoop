import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
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

export default function dayDisplay({ date, setModalVisible, setModalData, setAbsentVisible }) {
  const dayofweek = require("dayofweek");

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

  return (
    <View>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16}}>
      <Text>
        {dayofweek(date[3], date[2][0], date[1], 'long')}
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => setAbsentVisible(true)}>
      <Text style={{color: "blue"}}>Plan Absence {date[2][0]}/{date[1]}/{date[3]}</Text>
    </TouchableOpacity>  
    </View>    
    {!noEvents ? (
        <Text onPress={() => console.log(events)}>No events</Text>
      ) : null}

      {events?.map((selectedEvent, i) => (
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
              />
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </View>
  );
}
