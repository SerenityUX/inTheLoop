import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/firstScreen';
import ModalScreen from './screens/modalScreen';

import Calendar from './screens/calendar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen}
        options={{header: () => null}}   
        />
        <Stack.Screen name="Calendar" component={Calendar} 
        options={{header: () => null}}        
        />
        <Stack.Screen name="modalScreen" component={ModalScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;