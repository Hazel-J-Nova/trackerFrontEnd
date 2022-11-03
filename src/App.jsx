import { useState } from 'react';
import './App.css';
import Root from './pages/Root';
import { Route, Routes } from 'react-router-dom';
import ToDos from './pages/ToDos';
import Nav from './components/Nav';
import Timers from './pages/Timers';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Root />} />

        <Route path='/todos/:userId' element={<ToDos />} />
        <Route path='timer/:userId' element={<Timers />} />
      </Routes>
    </div>
  );
}

export default App;
