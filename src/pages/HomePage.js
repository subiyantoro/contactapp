import React, {useEffect} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import {connect} from "react-redux";
import {getContacts} from "../actions/contact";
import ListContact from "./components/ListContact";
import {FAB, Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const HomePage = (props) => {
    const navigation = useNavigation()
    const {
        contacts,
        getContacts,
        isLoading
    } = props
    useEffect(() => {
        getContacts()
    }, [])
    return (
        <>
            {
                isLoading ?
                    <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ActivityIndicator size="large"/>
                    </View> :
                    <FlatList data={contacts} renderItem={(item, idx) => (
                        <ListContact item={item} />
                    )} />
            }
            <FAB
                onPress={() => navigation.navigate('Add')}
                color="blue"
                type="solid"
                placement="right"
                icon={
                    <Icon name="add-outline" type="ionicon" color="white"/>
                }/>
        </>
    )
};

function mapStateToProps(state) {
    return {
        contacts: state.contactStore.listContact,
        isLoading: state.contactStore.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getContacts: () => dispatch(getContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
