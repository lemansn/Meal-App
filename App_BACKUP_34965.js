import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from './screens/CatagoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScrenn from './screens/MealsDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
<<<<<<< HEAD
import FavoritesContextProvider from './store/context/favoriteContext';
=======
>>>>>>> 3190a98eccd909f6d89bf8935673854bb4afaf70

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
<<<<<<< HEAD
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:"#351401",
        drawerActiveBackgroundColor: '#e4baa1'
=======
>>>>>>> 3190a98eccd909f6d89bf8935673854bb4afaf70
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
<<<<<<< HEAD

     <FavoritesContextProvider>
=======
>>>>>>> 3190a98eccd909f6d89bf8935673854bb4afaf70
      <NavigationContainer 
     >
        <Stack.Navigator initialRouteName='MealsCategories'
        screenOptions={{

          headerStyle: {backgroundColor:"#351401"},
          headerTintColor: "white",
          contentStyle:{backgroundColor:"#3f2f25"},
          
        }}>
        <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
<<<<<<< HEAD
          <Stack.Screen name="MealsDetail" component={MealsDetailScrenn} options={{

            title: "Meal's Detail"
          }}/>
=======
          <Stack.Screen name="MealsDetail" component={MealsDetailScrenn} />
>>>>>>> 3190a98eccd909f6d89bf8935673854bb4afaf70


        </Stack.Navigator>
      </NavigationContainer>
<<<<<<< HEAD
      </FavoritesContextProvider>
=======
>>>>>>> 3190a98eccd909f6d89bf8935673854bb4afaf70
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});