// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// function LoginPage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login Page</Text>
      
//       {/* Username Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//       />
      
//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//       />
      
//       {/* Login Button */}
//       <Button
//         title="Login"
//         onPress={() => {}}
//       />

//       {/* Navigate to Registration Page */}
//       <Button
//         title="Create Account"
//         onPress={() => navigation.navigate('Register')}  // RegistrationForm වෙත යන්න
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
//   header: {
//     fontSize: 24,
//     marginBottom: 30,
//   },
//   input: {
// //     width: '100%',
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 15,
// //     paddingLeft: 10,
// //   },
// // });

// // export default LoginPage;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     if (!email.includes('@')) {
//       setError('Please enter a valid email address');
//       return false;
//     }
//     if (password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleLogin = () => {
//     if (validateInputs()) {
//       // Example alert; replace with your authentication logic
//       Alert.alert('Login Success!', `Welcome ${email}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default LoginPage;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const LoginPage = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     if (!email.includes('@')) {
//       setError('Please enter a valid email address');
//       return false;
//     }
//     if (password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleLogin = () => {
//     if (validateInputs()) {
//       // Example alert; replace with your authentication logic
//       Alert.alert('Login Success!', `Welcome ${email}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
      
//       {/* Navigate to Registration Form */}
//       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.registerText}>Already have an account? Login</Text>
        
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#DAFFFB',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color:'#009990',
//   },
//   input: {
//     height: 50,
//     borderColor: '#009990',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#009990',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// //   registerText: {
// //     color: '#009990',
// //     textAlign: 'center',
// //     marginTop: 15,
// //     fontSize: 16,
// //   },
// // });

// // export default LoginPage;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const LoginPage = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     if (!email.includes('@')) {
//       setError('Please enter a valid email address');
//       return false;
//     }
//     if (password.length < 6) {
//       setError('Password must be at least 6 characters');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleLogin = () => {
//     if (validateInputs()) {
//       // Navigate to MainHomePage and pass username
//       navigation.navigate('mainhomepage', { username: email.split('@')[0] });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       {/* Navigate to Registration Form */}
//       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//         <Text style={styles.registerText}>Already have an account? Login</Text>
        
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#DAFFFB',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#009990',
//   },
//   input: {
//     height: 50,
//     borderColor: '#009990',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#009990',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   registerText: {
//         color: '#009990',
//         textAlign: 'center',
//         marginTop: 15,
//         fontSize: 16,
//       },
// });

// export default LoginPage;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = async () => {
    if (validateInputs()) {
      // Check if the email exists in AsyncStorage
      const storedPassword = await AsyncStorage.getItem(email);

      if (!storedPassword) {
        setError('No account found with this email');
        return;
      }

      if (storedPassword === password) {
        // Navigate to MainHomePage and pass username
        navigation.navigate('mainhomepage', { username: email.split('@')[0] });
      } else {
        setError('Incorrect password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#DAFFFB',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#009990',
  },
  input: {
    height: 50,
    borderColor: '#009990',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#009990',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  registerText: {
    color: '#009990',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
});

export default LoginPage;
