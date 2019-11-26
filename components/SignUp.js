import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Link } from 'react-router-native';

var radio_props = [
  {label: 'UF', value: 0 },
  {label: 'USF', value: 2 },
  {label: 'UCF', value: 3 },
  {label: 'FSU', value: 4 },
  {label: 'UNF', value: 4 }
];

const SignUp = props => {
  const handlePress = pokemon=>{
    props.history.push('/Home');
  };

  onRadioBtnClick = (rSelected) => {
    this.setState({
        rSelected:rSelected
    });
}

  return (
    <View>



      <Text> Choose your School</Text>
      <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {}}
        />
        <View style={{
          height: 100,

        }}>
      <Button title="Go to Sign In" color = 'navy' onPress={() => handlePress()}>
          Go to Sign In
        </Button>
            </View>
    <View style={{
      height: 100,

    }}>
          <Button title="Go back" onPress={() => handlePress()}>
            Go back
      </Button>
      </View>
        </View>
  );
};
export default SignUp;
