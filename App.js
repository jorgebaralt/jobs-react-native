import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator,StackNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './store'
import {Icon} from 'react-native-elements'
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen'
import WelcomeScreen from './screens/WelcomeScreen';


export default class App extends React.Component {
  render() {
      //initialize apart all stack navigations

      const ReviewStack = createStackNavigator({
          review: ReviewScreen,
          settings:SettingsScreen
      });
      ReviewStack.navigationOptions = {
          tabBarLabel:'Review Jobs',
          tabBarIcon: ({ tintColor }) => {
              return <Icon name="favorite" size={30} color={tintColor} />;
          },
      };

      let Main = createBottomTabNavigator({
          map:{ screen : MapScreen},
          deck:{screen : DeckScreen},
          review:{screen : ReviewStack}
      });
      Main.tabBarOptions={
          fontSize:40
      };

      const MainNavigator = createBottomTabNavigator({
        welcome:{screen:WelcomeScreen},
        auth:{screen:AuthScreen},
        main: Main
    },{
        lazy:true,
        navigationOptions:{
            tabBarVisible:false
        }
    });


    return (
        <Provider store={store}>
          <View style={styles.container}>
            <MainNavigator/>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
