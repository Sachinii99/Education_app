// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// function mainhomepage({ route, navigation }) {
//   const { username } = route.params; // Get the username passed from LoginPage

//   return (
//     <View style={styles.container}>
//       {/* logo */}
//       <Image 
//         source={require('../assets/logo03.png')} // Adjust the path as per your project
//         style={styles.logo}
//       />
//       {/* greeting */}
//       <Text style={styles.welcome}>Hi, {username}!</Text>

//       {/* navigation bar */}
//       <View style={styles.navbar}>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('profile')}>
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
//           <Text style={styles.navText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('About')}>
//           <Text style={styles.navText}>About</Text>
//         </TouchableOpacity>
//       </View>

      

//       {/* placeholder for widgets */}
//       <View style={styles.widgetsContainer}>
//         <View style={styles.widget}>
//           <Text style={styles.widgetText}>Documents</Text>
//         </View>
//         <View style={styles.widget}>
//           <Text style={styles.widgetText}>Videos</Text>
//         </View>
//         <View style={styles.widget}>
//           <Text style={styles.widgetText}>Short notes</Text>
//         </View>
//         <View style={styles.widget}>
//           <Text style={styles.widgetText}>Quizes</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#DAFFFB',
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     marginBottom: 20,
//   },
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#009990',
//     paddingVertical: 10,
//     width: '100%',
//     marginBottom: 20,
//     borderRadius: 10,
//   },
//   navItem: {
//     padding: 10,
//   },
//   navText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
    
//   },
//   welcome: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#009990',
//     marginLeft: -220,
   
    
//   },
//   widgetsContainer: {
//     flex: 1,
//     width: '100%',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   widget: {
//     backgroundColor: '#009990',
//     width: '48%',
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
    
//   },
//   widgetText: {
//     fontSize: 16,
//     color: '#fff',
//     textTransform: 'lowercase', // Ensures text remains in lowercase
//     fontWeight:'bold'
//   },
// });

// export default mainhomepage;
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function MainHomePage({ route, navigation }) {
  const { username } = route.params; // Get the username passed from LoginPage

  return (
    <View style={styles.container}>
      {/* logo */}
      <Image
        source={require('../assets/logo03.png')} // Adjust the path as per your project
        style={styles.logo}
      />
      {/* greeting */}
      <Text style={styles.welcome}>Hi, {username}!</Text>

      {/* navigation bar */}
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

      {/* placeholder for widgets */}
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
    backgroundColor: '#DAFFFB',
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
    backgroundColor: '#009990',
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
    color: '#009990',
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
    borderColor:'#009990',
  },
  widgetText: {
    fontSize: 16,
    color: '#009990',
    textTransform: 'uppercase', // Ensures text appears in uppercase
    fontWeight: 'bold',
  },
});

export default MainHomePage;
