import React,{Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <Text style={styles.text}>Home Screen</Text>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        flex:1,
        fontSize:40,
        fontWeight:'bold',
        marginTop:100
        
    }
})