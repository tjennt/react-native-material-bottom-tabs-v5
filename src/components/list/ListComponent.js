import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

// Styles
import Global from '../../styles/Global';

export default function ListComponent({data, renderItem, refreshing, pullToRefresh }) {
    return (
            <SafeAreaView 
                style={ Global.SafeAreaView }>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={renderItem}
                    refreshing={refreshing}
                    onRefresh={()=>pullToRefresh()}
                />

            </SafeAreaView>
    );
}
