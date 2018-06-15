import React, { Component } from 'react';
import { Wrapper, Header, NextWords, Button } from './styles';
import { getWord, setUpperCase, getNextWord } from '../markov_functions';

class App extends Component {
  state = {
    words: [getWord()],
    count: 0,
  };

  assignWord = ({ target }) => {
    const newWord = target.innerText;

    this.setState(({ words, count }) => ({
      words: [...words, newWord],
      count: count + 1,
    }));
  };

  saveWisdom = () => {
    const { words } = this.state;
    console.log(words.join(' '));
  };

  render() {
    const { words, count } = this.state;
    const wisdom = setUpperCase(words);
    const nextWord = words[count];

    return (
      <Wrapper>
        <Header>{wisdom}</Header>
        <NextWords>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
        </NextWords>
      </Wrapper>
    );
  }
}

export default App;
