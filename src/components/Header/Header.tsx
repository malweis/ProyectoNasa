import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
                <View>
            <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.image} >
            <Image
                source={require('../../assets/pngwing.com.png')}
                style={{ width: 50, height: 50 }}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(7,26,93,255)',
        padding: 16,
        
       
        
    },
    image: {
       
    },
    title: {
       
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;