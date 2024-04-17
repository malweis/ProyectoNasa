import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HistoricItem from './HistoricItem';

const HistoricView = () => {
    return (
        <View>
            <Text style={styles.title}>Last 5 Days</Text>
            <HistoricItem/>
        </View>
    );
};


const styles = StyleSheet.create({
   
     title: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'white',
      
    },
   
});

export default HistoricView;