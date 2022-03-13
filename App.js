import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landingsearch from './Sources/Search-and-result/Landingsearch';
import Resulthandler from './Sources/Search-and-result/Resulthandler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landingsearch'>
        <Stack.Screen name="Hiling.id" component={Landingsearch}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;