import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './src/Login';
import WelcomeScreen from './src/WelcomeScreen';
import SideBar from './src/SideBar';
import ClientsDetails from './src/ClientsDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        setInitialRoute('welcome');
      } else {
        setInitialRoute('login');
      }
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name='sidebar' component={SideBar} />
        <Stack.Screen name='clientDetails' component={ClientsDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;