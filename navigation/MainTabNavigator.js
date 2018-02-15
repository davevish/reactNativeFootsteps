import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Login from '../screens/login';
import Signup from '../screens/signup';
import Rules from '../screens/Rules';
import GoogleMap from '../screens/GoogleMap';

export default TabNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Rules: {
      screen: Rules,
    },
    GoogleMap: {
      screen: GoogleMap,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Login':
            iconName = Platform.OS === 'ios' ? `ios-log-in${focused ? '' : '-outline'}` : 'md-log-in';
            break;
          case 'Signup':
            iconName = Platform.OS === 'ios' ? `ios-log-in${focused ? '' : '-outline'}` : 'md-log-in';
            break;
          case 'Rules':
            iconName = Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list';
            break;
          case 'GoogleMap':
              iconName = Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
