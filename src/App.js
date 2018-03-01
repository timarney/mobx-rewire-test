import React, { Component } from "react";
import { observable, action } from "mobx";
import { Provider, inject, observer } from "mobx-react";
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

const Button = styled.button`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  padding:1em;
`;

class Store {
  @observable timer = 10;

  @action
  start() {
    setInterval(
      function tick() {
        this.timer += 1;
      }.bind(this),
      1000
    );
  }

  @action
  resetTimer(parent, type, id) {
    console.log("reset");
    this.timer = 0;
  }
}

let the_store = new Store();
the_store.start();

@inject("store")
@observer
class Reset extends Component {
  render() {
    const { store } = this.props;
    return (
      <Container>
        <Button id="reset" onClick={() => store.resetTimer()}>
          <span className="txt">Seconds passed:</span>
          <span className="timer">
            {store.timer}
          </span>
        </Button>
      </Container>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={the_store}>
        <Reset />
      </Provider>
    );
  }
}

export default App;
