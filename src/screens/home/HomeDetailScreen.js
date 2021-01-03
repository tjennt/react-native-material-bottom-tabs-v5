import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';


// Styles
import Global from '../../styles/Global';

// Moment
import moment from 'moment';


export default function HomeDetailScreen({ route }) {
    
    const [user, setUser] = useState({});
    
    useEffect( ()=> {
        const {user} = route.params
        setUser(user)
    })

    return (
        <View style={Global.container}>
            <Text>Name: {user.name}</Text>
            <Text>Date: {moment(user.date).format('DD/MM/YYYY, h:mm:ss A')}</Text>
        </View>
    );
}
