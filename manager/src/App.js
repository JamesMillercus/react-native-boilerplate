import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyAAksRR-wuY0WfwbnOqQHeoI_OspeKQJtQ',
     authDomain: 'manager-c1bec.firebaseapp.com',
     databaseURL: 'https://manager-c1bec.firebaseio.com',
     projectId: 'manager-c1bec',
     storageBucket: 'manager-c1bec.appspot.com',
     messagingSenderId: '999707620755'
   };
   firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
