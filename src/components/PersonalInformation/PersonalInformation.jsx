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
const USERS_URL = `${API_URL}/users`;


function PersonalInformation({ submitData }) {

    const [name, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nickname, setNickname] = useState("");

    const user = firebase.auth().currentUser;


    const createUser = async () => {

        const userInformation = {
            name,
            cpf,
            nickname,
            email: user.email,
            uid: user.uid
        }
        try{
            await axios.post(USERS_URL, userInformation)
            console.log("Okay!!!")
        }catch (e){
            window.alert("Error: Unable to register user.")
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                    submitData({ name, cpf, nickname });
                    createUser();
            }}
            >
                <TextField
                    value={name}
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    name="name"
                    label="Nome Completo"
                    id="name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value)
                    }}
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
                    value={nickname}
                    onChange={(ev) => {
                        setNickname(ev.target.value);
                    }}
                    name="nickname"
                    label="Como você deseja ser chamado"
                    id="nickname"
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
    )
}



export default PersonalInformation;