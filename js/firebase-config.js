// public/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCY6pOjAep7mW1s-pP6vt1qvLlZ0mZFW7w",
  authDomain: "career-guidance-c7393.firebaseapp.com",
  projectId: "career-guidance-c7393",
  storageBucket: "career-guidance-c7393.firebasestorage.app",
  messagingSenderId: "173156889827",
  appId: "1:173156889827:web:d855978e362171b2bfc1d6",
  measurementId: "G-KDTSHFJV2P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
