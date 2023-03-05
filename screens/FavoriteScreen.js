import { useContext } from "react";
import { Text,View,StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";

import { FavoritesContext } from "../store/context/favoriteContext";

function FavoriteScreen(){


    const favoriteContext = useContext(FavoritesContext)

    const favMeals = MEALS.filter((meal) =>
    favoriteContext.ids.includes(meal.id))

    if(favMeals.length ===0){
        return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>There is no favorite meals yet.</Text>
        
        </View>
    }
    return <MealsList items={favMeals}/>

}

export default FavoriteScreen;


const styles = StyleSheet.create({

    viewStyle:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },

    textStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'

    }

})