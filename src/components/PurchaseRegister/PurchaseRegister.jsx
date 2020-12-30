import React, { useState } from "react";
import {
    TextField,
    Box,
    Button
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import axios from "axios";


const API_URL = 'http://localhost:3001';
const PURCHASE_URL = `${API_URL}/purchase`;



function PurchaseRegister({ submitData }) {


    const [code, setCode] = useState("");
    const [price, setPrice] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    
    // const history = useHistory();

    // const goToRegister = () => {
    //     history.push("/register")
    // }

    const registerNewPurchase = async () => {

        const PurchaseInformation = {
            code,
            price,
            purchaseDate
        }
        try{
            await axios.post(PURCHASE_URL, PurchaseInformation)
            console.log("Okay!!!")
        }catch (e){
            window.alert("Error: Unable to register user.")
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                    submitData({ code, price, purchaseDate });
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
                    fullWidth
                />

                <TextField
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                    // onBlur={validarCampos}
                    // name="cpf"
                    // error={!erros.cpf.valido}
                    // helperText={erros.cpf.texto}
                    label="Valor da Compra"
                    id="cpf"
                    variant="outlined"
                    margin="normal"
                    fullWidth
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
                    fullWidth
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