import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Button } from 'react-native';

export default class ChatRoom extends React.Component {
  state = {
    messages: []
  };

  homePress () {
    this.props.history.push('/Home');


  };
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hi ready to study?",
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

  onSend(messages = []) {
  this.setState(previousState => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }))
}

  render() {
    return (
      <View>
      <View style={{width: 100, height: 50}}>
      <Button title="Go Back" color= 'navy' onPress={() => this.homePress()}>
          Go Back
          </Button>
            </View>
      <View style={{width: 300, height: 500}}>
        <GiftedChat
          messages={this.state.messages}
        onSend={messages => this.onSend(messages)}

        />
        </View>
      </View>
    );
  }
}
