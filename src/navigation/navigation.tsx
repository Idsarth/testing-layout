import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TabsNavigation from './tabs/tabs.navigation'

const Stack = createStackNavigator()
const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator headerMode='none'>
            <Stack.Screen name='HOME' component={TabsNavigation} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigation
