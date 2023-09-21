import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Product} from '@screens/Product';
import {ProductDetails} from '@screens/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{title: 'Product Details'}}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{title: 'Products'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({route}) => ({
            title: route?.params?.name || 'Product Details',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
