import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
    const { people, onPressItemtoDetail } = props
    const { first, last, title } = people.name;
    const onPressElement = () => {
        onPressItemtoDetail({ people })
        console.log('ok ', first);
    }
    return (
        <TouchableOpacity onPress={onPressElement}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>{`${capitalizeFirstLetter(first)
                    } ${capitalizeFirstLetter(last)}`}</Text>
            </View >
        </TouchableOpacity>

    )
}

export default PeopleListItem;

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,

        marginLeft: 15,
        borderRadius: 50
    }
})