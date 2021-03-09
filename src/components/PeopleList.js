import React from 'react';
import { View, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    const itens = peoples.map((people, index) => {
        return <PeopleListItem people={people} key={index} onPressItemtoDetail={onPressItem}/>
    });

    return (
        <View style={styles.container}>
            {itens}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    }
})

export default PeopleList;