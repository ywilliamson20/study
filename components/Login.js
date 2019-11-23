import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';

const Login = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };
  const CreatePress = pokemon=>{
    props.history.push('/Create');
  };
  return (
    <View>

      <Button title="Log In" onPress={() => handlePress()}>
        Log In
      </Button>

      <Text> Login</Text>
      <Button title="New User" onPress={() => CreatePress()}>
        New User
      </Button>

    </View>
  );
};
export default Login;
