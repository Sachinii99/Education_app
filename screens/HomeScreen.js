// import React from 'react';
// import { View, Text, Button, Image, StyleSheet } from 'react-native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image 
//         source={require('../assets/logo.png')} // ඔබගේ ලොගෝ එක මෙහි ඇතුලත් කරන්න
//         style={styles.logo}
//       />
      
//       {/* App Name */}
//       <Text style={styles.appName}>ඔබගේ ඇප් නම</Text>

//       {/* Get Started Button */}
//       <Button
//         title="Get Started"
//         onPress={() => navigation.navigate('Login')}  // LoginPage වෙත යන්න
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   appName: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   }
// });

// // export default HomeScreen;
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// function HomeScreen({ navigation }) {
//   return (
    
//     <View style={styles.container}>
        
//       <Text style={styles.title}>My App</Text>
//       <Button
//         title="Get Started"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;
// import React from 'react';
// import { View, Text, Button, StyleSheet, Image } from 'react-native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Logo Image */}
//       <Image 
//         source={require('../assets/logo03.png')} // Adjust the path as per your project
//         style={styles.logo}
//       />

//       {/* App Title */}
//       <Text style={styles.title}>BioZel</Text>

//       {/* Get Started Button */}
//       <Button
//         title="Get Started"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 450, // Adjust the width of the logo
//     height: 250, // Adjust the height of the logo
//     marginBottom: 130,
    
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     fontFamily: 'Arial',
//     color: '#0A5EB0',
//     marginBottom:50,

//   },
// });

// export default HomeScreen;
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
