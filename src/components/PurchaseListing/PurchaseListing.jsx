import React from "react";
import {
    Typography,
    Container,
    Grid
} from "@material-ui/core";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';


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
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));


function PurchaseListing({ submitData }) {

    const classes = useStyles();

    return (
        <Grid alignContent="space-between" justify="space-between">
            <div className={classes.root}>
                <Avatar>H</Avatar>
                <Avatar className={classes.orange}>N</Avatar>
                <Avatar className={classes.purple}>OP</Avatar>
                <Typography component="subtitle1">Email</Typography>
            </div>
            <div className={classes.card}>
                <Paper elevation={3} />
            </div>
        </Grid>
    )
}

export default PurchaseListing;