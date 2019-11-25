import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';


const Create = props => {
  const handlePress = pokemon => {
    props.history.push('/UniSelect');
  };

  return (
    <View>

      <Text> Create your Account</Text>

        <Button title="Create Account" onPress={() => handlePress()}>
          Create Account
        </Button>
    </View>
  );
};
export default Create;
