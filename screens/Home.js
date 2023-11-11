import { StyleSheet, View, Text, Button } from "react-native"
import GlobalStyles from "../styles/globalStyles"

const Home = ({navigation}) => {
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.texttitle}>Home Page</Text>
            <Button title="Go to the review details" onPress={()=>navigation.navigate('ReviewDetails')}/>
        </View>
    )
}

export default Home;