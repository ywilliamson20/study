import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Router, Switch, Route } from './src/routing.native';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Create from './components/Create';
import SignUp from './components/SignUp';
import Break from './components/Break';
import Notify from './components/Notify';
import Start from './components/Start';
import ChatRoom from './components/ChatRoom';
import ProfileScreen from './components/ProfileScreen';
import Preference from './components/Preference';


export default class App extends Component {
  state = {
      picked: false
    };

  render(){

  return (
     <View style={styles.container}>
        <Router>
            <Switch>
              <Route exact path="/" render={props => <Login {...props} />} />
              <Route path="/Home" render={props => <HomeScreen {...props} />} picked={this.state.picked}/>
              <Route path="/Create" render={props => <Create {...props} />} />
              <Route path="/Prefer" render={props => <Preference {...props} />} />
              <Route path="/ChatRoom" render={props => <ChatRoom {...props} />} />
              <Route path="/Profile" render={props => <ProfileScreen {...props} />} />
              <Route path="/Signup" render={props => <SignUp {...props} />} />
              <Route path="/Break" render={props => <Break {...props} />} />\
              <Route path="/Start" render={props => <Start {...props} picked={this.state.picked} />} />
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
    marginTop: 50,
    padding: 10,
    backgroundColor: '#6ED4C8'
  },
});
