import React, { ReactElement } from 'react'
import {
   View,
   Text,
   Image,
   StyleSheet,
   ImageSourcePropType
} from 'react-native'

interface SlideProps {
   source: ImageSourcePropType
   message: string
}
const Slide: React.FC<SlideProps> = ({ source, message }): ReactElement => {
   return (
      <View style={styles.container}>
         <Image source={source} style={styles.image}/>
         <Text style={styles.message}>{message}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      marginLeft: 20,
   },
   image: {
      resizeMode: 'cover',
      width: 250,
      height: 140,
      borderRadius: 10
   },
   message: {
      fontSize: 16,
      color: '#282f39',
      marginTop: 5
   }
})

export default Slide
