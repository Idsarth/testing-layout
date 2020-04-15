import React, { ReactElement } from 'react'
import {
   Text,
   View
} from 'react-native'

import Banner from '../components/banner.component'

const ProfileScreen: React.FC = (): ReactElement => {
   return (
      <View>
         <Banner source={require('../../assets/images/img-slide-2.jpg')} />
      </View>
   )
}

export default ProfileScreen
