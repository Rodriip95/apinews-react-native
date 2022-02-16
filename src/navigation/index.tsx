import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';

import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilterIcon from '../assets/icons/FilterIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../styles/colors';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FilterScreen from '../screens/filter/FilterScreen';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding: 5}}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  paddingIcons: {
    paddingHorizontal: 5,
  },
});

function HomeDrawer() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.blanco,
        },
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '.rebaNews',
          headerTintColor: '#f5f5f5',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Poppins-ExtraBold',
            fontSize: 24,
          },
          headerStyle: {backgroundColor: colors.azul},
          drawerLabel: 'Noticias',
          headerRight: () => (
            <TouchableOpacity
              style={styles.paddingIcons}
              onPress={() => navigation.navigate('FilterScreen')}>
              <FilterIcon />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.paddingIcons}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeDrawer">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            title: 'Filtros',
            headerTintColor: colors.verde,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Poppins-ExtraBold',
              fontSize: 24,
            },
            headerStyle: {backgroundColor: colors.azul},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
