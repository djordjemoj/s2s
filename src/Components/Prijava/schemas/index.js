import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const advancedSchema = yup.object().shape({
  imePrezime: yup
    .string()
    .min(3, "Ime i prezime mora sadržati barem 3 karaktera")
    .required("Required"),

  email: yup.string().email().required("Required"),

  telefon: yup.number().required("Required"),

  fakultet: yup
    .string()
    .oneOf(
      ["fon", "etf", "matf", "raf", "viser", "ict", "drugo"],
      "Invalid Job Type"
    )
    .required("Required"),

  godina: yup
    .string()
    .oneOf(
      ["prva", "druga", "treca", "cetvrta", "peta", "master", "doktorat"],
      "Invalid Job Type"
    )
    .required("Required"),

  newsletter: yup
    .string()
    .oneOf(["daNews", "neNews"], "Invalid Job Type")
    .required("Required"),

  prethodno: yup
    .string()
    .oneOf(["daPrethodno", "nePrethodno"], "Invalid Job Type")
    .required("Required"),

  generalnaMotivacija: yup
    .string()
    .min(3, "Moras napisati bar nesto")
    .required("Required"),

  panel: yup.boolean().oneOf([true, false], ""),

  radionica: yup.boolean().oneOf([true, false], ""),

  pitanjaPanelistima: yup
    .string()
    .min(3, "Moras napisati bar nesto")
    .required("Required"),

  prviIzbor: yup
    .string()
    .oneOf(["java", "python", "react", "figma"], "Invalid Job Type")
    .required("Required"),

  prvaMotivacija: yup
    .string()
    .min(3, "Moras napisati bar nesto")
    .required("Required"),

  drugiIzbor: yup
    .string()
    .oneOf(["java", "python", "react", "figma"], "Invalid Job Type"),

  drugaMotivacija: yup.string(),

  // jobType: yup
  //   .string()
  //   .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
  //   .required("Required"),
  // acceptedTos: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the terms of service"),
});
