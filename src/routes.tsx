import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Camera from './pages/camera';
import Main from './pages/main'
import Signin from './pages/signin/index';
import RegisterForm from './pages/register';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} /> }}
          name="Login"
          component={Signin} />

        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="user-plus" size={20} color={color} /> }}
          name="Registrar"
          component={RegisterForm} />

        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="aperture" size={20} color={color} /> }}
          name="Tarefas"
          component={Camera} />

        <Tab.Screen options={{ tabBarIcon: ({ color }) => <Feather name="at-sign" size={20} color={color} /> }}
          name="Membros"
          component={Main} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}