import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native';

export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1, 
          text: "Hey, I'm sitting in the back corner of the library! Feel free to stop by and study with me!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Steve",
            avatar: "http://placeimg.com/140/140/people",
          }
        }
      ]
    });
  }
  onSend = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  };

  render() {
    return (
      <View style={{width: 300, height: 500}}>
        <GiftedChat 
          messages={this.state.messages}
          onSend = {messages => this.onSend(messages)}
        />
      </View>
    );
  }
}