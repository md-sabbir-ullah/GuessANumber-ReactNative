import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>The Game Is Over!!!</Text>
            <Image source={require('../assets/success.png')} style={styles.image}/>
            <Text style={styles.text}>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
            <Text style={styles.text}>Entered number was: <Text style={styles.highlight}>{props.userNumber}</Text></Text>
            
            <MainButton onPress={props.onRestartGame}>New Game</MainButton>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width: '80%',
        height: 300
    },
    text:{
        fontFamily: 'open-sans'
    },
    highlight:{
        color: 'red'
    }
});

export default GameOverScreen;