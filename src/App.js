import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';


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
          <button id="reset" onClick={()=> appState.resetTimer()}>
                <span className="txt">Seconds passed:</span> <span className="timer">{appState.timer}</span>
          </button>
         );
    }
};

export default App;
