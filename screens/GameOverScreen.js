import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game Is Over!!!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Entered number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestartGame}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default GameOverScreen;