import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import styled from 'emotion/react';

const Wrapper = styled.div`
  margin:20px;
  border:1px solid #ff0000;
  padding:10px;
`;


var appState = observable({
    timer: 0
});

appState.resetTimer = function reset() {
    appState.timer = 0;
};

setInterval(function tick() {
    appState.timer += 1;
}, 1000);

@observer
class App extends Component {
    render() {
        return (
          <Wrapper>
          <button id="reset" onClick={()=> appState.resetTimer()}>
                <span className="txt">Seconds passed:</span> <span className="timer">{appState.timer}</span>
          </button>
          </Wrapper>
         );
    }
};

export default App;
