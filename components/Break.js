import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,TextInput, Button, StyleSheet, Image, Keyboard } from 'react-native';
import { Link } from 'react-router-native';
import mainLogo from './Logo.png';

class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}
export default Break;
