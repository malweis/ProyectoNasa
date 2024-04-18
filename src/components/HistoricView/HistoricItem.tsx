import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PictureOfTheDay, RootStackParamList } from '../../views/Home/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
type HistoricItemProps = {
    picture: PictureOfTheDay;
  };

  type PostImageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;


  
  const HistoricItem = ({ picture }: HistoricItemProps) => {
    const navigation = useNavigation<PostImageNavigationProp>();
    return (
        <View style={styles.lastDaysMain}>
            <View style={styles.lastDayContainer}>
            <Text style={styles.title}>{picture.title}</Text>
            <Text style={styles.text}>{picture.date}</Text>
            <Pressable style={styles.button} onPress={ () => navigation.navigate("Detail" , picture ) } >
                            <Text style={styles.buttonText} >View</Text>
                        </Pressable>
                        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    lastDaysMain:{
       paddingHorizontal: 20,
       paddingVertical: 8,
    },

    lastDayContainer: {
        flexDirection: 'column',
        gap: 10,
        padding: 20,
        backgroundColor: 'rgb(17, 33, 96)',
       borderRadius: 10,
    },
   
    title: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white',
     
   },
   button: {
    alignSelf: 'flex-end',
      
      
  },
  text:{
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
  

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
   
},
});

export default HistoricItem;