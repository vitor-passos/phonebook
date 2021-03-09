import React from 'react';
import { View } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios'

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        };
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=us&results=5').then(response => {
            const { results } = response.data;
            this.setState({
                peoples: results
            })
        })
    }

    render() {
        return (
            <View>
                <PeopleList peoples={this.state.peoples}
                    onPressItem={pageDetails => {
                        console.log(pageDetails)
                        this.props.navigation.navigate('PeopleDetail', pageDetails);
                    }}
                />
            </View>
        );
    }
}

