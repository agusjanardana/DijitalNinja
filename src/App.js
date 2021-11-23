import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index';
import NavbarTwos from './components/NavbarTwo/index';
import Freelencer from './pages/listFreelence/Index';
import FreelenceDetail from './pages/pdp/index';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/freelencer" element={<Freelencer />}></Route>
                <Route path="/detail" element={<FreelenceDetail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
