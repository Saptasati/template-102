import React,{Component} from 'react';                                                                                                        
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class UserScreen extends Component {
    render() {
        return(
            <View>
             <Text style={styles.text}>UserScreen</Text>
             <TouchableOpacity style={styles.button}>
                <Text>Click here to make a book request</Text>
             </TouchableOpacity>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1
    },
    text:{
     flex:1,
     fontSize:30,
     fontWeight:'bold',
     marginTop:100
    },
    button:{
        flex:1,
        marginTop:100,
        marginBottom:200,
        backgroundColor:'blue'
    }
    
})
