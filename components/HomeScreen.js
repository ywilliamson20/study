import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet, Modal, TouchableHighlight, Alert} from 'react-native';
import mainLogo from './Logo.png';

const handlePress = pokemon => {
  this.props.history.push('/');
};
const ChaPress = pokemon=>{
  this.props.history.push('/ChatRoom');
};
const PrePress = pokemon=>{
this.props.history.push('/Prefer');
};
const ProfilePress = pokemon=>{
this.props.history.push('/Profile');
};

export default class HomeScreen extends Component {
  state = {
      modalVisible: false
    };


setModalVisible (visible){
  this.setState({modalVisible:visible})
  }

render(){
  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {

        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <Button
              title="Go Back"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              Go Back
            </Button>
          </View>
        </View>
      </Modal>

      <Button
        title="Show Modal"
        onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}>
        Show Modal
      </Button>


    <View style ={styles.container}>
      <Image source = {mainLogo}
              style ={{width:100, height:100}}
              />
      <Text style = {{fontSize: 30, color: '#373dfa'}}> Study Buddy</Text>
        <View style={{
          height: 50,

        }}>
        <Button title="Search" onPress={() => PrePress()}>
          Search
        </Button>
      </View>
      <View style={{
        height: 50,

      }}>
        <Button title="Chat" onPress={() => ChaPress()}>
          Chat
        </Button>
      </View>

      <View style={{
        height: 50,

      }}>
        <Button title="Profile" onPress={() => ProfilePress()}>
        Profile
        </Button>
      </View>
      <View style={{
        height: 50,

      }}>
        <Button title="Log out" onPress={() => handlePress()}>
          Log out
        </Button>
      </View>
    </View>
      </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    padding: 10,
    backgroundColor: '#6ED4C8'
  },
});
