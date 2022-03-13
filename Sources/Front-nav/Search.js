import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"

const Search = ({navigation}) => {
    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        tanggal: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        
        <View style={formStyle.box}>
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Keberangkatan"
                        value={text.keberangkatan}
                        onChangeText={clickHandler('keberangkatan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Tujuan</Text>
                <View style={formStyle.formSingle}>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Tujuan"
                        value={text.tujuan}
                        onChangeText={clickHandler('tujuan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Tanggal Keberangkatan"
                        value={text.tanggal}
                        onChangeText={clickHandler('tanggal')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <TouchableOpacity 
                    style={formStyle.button}
                    onPress={() => navigation.navigate('ResultPage', {data: text})}
                >
                    <Text style={formStyle.textButton}>Cari</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const formStyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 50,
        width: '80%',
        position: 'absolute',
        top: '120%',
        left: '9.5%',
        shadowColor: '#000',
        elevation: 5,
    },
    package:{
        marginTop: 20,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 4,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    
    Input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
})

export default Search