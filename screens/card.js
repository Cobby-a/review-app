import { StyleSheet, View } from "react-native"
import React from "react"
const Card = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.sub}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        marginHorizontal: 6,
        marginVertical: 8,
        backgroundColor: "#fff",
        shadowRadius: 8,
        shadowOpacity: 0.2,
        shadowColor: "#333",
        shadowOffset: {width: 1, height: 1},
        elevation: 4,
    },
    sub:{
        marginHorizontal: 18,
        marginVertical: 16,
    }
})

export default Card;