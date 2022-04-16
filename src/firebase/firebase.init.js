// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVTj243XN7ZQiyeRkkG5MTnDTHksGCj-Y",
    authDomain: "independent-service-prov-f2cb2.firebaseapp.com",
    projectId: "independent-service-prov-f2cb2",
    storageBucket: "independent-service-prov-f2cb2.appspot.com",
    messagingSenderId: "141105900110",
    appId: "1:141105900110:web:c62680a0acb4698c13b11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;