import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import CalendarComponent from "../components/calendarComponent"
import DayDisplayComponent from "../components/dayDisplayComponent"
import ModalScreen from "../screens/modalScreen"
import { Dimensions } from "react-native";

import AbsenceScreen from "../screens/planAbsence"
import { useWindowDimensions } from 'react-native';

export default function Calendar({ route, navigation }) {
  const [date, setDate] = useState(["...", 0, 0, 0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [absencesVisible, setAbsentVisible] = useState(false);
  const windowHeight = Dimensions.get("window").height;
  const { height, width } = useWindowDimensions();

  const [modalData, setModalData] = useState({});

  return (
    <View style={{backgroundColor: "#fff", height: "100%"}}>
    <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <SafeAreaView>
            <ModalScreen event={modalData} onRequestClose={() => setModalVisible(!modalVisible)} />
            </SafeAreaView>
          </Modal>

          <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={absencesVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setAbsentVisible(!absencesVisible);
          }}>
            <SafeAreaView>
            <AbsenceScreen children={route.params.children} date={date} onRequestClose={() => setAbsentVisible(!absencesVisible)} />
            </SafeAreaView>
          </Modal>
          <SafeAreaView style={{justifyContent: "space-between", height: height}}>
            <View>
            <Text style={{fontSize: "26px", height: 32, fontWeight: "600", marginLeft: 16, marginRight: 16, marginTop: 16, marginBottom: 8}}>Welcome Back, {route.params.name.split(" ")[0]}</Text>
            <CalendarComponent setDate={setDate}/>
            </View>
            <View>
            <DayDisplayComponent role={route.params.role} setModalVisible={setModalVisible} setAbsentVisible={setAbsentVisible} setModalData={setModalData} date={date}/>
            </View>
          {/* <Text>As a {route.params.role}, your id is {route.params.id}</Text> */}
          </SafeAreaView>
          <StatusBar style="auto" />        
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
});
