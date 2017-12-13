import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home';
import Demo1 from '../demos/demo1';
import Demo2 from '../demos/demo2';
import Demo3 from '../demos/demo3';
import Demo4 from '../demos/demo4';
import { Demo3TopNav } from '../demos/demo3';
import Demo5 from '../demos/demo5';
import Demo6 from '../demos/demo6';
import Demo7 from '../demos/demo7';
import Demo8 from '../demos/demo8';
import Demo9 from '../demos/demo9';
import Demo10 from '../demos/demo10';
import Demo11 from '../demos/demo11';
import Demo12 from '../demos/demo12';
import Demo13 from '../demos/demo13';

const navigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "30 demos of React-Native for 30 days"
        }),
    },
    Demo1: {
        screen: Demo1,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Demo2: {
        screen: Demo2,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Demo3: {
        screen: Demo3,
        navigationOptions: ({ navigation }) => ({
            header: <Demo3TopNav></Demo3TopNav>
        }),
    },
    Demo4: {
        screen: Demo4,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo5: {
        screen: Demo5,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo6: {
        screen: Demo6,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo7: {
        screen: Demo7,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo8: {
        screen: Demo8,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo9: {
        screen: Demo9,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo10: {
        screen: Demo10,
        navigationOptions: ({ navigation }) => ({

        })
    },
    Demo11: {
        screen: Demo11,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Demo12: {
        screen: Demo12,
        navigationOptions: ({ navigation }) => ({
            title: 'OpenGL'
        })
    },
    Demo13: {
        screen: Demo13,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
});

export default navigator;