import MealItem from "./MealItem";
import { StyleSheet,View,FlatList,Text } from "react-native";

function MealsList({items}){


    function renderItemHandler(itemData){

        const item = itemData.item
     
        const mealsProp ={
     
         id: item.id,
         title: item.title,
         imageUrl: item.imageUrl,
         complexity: item.complexity.toUpperCase(),
         duration: item.duration,
         affordability: item.affordability.toUpperCase()
        }
     
     
         return <MealItem {...mealsProp}/>
        }
     
     
       return (
         <View style={styles.container}>
     
             <FlatList data={items}
                 keyExtractor ={(item) => item.id}
                 renderItem ={renderItemHandler}
     
             />
         </View>
       );
    
}





export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });