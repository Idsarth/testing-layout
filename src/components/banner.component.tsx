import React, { ReactElement } from 'react'
import {
   View,
   Image,
   ImageSourcePropType,
   StyleSheet
} from 'react-native'

interface BannerProps {
   source: ImageSourcePropType
}
const Banner: React.FC<BannerProps> = ({ source }): ReactElement => {

   return (
      <View style={styles.container}>
         <Image style={styles.banner} source={source} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 250
   },
   banner: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
   }
})

export default Banner
