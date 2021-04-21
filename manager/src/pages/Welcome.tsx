import React from 'react';
import { 
   SafeAreaView, 
   View,
   Text, 
   Image, 
   TouchableOpacity, 
   StyleSheet, 
   Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome(){
   const navigation = useNavigation();

   function handleStart(){
      navigation.navigate('UserIdentification');
   }

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.wrapper}>
            <Text style={styles.title}>
               Gerencie {'\n'} 
               suas plantas de {'\n'} 
               forma fácil
            </Text>         
         
            <Image 
               source={wateringImg} 
               style={styles.image}
               resizeMode="contain"
            />

            <Text style={styles.subtitles}>
               Não esqueça mais de regar suas {'\n'}plantas.  
               Nós cuidamos de lembrar você sempre que precisar
            </Text>

            <TouchableOpacity 
               style={styles.button} 
               activeOpacity={0.7}        
               onPress={handleStart}
            >            
               <Feather
                  name="chevron-right"
                  style={styles.buttonIcon}
               />            
            </TouchableOpacity>
         </View>     
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,      
   },
   wrapper: {
      margin: 35,
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 8
   },
   title: {      
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 34
   }, 
   subtitles: {      
      textAlign: 'center',
      fontSize: 12,           
      color: colors.heading,
      fontFamily: fonts.text
   },
   button:{
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      width: 56,      
   },
   image: {
      height: Dimensions.get('window').width * 0.7
   },
   buttonIcon: {      
      fontSize: 32,
      color: colors.white
   }
});