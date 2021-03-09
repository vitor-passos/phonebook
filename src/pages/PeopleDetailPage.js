import React from 'react';
import { View, Text } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
        const { people } = this.props.route.params;
        console.log(people.name.first);
        return (
            <View>
                <Text> Page Detail People </Text>
            </View>
        )
    }
}