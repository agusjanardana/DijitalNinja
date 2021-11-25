import logo from './logo.svg';
import './App.css';
import '@fontsource/poppins';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Homepage from './pages/homepage/index';
import NavbarTwos from './components/NavbarTwo/index';
import Freelencer from './pages/listFreelence/Index';
import FreelenceDetail from './pages/pdp/index';
import ListingForm from './pages/listingForm/index';
import ThankPage from './pages/thankspage/index';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/freelencer" element={<Freelencer />}></Route>
                        <Route path="/detail" element={<FreelenceDetail />}></Route>
                        <Route path="/add-freelence" element={<ListingForm />}></Route>
                        <Route path="/thank-page" element={<ThankPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
