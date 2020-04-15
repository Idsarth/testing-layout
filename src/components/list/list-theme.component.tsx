import React, { ReactElement } from 'react'
import {
   Text,
   StyleSheet,
   View,
   FlatList
} from 'react-native'

import slide1 from '../../../assets/images/img-slide-1.jpg'
import slide2 from '../../../assets/images/img-slide-2.jpg'
import slide3 from '../../../assets/images/img-slide-3.jpg'

import Slide from '../slide.component'

const themes = [
   {
      id: 1,
      image: slide1,
      message: 'Presion sexual'
   },
   {
      id: 2,
      image: slide2,
      message: 'Educacion sexual'
   },
   {
      id: 3,
      image: slide3,
      message: 'Master'
   }
]

const ListThemes: React.FC = (props): ReactElement => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Temas</Text>
         <FlatList
            horizontal
            data={themes}
            keyExtractor={item => JSON.stringify(item.id)}
            renderItem={({ item }) => (
               <Slide
                  source={item.image}
                  message={item.message}
               />
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      marginBottom: 20
   },
   text: {
      color: '#282f39',
      fontSize: 24,
      paddingHorizontal: 20,
      marginVertical: 10
   }
})

export default ListThemes

