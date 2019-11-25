import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native';

export default class Chat extends React.Component {
  state = {
    messages: []
  };
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Testtesttest",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Steve",
            avatar: "http://placeimg.com/140/140/people"
          }
        }
      ]
    });
    
  }
  render() {
    return (
      <View style={{width: 300, height: 500}}>
        <GiftedChat 
          messages={this.state.messages}
          //onSend = {}
        />
      </View>
    );
  }
}