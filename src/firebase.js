import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAX8ATO4oPZ1-GObaAvaOYWJXsvky_VmIE',
    authDomain: 'dijitalninja-18b3f.firebaseapp.com',
    projectId: 'dijitalninja-18b3f',
    storageBucket: 'dijitalninja-18b3f.appspot.com',
    messagingSenderId: '939329887661',
    appId: '1:939329887661:web:f396dd001f2bb19a1fd524',
    measurementId: 'G-LL9S86J5ZG',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
