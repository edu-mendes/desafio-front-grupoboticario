import React from "react";
import { render, screen } from "@testing-library/react";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import PurchaseRegister from ".";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1mtFwH202nhEelfZx9pvcTGlkssh8Z4k",
  authDomain: "desafio-app-d347c.firebaseapp.com",
  projectId: "desafio-app-d347c",
  storageBucket: "desafio-app-d347c.appspot.com",
  messagingSenderId: "99737154285",
  appId: "1:99737154285:web:ab3cc557f6407eec1152e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


describe('Componente PurchaseRegister', () => {

    describe('Ao entrar no app', () => {
        it('o nome é exibido na pagina', () => {
            render(<PurchaseRegister />)
            expect(screen.getByText('Codigo da Compra')).toBeInTheDocument();
            expect(screen.getByText('Valor da Compra')).toBeInTheDocument();
            expect(screen.getByText('Data da compra')).toBeInTheDocument();
            expect(screen.getByText('Cadastrar Compra')).toBeInTheDocument();
        });
    })
});
