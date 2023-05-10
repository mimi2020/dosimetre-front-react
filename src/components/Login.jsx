import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import UserService from "../services/userservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const ds = new UserService()
    const navigate = useNavigate()

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log("values IS", values)
        ds.Login(values).then((res) => {
            console.log(res.data);
            if (res.data.token) {
                navigate("/ADDdose")
            }




        })
    };


    return (
        <Box m="20px">
            <Header title="Login" subtitle="" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <br></br>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <br></br>



                        </Box>
                        <br></br>
                        <Box display="flex" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">

                                Login
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({

    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),


});
const initialValues = {
    email: "",
    password: "",
};

export default Login;
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import UserService from "../services/userservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const ds = new UserService()
    const navigate = useNavigate()

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log("values IS", values)
        ds.Login(values).then((res) => {
            console.log(res.data);
            if (res.data.token) {
                navigate("/ADDdose")
            }




        })
    };


    return (
        <Box m="20px">
            <Header title="Login" subtitle="" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <br></br>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <br></br>



                        </Box>
                        <br></br>
                        <Box display="flex" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">

                                Login
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({

    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),


});
const initialValues = {
    email: "",
    password: "",
};

export default Login;
