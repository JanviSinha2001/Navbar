import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
  const userLoggedIn = false; // Replace with your logic to check if user is logged in
  const userIsAdmin = false; // Replace with your logic to check if user is an admin

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6">upGrad Eshop</Typography>

        {!userLoggedIn && (
          <>
            <Button color="inherit" component={Link} to="/login">
              Log In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}

        {userLoggedIn && (
          <>
            <input type="text" placeholder="Search" />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/logout">
              Log Out
            </Button>

            {userIsAdmin && (
              <Button color="inherit" component={Link} to="/add-products">
                Add Products
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

