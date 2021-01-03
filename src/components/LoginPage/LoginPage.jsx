import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Link,
  Container,
  Box,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";


function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goToAccount = () => {
    history.push("/account")
  }

  const goToIntegration = () => {
    history.push("/integration")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return goToIntegration()
    } catch (error) {
      window.alert(error.message)
    }
  }

 
  return (
    <>
      <Header />
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Login</Typography>
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
            <Button type="submit" variant="contained" color="primary" fullWidth >
              Entrar
          </Button>
          </Box>

        </form>
        <Grid  margin="normal">
          <Box>
            <Typography component="span" variant="h6">Ainda não tem o Cashback OBoticario? </Typography>
            <Link href="#" onClick={goToAccount} variant="h6">
              {"Cadastre-se"}
            </Link>
          </Box>
        </Grid>
      </Container>
    </>
  )
}

export default LoginPage;