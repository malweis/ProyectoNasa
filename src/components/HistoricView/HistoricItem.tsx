import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface HistoricItemProps {
    // Define your component props here
}

const HistoricItem = (props: HistoricItemProps) => {
    return (
        <View>
            <Text>Historic Item Component</Text>
            <Text>Historic Item Component</Text>
            <Pressable style={styles.button} >
                            <Text style={styles.buttonText} >View</Text>
                        </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
   
    title: {
       fontSize: 15,
       fontWeight: 'normal',
       color: 'white',
     
   },
   button: {
    alignSelf: 'flex-end',
      
      
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
   
},
});

export default HistoricItem;