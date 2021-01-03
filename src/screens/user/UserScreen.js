import * as React from 'react';
import { Text, View } from 'react-native';

// Styles
import Global from '../../styles/Global';

export default function UserScreen({ navigation }) {
  return (
    <View style={Global.container}>
        <Text style={Global.Text}>Author: Nguyen Tan Tien</Text>
        <Text style={Global.Text}>Github: tjennt</Text>
        <Text style={Global.Text}>Email: toma.nguyen675@gmail.com</Text>
    </View>
  );
}
