import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home';
import Demo1 from '../demos/demo1';
import Demo2 from '../demos/demo2';
import Demo3 from '../demos/demo3';
import {Demo3TopNav} from '../demos/demo3';

const navigator = StackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "30 demos for 30 days"
        }),
    },
    Demo1: {
        screen: Demo1,
        navigationOptions: ({ navigation }) => ({
            header:null
        }),
    },
    Demo2: {
        screen: Demo2,
        navigationOptions: ({ navigation }) => ({
            header:null
        }), 
    },
    Demo3: {
        screen: Demo3,
        navigationOptions: ({ navigation }) => ({
            header:<Demo3TopNav></Demo3TopNav>
        }), 
    },
},{

});

export default navigator;