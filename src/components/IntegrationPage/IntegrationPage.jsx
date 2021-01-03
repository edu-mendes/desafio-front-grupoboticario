import React, { useState, useEffect } from "react"
import { Step, StepLabel, Stepper, Container } from "@material-ui/core";
import PersonalInformation from "../PersonalInformation";
import PurchaseRegister from "../PurchaseRegister";
import PurchaseListing from "../PurchaseListing";
import Header from "../Header";
import { makeStyles } from '@material-ui/core/styles';
import InitialStepper from "../InitialStepper";



const useStyles = makeStyles((theme) => ({
    root: {
        flexDirection: "column",
    }
}))

function IntegrationPage({ executeNewData }) {

    const classes = useStyles();
    const [currentStage, setCurrentStage] = useState(0);
    const [infoData, setInfoData] = useState({});

    const pages = [
        <InitialStepper handleSkip={handleSkip} nextStage={nextStage}/>,
        <PersonalInformation submitData={dataPages} />,
        <PurchaseRegister submitData={dataPages} />,
        <PurchaseListing submitData={dataPages} handleBack={handleBack} />
    ];

    function onSubmitData(data) {
        executeNewData = { ...data }
    }

    useEffect(() => {
        if (currentStage === pages.length - 1) {
            onSubmitData(infoData)
        }
    });

    function dataPages(data) {
        setInfoData({ ...infoData, ...data });
        nextStage();
    }

    function nextStage() {
        setCurrentStage(currentStage + 1);
    }

    function handleBack() {
        setCurrentStage((currentStage) => currentStage - 1);
    };

    function handleSkip() {
        setCurrentStage((currentStage) => currentStage + 3);
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Stepper className={classes.root} activeStep={currentStage}>
                    <Step><StepLabel>Tela Inicial</StepLabel></Step>
                    <Step><StepLabel>Dados Pessoais</StepLabel></Step>
                    <Step><StepLabel>Dados da Compra</StepLabel></Step>
                    <Step><StepLabel>Lista de Compras</StepLabel></Step>
                    {pages[currentStage]}
                </Stepper>
            </Container>
        </>
    )

}


export default IntegrationPage;