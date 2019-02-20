import React, { Component } from 'react';
import './App.css';
import Options from "./Options/Options.js";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <Options />
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
