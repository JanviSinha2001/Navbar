import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './Navbar.css';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleLogin = () => {
    // Replace with your logic for handling login
    if (email === 'example@example.com' && password === 'password') {
      setLoggedIn(true);
      setLoginError(false);
    } else {
      setLoggedIn(false);
      setLoginError(true);
    }
  };

  const handleSignup = () => {
    if (password === confirmPassword) {
      // Make API call to register user
      // If successful, setSignupSuccess(true);
      // If error, setSignupError(true);
      setSignupSuccess(true);
      setSignupError(false);
    } else {
      setSignupSuccess(false);
      setSignupError(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setAdmin(false);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <ShoppingCart />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>

        {!loggedIn && (
          <>
            <Button color="inherit" component={Link} to="/login">
              Log In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}

        {loggedIn && (
          <>
            <TextField variant="outlined" placeholder="Search" style={{ marginRight: '10px' }} />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>

            {admin && (
              <Button color="inherit" component={Link} to="/add-products">
                Add Products
              </Button>
            )}
          </>
        )}
      </Toolbar>

      {!loggedIn && (
        <div>
          <div>
            {loginError && <p>Login failed. Please check your email and password.</p>}
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <Button color="primary" onClick
            ={handleLogin}>
            Sign In
          </Button>
        </div>
        <div>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
        </div>
      </div>
    )}

    {loggedIn && (
      <div>
        {/* Necessary logic and components for the sign-up page */}
      </div>
    )}

    {signupSuccess && (
      <p>Sign up successful! You can now log in with your credentials.</p>
    )}

    {signupError && (
      <p>Sign up failed. Please make sure all fields are filled correctly.</p>
    )}
  </AppBar>
);
};

export default Navbar;

