import React from "react";
import {
    Box,
    Button
} from "@material-ui/core";

function InitialStepper({ nextStage, handleSkip}) {


    return (
        <>
            <Box mt={2} mb={2}>
                <Button onClick={nextStage} variant="contained" color="primary" fullWidth>
                    Quero Cadastrar
                </Button>
            </Box>
            <Box mt={2} mb={2}>
                <Button onClick={handleSkip} variant="contained" color="primary" fullWidth>
                    Já Tenho Cadastro
                </Button>
            </Box>
        </>
    )

}

export default InitialStepper;