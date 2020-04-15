import React, { ReactElement } from 'react'
import {
   Text,
   View,
   ScrollView,
   StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// Import components
import Banner from '../components/banner.component'
import Keyboard from '../components/keyword.component'
import ListThemes from '../components/list/list-theme.component'

const ReadingScreen: React.FC = (): ReactElement => {
   return (
      <ScrollView>
         <View style={styles.screen}>
            <Banner source={require('../../assets/images/img-banner.jpg')} />

            <View style={styles.container}>
               <LinearGradient
                  colors={['#036bb6', '#128dd9', '#742ca9']}
                  style={styles.linear}
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
               >
                  <Text style={styles.text}>Peliculas</Text>
               </LinearGradient>

               <View style={styles.content}>
                  <Text style={styles.title}>Palabras Claves</Text>
                  <Text style={styles.textDetails}>Ver todos</Text>
               </View>

              <View style={styles.containerKeyboards}>
                  <View style={styles.keyboards}>
                        <Keyboard message='Salud Sexual y Reproductiva' />
                        <Keyboard message='Derechos' />
                     </View>

                     <View style={styles.keyboards}>
                        <Keyboard message='Equidad de Genero' />
                        <Keyboard message='Habilidades Blandas' />
                     </View>
               </View>
            </View>

            <ListThemes />
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   screen: {
      backgroundColor: '#fff'
   },
   container: {
      paddingHorizontal: 20,
      marginTop: 20
   },
   linear: {
      borderRadius: 5,
      width: '100%',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
   },
   text: {
      color: '#fff',
      fontSize: 25
   },
   content: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   title: {
      color: '#212121',
      fontSize: 27
   },
   textDetails: {
      color: '#555458',
      fontSize: 17,
      textTransform: 'uppercase'
   },
   containerKeyboards: {
      marginVertical: 10
   },
   keyboards: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   }
})

export default ReadingScreen
