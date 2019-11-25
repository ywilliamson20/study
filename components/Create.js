import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";

const userList = {
  "123":"Tom",
  "124":"Michael",
  "125":"Christin"
}

const Create = props => {


  const handlePress = pokemon => {
    props.history.push('/Home');
  };

  return (
    <View>
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
        selected={["Tom", "Christin"]} // list of options which are selected by default
      />
      <Text> Create your Account</Text>

        <Button title="Create Account" onPress={() => handlePress()}>
          Create Account
        </Button>
    </View>
  );
};
export default Create;
