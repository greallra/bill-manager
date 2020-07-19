import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses} from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import expenses from './tests/fixtures/expenses'
import {firebase} from './firebase/firebase.js';


// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const store = configureStore();


// Modify the 'first' and 'last' properties, but leave other data at
// adaNameRef unchanged.

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(jsx, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log("log in", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=>{
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })
    
  }else {
    console.log("log out");
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})