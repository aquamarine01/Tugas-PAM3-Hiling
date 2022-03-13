import React from 'react'
import {View, Text} from 'react-native'
import Hilingtitle from '../Front-nav/Hilingtitle';
import Search from '../Front-nav/Search';
import Copyright from '../Front-nav/Copyright';

const Landingsearch = ({navigation}) =>{
    return (
        <View>
          <Hilingtitle/>
          <Search navigation={navigation}/>
          <Copyright/>
        </View>
      )
}

export default Landingsearch