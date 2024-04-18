import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Button, Pressable } from 'react-native';
import { PictureOfTheDay } from '../../views/Home/types';




interface IotdProps {
    picture : PictureOfTheDay | undefined;
}

const Iotd: React.FC<IotdProps> = ({ picture }) => {
    return (
        <View style={styles.iotdMain}>
            {picture && (
                <View style={styles.iotdContainer}>
                    <View style={styles.containerImage}>
                    
                        <Image source={{ uri: picture.url }} style={styles.image}  />
                    
                       
                    
                    </View>
                    <View style={styles.TextContaiment}>
                    <Text style={styles.title}>{picture.title}</Text>
                        <Text style={styles.date}>{picture.date}</Text>
                        <Pressable style={styles.button} >
                            <Text style={styles.buttonText} >View</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
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
    
    button: {
      alignSelf: 'flex-end',
        
        
    },

    iotdContainer: {
        width: "100%",
        backgroundColor: 'rgb(40, 59, 148)',
        padding: 20,
        borderRadius: 30,
    },
    iotdMain: {
   
    
        padding: 30,
        borderRadius: 80 ,
       
    },
    
    image: {
        width: "100%",
        height: 200,
       
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    TextContaiment: {
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
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Iotd;