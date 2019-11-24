import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import mainLogo from './Logo.png';

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
    <View style ={styles.container}>
      <Image source = {mainLogo}
              style ={{width:100, height:100}}
              />
      <Text> Study Buddy</Text>
        <Button title="Search" onPress={() => PrePress()}>
          Search
        </Button>
        <Button title="Chat" onPress={() => ChaPress()}>
          Chat
        </Button>
        <Button title="Profile" onPress={() => ProfilePress()}>
        Profile
        </Button>
        <Button title="Log out" onPress={() => handlePress()}>
          Log out
        </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
    padding: 10,
    backgroundColor: '#6ED4C8'
  },
});

export default HomeScreen;
