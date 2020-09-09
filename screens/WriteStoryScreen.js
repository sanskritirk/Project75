import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView,AndroidToast, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''
    }
  }
  submitStory=async()=>{
  var transactionMessage="Story Issued"
  db.collection('stories').add({
      'title':this.state.title,
      'author':this.state.author,
      'story':this.state.story,
    })
    this.setState({
      title:'',
      story:'',
      author:''
    })
   ToastAndroid.show(transactionMessage,ToastAndroid.SHORT);
  } 
  render(){
  return (
     <View>
        <Header 
          backgroundColor={'#913d88'}
          centerComponent={{
                text: 'Story Hub',
                style: { color: '#fff', fontSize: 25,fontWeight:'bold'},
              }}/>
        <KeyboardAvoidingView behavior={"padding"} enabled>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox} 
        placeholder = {"Story Title"}
        onChangeText={(text)=>{
          this.setState({
            title:text
          })
        }} value={this.state.title}/>
        </View>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox} placeholder="Author"
        onChangeText={(text)=>{
          this.setState({
            author:text
          })
        }} value={this.state.author}/>
        </View>
        <View style={styles.inputView}>
        <TextInput style={styles.inputBox}  placeholder="Write Your Story" multiline={true} 
        onChangeText={(text)=>{
          this.setState({
            story:text
          })
        }} value={this.state.story}/>
        </View>
        <TouchableOpacity style={styles.scanButton} onPress={this.submitStory}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>   
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
