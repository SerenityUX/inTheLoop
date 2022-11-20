import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
import { events } from '../events.json';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions } from 'react-native';

  const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
    }
  });

export default function dayDisplay( { date } ) {
    const windowWidth = Dimensions.get('window').width;

    return(
        <View>
            <Text>{date[2][0]}/{date[1]}/{date[3]}</Text>

            {events.map((selectedEvent,i) =>

            <View key={i}>
                {[selectedEvent.date[1] + "", selectedEvent.date[2] + "", selectedEvent.date[0]] + "" == [date[2][0] + "",date[1] + "",date[3] + ""] ? (
                    <View>
                        <Text>{selectedEvent.name}</Text>
                        <Text>{selectedEvent.details.description}</Text>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowWidth}
                            autoPlay={false}
                            data={selectedEvent.details.images}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image source={{uri: selectedEvent.details.images[index]}} style={{width: windowWidth, height: windowWidth}}/>
                                </View>
                            )}
                        />
                        
                        {selectedEvent.details.images.map((imageUri, imageIndex) => 
                        <View key={imageIndex}>
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
