import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function startpage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 5000); // 3 seconds delay

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo03.png')} 
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
    backgroundColor: '#D4EBF8', 
  },
  logo: {
    width: 500, 
    height: 500,
    resizeMode: 'contain', 
  },
});

export default startpage;
