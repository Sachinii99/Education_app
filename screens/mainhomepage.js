import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function MainHomePage({ route, navigation }) {
  const { username } = route.params; // Get the username passed from LoginPage

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo03.png')} 
        style={styles.logo}
      />
      <Text style={styles.welcome}>Hi, {username}!</Text>

   
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('About')}>
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.widgetsContainer}>
        <TouchableOpacity style={styles.widget} onPress={() => navigation.navigate('Articles')}>
          <Text style={styles.widgetText}>Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget} onPress={() => console.log('Videos clicked')}>
          <Text style={styles.widgetText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget} onPress={() => console.log('Short notes clicked')}>
          <Text style={styles.widgetText}>Short notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget} onPress={() => console.log('Quizzes clicked')}>
          <Text style={styles.widgetText}>Quizzes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4EBF8',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 150,
    marginBottom: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0A5EB0',
    paddingVertical: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  navItem: {
    padding: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0A5EB0',
    marginLeft: -220,
  },
  widgetsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  widget: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor:'#0A5EB0',
  },
  widgetText: {
    fontSize: 16,
    color: '#0A5EB0',
    textTransform: 'uppercase', // Ensures text appears in uppercase
    fontWeight: 'bold',
  },
});

export default MainHomePage;
