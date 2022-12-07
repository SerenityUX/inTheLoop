import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
  Touchable,
  Alert,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import * as ImagePicker from "expo-image-picker";

export default function AbsenceScreen({
  navigation,
  onRequestClose,
  date,
  children,
}) {
  const [selected, setSelected] = useState(0);
  const [reason, setReason] = useState("");
  function submitAbsence() {
    const uploadData = new FormData();
    uploadData.append(
      "users_id",
      selected.id
    );
    uploadData.append(
      "date",
      [date[2][0], date[1], date[3]]
    );
    uploadData.append(
      "reason",
      reason
    );
    fetch(
      `https://x8ki-letl-twmt.n7.xano.io/api:7v6zckRK/markAbsent`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: uploadData,
      }
    ).then(result => result.json()).then((resulting) =>
    {
      if (resulting.message != undefined) {
        Alert.alert("Action Failed, Make sure your student is selected and try again")
      } else {
        Alert.alert("Successfully Marked " + selected.name + " Absent")
        onRequestClose()
      }
    })
  }
  return (
    <View
      style={{
        marginLeft: 16,
        marginRight: 16,
      }}
    >
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
              marginTop: 12,
              marginBottom: 12,
              padding: 16,
              width: 24,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>Plan Absence</Text>
        <TouchableOpacity>
          <Image
            source={require("../icons/addPhoto.png")}
            style={{
              height: 24,
              marginTop: 12,
              marginBottom: 12,
              padding: 16,
              width: 24,
              opacity: 0,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>Select Child</Text>
      {children.map((child, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.75}
          onPress={() => setSelected(child)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          {selected == child ? (
            <View
              style={{
                borderWidth: 10,
                borderColor: "#428DFD",
                marginRight: 4,
                width: 32,
                borderRadius: 100,
                height: 32,
              }}
            ></View>
          ) : (
            <View
              style={{
                borderWidth: 3,
                borderColor: "#D3D3D3",
                marginRight: 4,
                width: 32,
                borderRadius: 100,
                height: 32,
              }}
            ></View>
          )}

          <Text style={{ fontSize: 16 }} key={i}>
            {child.name}
          </Text>
        </TouchableOpacity>
      ))}
      <Text style={{ fontSize: 24, marginBottom: 12 }}>
        Select Reason for Absence
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText={(val) => setReason(val)}
        value={reason}
        style={{
          borderWidth: 1,
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 16,
          fontSize: 16,
          borderRadius: 8,
          minHeight: 96,
          borderColor: "#D3D3D3",
        }}
        placeholder={"Optional explanation"}
      />
      <TouchableOpacity
        onPress={() => submitAbsence()}
        style={{
          width: "100%",
          backgroundColor: "#1E70EA",
          padding: 16,
          borderRadius: 16,
          marginTop: 16,
        }}
      >
        <Text
          style={{
            color: "#fff",
            width: "100%",
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
          }}
          
        >
          Schedule Absence {date[2][0]}/{date[1]}/{date[3]}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
