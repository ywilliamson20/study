import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';

const UniSelect = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  return (
    <View>

      <Button title="Go Back" onPress={() => handlePress()}>
        Go Back
      </Button>

      <Text> Test</Text>

    </View>
  );
};
export default UniSelect;
