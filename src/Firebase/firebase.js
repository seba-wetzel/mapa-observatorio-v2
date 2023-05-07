import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCO_S0bCM3VkQnEBdTWwjaygqJpZd7kHBc",
  authDomain: "mapa-onpsc.firebaseapp.com",
  projectId: "mapa-onpsc",
  storageBucket: "mapa-onpsc.appspot.com",
  messagingSenderId: "342933695545",
  appId: "1:342933695545:web:e9cbb58771e865062171e8",
  measurementId: "G-N71Y0R44YC",
};

export const firebaseApp = initializeApp(firebaseConfig);
