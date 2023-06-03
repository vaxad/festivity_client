//import { View, Text } from 'react-native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';

const Post= (title,content,onPress) => {
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed!')}>
                <ImageBackground
                  source={require('../assets/images/kemal.jpg')} // Replace with the path to your image
                  style={styles.buttonImage}
                >
                <Text style={styles.buttonText}>{title}</Text></ImageBackground>
              </TouchableOpacity>
              
            </View>
    );
  };
  
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    buttonImage: {
      width: '100%',
      height: '100%',
    },
  });
  

export default Post