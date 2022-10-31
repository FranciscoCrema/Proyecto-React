import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsvtYUQPv3r-k4_Vxm_yRcavXHi0v8PQo",
  authDomain: "proyecto-react-51e53.firebaseapp.com",
  projectId: "proyecto-react-51e53",
  storageBucket: "proyecto-react-51e53.appspot.com",
  messagingSenderId: "431853299874",
  appId: "1:431853299874:web:5121f7940799ede19a0ffb",
};

const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app);
