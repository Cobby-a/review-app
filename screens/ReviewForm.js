import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import GlobalStyles from "../styles/globalStyles";


const ReviewForm = ({addReview}) =>{
 return(
    <View>
        <Formik initialValues={{title: '', body: '', rating: ''}}
            onSubmit={(values)=>{
                addReview(values)
                console.log(values)
            }}>
            {(props)=>(
                <View>
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder="Review title"
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    />
                    <TextInput
                    multiline
                    style={GlobalStyles.input}
                    placeholder="Review body"
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    />
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder="Rating (1-5)"
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType="numeric"
                    />

                    <Button title="submit" color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
 )
}

const styles = StyleSheet.create({

})

export default ReviewForm;