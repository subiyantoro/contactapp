import React, {useEffect} from "react";
import {Avatar, ListItem} from "react-native-elements";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const ListContact = ({item}) => {
    const navigation = useNavigation()
    return (
        <ListItem bottomDivider onPress={() => navigation.navigate('Detail', {item: item.item})}>
            <Avatar rounded source={{uri: item?.item.photo}} title={item.item.firstName + ' ' + item.item.lastName} />
            <ListItem.Content>
                <ListItem.Title>{item.item.firstName + ' ' + item.item.lastName}</ListItem.Title>
                <ListItem.Subtitle>{item.item.age}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name="chevron-forward-outline" type="ionicon" size={24} color="#C8C7CC" />
        </ListItem>
    )
};

export default ListContact
