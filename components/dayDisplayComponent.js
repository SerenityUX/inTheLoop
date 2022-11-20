import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import { events } from '../events.json';

  const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
    }
  });

export default function dayDisplay( { date } ) {

    return(
        <View>
            <Text>{date[2][0]}/{date[1]}/{date[3]}</Text>

            {events.map((selectedEvent,i) =>

            <View>
                {[selectedEvent.date[1] + "", selectedEvent.date[2] + "", selectedEvent.date[0]] + "" == [date[2][0] + "",date[1] + "",date[3] + ""] ? (
                    <View>
                        <Text>{selectedEvent.name}</Text>
                        <Text>{selectedEvent.details.description}</Text>
                        {selectedEvent.details.images.map((imageUri, imageIndex) => 
                        <View>
                        <Image
                        style={styles.image}
                        source={{uri: imageUri}}
                        />   
                        </View>
 
                        )}
                    </View>
                    ) : 
                    (
                        null
                )}
            </View>
            )}
        </View>
        )
}
