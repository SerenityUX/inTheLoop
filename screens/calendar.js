import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { getMonths } from "../calendarFunctions";

export default function Calendar({ navigation }) {
  const dayofweek = require('dayofweek');
  const dayAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const currentDay = new Date(Date.now());
  const currentDayOfWeek = dayofweek(currentDay.getYear() + 1900, currentDay.getMonth() + 1, currentDay.getDate())
  
  const currentYear = 2022;

  function findStartDay(year, month) {
    return dayofweek(year, month, 1)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <Text>
            Currently: 
            {currentDay.getMonth() + 1}
            /
            {currentDay.getDate()}
            /
            {currentDay.getYear() + 1900}, 
            {currentDayOfWeek}
          </Text>
        {getMonths(currentDay.getYear() + 1900).map((month, keyID) => {
          return(
          <View key={keyID}>
          <Text>{month.name}</Text>

          <View style={{flexDirection: "row", flexWrap: "wrap"}}>
          {dayAbbreviations.map((dayofWeek, i) =>
              <Text style={{width: "14.2%"}} key={i}>{dayofWeek}</Text>
          )}
            {[...Array(dayOrder.indexOf(findStartDay(currentYear, keyID + 1)))].map((x, i) =>
              <Text style={{width: "14.2%"}} key={i}></Text>
            )}
            {[...Array(month.numDays)].map((x, i) =>
              <Text style={{width: "14.2%"}} key={i}>{i + 1}</Text>
            )}
          </View>
          </View>
          )
        })}   
        <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});