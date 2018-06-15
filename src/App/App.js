import React, { Component } from 'react';
import { Wrapper, Header, NextWords, Button } from './styles';
import wisdom from '../markov_data';
import getWord from '../starterWords';

const getNextWord = word =>
  wisdom
    .start(word)
    .end(1)
    .process();

const setUpperCase = arr =>
  arr
    .join(' ')
    .charAt(0)
    .toUpperCase() + arr.join(' ').substr(1);

class App extends Component {
  state = {
    words: [getWord()],
    count: 0,
  };

  assignWord = e => {
    const newWord = e.target.innerText;

    this.setState(prevState => ({
      words: [...prevState.words, newWord],
      count: prevState.count + 1,
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
    // lower.charAt(0).toUpperCase() + lower.substr(1)
    return (
      <Wrapper>
        <Header>{wisdom}</Header>
        <NextWords>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
          <Button onClick={this.assignWord}>{getNextWord(nextWord).split(' ')[1]}</Button>
        </NextWords>
        {/* <Save onClick={this.saveWisdom}>Yep</Save> */}
      </Wrapper>
    );
  }
}

export default App;
