import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(reducers);
//store를 외부에서 사용할 수 있도록 설정
export {store};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
