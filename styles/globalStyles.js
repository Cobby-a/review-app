import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#fff'
    },
    texttitle:{
        fontFamily: "nunito-bold",
        fontSize: 18,
        color: '#333',
    },
    paragraph:{
        marginVertical: 8,
        lingHeight: 20,
    }
})


export const Images = {
    ratings : {
        '1' : require('../assets/rating-1.png'),
        '2' : require('../assets/rating-2.png'),
        '3' : require('../assets/rating-3.png'),
        '4' : require('../assets/rating-4.png'),
        '5' : require('../assets/rating-5.png'),
    }
}
export default GlobalStyles;