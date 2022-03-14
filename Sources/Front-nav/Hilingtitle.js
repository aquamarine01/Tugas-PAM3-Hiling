import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
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
            <Image
                style={{
                    height: 35,
                    width:35,
                    marginTop:9,
                    marginRight:15,

                }}
                source={require('../../logo/ayayo.png')}
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
        marginLeft:15,
        color: "white",
        fontWeight: 'bold'
    },
    menuIcon: {
        marginTop:7,
        fontSize: 35,
        marginLeft:20,
        
    },
})

export default Hilingtitle