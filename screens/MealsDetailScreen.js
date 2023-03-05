import { useLayoutEffect ,useContext} from "react";
import { View, Text, Image, StyleSheet,ScrollView,Button } from "react-native";
import MealDetail from "../components/MealDetail";
import { MEALS, } from '../data/dummy-data';
import Subtitle from '../components/MealDetails/Subtitle'
import List from '../components/MealDetails/List'
import IconButton from "../components/IconButton";
import { FavoritesContext } from '../store/context/favoriteContext';


function MealsDetailScrenn({ route,navigation }) {

    const favoriteMealContext = useContext(FavoritesContext);
    

    const mealId = route.params.mealId

    const isFavorite = favoriteMealContext.ids.includes(mealId);

    const selectedMeal = MEALS.find(detail => detail.id === mealId)

    function headerButtonHandler(){

        if(isFavorite){
            favoriteMealContext.removeFavorite(mealId);
        }else{
            favoriteMealContext.addFavorite(mealId);
        }

    }

    useLayoutEffect(() => {


        navigation.setOptions({
            headerRight: () => {
                return <IconButton  
                icon={isFavorite ? 'star' : 'star-outline'}

                                    color="white" 
                                    onPress={headerButtonHandler}/>

            }
        })

    },[navigation,headerButtonHandler])


    return <ScrollView style={styles.root}> 
    <View>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability} 
            textStyle ={styles.detailText}
            />
        

    <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>

        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}/>
    
       <Subtitle>Steps</Subtitle>
       <List data={selectedMeal.steps}/>
       </View>
       </View>

    </View>
    </ScrollView>
}


export default MealsDetailScrenn;

const styles = StyleSheet.create({


    root:{
        marginBottom:32
    },

    image: {
        width: "100%",
        height: 350,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailText:{
        color:'white'
    },

    listOuterContainer:{
        alignItems:'center'
    },

    listContainer:{
        width:'80%',
    }


})