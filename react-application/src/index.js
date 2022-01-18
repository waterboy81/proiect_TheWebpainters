import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCFcPuapxu5MuTpdTWj1ksl5FAJ2FJzNOo",
  authDomain: "notes-app-tw.firebaseapp.com",
  projectId: "notes-app-tw",
  storageBucket: "notes-app-tw.appspot.com",
  messagingSenderId: "639433148148",
  appId: "1:639433148148:web:d5e05aad32d6cb7e5fc0a1"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



