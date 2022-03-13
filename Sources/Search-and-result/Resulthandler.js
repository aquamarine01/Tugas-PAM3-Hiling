import React from 'react'
import { View } from "react-native"
import Hilingtitle from '../Front-nav/Hilingtitle'
import Copyright from '../Front-nav/Copyright'
import Result from '../Search-and-result/Result'

const Resulthandler = ({route,navigation}) =>{

    const { data } = route.params;

    return (
        <View>
          <Hilingtitle/>
          <Result navigation={navigation} data = {data}/>
          <Copyright/>
        </View>
      )
}
export default Resulthandler