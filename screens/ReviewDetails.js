import { StyleSheet, View, Text, Image } from "react-native"
import GlobalStyles from "../styles/globalStyles"
import Card from "./card"
import { Images } from "../styles/globalStyles"

const ReviewDetails = ({route}) => {
    const rate = route.params.rating
    return(
        <View style={GlobalStyles.container}>
            <Card>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <View style={styles.rating}>
            <Text>Rating for this feature: </Text>
            <Image source={Images.ratings[rate]}/>
            </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#ccc"
    }
})
export default ReviewDetails;