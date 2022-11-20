import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { events } from '../events.json';

export default function dayDisplay( { date } ) {

    return(
        <View>
            <TouchableOpacity onClick={() => console.log('ello')}><Text>{date[2][0]}/{date[1]}/{date[3]}</Text></TouchableOpacity>
            <Text>{events[1].date[1]}/{events[1].date[2]}/{events[1].date[0]}</Text>
        </View>
        )
}
