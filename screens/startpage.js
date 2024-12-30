import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function startpage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace ensures no back button to StartPage
    }, 5000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo03.png')} // Adjust the path as per your folder structure
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009990', // Optional: Set background color
  },
  logo: {
    width: 500, // Adjust size as needed
    height: 500,
    resizeMode: 'contain', // Ensures the logo fits within the given width and height
  },
});

export default startpage;
