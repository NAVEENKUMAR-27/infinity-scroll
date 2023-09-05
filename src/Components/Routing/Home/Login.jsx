import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "bootstrap/dist/css/bootstrap.css";
import { FormControl } from "@mui/material";
import { Home_path } from "../Path/RoutingPath";
import { useNavigate } from "react-router-dom";



/*Formik email and password validation*/
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email Id")
        .max(25)
        .required("Please enter your email "),
    password: Yup.string()
        .min(8, "password atleat 8 characters")
        .max(13, "maximum 13 characters")
        .required("Please enter your password"),
});

export const Login = () => {

    /*intial declaring the state*/
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const storedValue = localStorage.getItem('Login');
    //     console.log('storedValue  >>', storedValue)
    //     const isAuthenticated = JSON.parse(storedValue) === 'true';
    //     if (isAuthenticated) {
    //         navigate("/Home")
    //     }
    // }, [])

    /*Password showicon function*/
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = () => {
        localStorage.setItem("Login", JSON.stringify(true));
        navigate(Home_path)
    }


    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 7,
                    borderRadius: 5,
                    backgroundColor: " ",
                    px: 5,
                    py: 4,
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}

                >
                    {({ isSubmitting }) => (
                        <Form noValidate>
                            <Field
                                as={TextField}
                                margin="normal"
                                required
                                sx={{ width: 300, ml: 8 }}
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                inputProps={{ maxLength: 25 }}
                            />

                            <ErrorMessage name="email" sx={{ ml: 6 }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 0 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>


                            <Field name="password">
                                {({ field }) => (
                                    <FormControl variant="outlined" sx={{ mt: 3, ml: 8 }}>
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            {...field}
                                            id="outlined-adornment-password"
                                            sx={{ width: 300, }}
                                            type={showPassword ? "text" : "password"}
                                            required
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                )}
                            </Field>
                            <ErrorMessage name="password" sx={{ ml: 2, }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 0 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>

                            <Button
                                type="submit"
                                sx={{ width: 190, mt: 3, ml: 15 }}
                                variant="contained"
                                disabled={isSubmitting}
                            >
                                Log In
                            </Button>
                            <Grid container>
                                <Grid item xs={6} sx={{ mt: 3 }}>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={6} sx={{ mt: 3 }}>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account?"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};
