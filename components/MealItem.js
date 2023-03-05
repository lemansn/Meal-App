import { View, FlatList, Platform, Text, StyleSheet, Pressable ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';

function MealItem({id,title, imageUrl,complexity, duration, affordability}){

    const navigation = useNavigation();

    function onPressHandler(){

        navigation.navigate("MealsDetail",{
            mealId:id
        })
    }



    
    return  <View style={styles.mealItem}>
    <Pressable onPress={onPressHandler} android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => 
    [pressed ? styles.buttonPressed : null]}>

    <View style={styles.innnerContainer}>
    
    <View>
    <Image style={styles.imageStyle}source={{uri:imageUrl}}/>
    <Text style ={styles.titleStyle}>{title} </Text>
    </View>

   <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
    </View>
    </Pressable>
    </View>;
}

export default MealItem;


const styles = StyleSheet.create({


    mealItem:{

        margin:16,
        borderRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 16,

    },

    buttonPressed: {
        opacity: 0.5,


    },

    innnerContainer:{

        borderRadius:8,
        overflow:'hidden'
    },

    imageStyle:{
        height:200,
        width:'100%'
    },

    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:8,
    },




})