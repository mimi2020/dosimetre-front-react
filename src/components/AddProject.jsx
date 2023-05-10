import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import ProjectService from "../../src/service/projectService"
import { useNavigate } from "react-router-dom";

const AddProject = () =>{
        const isNonMobile = useMediaQuery("(min-width:600px)");
      const ps= new ProjectService()
      const navigate=useNavigate()

        const handleFormSubmit = (values) => {
          console.log(values);
          ps.create(values).then((res)=>{
            console.log("ok created")
          })
          navigate(-1)
        };
      
        return (
          <Box m="20px">
            <Header title="CREATE PROJECT" subtitle="Create a New Project " />
      
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
                      label="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Descreption"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.descreption}
                      name="descreption"
                      error={!!touched.descreption && !!errors.descreption}
                      helperText={touched.descreption && errors.descreption}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Deadline"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.deadline}
                      name="deadline"
                      error={!!touched.deadline && !!errors.deadline}
                      helperText={touched.deadline && errors.deadline}
                      sx={{ gridColumn: "span 4" }}
                    />
                    
                    
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      Create New Project
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
  name: yup.string().required("required"),
  descreption: yup.string().required("required"),
  deadline: yup.string().required("required"),
 
});
const initialValues = {
  name: "",
  descreption: "",
  deadline: "",
 
};
    
export default AddProject