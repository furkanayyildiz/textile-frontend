import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//page imports
import classes from "./SignIn.module.css";
import { signIn } from "../../api/index";
const theme = createTheme();

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  //const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setFormIsValid(username.includes("@") && password.trim().length > 6);
  }, [username, password]);

  const emailChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(username.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    console.log(data);
    axios
      .post("login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.userSet(res.data.user);
        if (res.status === 200) {
          navigate("/home");
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.status + "error kod");
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          className={classes.signInBox}
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#5656564f",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5" color="common.white">
            Sign in
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              className={` ${emailIsValid === false ? classes.invalid : ""}`}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="username"
              autoComplete="username"
              autoFocus
              color="primary"
              style={{ background: "#E6E8EF" }}
              value={username}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <TextField
              className={` ${passwordIsValid === false ? classes.invalid : ""}`}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="primary"
              style={{ background: "#E6E8EF" }}
              value={password}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formIsValid}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  color="#fff"
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" color="#fff" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
