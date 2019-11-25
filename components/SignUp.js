import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,TextInput, Button, StyleSheet, Image, Keyboard } from 'react-native';
import { Link } from 'react-router-native';
import mainLogo from './Logo.png';

const listItems = [
  'University of Florida'
];

const SignUp = props => {

  const handlePress = pokemon => {
    props.history.push('/');
  };

  state = {
    searchBarFocused: false,
  }

    return (
      <View style={{
        height: 500,
      }}>
      <Button title="Log out" onPress={() => handlePress()}>
        Log out
      </Button>
        <View
          style={{
            height: 80,
            width: 300,
            backgroundColor: '#74C7ED',
            justifyContent: 'center',

          }}>
          <TextInput
             placeholder="Search"
             style={{ fontSize: 25, justifyContent: 'center', position: 'relative', paddingLeft: 15, backgroundColor: 'white'}}
           />
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? 'rgba(0,0,0,0.3)'
              : 'white',
          }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 10, fontSize: 20 }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );

}
export default SignUp;
