import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native"
import { useState } from "react";
import GlobalStyles from "../styles/globalStyles"
import Card from "./card";

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return(
        <View style={GlobalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
                        <Card>
                        <Text style={GlobalStyles.texttitle}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )
            }
            />
        </View>
    )
}

export default Home;