import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';

const Preference = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  return (
    <View>

      <Button title="Go Back" onPress={() => handlePress()}>
        Go Back
      </Button>

      <Text> Add your Preference</Text>

    </View>
  );
};
export default Preference;
