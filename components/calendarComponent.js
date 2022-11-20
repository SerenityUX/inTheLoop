import { StyleSheet, Button, TouchableOpacity, Text, View } from "react-native";
import { getMonths } from "../calendarFunctions";
import { useState, useEffect } from "react";

export default function CalendarComponent({ setDate }) {
  const dayofweek = require("dayofweek");

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
        <View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
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
              title={"<"}
            />
            <Text>
              {viewMonth.name} {viewYear}
            </Text>
            <Button
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
              title={">"}
            />
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {dayAbbreviations.map((dayofWeek, i) => (
              <Text style={{ width: "14.2%" }} key={i}>
                {dayofWeek}
              </Text>
            ))}
            {[
              ...Array(
                dayOrder.indexOf(findStartDay(viewYear, viewMonth.number))
              ),
            ].map((x, i) => (
              <Text style={{ width: "14.2%" }} key={i}></Text>
            ))}
            {[...Array(viewMonth.numDays)].map((x, i) => (
              <Text style={{ width: "14.2%" }} key={i}>
                {selectedDay == i + 1 &&
                selectedMonth.number == viewMonth.number &&
                selectedYear == viewYear ? (
                  <TouchableOpacity style={{ backgroundColor: "white" }}>
                    <Text style={{ color: "red" }}>{i + 1}</Text>
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
                    style={{ backgroundColor: "white" }}
                  >
                    <Text>{i + 1}</Text>
                  </TouchableOpacity>
                )}
              </Text>
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
