import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './app';

import data from './db.json';

export const DataContext = createContext([]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <DataContext.Provider value={data.users}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext.Provider>
  </Provider>,
);
