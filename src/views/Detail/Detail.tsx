import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View , StyleSheet, Text, Image, ScrollView } from 'react-native';
import { RootStackParamList } from '../Home/types';
import { Header } from '../../components';

const Details = () => {
const {params } = useRoute<NativeStackScreenProps<RootStackParamList, 'Detail'>['route']>();

    return (
        <View style={styles.mainContarier} >
            <Header/>
            <View style={styles.iotdContainer}>
                    <View style={styles.containerImage}>
                    
                        <Image source={{ uri: params.url }} style={styles.image}  />
                    
                       
                    
                    </View>
                    <View style={styles.TextContaiment}>
                    <Text style={styles.title}>{params.title}</Text>
                        <Text style={styles.date}>{params.date}</Text>
                       
                            <ScrollView style={styles.explanationContainer}>
                            <Text style={styles.description}>{params.explanation}</Text>
                            </ScrollView>
                          
                     
                    </View>
                </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
   mainContarier:{
         flex: 1,
      padding:20,
            backgroundColor: 'rgba(7,26,93,255)',
   },
   image: {
    width: "100%",
    height: 200,
   
},

iotdContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: 'rgb(40, 59, 148)',
    padding: 20,
    borderRadius: 30,
},
iotdMain: {


    padding: 30,
    borderRadius: 80 ,
   
},

title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
},
TextContaiment: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    gap: 10,
},
buttonText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
   
},
 date: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  
},
description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
},
containerImage: {
    width: "100%",
    
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: 'rgb(40, 59, 148)',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    paddingVertical: 28,
},
explanationContainer: {
    marginVertical: 20,
},
});

export default Details;