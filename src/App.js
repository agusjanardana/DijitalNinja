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

import Contact from './pages/contact/index';
import Review from './pages/review/index';
import EditPage from './pages/modify/index';

import TokenPage from './pages/tokenpage/index';

import NotFound from './pages/notfound/index';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/freelencer" element={<Freelencer />}></Route>
                        <Route path="/detail/:productId" element={<FreelenceDetail />}></Route>
                        <Route path="/add-freelence" element={<ListingForm />}></Route>
                        <Route path="/thank-page" element={<ThankPage />}></Route>
                        <Route path="/contact/:id" element={<Contact />}></Route>
                        <Route path="/review/:id" element={<Review />}></Route>
                        <Route path="/edit/:id/:token" element={<EditPage />}></Route>
                        <Route path="/token/:id" element={<TokenPage />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
