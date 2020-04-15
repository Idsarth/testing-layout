import React, { ReactElement } from 'react'
import {
   View
} from 'react-native'

import Banner from '../components/banner.component'

const SearchScreen: React.FC = (): ReactElement => {
   return (
      <View>
         <Banner source={require('../../assets/images/img-slide-3.jpg')} />
      </View>
   )
}

export default SearchScreen
