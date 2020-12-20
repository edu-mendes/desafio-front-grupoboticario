import React, { useState } from "react";
import {
    TextField,
    Typography,
    Container
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ButtonStyled } from "../UI";
import Header from "../Header";


function PurchaseRegister() {

    const [codigo, setCodigo] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    const history = useHistory();

    const goToRegister = () => {
        history.push("/register")
    }

    return (
        <>
            <Header />
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Adcionar compra</Typography>
                <form>
                    <TextField
                        value={codigo}
                        // onChange={(ev) => {
                        //     setNome(ev.target.value);
                        // }}
                        name="codigo"
                        label="Codigo da Compra"
                        id="codigo"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        value={valor}
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
                        value={data}
                        // onChange={(event) => {
                        //     setEmail(event.target.value);
                        // }}
                        name="data"
                        id="data"
                        label="Data da compra"
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />

                    <ButtonStyled type="submit" variant="contained" color="primary" fullWidth onClick={goToRegister}>
                        Cadastrar Compra
                </ButtonStyled>
                </form>
            </Container>
        </>
    );
}

export default PurchaseRegister;