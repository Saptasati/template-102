import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return(
            <View>
                <Text style={styles.headerText}>
                    LOGIN SCREEN
                    </Text>

                <TextInput
                style={styles.textInput}
                placeholder="User Name"
                placeholderTextColor="grey"
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText:{
         
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'blue',
         width: '100%',
         padding:10,
         textAlign:'center',
         fontSize:30,
         color:'white',
         fontWeight:'bold'
    },
    textInput:{
        height:50,
        marginLeft:600,
        padding:10,
        flex:0.2
    }
})