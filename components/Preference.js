import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox, List, ListItem, Icon } from 'react-native-elements';
import CustomMultiPicker from "react-native-multiple-select-list";

const listItems = [
          'Marston',
          'West',
         'Newell',
        'Fine Arts',
        'Turlington',
       'Little Hall',
       'Reitz Union'
];

const classItems = [
          'CEN4722',
          'CEN4721',
         'DIG3020',
        'CEN3031',
];
const userList = {
  "123":"CEN4722",
  "124":"CEN4721",
  "125":"DIG3020",
  "126":"CEN3031"
}
const userList2 = {
  "123":"Marston",
  "124":"West",
  "125":"Newell",
  "126":"Fine Arts",
  "127":"Turlington",
  "128":"Little Hall",
  "129":"Reitz Union"
}

export default class HomeScreen extends Component {

        state = {
          color: 'navy',
          color2: 'navy',
          changed: false,
          changed2: false
      }

handlePress(){
    this.props.history.push('/Home');


  };

  FinPress (){
      this.props.history.push('/Start');


  };
  changed (change){
      this.setState({ changed: change })


  };

  changed2 (change){
      this.setState({ changed2: change })


  };
 ColorPress () {
   if(this.state.changed){
       this.setState({  color: 'navy'})
   }else if (!this.state.changed && !this.state.changed2 ){
    this.setState({  color: 'green'})
  }

  };
  ColorPress2 () {
    if(this.state.changed2){
        this.setState({  color2: 'navy'})
    }else if (!this.state.changed2){
     this.setState({  color2: 'green'})
    }
   };
  render(){
  return (
    <View>
    <View style={{
      height: 10,
    }}>


        <Text style={{ padding: 20, fontSize: 25, fontWeight: 'bold',  color: '#373dfa'}}> Add your Preference</Text>

      </View>
      <View style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 80
      }}>
      <Text> Pick Class</Text>
      </View>
          <View style={{
            height: 100,
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
            height: 80,
              justifyContent: 'flex-end',
              alignItems: 'center'
          }}>
  <Text> Pick Location</Text>
  </View>
    <View style={{
      height: 100,

    }}>
    <CustomMultiPicker
      options={userList2}
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
      selected={["Tom", "Christin"]} // list of options which are selected by default
    />
      </View>


    <View style={{
        height: 80,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>
    <Text> Pick Study Style</Text>
      </View>
      <Button title="Serious/Quiet"
          color= {this.state.color}
          onPress={() => {this.ColorPress();this.changed(!this.state.changed);}}>
        Go Back
        </Button>

        <Button title="Socially"
            color= {this.state.color2}
            onPress={() => {this.ColorPress2();this.changed2(!this.state.changed2);}}>
          Go Back
          </Button>

          <View style={{
            height: 100,
            alignItems: 'center',

          }}>
        <Button title="Choose your Buddy" onPress={() => this.FinPress()}>
        Go Back
        </Button>
      </View>
          <View style={{
            height: 100,
            alignItems: 'center'
          }}>
    <Button title="Go Back" onPress={() => this.handlePress()}>
      Go Back
      </Button>
    </View>
    </View>
);
}
}
