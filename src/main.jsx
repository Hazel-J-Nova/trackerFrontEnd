import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
