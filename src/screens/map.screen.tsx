import React, { ReactElement } from 'react'
import {
   View
} from 'react-native'
import Banner from '../components/banner.component'

const MapScreen: React.FC = (): ReactElement => {
   return (
      <View>
         <Banner source={require('../../assets/images/img-slide-1.jpg')} />
      </View>
   )
}

export default MapScreen
