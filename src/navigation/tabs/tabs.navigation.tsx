import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

// Import screens
import SearchScreen from '../../screens/search.screen'
import ProfileScreen from '../../screens/profile.screen'
import MapScreen from '../../screens/map.screen'
import ReadingScreen from '../../screens/reading.screen'

const TabsNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={{ 
        tabStyle: {
          backgroundColor: '#282f39'
        },
        labelStyle: {
          color: '#fff',
          fontSize: 13
        }
      }} initialRouteName='reading'>
      <Tab.Screen options={{
        title: 'Buscar',
        tabBarIcon: ({}) => (
          <Icon 
            name='search'
            color='#fff'
            size={23}
          />
        )
       }} name='search' component={SearchScreen} />
       
      <Tab.Screen options={{
        title: 'Map',
        tabBarIcon: ({}) => (
          <Icon 
            name='location-on'
            color='#fff'
            size={23}
          />
        )
       }} name='map' component={MapScreen} />

      <Tab.Screen options={{
        title: 'Lectura',
        tabBarIcon: ({}) => (
          <Icon 
            name='library-books'
            color='#fff'
            size={23}
          />
        )
       }} name='reading' component={ReadingScreen} />

      <Tab.Screen options={{
        title: 'Perfil',
        tabBarIcon: ({}) => (
          <Icon 
            name='verified-user'
            color='#fff'
            size={23}
          />
        )
       }} name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabsNavigation
