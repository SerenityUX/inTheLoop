import { useState } from "react";
import { StyleSheet, TextInput, Image, View, Text, SafeAreaView, Button, TouchableOpacity, Dimensions, Touchable } from "react-native";
import { StackActions } from '@react-navigation/native';
import Carousel from "react-native-reanimated-carousel";


export default function ModalScreen({ navigation, onRequestClose, event }) {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
        <Text onPress={onRequestClose}>Close Detail View</Text>
      <Carousel
            loop
            width={windowWidth}
            height={windowWidth}
            autoPlay={false}
            data={event?.images}
            scrollAnimationDuration={500}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{
                    uri: event?.images[index],
                  }}
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                  }}
                />
              </View>
            )}
          />
        <Text>{event?.name}</Text>
        <Text>{event?.date[2]}/{event?.date[1]}/{event?.date[0]}, {event?.time}</Text>
        <Text>{event?.location}</Text>
        <Text>{event?.description}</Text>

    </View>
     );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});