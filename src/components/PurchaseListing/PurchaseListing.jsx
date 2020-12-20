import React from "react";
import { 
    Typography,
    Container
} from "@material-ui/core";
import Header from "../Header";


function PurchaseListing() {

    return (
        <>
            <Header />
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">Listagem de compras</Typography>
            </Container>

        </>
    )
}

export default PurchaseListing;