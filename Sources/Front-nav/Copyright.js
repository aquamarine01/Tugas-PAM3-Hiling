import React from 'react'
import { View, Text, StyleSheet, Colors } from 'react-native'

const Copyright = () => {
    return (
        <View style={Style.copyright}>
            <Text style={Style.Copy_text}>-Copyright-</Text> 
            <Text style={Style.Copy_text}>M. Ammar Fadhila Ramadhan-119140029</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 525,
        left: 60,
    },
    Copy_text:{
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default Copyright