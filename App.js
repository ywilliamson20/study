import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Router, Switch, Route } from './src/routing.native';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Create from './components/Create';
import ChatRoom from './components/ChatRoom';
import ProfileScreen from './components/ProfileScreen';
import Preference from './components/Preference';

export default class App extends Component {
  render(){

  return (
     <View style={styles.container}>
        <Router>
            <Switch>
              <Route exact path="/" render={props => <Login {...props} />} />
              <Route path="/Home" render={props => <HomeScreen {...props} />} />
              <Route path="/Create" render={props => <Create {...props} />} />
              <Route path="/Prefer" render={props => <Preference {...props} />} />
              <Route path="/ChatRoom" render={props => <ChatRoom {...props} />} />
              <Route path="/Profile" render={props => <ProfileScreen {...props} />} />
            </Switch>
          </Router>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    padding: 10,
    backgroundColor: '#6ED4C8'
  },
});
