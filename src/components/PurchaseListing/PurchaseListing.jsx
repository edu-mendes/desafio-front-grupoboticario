import React, { useEffect, useState } from "react";
import {
    Typography,
    Grid,
    Paper,
    Link
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const API_URL = 'http://localhost:3001';
const USERS_URL = `${API_URL}/users`;
const PURCHASE_URL = `${API_URL}/purchase`;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    card: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        marginTop: '6vh',
        '& > *': {

            width: theme.spacing(33),

        },
    },
    container: {
        marginTop: '6vh',
    },
    seeMore: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        marginTop: '3vh',
        '& > *': {
            width: theme.spacing(18),
        },
    },
}));


function PurchaseListing({ handleBack }) {

    const [fetchUser, setFetchUser] = useState([]);
    const [fetchPurchase, setFetchPurchase] = useState([]);

    const classes = useStyles();

    const user = firebase.auth().currentUser;

    const loadDataUsers = async () => {
        const response = await fetch(`${USERS_URL}?uid=${user.uid}`)
        const data = await response.json()
        setFetchUser(data)
    }

    useEffect(() => {
        loadDataUsers();
    }, []);

    const loadDataPurchase = async () => {
        const response = await fetch(`${PURCHASE_URL}?uidPurchase=${user.uid}`)
        const data = await response.json()
        setFetchPurchase(data)
    }

    useEffect(() => {
        loadDataPurchase();
    }, []);

    return (
        <Grid
            className={classes.container}
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={12} md={8}>
                {fetchUser.map(usr => (

                    <Paper variant="outlined" className={classes.card}>
                        <div className={classes.root}>
                            <Avatar className={classes.purple}>{usr.nickname.slice(0, 1)}</Avatar>
                        </div>
                        <List>
                            <ListItem>
                                <ListItemText primary="Nome" secondary={usr.name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="CPF" secondary={usr.cpf} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={usr.email} />
                            </ListItem>
                        </List>
                    </Paper>
                ))
                }

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Compras Cadastradas</Typography>
                        <Table size="medium">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Código</strong></TableCell>
                                    <TableCell><strong>Valor</strong></TableCell>
                                    <TableCell padding="checkbox"><strong>Data&nbsp;&nbsp;</strong></TableCell>
                                    <TableCell><strong>% de Cashback</strong></TableCell>
                                    <TableCell><strong>Valor do Cashback</strong></TableCell>
                                    <TableCell align="right"><strong>Status</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fetchPurchase.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.code}</TableCell>
                                        <TableCell>{Number(row.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TableCell>
                                        <TableCell align="center">{row.purchaseDate}</TableCell>
                                        <TableCell>{Math.floor(row.percentageCashback * 100)}%</TableCell>
                                        <TableCell>{(Number(row.price) * row.percentageCashback).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TableCell>
                                        <TableCell align="center">{row.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className={classes.seeMore}>
                            <Link color="primary" href="#" onClick={handleBack}>
                                Cadastrar Outra Compra
                        </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PurchaseListing;