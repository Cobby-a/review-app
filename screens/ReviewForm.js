import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
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
    <View style={styles.v}>
        <Formik initialValues={{title: '', body: '', rating: ''}}
            validationSchema={Reviewschema}
            onSubmit={(values, actions)=>{
                actions.resetForm()
                addReview(values)
                console.log(values)
            }}>
            {(props)=>(
                <View >
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder="Review title"
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    onBlur={props.handleBlur('title')}
                    />
                    <Text style={GlobalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    <TextInput
                    multiline
                    style={GlobalStyles.input}
                    placeholder="Review body"
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    onBlur={props.handleBlur('body')}
                    />
                    <Text style={GlobalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder="Rating (1-5)"
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType="numeric"
                    onBlur={props.handleBlur('rating')}
                    />
                    <Text style={GlobalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <Button title="submit" color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
 )
}

const styles = StyleSheet.create({
    v:{
        marginHorizontal: 24,
    }
})

export default ReviewForm;