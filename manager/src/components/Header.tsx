import React from 'react';
import {
   StyleSheet,
   Text,
   Image,
   View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/jeferson.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>Jeferson</Text>
         </View>
         <Image style={styles.image} source={userImg}/>

         
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      marginTop: getStatusBarHeight(),    
   },
   image: {
      width: 70,
      height: 70,
      borderRadius: 35,
   },
   greeting: {
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.text,
   },
   userName: {
      fontSize: 32,
      fontFamily: fonts.heading,
      color: colors.heading,
      lineHeight: 40
   }
});

