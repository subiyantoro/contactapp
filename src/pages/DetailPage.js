import React from "react";
import {ScrollView, View} from "react-native";
import {Avatar, Button, Text} from "react-native-elements";
import {connect} from "react-redux";
import {deleteContact} from "../actions/contact";
import {useNavigation, useRoute} from "@react-navigation/native";

const DetailPage = (props) => {
    const {
        isLoading,
        deleteContact,
    } = props
    const navigation = useNavigation()
    const route = useRoute()
    const item = route.params.item
    return (
        <ScrollView>
            <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{marginTop: '15%'}}>
                    <Avatar rounded source={{uri: item.photo}} title={item.firstName + ' ' + item.lastName} size="xlarge" />
                </View>
                <View style={{margin: '5%'}}>
                    <Text h4>{item.firstName + ' ' + item.lastName}</Text>
                    <Text style={{textAlign: "center"}}>{item.age}</Text>
                </View>
                <Button
                    onPress={() => {
                        deleteContact(item.id)
                        navigation.goBack()
                    }}
                    buttonStyle={{backgroundColor: "red"}}
                    type="solid"
                    title="Delete Contact" />
            </View>
        </ScrollView>
    )
}

function mapStateToProps(state) {
    return {
        isLoading: state.contactStore.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteContact: (id) => dispatch(deleteContact(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
