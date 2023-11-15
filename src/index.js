import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './components/store/reducers';

// import 'normalize.css'
import './index.css';

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </Provider>
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// import './assets/styles/style.scss';
//
// import reducers from './store/reducers';
//
// import sagas from './store/sagas';
//
//
// const sagaMiddleware = createSagaMiddleware();
//
// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware),
// );
//
// sagaMiddleware.run(sagas);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root'),
// );
//
//
// serviceWorker.unregister();