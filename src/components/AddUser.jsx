import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import DoseService from "../services/doseService";
import { useState } from "react"

const AddDose = () => {
    const [name, setname] = useState("")
    const [valeur, setvaleur] = useState("")
    const ds = new DoseService()
    const isNonMobile = useMediaQuery("(min-width:600px)");

    // const handleFormSubmit = (values) => {
    //     console.log("values are",values);
    // };

    const handleFormSubmit = (values) => {
        console.log("values are",values);
        // const data = { "name": name, "valeur": valeur }
        // console.log("ok",data)
        ds.create(values).then((res) => {
            console.log("ok created")
        })
    }



    return (
        <Box m="20px">
            <Header title="CREATE Dose" subtitle="Create a New dose" />

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
                                label="valeur"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.valeur}
                                name="valeur"
                                error={!!touched.valeur && !!errors.valeur}
                                helperText={touched.valeur && errors.valeur}
                                sx={{ gridColumn: "span 2" }}
                            />
<TextField
                                fullWidth
                                variant="filled"
                                type="file"
                                label="photo"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.photo}
                                name="photo"
                                // error={!!touched.pho && !!errors.valeur}
                                // helperText={touched.valeur && errors.valeur}
                                sx={{ gridColumn: "span 2" }}
                            />

                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Dose
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
valeur: yup.string().required("required"),
photo: yup
      .mixed()
      .required("Required")
      .test("is-valid-type", "Not a valid image type",
    //     value => isValidFileType(value && value.name.toLowerCase(), "image"))
    //   .test("is-valid-size", "Max allowed size is 100KB",
    //     value => value && value.size <= MAX_FILE_SIZE
    )

 
});
const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}
const initialValues = {
    name: "",
    valeur: "0",
    photo:""
    //   email: "",
    //   contact: "",
    //   address1: "",
    //   address2: "",
};

export default AddDose;
