import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LineDetail from '../components/LineDetail';

export default class PeopleDetailPage extends React.Component {
    render() {
        const { people } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Image source={{ uri: people.picture.large }}
                    style={styles.avatar}></Image>
                <View style={styles.detailContainer}>
                    <LineDetail label="Email" content={people.email} />
                    <LineDetail label="Cidade" content={people.location.city} />
                    <LineDetail label="Estado" content={people.location.state} />
                    <LineDetail label="Telefone" content={people.phone} />
                    <LineDetail label="Celular" content={people.cell} />
                    <LineDetail label="País" content={people.nat} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
})
