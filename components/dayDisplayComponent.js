import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
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

export default function dayDisplay({ date, setModalVisible, setModalData }) {
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

  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <Text>
        {date[2][0]}/{date[1]}/{date[3]}
      </Text>
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
