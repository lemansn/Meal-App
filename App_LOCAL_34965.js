import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoryScreen from './screens/CatagoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScrenn from './screens/MealsDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoritesContextProvider from './store/context/favoriteContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:"#351401",
        drawerActiveBackgroundColor: '#e4baa1'
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

     <FavoritesContextProvider>
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
          <Stack.Screen name="MealsDetail" component={MealsDetailScrenn} options={{

            title: "Meal's Detail"
          }}/>


        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});