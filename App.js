import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './screens/startpage'; 
import HomeScreen from './screens/HomeScreen';
import LoginPage from './screens/LoginPage';
import RegistrationForm from './screens/RegistrationForm';
import MainHomePage from './screens/mainhomepage'; 
import Articles from './screens/Articles'; 
import { ClickProvider } from './screens/components/ClickContext'; 
import FloatingButton from './screens/components/FloatingButton';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="startpage"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="startpage" component={StartPage} />

        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerShown: false, 
          }}
        />

       
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: 'Login',
            headerShown: true, 
          }}
        />

       
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{
            title: 'Register',
            headerShown: true,
          }}
        />

       
        <Stack.Screen
          name="mainhomepage"
          component={MainHomePage}
          options={{
            title: 'Main Home Page',
            headerShown: false, 
          }}
        />

        
        <Stack.Screen
          name="Articles"
          component={() => (
            <ClickProvider>
              <Articles />
              <FloatingButton />
            </ClickProvider>
          )}
          options={{
            title: 'Articles',
            headerShown: true, // Adjust based on preference
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
