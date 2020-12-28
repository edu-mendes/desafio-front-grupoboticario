import React, { useState } from "react";
import {
    Grid,
    TextField,
    Typography,
    Link,
    Box,
    Button,
    Container
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

function RegisterPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const goToLoginPage = () => {
        history.push("/")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
        promise.catch(error => console.log(error.messege))
    }

    return (
        <>
            <Header />
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Crie sua conta no Cashback</Typography>
                <form onSubmit={handleSubmit}>

                    <TextField
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
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
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        // onBlur={validarCampos}
                        // error={!erros.senha.valido}
                        // helperText={erros.senha.texto}
                        name="password"
                        id="password"
                        label="Senha"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Box mt={2} mb={2}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Criar Conta
                    </Button>
                    </Box>

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
