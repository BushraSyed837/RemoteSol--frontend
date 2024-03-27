import React from "react";
import * as yup from "yup";
import { makeStyles } from "@mui/styles";
import { createTheme, } from "@mui/material";
export const validationSchema = yup.object({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    picture: yup.string().url("Invalid URL").required("Picture URL is required"),
    gender: yup.string().required("Gender is required"),
    dob: yup.string().required("Date of Birth is required"),
    profession: yup.string().required("Profession is required"),
    shoesize: yup.number().required("Shoe Size is required"),
    haircolor: yup.number().required("Hair Color is required"),
    hairlength: yup.number().required("Hair Length is required"),
    waistSizeCm: yup.number().required("Waist Size in cm is required"),
    heightCm: yup.number().required("Height in cm is required"),
    weight: yup.number().required("Weight is required"),
});

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
    },
    spacing: 4,
});

export const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: theme.spacing(4),
        marginTop: theme.spacing(7),
    },
    logo: {
        width: "100px",
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    select: {
        marginTop: theme.spacing(2),
    },
    formContainers: {
        padding: theme.spacing(2),
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        margin: theme.spacing(2),
        justify: "center"
    },
    searchButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

export const initialValues = {
    firstName: '',
    lastName: '',
    profession: '',
    gender: '',
    dob: '',
    shoeSize: null,
    hairColor: null,
    hairLength: null,
    waistSize: null,
    height: null,
    weight: null,
}

export const profession = [
    {
        value: "comedian",
        label: "Comedian",
    },
    {
        value: "actor",
        label: "Actor",
    },
    {
        value: "actress",
        label: "Actress",
    },
    {
        value: "model",
        label: "Model",
    },
];

export const handleSearch = (allModels, searchCriteria,) => {
    console.log(searchCriteria, 'searchCriteria')
    console.log(allModels, 'allModels')
    const filteredModels = allModels.filter(model => {
        const firstNameMatch = searchCriteria.firstName ?
            model.firstName.toLowerCase().includes(searchCriteria.firstName.toLowerCase()) :
            true;
        const lastNameMatch = searchCriteria.lastName ?
            model.lastName.toLowerCase().includes(searchCriteria.lastName.toLowerCase()) :
            true;
        const professionMatch =
            searchCriteria.profession === "" ||
            model.profession.toLowerCase().includes(searchCriteria.profession.toLowerCase());
        const genderMatch =
            searchCriteria.gender === "" || model.gender === searchCriteria.gender;
        const dobMatch =
            searchCriteria.dob === "" || model.dob === searchCriteria.dob;
        const shoeSizeMatch =
            searchCriteria.shoeSize === null ||
            model.shoesize == searchCriteria.shoeSize;
        const hairColorMatch =
            searchCriteria.hairColor === null ||
            model.haircolor == searchCriteria.hairColor;
        const hairLengthMatch =
            searchCriteria.hairLength === null ||
            model.hairlength === searchCriteria.hairLength;
        const waistSizeMatch =
            searchCriteria.waistSize === null ||
            model.waistsize == (searchCriteria.waistSize);
        const heightMatch =
            searchCriteria.height === null ||
            model.height == (searchCriteria.height);
        const weightMatch =
            searchCriteria.weight === null ||
            model.weight == (searchCriteria.weight);

        return (
            firstNameMatch &&
            lastNameMatch &&
            professionMatch &&
            genderMatch &&
            dobMatch &&
            shoeSizeMatch &&
            hairColorMatch &&
            hairLengthMatch &&
            waistSizeMatch &&
            heightMatch &&
            weightMatch
        );
    });
    return filteredModels
};


