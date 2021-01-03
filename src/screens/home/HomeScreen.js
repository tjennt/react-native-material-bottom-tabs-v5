import * as React from 'react';
import { Text, View, Button } from 'react-native';

// Colors 
import * as Colors from '../../constants/Colors';

// Styles
import Global from '../../styles/Global';

// Component
import ListPostComponent from '../../components/home/ListPostComponent';


export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
        <ListPostComponent navigation={navigation} />
    </View>
  );
}
