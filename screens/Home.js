import { StyleSheet, View, Text } from "react-native"
import GlobalStyles from "../styles/globalStyles"

const Home = () => {
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.texttitle}>Home Page</Text>
        </View>
    )
}

export default Home;