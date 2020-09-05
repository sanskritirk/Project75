import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component {
    
  render(){
  return (
      <View>
        <Header 
          backgroundColor={'#913d88'}
          centerComponent={{
                text: 'Story Hub',
                style: { color: '#fff', fontSize: 25,fontWeight:'bold'},
              }}/>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox} placeholder="Story Title"/>
        </View>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox} placeholder="Author"/>
        </View>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox}  placeholder="Write Your Story"/>
        </View>
        <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>   
        
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    flexDirection:'row',
    margin:30,
  },
  inputBox:{
    width:350,
    height:40,
    borderWidth:1.5,
    fontSize:20,

  },
  scanButton:{
    backgroundColor:'#913d88',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '60%',
    height: 50,
    margin: 10,
    marginTop:50,
    borderRadius: 20,
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
});
