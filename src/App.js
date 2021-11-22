import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Homepage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
