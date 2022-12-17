import React  from 'react';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './MainPage';
import Container from '@mui/material/Container';

export default function App() {


  return (
    <Container  maxWidth="xs" >     
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainPage />}></Route>
		</Routes>
		</BrowserRouter>
    </Container>
  );
}
