import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';

import React from 'react'
import useStyles from "./styles";
import { ShoppingCart } from '@material-ui/icons';
import {
    Link
  } from "react-router-dom";
export default function Navbar({cart}) {

    const classes=useStyles();

    return (
        
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/">
                        <Typography variant="h6" className={classes.title}>
                            <img src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png" alt="" height="25px" className={classes.image} />
                            
                        </Typography>
                    </Link>
                    
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <Link to="/cart">
                            <IconButton  aria-label="show cart items" color= "inherit">
                                <Badge badgeContent={cart.total_items} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Link>
                        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
