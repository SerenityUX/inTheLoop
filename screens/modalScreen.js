import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions,
  Touchable,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import * as ImagePicker from "expo-image-picker";

export default function ModalScreen({ navigation, onRequestClose, event }) {
  const windowWidth = Dimensions.get("window").width;

  const [images, setImages] = useState(event?.images);

  async function takeAPhoto() {
    const formData = new FormData();
    const uploadData = new FormData();

    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        let pickerResult = ImagePicker.launchCameraAsync({
          allowsEditing: true,
          base64: true,
          aspect: [1, 1],
        }).then((pickerResult) => {
          if (pickerResult.canceled !== false) {
            console.log("canceled");
          } else {
            console.log(pickerResult.assets[0].uri);
            formData.append("source", pickerResult.assets[0].base64);
            fetch(
              `https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5`,
              {
                method: "POST",
                body: formData,
              },
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  key: "6d207e02198a847aa98d0a2a901485a5",
                  source: pickerResult.assets[0].base64,
                  action: "upload",
                }),
              }
            ).then((apiResponse) =>
              apiResponse
                .json()
                .then((jsonedResponse) => {
                  setImages((current) => [
                    ...current,
                    jsonedResponse.image.display_url,
                  ]);
                  uploadData.append(
                    "newImage",
                    jsonedResponse.image.display_url
                  );
                  uploadData.append("events_id", parseInt(event.id));
                })
                .then(() => {
                  console.log(uploadData);

                  fetch(
                    `https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/events/${event.id}`,
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: uploadData,
                    }
                  );
                })
            );
          }
        });
      }
    }
  }
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={onRequestClose}>
          <Image
            source={require("../icons/Close.png")}
            style={{
              height: 24,
              marginLeft: 16,
              marginTop: 12,
              marginBottom: 12,
              padding: 16,
              width: 24,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>{event?.name}</Text>
        <TouchableOpacity onPress={takeAPhoto}>
          <Image
            source={require("../icons/addPhoto.png")}
            style={{
              height: 24,
              marginRight: 16,
              marginTop: 12,
              marginBottom: 12,
              padding: 16,
              width: 24,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 96}}>
        <Carousel
          loop
          width={windowWidth}
          height={windowWidth}
          autoPlay={false}
          data={images}
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
                  uri: images[index],
                }}
                style={{
                  width: windowWidth,
                  height: windowWidth,
                }}
              />
            </View>
          )}
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 38,
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 12,
            marginRight: 16,
          }}
        >
          {event?.name}
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 18,
            color: "#102a54",
            opacity: 0.75,
            marginBottom: 4,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          {event?.date[1]}/{event?.date[2]}/{event?.date[0]}, {event?.time}
        </Text>

        <Text
          style={{
            fontWeight: "500",
            opacity: 0.75,
            color: "#102a54",
            fontSize: 18,
            marginBottom: 16,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          {event?.location}
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 18,
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 32,
          }}
        >
          {event?.description}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
