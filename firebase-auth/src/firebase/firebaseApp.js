import firebase from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;