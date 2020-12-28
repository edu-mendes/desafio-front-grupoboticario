import React, { useState } from "react";
import {
    TextField,
    Box,
    Button
} from "@material-ui/core";


function PersonalInformation({ submitData }) {

    const [name, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nickname, setNickname] = useState("");

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                    submitData({ name, cpf, nickname });
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