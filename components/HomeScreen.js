import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet, Modal, TouchableHighlight} from 'react-native';
import mainLogo from './Logo.png';

const HomeScreen = props => {

  const handlePress = pokemon => {
    props.history.push('/');
  };
  const ChaPress = pokemon=>{
    props.history.push('/ChatRoom');
  };
  const PrePress = pokemon=>{
    props.history.push('/Prefer');
  };
  const ProfilePress = pokemon=>{
    props.history.push('/Profile');
  };

  state = {
    modalVisible: false,
  };

setModalVisible=(visible)=> {
    this.state.modalVisible({modalVisible: visible});
  }


  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>


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

export default HomeScreen;
