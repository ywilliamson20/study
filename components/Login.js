import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const Login = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };
  const CreatePress = pokemon=>{
    props.history.push('/Create');
  };
  return (
    <View style={styles.container}>

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


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 50,
    },
  });
export default Login;
