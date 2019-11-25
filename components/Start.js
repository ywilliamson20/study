import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox, List, ListItem } from 'react-native-elements';


const peopleItems = [
          'Mark S.',
          'Weston J.',
         'Newton K.',
        'Jen T.',
        'Tanya M.',
       'Lily H.',
       'Rex D.'
];


const Start = props => {

        state = {
          color: 'pink',


      }

  const handlePress = pokemon=>{
    props.history.push('/Home');


  };

  const FinPress = pokemon=>{
    props.history.push('/Home');


  };
  return (
    <View>
    <View style={{
      height: 60,
    }}>
        <Text style={{ padding: 20, fontSize: 30, fontWeight: 'bold',  color: '#373dfa'}}> Choose your Buddy</Text>
        </View>
          <View style={{
            height: 300,
          }}>
          <FlatList
            style={{
              backgroundColor:'white',
            }}
                data={peopleItems}
                renderItem={({ item }) => (
                  <Text style={{padding: 20, fontSize: 15 }}>{item}</Text>
                )}
                  keyExtractor={(item, index) => index.toString()}
              />

          </View>
          <View style={{
            height: 100,
          }}>
    <Button title="Go Back" onPress={() => handlePress()}>
      Go Back
      </Button>
    </View>
    </View>
);
}
export default Start;
