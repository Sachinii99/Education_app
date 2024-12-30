import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/logo03.png')} 
        style={styles.logo}
      />

 
      <Text style={styles.title}>BrightPath</Text>

   
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
    backgroundColor:'#D4EBF8',
  },
  logo: {
    width: 450, 
    height: 250, 
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#0A5EB0',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#0A5EB0', 
    paddingVertical: 20, 
    paddingHorizontal: 80, 
    borderRadius: 8, 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default HomeScreen;
