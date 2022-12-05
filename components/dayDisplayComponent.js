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

export default function dayDisplay({ date, setModalVisible, setModalData, setAbsentVisible, role }) {
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
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{backgroundColor: "#F4F4F4", borderTopLeftRadius: 16, borderTopRightRadius: 16}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16}}>
      <Text style={{fontSize: 22, fontWeight: "500", marginBottom: 16}}>
        {dayofweek(date[3], date[2][0], date[1], 'long')}, {date[2][0]}/{date[1]}/{date[3]}
      </Text>
    {role == 4 ? (    
    <TouchableOpacity style={styles.button} onPress={() => setAbsentVisible(true)}>
      <Text style={{color: "blue"}}>Plan Absence  {date[2][0]}/{date[1]}/{date[3]}</Text>
    </TouchableOpacity>  
    ) : 
    (null)
    }

    </View>    
    {!noEvents ? (
      <View style={{height: (windowHeight < 800 ? (((windowWidth - 48)/1.75) + 108) : ((windowWidth - 48)/1.25) + 108 + 16)}}>
        <Text onPress={() => console.log(events)}>No events</Text>
      </View>
      ) : null}
      <ScrollView style={{flexDirection: "row"}} horizontal={true}>
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
