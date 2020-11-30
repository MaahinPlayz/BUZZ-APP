import React from 'react';
import {View, Image} from 'react-native';

export default class fb extends React.Component {
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
                style = {{marginTop:50,width:370, height:570}}
                source = {require('../assets/fbimg.png')}
            />            
            </View>
        )
    }
}