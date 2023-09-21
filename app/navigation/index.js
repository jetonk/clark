import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Product} from 'app/screens/Product';
import {ProductDetails} from 'app/screens/ProductDetails';
import {AppContext} from 'app/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const {product} = useContext(AppContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: 'Products',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: () => <Icon name="home" />,
        }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Product Details',
          tabBarLabel: 'Product Details',
          tabBarLabelStyle: {fontSize: 14},
          tabBarIcon: () => <Icon name="list" />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            if (!product) {
              e.preventDefault();
              return;
            }
            navigation.navigate('ProductDetails');
          },
        })}
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
          name="Products"
          component={Product}
          options={{title: 'Products'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: 'Product Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
