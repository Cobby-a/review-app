import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import GlobalStyles from "../styles/globalStyles";
import * as yup from 'yup';


const Reviewschema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', 
        (val)=>{
                return parseInt(val)<6 && parseInt(val)> 0
            }),
})

const ReviewForm = ({addReview}) =>{
 return(
    <View>
        <Formik initialValues={{title: '', body: '', rating: ''}}
            validationSchema={Reviewschema}
            onSubmit={(values, actions)=>{
                actions.resetForm()
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