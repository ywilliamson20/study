import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';
import { CheckBox, List, ListItem } from 'react-native-elements';





const Preference = props => {


  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  return (
    <View>
        <Text> Add your Preference</Text>
        <Text> Pick your Class</Text>
      <CheckBox
        title='CEN4721'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        />



  <Text> Pick your Location</Text>
        <FlatList


    data={[{title: 'Marston', key: 'item1'},
            {title: 'West', key: 'item2'},
            {title: 'Newell', key: 'item3'},
            {title: 'Fine Arts', key: 'item4'},
            {title: 'Turlington', key: 'item5'},
            {title: 'Little Hall', key: 'item6'},
            {title: 'Reitz Union', key: 'item7'}
          ]}
    renderItem={({item, index, separators}) => (
      <TouchableOpacity
        onPress={() => this._onPress(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={{backgroundColor: 'white'}}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
  />

    <Text> Pick your Study Style</Text>
    <CheckBox
      title='Quiet/Serious'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      />


    <Button title="Go Back" onPress={() => handlePress()}>
      Go Back
      </Button>
    </View>
);
}
export default Preference;
