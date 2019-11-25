import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button,Modal } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox, List, ListItem } from 'react-native-elements';
import CustomMultiPicker from "react-native-multiple-select-list";


const userList = {
  "123":"Tom A.",
  "124":"Michael K.",
  "125":"Christin L.",
  "126":"Becky G.",
  "127":"Clara U.",
  "128":"Remi R."
}


export default class Start extends Component {

        state = {
          color: 'skyblue',

              modalVisible: false,



      }

handlePress (){
  this.props.history.push('/Prefer');


  };
  homePress () {
    this.props.history.push('/Home');


  };
  ShowHideComponent = () => {
     if (this.state.picked == true) {
       this.setState({ picked: false });
       this.setState({color: 'green'})
     } else {
       this.setState({ picked: true });
     }
   };
   setModalVisible (visible){
     this.setState({modalVisible:visible})
     }

   render(){
  return (
    <View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          <View style={{justifyContent: 'center', backgroundColor: 'skyblue', width: 380, height: 300}}>

            <View>
              <Text style={{ alignItems: 'center', fontSize: 60, fontWeight: 'bold',  color: '#373dfa'}}>Study Session Made! </Text>

              <Button
                title="EXIT"
                onPress={() => {
                  this.homePress()}}
              >
                EXIT
              </Button>
            </View>
          </View>
        </Modal>
   {this.state.picked ? (
        <Button
          title="(1) Notification!!!"
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          (1) Notification!!!
        </Button>
    ) : null}
    <View style={{
      height: 60,
    }}>
        <Text style={{ padding: 20, fontSize: 30, fontWeight: 'bold',  color: '#373dfa'}}> Choose your Buddy</Text>
        </View>
          <View style={{
            height: 300,
          }}>
          <CustomMultiPicker
            options={userList}
            multiple={true} //
            returnValue={"label"} // label or value
            callback={(res)=>{ console.log(res) }} // callback, array of selected items
            rowBackgroundColor={"#eee"}
            rowHeight={40}
            rowRadius={5}
            searchIconName="ios-add"
            searchIconColor="red"
            searchIconSize={30}
            iconColor={"#00a2dd"}
            iconSize={30}
            selectedIconName={"ios-checkmark-circle-outline"}
            unselectedIconName={"ios-add"}
            scrollViewHeight={130}
            selected={[]} // list of options which are selected by default
          />

          </View>
          <View style={{
            height: 100,
          }}>
          <Button title="Make Study Session" color= {this.state.color} onPress={() => {this.ShowHideComponent();}}>
            Make Study Session
            </Button>
            </View>
            <View style={{
              height: 50,
            }}>
    <Button title="Go Back" color= {this.state.color} onPress={() => this.handlePress()}>
      Go Back
      </Button>
    </View>
    </View>
);
}
}
