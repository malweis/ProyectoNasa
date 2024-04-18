import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HistoricItem from './HistoricItem';
import { PictureOfTheDay } from '../../views/Home/types';

type HistoricViewProps = {
    daysArray: PictureOfTheDay[];
  };


const HistoricView = ({daysArray}:HistoricViewProps) => {

    return (
        <View style={styles.HistoricMain} >
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.scrollView} >
            {daysArray.map((day, index) => (
                <HistoricItem key={index} data={day} />
            ))}
            </ScrollView>
          
          
        
        </View>
    );
};


const styles = StyleSheet.create({
    HistoricMain:{
        flex: 1,
        
    },
    
     title: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'white',
      
    },
    scrollView: {
        flexDirection: 'column',
        
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(7,26,93,255)',
      },
   
});

export default HistoricView;