import React, { useState } from "react";
import {
    Grid,
    TextField,
    Typography,
    Link,
    Container
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ButtonStyled } from "../UI";
import Header from "../Header";


function RegisterPage() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const goToPurchase = () => {
        history.push("/purchase")
    }

    const goToLoginPage = () => {
        history.push("/")
    }

    return (
        <>
            <Header />
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Crie sua conta no Cashback</Typography>
                <form>
                    <TextField
                        value={nome}
                        onChange={(ev) => {
                            setNome(ev.target.value);
                        }}
                        name="nome"
                        label="Nome Completo"
                        id="nome"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        value={cpf}
                        // onChange={(ev) => {
                        //     setCpf(ev.target.value)
                        // }}
                        // onBlur={validarCampos}
                        // name="cpf"
                        // error={!erros.cpf.valido}
                        // helperText={erros.cpf.texto}
                        label="CPF"
                        id="cpf"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        value={email}
                        // onChange={(event) => {
                        //     setEmail(event.target.value);
                        // }}
                        name="email"
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        value={password}
                        // onChange={(ev) => {
                        //     setSenha(ev.target.value);
                        // }}
                        // onBlur={validarCampos}
                        // error={!erros.senha.valido}
                        // helperText={erros.senha.texto}
                        name="senha"
                        id="senha"
                        label="Senha"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />

                    <ButtonStyled type="submit" variant="contained" color="primary" fullWidth onClick={goToPurchase}>
                        Criar Conta
                </ButtonStyled>
                    <Grid container>
                        <Grid item alignContent="space-around">
                            <Link href="#" onClick={goToLoginPage} variant="body2">
                                {"Já tem Conta? Faça login"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}

export default RegisterPage;
