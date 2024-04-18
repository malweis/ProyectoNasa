import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PictureOfTheDay } from '../../views/Home/types';
type HistoricItemProps = {
    data: PictureOfTheDay;
  };


  const HistoricItem = ({ data }: HistoricItemProps) => {
    return (
        <View style={styles.lastDaysMain}>
            <View style={styles.lastDayContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.text}>20/23/3123aaa</Text>
            <Pressable style={styles.button} >
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