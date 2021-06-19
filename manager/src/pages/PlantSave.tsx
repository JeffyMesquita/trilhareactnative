import React from 'react';
import { 
   Alert,
   StyleSheet,
   Text,
   View,
   Image,
   ScrollView,
   Platform,
   TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

export function PlantSave() {
   return(
      <>
         <View style={styles.container}>
            <SvgFromUri
               uri=""
               height={150}
               width={150}
            />

            <Text style={styles.plantName}>
               Nome da Planta
            </Text>
            <Text style={styles.plantAbout}>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum distinctio molestiae aliquid quo sit quia deserunt accusantium sequi, dolore omnis nesciunt expedita dignissimos eius veniam aspernatur ut dolorum soluta?
            </Text>
         </View>
      </>
   )
}

