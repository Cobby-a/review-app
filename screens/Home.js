import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal } from "react-native"
import { useState } from "react";
import GlobalStyles from "../styles/globalStyles"
import Card from "./card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

const Home = ({navigation}) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    const [open, setOpen] = useState(false)
    return(
        
        <View style={GlobalStyles.container}>
            <Modal visible={open} animationType="slide">
                <View style={styles.modal}>
                    <MaterialIcons
                    name="close"
                    size={24}
                    onPress={()=>setOpen(false)}
                    style={{...styles.modaltoggle, ...styles.modalClose}}
                    />
                    <ReviewForm/>
                </View>
            </Modal>

            <MaterialIcons
            name="add"
            size={24}
            onPress={()=>setOpen(true)}
            style={styles.modaltoggle}
            />
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


const styles = StyleSheet.create({
    modaltoggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#e2e2e2',
        alignSelf:"center",
    },
    modalClose:{
        marginTop:24,
        marginBottom:0,
    },
    modal:{
        flex: 1,
    }
})
export default Home;