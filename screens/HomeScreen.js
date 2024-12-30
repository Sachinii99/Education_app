import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={require('../assets/logo03.png')} // Adjust the path as per your project
        style={styles.logo}
      />

      {/* App Title */}
      <Text style={styles.title}>Life Starts Here</Text>

      {/* Custom Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#DAFFFB',
  },
  logo: {
    width: 450, // Adjust the width of the logo
    height: 250, // Adjust the height of the logo
    marginBottom: 130,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#009990',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#009990', // Blue background color for the button
    paddingVertical: 20, // Vertical padding for button
    paddingHorizontal: 80, // Horizontal padding for button
    borderRadius: 8, // Rounded corners for the button
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Bold text
  },
});

export default HomeScreen;
