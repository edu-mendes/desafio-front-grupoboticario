import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Link,
  Container
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ButtonStyled } from "../UI"
import Header from "../Header";


function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goToAccount = () => {
    history.push("/account")
  }

  return (
    <>
      <Header />
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Login</Typography>
        <form >
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
            //     setPassword(ev.target.value);
            // }}
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
          <ButtonStyled type="submit" variant="contained" color="primary" fullWidth onClick={goToAccount}>
            Entrar
            </ButtonStyled>
        </form>
        <Grid container>
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