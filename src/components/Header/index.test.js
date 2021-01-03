import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from ".";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import Header from ".";

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


describe('Componente principal', () => {

    describe('Ao entrar no app', () => {
        it('o nome é exibido no Header', () => {
            render(<Header />)
            expect(screen.getByText('Cashback')).toBeInTheDocument();
        });
    })
});