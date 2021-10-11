import React, {useState} from "react";
import {View} from "react-native";
import {Button, Icon, Input} from "react-native-elements";
import {Divider} from "react-native-elements/dist/divider/Divider";
import {connect} from "react-redux";
import {addContact} from "../actions/contact";
import {useNavigation} from "@react-navigation/native";

const AddPage = (props) => {
    const navigation = useNavigation()
    const [firstName, setFirstName] = useState()
    const [errorFN, setErrorFN] = useState()
    const [lastName, setLastName] = useState()
    const [errorLN, setErrorLN] = useState()
    const [age, setAge] = useState()
    const [errorAge, setErrorAge] = useState()
    const [uriImage, setUriImage] = useState()
    const {
        saveContact,
        isLoading
    } = props

    return(
        <View style={{
            margin: "5%"
        }}>
            <Input
                onChangeText={(value) => setFirstName(value)}
                placeholder='First Name'
                label="First Name"
                leftIcon={
                    <Icon name="person" type="ionicon" size={14} />
                }
                errorMessage={errorFN}
            />
            <View style={{marginVertical: 10}} />
            <Input
                onChangeText={(value) => setLastName(value)}
                placeholder="Last Name"
                label="Last Name"
                leftIcon={
                    <Icon name="person" type="ionicon" size={14} />
                }
                errorMessage={errorLN}/>
            <View style={{marginVertical: 10}} />
            <Input
                keyboardType="numeric"
                onChangeText={(value) => setAge(value)}
                placeholder="Age"
                label="Age"
                leftIcon={
                    <Icon name="calendar" type="ionicon" size={14} />
                }
                errorMessage={errorAge} />
            <View style={{marginVertical: 10}} />
            <Input
                keyboardType="numeric"
                onChangeText={(value) => setAge(value)}
                placeholder="https://image.com/image"
                label="Url Image (Optional)"
                leftIcon={
                    <Icon name="image" type="ionicon" size={14} />
                }/>
            <View style={{flexDirection: "column", justifyContent: "center", marginTop: '10%'}}>
                <Button
                    onPress={() => {
                        if (firstName == null || firstName === "") {
                            setErrorFN("Input First Name")
                        } else if (lastName == null || lastName === "") {
                            setLastName("Input Last Name")
                        } else if (age == null || age === "") {
                            setErrorAge("Input Age")
                        } else {
                            const payload = {
                                firstName: firstName,
                                lastName: lastName,
                                age: age,
                                photo: uriImage
                            }
                            saveContact(payload)
                            navigation.goBack()
                        }
                    }}
                    type="solid"
                    title="Create Contact"
                    loading={isLoading}
                    />
            </View>
        </View>
    )
};

function mapStateToProps(state) {
    return {
        isLoading: state.contactStore.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveContact: (payload) => dispatch(addContact(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPage)
