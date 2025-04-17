// firebase-compras.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVnEL6ZohDdFGIGIAMJHV-35G58FFC4Q0",
  authDomain: "lacabraburgue.firebaseapp.com",
  databaseURL: "https://lacabraburgue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lacabraburgue",
  storageBucket: "lacabraburgue.appspot.com",
  messagingSenderId: "123254694860",
  appId: "1:123254694860:web:880d05c81c600af376f369"
};

// Inicializa Firebase y la DB
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Función global
window.guardarCompraEnFirebase = (nombre, telefono, carrito) => {
  const comprasRef = ref(db, 'compras');
  const nuevaCompra = push(comprasRef);
  return set(nuevaCompra, {
    nombre,
    telefono,
    carrito,
    fecha: new Date().toISOString()
  });
};
