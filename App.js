// // // import { StatusBar } from 'expo-status-bar';
// // // import { StyleSheet, Text, View } from 'react-native';

// // // export default function App() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text>Hi sachini api dn mekata log wemu hee he </Text>
// // //       <StatusBar style="auto" />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // // });
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// // const LoginPage = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const validateInputs = () => {
// //     if (!email.includes('@')) {
// //       setError('Please enter a valid email address');
// //       return false;
// //     }
// //     if (password.length < 6) {
// //       setError('Password must be at least 6 characters');
// //       return false;
// //     }
// //     setError('');
// //     return true;
// //   };

// //   const handleLogin = () => {
// //     if (validateInputs()) {
// //       // Example alert; replace with your authentication logic
// //       Alert.alert('Login Success!', `Welcome ${email}`);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       {error ? <Text style={styles.errorText}>{error}</Text> : null}
// //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //         <Text style={styles.buttonText}>Login</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     paddingHorizontal: 20,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   title: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     height: 50,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //     marginBottom: 15,
// //     backgroundColor: '#fff',
// //   },
// //   button: {
// //     backgroundColor: '#007bff',
// //     padding: 15,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 15,
// //     textAlign: 'center',
// //   },
// // });

// // export default LoginPage;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen'; // HomeScreen එක
// import LoginPage from './screens/LoginPage'; // LoginPage එක

// // Stack Navigator එකක් නිර්මාණය කරන්න
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* Home screen */}
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }} // Optional: Home screen එකට විශේෂ ශීර්ෂය එකතු කරන්න
//         />
//         {/* Login screen */}
//         <Stack.Screen
//           name="Login"
//           component={LoginPage}
//           options={{ title: 'Login' }} // Optional: Login screen එකට විශේෂ ශීර්ෂය එකතු කරන්න
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import LoginPage from './screens/LoginPage';
// import RegistrationForm from './screens/RegistrationForm';

// // Stack Navigator එකක් නිර්මාණය කරන්න
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* Home screen */}
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}  // Optional: Home screen එකට විශේෂ ශීර්ෂය එකතු කරන්න
//         />
//         {/* Login screen */}
//         <Stack.Screen
//           name="Login"
//           component={LoginPage}
//           options={{ title: 'Login' }}  // Optional: Login screen එකට විශේෂ ශීර්ෂය එකතු කරන්න
//         />
//         {/* Registration screen */}
//         <Stack.Screen
//           name="Register"
//           component={RegistrationForm}
//           options={{ title: 'Register' }}  // Optional: Register screen එකට විශේෂ ශීර්ෂය එකතු කරන්න
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import startpage from './screens/startpage'; // Adjust if the path is different

// import HomeScreen from './screens/HomeScreen';
// import LoginPage from './screens/LoginPage';
// import RegistrationForm from './screens/RegistrationForm';

// // Create a Stack Navigator
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="startpage" 
//         screenOptions={{
//           headerShown: false, // Hide headers by default
//         }}
//       >
//         {/* Start Page */}
//         <Stack.Screen 
//           name="startpage" 
//           component={startpage} 
//         />
        
//         {/* Home Screen */}
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{
//             title: 'Welcome',
//             headerShown: true, // Show header for Home screen
//           }} 
//         />
        
//         {/* Login Screen */}
//         <Stack.Screen 
//           name="Login" 
//           component={LoginPage} 
//           options={{
//             title: 'Login',
//             headerShown: true, // Show header for Login screen
//           }} 
//         />
        
//         {/* Registration Screen */}
//         <Stack.Screen 
//           name="Register" 
//           component={RegistrationForm} 
//           options={{
//             title: 'Register',
//             headerShown: true, // Show header for Register screen
//           }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartPage from './screens/startpage'; // Adjust if the path is different
// import HomeScreen from './screens/HomeScreen';
// import LoginPage from './screens/LoginPage';
// import RegistrationForm from './screens/RegistrationForm';

// // Create a Stack Navigator
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="startpage" 
//         screenOptions={{
//           headerShown: false, // Hide headers by default
//         }}
//       >
//         {/* Start Page */}
//         <Stack.Screen 
//           name="startpage" 
//           component={StartPage} 
//         />
        
//         {/* Home Screen */}
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{
//             title: 'Welcome',
//             headerShown: true, // Show header for Home screen
//           }} 
//         />
        
//         {/* Login Screen */}
//         <Stack.Screen 
//           name="Login" 
//           component={LoginPage} 
//           options={{
//             title: 'Login',
//             headerShown: true, // Show header for Login screen
//           }} 
//         />
        
//         {/* Registration Screen */}
//         <Stack.Screen 
//           name="Register" 
//           component={RegistrationForm} 
//           options={{
//             title: 'Register',
//             headerShown: true, // Show header for Register screen
//           }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartPage from './screens/startpage'; // Adjust if the path is different
// import HomeScreen from './screens/HomeScreen';
// import LoginPage from './screens/LoginPage';
// import RegistrationForm from './screens/RegistrationForm';
// import MainHomePage from './screens/mainhomepage'; // Import MainHomePage

// // Create a Stack Navigator
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="startpage" 
//         screenOptions={{
//           headerShown: false, // Hide headers by default
//         }}
//       >
//         {/* Start Page */}
//         <Stack.Screen 
//           name="startpage" 
//           component={StartPage} 
//         />
        
//         {/* Home Screen */}
//         <Stack.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{
//             title: 'Welcome',
//             headerShown: true, // Show header for Home screen
//           }} 
//         />
        
//         {/* Login Screen */}
//         <Stack.Screen 
//           name="Login" 
//           component={LoginPage} 
//           options={{
//             title: 'Login',
//             headerShown: true, // Show header for Login screen
//           }} 
//         />
        
//         {/* Registration Screen */}
//         <Stack.Screen 
//           name="Register" 
//           component={RegistrationForm} 
//           options={{
//             title: 'Register',
//             headerShown: true, // Show header for Register screen
//           }} 
//         />

//         {/* Main Home Page */}
//         <Stack.Screen 
//           name="MainHomePage" 
//           component={MainHomePage} 
//           options={{
//             title: 'Main Home Page',
//             headerShown: false, // Adjust based on preference
//           }}
//         />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './screens/startpage'; // Adjust if the path is different
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import RegistrationForm from './screens/RegistrationForm';
import mainhomepage from './screens/mainhomepage'; // Import MainHomePage
import Articles from './screens/Articles';
// import { CountProvider } from './CountContext'; // Import CountProvider

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="startpage" 
          screenOptions={{
            headerShown: false, // Hide headers by default
          }}
        >
          {/* Start Page */}
          <Stack.Screen 
            name="startpage" 
            component={StartPage} 
          />
          
          {/* Home Screen */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              title: 'Welcome',
              headerShown: true, // Show header for Home screen
            }} 
          />
          
          {/* Login Screen */}
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{
              title: 'Login',
              headerShown: true, // Show header for Login screen
            }} 
          />
          
          {/* Registration Screen */}
          <Stack.Screen 
            name="Register" 
            component={RegistrationForm} 
            options={{
              title: 'Register',
              headerShown: true, // Show header for Register screen
            }} 
          />

          {/* Main Home Page */}
          <Stack.Screen 
            name="mainhomepage" 
            component={mainhomepage} 
            options={{
              title: 'mainhomepage',
              headerShown: false, // Adjust based on preference
            }}
          />
          <Stack.Screen 
            name="Articles" 
            component={Articles} 
            options={{
              title: 'Articles',
              headerShown: false, // Adjust based on preference
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}
