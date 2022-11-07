import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import ProductoFormScreen from './screens/ProductoFormScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" }
          }} />
        <Stack.Screen name="ProductoFormScreen" component={ProductoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App