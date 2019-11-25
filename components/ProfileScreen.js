import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Image } from 'react-native';
import { Link } from 'react-router-native';
import Propic from './looking-up-woman-wearing-blue-v-neck-top-1674752.jpg';

const Preference = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  return (
    <View>
      <Image source = {Propic}
      style ={{width:200, height:150}}
      />
    <View style={{
      height: 100,

    }}>
      <Text style={{ padding: 20, fontSize: 30, fontWeight: 'bold', color: '#373dfa' }}> Your Profile</Text>
    </View>


      <View style={{
        height: 40,
        backgroundColor: 'skyblue'
      }}>
        <Text style={{fontWeight: 'bold' }}> Name: Kat Wiki</Text>
      </View>

      <View style={{
        height: 50,
        backgroundColor: 'white'
      }}>
        <Text> Age: 19 </Text>
      </View>


      <View style={{
        height: 50,
        backgroundColor: 'white'
      }}>
        <Text> email: gator@ufl.edu </Text>
      </View>
  <View style={{height: 100,justifyContent: 'flex-end'}}>
      <Button title="Go Back" onPress={() => handlePress()}>
        Go Back
      </Button>

</View>

    </View>
  );
};
export default Preference;
