'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Util from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeCards from 'react-native-swipe-cards';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: Util.size.height,
        width: Util.size.width
    },
    nav: {
        width: Util.size.width,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
        borderBottomColor: "#ebebeb",
        borderBottomWidth: 1
    },
    card: {
        width: Util.size.width - 20,
        height: 410,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        position: "absolute",
        left: 10,
        top: 70,
        backgroundColor: "#fff"
    },
    scard: {
        width: Util.size.width - 20,
        height: 410,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        position: "relative",
        backgroundColor: "#fff",
        top: 13
    },
    logo: {
        width: 110,
        height: 32,
        resizeMode: "contain",
    },
    cardInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        paddingLeft: 20,
        paddingRight: 5
    },
    cardText: {

    },
    cardIcon: {

    },
    cardIconContainer: {

    },
    cardIconText: {

    },
    actionContainer: {
        position: "absolute",
        bottom: 20,
        flexDirection: 'row',

    },
    smallAction: {

    },
    largeAction: {

    }
});

class Card extends Component {
    static propTypes = {
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
    }

    render() {
        return (
            <View style={[styles.card, { top: this.props.top, width: this.props.width, left: this.props.left }]}>
                <Image style={{ width: this.props.width - 2, height: 350 }}
                    source={this.props.img}>
                </Image>
                <View style={styles.cardInfo}>
                    <View>
                        <Text style={styles.cardText}>
                            {this.props.name}, very old
                        <Icon name="ios-checkmark-circle" size={18} color="#208bf6"></Icon>
                        </Text>
                    </View>
                    <View style={styles.cardIcon}>
                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-people" size={25} color="#fc6b6d"></Icon>
                            <Text style={[styles.cardIconText, { color: "#fc6b6d" }]}>0</Text>
                        </View>
                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-book" size={25} color="#cecece"></Icon>
                            <Text style={[styles.cardIconText, { color: "#cecece" }]}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

class SCard extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        top: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
    }

    render() {
        return (
            <View key={this.props.id} style={[styles.card, { top: this.props.top, width: this.props.width }]}>
                <Image style={{ width: this.props.width - 2, height: 350 }}
                    source={this.props.img}>
                </Image>
                <View style={styles.cardInfo}>
                    <View>
                        <Text style={styles.cardText}>
                            {this.props.name}, very old
                            <Icon name="ios-checkmark-circle" size={18} color="#208bf6"></Icon>
                        </Text>
                    </View>
                    <View style={styles.cardIcon}>
                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-people" size={25} color="#fc6b6b"></Icon>
                            <Text style={[styles.cardIconContainer, { color: "#fc6b6b" }]}>0</Text>
                        </View>
                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-book" size={25} color="#cecece"></Icon>
                            <Text style={[styles.cardIconText, { color: "#cecece" }]}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

class SwipeCard extends Component {
    constructor() {
        super();
        const simgs = [
            require('../../img/minion1.png'),
            require('../../img/minion2.png'),
            require('../../img/minion3.png'),
            require('../../img/minion4.png'),
            require('../../img/minion5.png')
        ];
        const names = ["Stuart", "Bob", "Kevin", "Dave", "Jerry"];
        const cards = simgs.map(function (elem, index) {
            return {
                id: "sc" + index,
                img: simgs[4 - index],
                name: names[4 - index],
                top: 13 + index * 4,
                width: Util.size.width - 22 - index * 4
            }
        });
        this.state = {
            cards
        };
    }

    handleYup(card) {
        this.props.next();
    }

    handleNope(card) {
        this.props.next();
    }

    render() {
        return (
            <SwipeCard
                cards={this.state.cards}
                renderCard={(cardData) => <SCard key={cardData.id}{...cardData} />}
                handleYup={() => this.handleYup()}
                handleNope={() => this.handleNope()}
                showYup={false}
                showNope={false}
            />
        )
    }
}

class Cards extends Component {
    constructor() {
        super();
        const imgs = [
            require('../../img/minion1.png'),
            require('../../img/minion2.png'),
            require('../../img/minion3.png'),
            require('../../img/minion4.png'),
            require('../../img/minion5.png')
        ];
        const names = ["Stuart", "Bob", "Kevin", "Dave", "Jerry"];
        this.state = {
            imgs: imgs,
            names: names
        };
    }

    componentDidMount() {
        if (Platform.OS === "ios") {
            StatusBar.setBarStyle(0);
        }
    }

    _next = () => {
        const imgs = this.state.imgs;
        imgs.pop();
        this.setState({
            imgs: imgs
        });
    }

    render() {
        const { names } = this.state;
        const cards = this.state.imgs.map((elem, index) => {
            return (
                <Card key={index}
                    name={names[index]}
                    img={elem}
                    top={30 - index * 4}
                    width={Util.size.width - 38 + index * 4}
                    left={18 - index * 2}>
                </Card>
            );
        })
        return (
            <View>
                {cards}
                <SwipeCards next={() => this._next} />
            </View>
        )
    }
}

export default class Demo14 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Icon name="ios-settings" size={35} color="#cecece"></Icon>
                    <Image style={styles.logo} source={require('../../img/tinder-logo.png')}></Image>
                    <Icon name="ios-chatbubbles" size={35} color="#cecece"></Icon>
                </View>
                <Cards />
                <View style={styles.actionContainer}>
                    <View style={[styles.smallAction, { left: 5 }]}>
                        <Icon name="ios-refresh" color="#fdcd6d" size={30}></Icon>
                    </View>
                    <View style={styles.largeAction}>
                        <Icon name="md-close" color="#fc6c6e" size={45}></Icon>
                    </View>
                    <View style={styles.largeAction}>
                        <Icon name="md-heart" color="#52cb93" size={45}></Icon>
                    </View>
                    <View style={[styles.smallAction, { right: 5 }]}>
                        <Icon name="ios-pin" color="#318ff6" size={30}></Icon>
                    </View>
                </View>
            </View>
        );
    }
}