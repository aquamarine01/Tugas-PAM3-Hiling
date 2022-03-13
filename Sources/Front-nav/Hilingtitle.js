import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Hilingtitle = () => {
    return (
        <View style={navStyle.menu}>
            <Entypo
                style={navStyle.menuIcon}
                name="menu"
                color={'white'}
            />
            
            <Text style={navStyle.text}>Hiling.id</Text>
            
            <FontAwesome 
                style={navStyle.userIcon}
                name="user"
                color={'white'}
            />
        </View>
    )
}

const navStyle = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: 'limegreen',
        justifyContent: 'space-between',
        height: 50,
    },
    text: {
        marginTop: 11,
        fontSize: 20,
        color: "white",
        fontWeight: 'bold'
    },
    menuIcon: {
        marginTop: 1,
        fontSize: 35,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 1,
        fontSize: 35,
        marginRight:20,
    },
})

export default Hilingtitle