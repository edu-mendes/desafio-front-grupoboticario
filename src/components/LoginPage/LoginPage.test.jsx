import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from ".";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

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


describe('Componente LoginPage', () => {

    describe('Ao entrar no app', () => {
        it('o nome é exibido na pagina', () => {
            render(<LoginPage />)
            expect(screen.getByText('Login')).toBeInTheDocument();
        });
        it('o frase que é exibido na proxímo do botão e ao lado do link', () => {
            render(<LoginPage />)
            expect(screen.getByText('Ainda não tem o Cashback OBoticario?')).toBeInTheDocument();
        });

    })
});
