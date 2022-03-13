import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Maskapai, Jadwal, Bandara } from '../../data/pesawat';

const Result = ({data}) => {
    var listJadwal = () => {
        var newJadwal = Jadwal.filter( (x) => {
            var checkBandaraK = Bandara.filter( (x) => 
                 x.bandara_nama.toLowerCase() == data.keberangkatan.toLowerCase()
            )
            if (!checkBandaraK || checkBandaraK.length<1)
                return false
            var checkBandaraT = Bandara.filter( (x) => 
                 x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase()
            )
            if (!checkBandaraT || checkBandaraT.length<1)
                return false
            return (
                x.bandara_kode_keberangkatan.toLowerCase() == checkBandaraK[0].bandara_kode.toLowerCase() &&
                x.bandara_kode_tujuan.toLowerCase() == checkBandaraT[0].bandara_kode.toLowerCase()
            )

        })

        return newJadwal.map( (printJadwal, i ) => {

            var checkMaskapai = Maskapai.filter( (x) => {
                return x.maskapai_id == printJadwal.maskapai_id
            })
            

            //fungsi kapital huruf pertama disetiap kata
            var capitalizeTheFirstLetterOfEachWord = (words) => {
                var separateWord = words.toLowerCase().split(' ');
                for (var i = 0; i < separateWord.length; i++) {
                   separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                   separateWord[i].substring(1);
                }
                return separateWord.join(' ');
            }

            return(
                <View style={resultStyle.box} key={i}>
                    <View style={resultStyle.upperText}>
                        <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.keberangkatan)}</Text>
                        <Text style={resultStyle.text}> --To--{'>'} </Text>
                        <Text style={resultStyle.text}>{capitalizeTheFirstLetterOfEachWord(data.tujuan)}</Text>
                    </View>
                    
                    <View style={resultStyle.bodyBox}>
                        <Image 
                            style={resultStyle.Image}
                            source={checkMaskapai[0].maskapai_logo}
                        ></Image>
                        <View style={resultStyle.underText}>
                            <Text style={resultStyle.text}>{checkMaskapai[0].maskapai_nama}</Text>
                            <Text style={resultStyle.text_color}>{data.tanggal}</Text>
                        </View>
                    </View>
                    
                </View>
            )
        })
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

const resultStyle = StyleSheet.create({
    box:{
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 10,
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    bodyBox:{
        marginTop: 10,
        alignContent: 'flex-start',
    },  
    Image:{
        width: null,
        resizeMode: 'contain',
        height: 40,
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
    },
    text_color:{
        fontWeight: 'bold',
        color: 'green',
    }
})

export default Result