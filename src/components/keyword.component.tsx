import React, { ReactElement } from 'react'
import {
   View,
   Text,
   StyleSheet
} from 'react-native'

interface KeywordProps {
   message: string
}
const Keyword: React.FC<KeywordProps> = ({ message }): ReactElement => {
   return (
      <View style={styles.container}>
         <Text style={styles.message}>{message}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f4f4f4',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 200,
      marginVertical: 10
   },
   message: {
      color: '#555458',
      fontSize: 15,
      textAlign: 'center'
   }
})

export default Keyword
