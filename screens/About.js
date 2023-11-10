import { StyleSheet, View, Text } from "react-native"

const About = () => {
    return(
        <View style={styles.container}>
            <Text>About Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
    }
})

export default About;