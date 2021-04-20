import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';

export function Welcome(){
   const [visible, setVisible] = useState(true);

   function handleVisibility(){
      setVisible(true);
   }

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>
            Gerencie {'\n'} 
            suas plantas de forma fácil
         </Text>

         {
            visible &&
            <Image source={wateringImg} style={styles.image}/>
         }  

         <Text style={styles.subtitles}>
            Não esqueça mais de regar suas plantas. {'\n'} 
            Nós cuidamos de lembrar voê sempre que precisar
         </Text>

         <Button title=">"/>                
         
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   title: {
      margin:30,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading
   }, 
   subtitles: {      
      textAlign: 'center',
      fontSize: 14,
      paddingHorizontal: 10,
      color: colors.heading
   },
   button:{
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width: 120,      
   },
   image: {
      width: 272,
      height: 264
   },
   buttonText: {
      color: colors.white,
      fontSize: 24
   }
});