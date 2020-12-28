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

  const goToPurchase = () => {
    history.push("/purchase")
}

  const handleSubmit = (event) => {
    event.preventDefault();
      const promise = firebase.auth().signInWithEmailAndPassword(email, password);
      promise.catch (error => console.log(error.messege)) 
  }

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      // goToPurchase();
    }else{
      console.log('not logged in');
    }
  })

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
            // onBlur={validarCampos}
            // error={!erros.password.valido}
            // helperText={erros.password.texto}
            name="password"
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Box  mt={2} mb={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
          </Box>
          

        </form>
        <Grid container margin="normal">
          <Grid item alignContent="space-around">
            <Link href="#" onClick={goToAccount} variant="body2">
              {"Ainda não tem o Cashback OBoticario? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default LoginPage;