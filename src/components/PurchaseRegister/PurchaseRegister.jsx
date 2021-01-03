import React, { useState } from "react";
import {
    TextField,
    Box,
    Button
} from "@material-ui/core";
import axios from "axios";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const API_URL = 'http://localhost:3001';
const PURCHASE_URL = `${API_URL}/purchase`;


function PurchaseRegister({ submitData }) {


    const [code, setCode] = useState("");
    const [price, setPrice] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    
    
    const user = firebase.auth().currentUser;
    
    let percentage 

    const calculatePercentage = () =>{
        if(price < 100){
            percentage = 0.03
        }if(price >= 100 & price < 500) {
            percentage = 0.05
        }if(price >= 500 ){
            percentage = 0.07
        }
    }

    const things = ['Em Validação', 'Reprovado', 'Aprovado'];
    const thing = things[Math.floor(Math.random()*things.length)];

    const registerNewPurchase = async () => {

        const PurchaseInformation = {
            code,
            price,
            purchaseDate,
            uidPurchase: user.uid,
            percentageCashback: percentage,
            status: thing,
        }
        try{
            await axios.post(PURCHASE_URL, PurchaseInformation)
        }catch (e){
            window.alert("Error: Unable to register user.")
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                    submitData({ code, price, purchaseDate });
                    calculatePercentage()
                    registerNewPurchase();
            }}
            >
                <TextField
                    value={code}
                    onChange={(event) => {
                        setCode(event.target.value);
                    }}
                    name="code"
                    label="Codigo da Compra"
                    id="code"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    fullWidth
                    required
                />

                <TextField
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                    label="Valor da Compra"
                    id="price"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    fullWidth
                    required
                />

                <TextField
                    value={purchaseDate}
                    onChange={(event) => {
                        setPurchaseDate(event.target.value);
                    }}
                    name="purchaseDate"
                    id="purchaseDate"
                    label="Data da compra"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    pattern="^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$"
                    fullWidth
                    required
                />
                <Box mt={2} mb={2}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Cadastrar Compra
                    </Button>
                </Box>

            </form>
        </>
    );
}

export default PurchaseRegister;