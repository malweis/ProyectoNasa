import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { PictureOfTheDay } from '../../views/Home/types';




interface IotdProps {
    picture : PictureOfTheDay | undefined;
}

const Iotd: React.FC<IotdProps> = ({ picture }) => {
    return (
        <View >
            {picture && (
                <View style={styles.containerImage}>
                  
                    <Image source={{ uri: picture.url }} style={styles.image}  />
                   
             
                    <Text style={styles.title}>{picture.title}</Text>
                    <Text style={styles.description}>{picture.explanation}</Text>
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
        padding: 10,
        backgroundColor: 'rgba(7,26,130,255)',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
    },
    
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Iotd;