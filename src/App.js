import React, { Component } from 'react';
import './App.css';
import CurrentPage from './CurrentPage/CurrentPage.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers";
import MyNavbar from "./MyNavbar/MyNavbar.js";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <MyNavbar />
          <header className="App-header">
            <CurrentPage />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
