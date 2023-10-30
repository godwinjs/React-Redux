import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { configureStore } from 'redux';
import { Provider } from 'react-redux'

import allReducers from './reducers';

const store = configureStore({
    reducer: { allReducers },
    middleware: () => {}
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
