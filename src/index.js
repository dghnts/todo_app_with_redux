import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const initialState = {
  taskss: [],
};


function addReducer(state = initialState, action){
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
    default:
      return state;
  }
}

function resetReuducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}

const store = createStore(addReducer);

function handleChange() {
  console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange);

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

// Storeの状態を確認する
console.log(store.getState());

store.dispatch(addTask('Storeを学ぶ'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
