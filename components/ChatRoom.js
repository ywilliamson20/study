import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';

const ChatRoom = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  return (
    <View>

      <Button title="Go Back" onPress={() => handlePress()}>
        Go Back
      </Button>

      <Text> Chat Rooms</Text>


    </View>
  );
};
export default ChatRoom;
