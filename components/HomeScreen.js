import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';


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
  
  return (
    <View>
    <Button title="Log out" onPress={() => handlePress()}>
      Log out
    </Button>
        <Button title="Preference" onPress={() => PrePress()}>
          Preference
        </Button>
        <Button title="ChatRoom" onPress={() => ChaPress()}>
          ChatRoom
        </Button>
        <Button title="Profile" onPress={() => ProfilePress()}>
        Profile
        </Button>
    </View>
  );
};
export default HomeScreen;
