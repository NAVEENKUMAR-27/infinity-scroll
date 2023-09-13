import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVGZceM0YjQrAthEEBYIlpWf-mR-UHfls",
    authDomain: "e-commerce-da8f8.firebaseapp.com",
    projectId: "e-commerce-da8f8",
    storageBucket: "e-commerce-da8f8.appspot.com",
    messagingSenderId: "694280202269",
    appId: "1:694280202269:web:266f4e659f98d15eff7ef4",
    measurementId: "G-0WV3T67YBN"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig)
export const auth=app.auth();

export default app;