import React from 'react';
import {View, Image} from 'react-native';

export default class ig extends React.Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
                style = {{width:400, height:600}}
                source = {require('../assets/igimg.png')}
            />            
            </View>
        )
    }
}