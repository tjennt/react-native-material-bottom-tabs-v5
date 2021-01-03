import * as React from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';

// Colors 
import * as Colors from '../../constants/Colors';

// Styles
import Global from '../../styles/Global';
import { ListItem, Avatar } from 'react-native-elements';

// Component
import ListComponent from '../../components/list/ListComponent';

// Helpers
import * as fastHelper from '../../services/helpers/fastHelper';

// Moment
import moment from 'moment';

const list = [
  {
    name: 'Nguyen Tan Tien',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'David Nguyen',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'Tada Pham',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'Goku Ho',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'Nguyen Tado',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'Sakura Man',
    date: '2020-12-03T18:48:02'
  },
  {
    name: 'DoDo Pham',
    date: '2020-12-03T18:48:02'
  },
]

export default function HomeScreen({ navigation }) {

    const renderItem = ({ item })=> {
        return (
            <ListItem
                bottomDivider
                onPress={() => navigation.navigate('HomeDetailScreen', {
                  user: item
                })}
            >
                <Avatar source={require('../../assets/images/user.jpg')} />
                <ListItem.Content
                    style={styles.ListItem}
                >
                    <ListItem.Title
                        style={styles.Title}
                    >{fastHelper.truncate(item.name, 70, true)}</ListItem.Title>
                    <ListItem.Subtitle style={{ textAlign: 'right' }}>{moment(item.date).format('DD/MM/YYYY, h:mm:ss A')}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
            <ListComponent
                data = {list}
                renderItem={renderItem}
                refreshing={false}
                pullToRefresh={()=> {}}
            />
    );
}

const styles = StyleSheet.create({
    ListItem: {
        height: 70
    },
    Title: {
        fontWeight: 'bold'
    }
})