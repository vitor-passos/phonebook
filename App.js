import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PeoplePage}
          options={stylesOptions.headerStyleMain}
        />
        <Stack.Screen name="PeopleDetail" component={PeopleDetailPage}
          options={stylesOptions.headerStyleDetailPeople}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesOptions = {
  headerStyleMain: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerTitleStyle: { flexGrow: 1, textAlign: 'center' },
    headerStyle: {
      backgroundColor: '#348feb',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    }
  },
  headerStyleDetailPeople: {
    title: 'Detalhes',
    headerTintColor: 'white',
    headerTitleStyle: {},
    headerStyle: {
      backgroundColor: '#348feb',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    }
  }
}

export default App;