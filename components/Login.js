import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';
import mainLogo from './Logo.png';

const Login = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };
  const CreatePress = pokemon=>{
    props.history.push('/Create');
  };
  return (
    <View style={styles.container}>

      <Image source = {mainLogo}
      style ={{width:100, height:100}}
      />

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
