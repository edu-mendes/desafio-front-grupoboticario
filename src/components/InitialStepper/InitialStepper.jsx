import React from "react";
import {
    Box,
    Button,
    Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '6vh',
    },
})
)

function InitialStepper({ nextStage, handleSkip }) {

    const classes = useStyles();

    return (
        <Grid className={classes.container}>
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
        </Grid>
    )

}

export default InitialStepper;