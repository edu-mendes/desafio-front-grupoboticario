import React, { useState } from "react";
import {
    TextField,
    Box,
    Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";


function PurchaseRegister({ submitData }) {


    const [code, setCode] = useState("");
    const [price, setPrice] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const history = useHistory();

    const goToRegister = () => {
        history.push("/register")
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                    submitData({ code, price, purchaseDate });
            }}
            >
                <TextField
                    value={code}
                    // onChange={(ev) => {
                    //     setNome(ev.target.value);
                    // }}
                    name="code"
                    label="Codigo da Compra"
                    id="code"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={price}
                    // onChange={(ev) => {
                    //     setCpf(ev.target.value)
                    // }}
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
                    // onChange={(event) => {
                    //     setEmail(event.target.value);
                    // }}
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