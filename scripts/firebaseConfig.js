// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVnEL6ZohDdFGIGIAMJHV-35G58FFC4Q0",
  authDomain: "lacabraburgue.firebaseapp.com",
  databaseURL: "https://lacabraburgue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lacabraburgue",
  storageBucket: "lacabraburgue.firebasestorage.app",
  messagingSenderId: "123254694860",
  appId: "1:123254694860:web:880d05c81c600af376f369"
};

// Inicializar Firebase y exportar la instancia de base de datos
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
