import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//React-Router-Dom;
import { BrowserRouter as Router  } from "react-router-dom";

//react context api
import reducer,{ initialState } from './auth/reducer';
import { StateProvider} from './auth/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <Router>
        <App />
      </Router>
    </StateProvider>
</React.StrictMode>,
document.getElementById('root')
);
reportWebVitals();
