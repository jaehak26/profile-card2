import React  from 'react';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';

export default function App() {


  return (
    <div>     
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
		</Routes>
		</BrowserRouter>
    </div>
  );
}
