import { StyleSheet, Button, TouchableOpacity, Image, Text, View } from "react-native";
import { getMonths } from "../calendarFunctions";
import { useState, useEffect } from "react";
import { useWindowDimensions } from 'react-native';
import { Left } from '../icons/Left.png';
import { Right } from '../icons/Right.png';

export default function CalendarComponent({ setDate }) {

  const dayofweek = require("dayofweek");
  const { height, width } = useWindowDimensions();


  const dayAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dayOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = new Date(Date.now());
  const [viewMonth, setViewMonth] = useState(
    getMonths(currentDay.getYear() + 1900)[currentDay.getMonth()]
  );

  const [selectedMonth, setSelectedMonth] = useState(
    getMonths(currentDay.getYear() + 1900)[currentDay.getMonth()]
  );
  const [selectedDay, setSelectedDay] = useState(currentDay.getDate());
  const currentDayOfWeek = dayofweek(
    currentDay.getYear() + 1900,
    currentDay.getMonth() + 1,
    currentDay.getDate()
  );

  const currentYear = currentDay.getYear() + 1900;
  const [viewYear, setViewYear] = useState(currentYear);

  const [selectedYear, setSelectedYear] = useState(currentYear);

  function findStartDay(year, month) {
    return dayofweek(year, month, 1);
  }
  const selectedDayOfWeek = dayofweek(
    selectedYear + 1900,
    selectedMonth.number,
    selectedDay - 1
  );
  useEffect(() => {
    setDate([
      selectedDayOfWeek,
      selectedDay,
      [selectedMonth.number, selectedMonth.name],
      selectedYear,
    ]);
  }, []);

  return (
    <View>
      <View>
        <View  style={{marginLeft: 16, marginRight: 16}}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 16
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (
                  getMonths(currentDay.getYear() + 1900)[
                    viewMonth.number - 2
                  ] != undefined
                ) {
                  setViewMonth(
                    getMonths(viewYear + 1900)[viewMonth.number - 2]
                  );
                } else {
                  setViewYear((prevViewYear) => prevViewYear - 1);
                  setViewMonth(getMonths(viewYear + 1900)[11]);
                }
              }}
              
            >
              <Image source={require("../icons/Left.png")} style={{height: 32, width: 32}}/>
            </TouchableOpacity>
            <Text style={{fontSize: "18px"}}>
              {viewMonth.name} {viewYear}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (
                  getMonths(currentDay.getYear() + 1900)[viewMonth.number] !=
                  undefined
                ) {
                  setViewMonth(getMonths(viewYear + 1900)[viewMonth.number]);
                } else {
                  setViewYear((prevViewYear) => prevViewYear + 1);
                  setViewMonth(getMonths(viewYear + 1900)[0]);
                }
              }}
            >              
            <Image source={require("../icons/Right.png")} style={{height: 32, width: 32}}/>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {dayAbbreviations.map((dayofWeek, i) => (
              <Text style={{ width: (0.142 * (width - 32)) , fontSize: "14px", height: 0.065 * width, textAlign: "center"}} key={i}>
                {dayofWeek}
              </Text>
            ))}
            {[
              ...Array(
                dayOrder.indexOf(findStartDay(viewYear, viewMonth.number))
              ),
            ].map((x, i) => (
              <Text style={{ width: (0.142 * (width - 32)) , height: 0.1 * width }} key={i}></Text>
            ))}
            {[...Array(viewMonth.numDays)].map((x, i) => (
              <View style={{ width: (0.142 * (width - 32)) , height: 0.1 * width, alignItems: "center", justifyContent: "center" }} key={i}>
                {selectedDay == i + 1 &&
                selectedMonth.number == viewMonth.number &&
                selectedYear == viewYear ? (
                  <TouchableOpacity style={{ backgroundColor: "#3D83EC", width: 0.1 * width, height: 0.1 * width, borderRadius: "100%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontSize: "16px" }}>{i + 1}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedDay(i + 1);
                      setSelectedMonth(viewMonth);
                      setSelectedYear(viewYear);
                      setDate([
                        dayofweek(viewYear + 1900, viewMonth.number, i),
                        i + 1,
                        [viewMonth.number, viewMonth.name],
                        viewYear,
                      ]);
                    }}
                    style={{ backgroundColor: "white", width: 0.1 * width, height: 0.1 * width, alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={{fontSize: "16px"}}>{i + 1}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
