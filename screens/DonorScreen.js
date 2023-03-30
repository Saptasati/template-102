import React,{Component} from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';


export default class DonorScreen extends Component {
    render(){
        return(
            <View>
         <Text style={styles.text}>Donor Screen</Text>
         <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Click here to send book</Text>
         </TouchableOpacity>

            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    text:{
        flex:1,
        fontSize:30,
        fontWeight:'bold',
        marginTop:100
    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        borderColor:'bue',
        borderLeftWidth:5,
        borderRightWidth:5,
        borderStartWidth:5,
        borderBottomWidth:5,
        backgroundColor:'red',
        marginBottom:250
       
        
    },
    buttonText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})