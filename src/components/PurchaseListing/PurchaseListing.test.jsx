import React from "react";
import { render, screen } from "@testing-library/react";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import PurchaseListing from ".";

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

describe('Componente PurchaseListing', () => {

    describe('Ao entrar no app', () => {
        it('o nome é exibido na pagina', () => {
            render(<PurchaseListing />)
            expect(screen.getByText('Código')).toBeInTheDocument();
            expect(screen.getByText('Valor')).toBeInTheDocument();
            expect(screen.getByText('Data')).toBeInTheDocument();
            expect(screen.getByText('% de Cashback')).toBeInTheDocument();
            expect(screen.getByText('Valor do Cashback')).toBeInTheDocument();
            expect(screen.getByText('Status')).toBeInTheDocument();
            expect(screen.getByText('Compras Cadastradas')).toBeInTheDocument();
            expect(screen.getByText('Cadastrar Outra Compra')).toBeInTheDocument();
        });
    })
})