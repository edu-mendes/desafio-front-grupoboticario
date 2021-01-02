import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '6vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = () => {

  const classes = useStyles();
  const [authorization, setAuthorization] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();


  const goToLoginPage = () => {
    history.push("/")
  }


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      setAuthorization(true)
    } else {
      console.log('not logged in');
    }
  })

  const user = firebase.auth().currentUser;


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleChange = (event) => {
    firebase.auth().signOut()
    setAuthorization(event.target.checked);
    goToLoginPage();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cashback
          </Typography>
          {authorization && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Não é o {user.email}, clique em sair</MenuItem>
                <MenuItem onClick={handleClose}><PowerSettingsNewIcon /><span onClick={handleChange}>&nbsp;Sair</span></MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
