import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {

  const [userNumber, setUserNumber] = useState();

  //Trigger GameOverScreen:
  const [guessRounds, setGuessRounds] = useState(0);

  //Load app data first as like font and then render all components:
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)}/>
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRound => {
    setGuessRounds(numOfRound);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestartGame={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
