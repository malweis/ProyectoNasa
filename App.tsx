/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Home from './src/views/Home';





function App(): React.JSX.Element {


  return (
    <SafeAreaView style={styles.container}>
      <Home/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(7,26,93,255)",
  },
 
});

export default App;
