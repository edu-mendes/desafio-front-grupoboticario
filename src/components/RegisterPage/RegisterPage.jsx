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

    const goToIntegration = () => {
        history.push("/integration")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            return goToIntegration()
        } catch (error) {
            window.alert(error.messege)
        }
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

                    <Grid margin="normal">
                        <Box>
                            <Typography component="span" variant="h6">Já tem Conta? </Typography>
                            <Link href="#" onClick={goToLoginPage} variant="h6">
                                {" Faça login"}
                            </Link>
                        </Box>
                    </Grid>
                </form>
            </Container>
        </>
    );
}

export default RegisterPage;
