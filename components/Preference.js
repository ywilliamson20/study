import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox, List, ListItem } from 'react-native-elements';


const listItems = [
          'Marston',
          'West',
         'Newell',
        'Fine Arts',
        'Turlington',
       'Little Hall',
       'Reitz Union'
];

const classItems = [
          'CEN4722',
          'CEN4721',
         'DIG3020',
        'CEN3031',
];

const Preference = props => {

        state = {
          color: 'pink',


      }

  const handlePress = pokemon=>{
    props.history.push('/Home');


  };

  const FinPress = pokemon=>{
    props.history.push('/Start');


  };
  return (
    <View>
    <View style={{
      height: 60,
    }}>
        <Text style={{ padding: 20, fontSize: 30, fontWeight: 'bold',  color: '#373dfa'}}> Add your Preference</Text>

      </View>
      <View style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 50
      }}>
      <Text> Pick Class</Text>
      </View>
          <View style={{
            height: 100,
          }}>
          <FlatList
            style={{
              backgroundColor:'white',
            }}
                data={classItems}
                renderItem={({ item }) => (
                  <Text style={{padding: 20, fontSize: 15 }}>{item}</Text>
                )}
                  keyExtractor={(item, index) => index.toString()}
              />

          </View>


          <View style={{
            height: 40,
              justifyContent: 'flex-end',
              alignItems: 'center'
          }}>
  <Text> Pick Location</Text>
  </View>
    <View style={{
      height: 100,

    }}>
    <FlatList
      style={{
        backgroundColor:'white',

      }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 15,  }}>{item}</Text>
          )}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>


    <View style={{
        height: 40,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>
    <Text> Pick Study Style</Text>
      </View>
      <Button title="Serious/Quiet"
          color='skyblue'>
        Go Back
        </Button>
        <Button title="Socially"
            color= 'skyblue'>
          Go Back
          </Button>

          <View style={{
            height: 100,
            alignItems: 'center',

          }}>
        <Button title="Choose your Buddy" onPress={() => FinPress()}>
        Go Back
        </Button>
      </View>
          <View style={{
            height: 100,
            alignItems: 'center'
          }}>
    <Button title="Go Back" onPress={() => handlePress()}>
      Go Back
      </Button>
    </View>
    </View>
);
}
export default Preference;
