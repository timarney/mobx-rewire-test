import React, { Component } from "react";
import { observable, action } from "mobx";
import { Provider, inject, observer } from "mobx-react";
import styled from "emotion/react";

const Wrapper = styled.div`
  margin: 20px;
  border: 1px solid #ff0000;
  padding: 10px;
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
      <button id="reset" onClick={() => store.resetTimer()}>
        <span className="txt">Seconds passed:</span>
        <span className="timer">
          {store.timer}
        </span>
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={the_store}>
        <Wrapper>
          <Reset />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
