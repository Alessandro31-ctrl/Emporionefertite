import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCASY2sunWDXrN3BTqCrbGzRmJULMpJYXw",
    authDomain: "emporionefertite.firebaseapp.com",
    projectId: "emporionefertite",
    storageBucket: "emporionefertite.firebasestorage.app",
    messagingSenderId: "404184039733",
    appId: "1:404184039733:web:0d83e10b16fd28d41e0c7c",
    measurementId: "G-MY1JGN1N00"
  };

  // Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemplo: Ouvir as vendas em tempo real (atualiza no PC e Celular simultaneamente)
onSnapshot(collection(db, "vendas"), (snapshot) => {
  const vendas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  atualizarTabelaVendas(vendas);
  atualizarDashboard(vendas);
});