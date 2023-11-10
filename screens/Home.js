import { StyleSheet, View, Text } from "react-native"

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texttitle}>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    texttitle:{
        fontFamily: "nunito-regular",
    }
})

export default Home;