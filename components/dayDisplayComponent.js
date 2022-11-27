import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Image } from "react-native";
import { events } from "../events.json";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import EventPreview from "./eventPreview"

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

export default function dayDisplay({ date, setModalVisible, setModalData }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <Text>
        {date[2][0]}/{date[1]}/{date[3]}
      </Text>

      {events.map((selectedEvent, i) => (
        <View key={i}>
          {[
            selectedEvent.date[1] + "",
            selectedEvent.date[2] + "",
            selectedEvent.date[0],
          ] +
            "" ==
          [date[2][0] + "", date[1] + "", date[3] + ""] ? (
            <TouchableOpacity onPress={() => {
              setModalData(selectedEvent)
              setModalVisible(true)

            }}>
            <EventPreview selectedEvent={selectedEvent} windowWidth={windowWidth}/>
            </TouchableOpacity>
          ) : null}
        </View>

      ))}
    </View>
  
  );
}
