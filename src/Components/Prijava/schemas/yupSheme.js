import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  emailPriv: yup.string().email("Please enter a valid email").required("Required"),
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

  emailPriv: yup.string().email().required("Required"),

  brojTelefona: yup.number().required(true ? "Required" : ""),
  // ovk kao gore moze da se bira
  fakultet: yup
    .string()
    .oneOf(
      ["fon", "etf", "matf", "raf", "viser", "ict", "drugo"],
      "Invalid Job Type"
    )
    .required("Required"),

    godinaStudija: yup
    .string()
    .oneOf(
      ["prva", "druga", "treca", "cetvrta", "peta", "master", "doktorat"],
      "Invalid Job Type"
    )
    .required("Required"),

    newsletter: yup.boolean().oneOf([true, false], ""),

    daLiJeRanijeUcestvovao: yup
    .boolean().oneOf([true, false], "")
    .required("Required"),

  generalnaMotivacija: yup
    .string()
    .min(3, "Moras napisati bar nesto")
    .required("Required"),

    panelDaLi: yup.boolean().oneOf([true, false], ""),

    radionicaDaLi: yup.boolean().oneOf([true, false], ""),

  pitanjaPanelistima: yup
    .string()
    .when("panel", {
      is: true,
      then: yup
        .string()
        .min(3, "Moras napisati bar nesto")
        .required("Obavezno polje"),
    })
    .required(""),
    //ovo je logika za to da li je nesto obavezno, takodje mozemo da stavimo za laptop

    prvaRadionica: yup
    .string()
    .oneOf(["java", "python", "react", "figma","dotNet","ae","node","seo","unity","agile"], "Niste Izabrali radionicu")
    .required("Required"),

  prvaMotivacija: yup
    .string()
    .min(3, "Morate napisati bar nesto")
    .required("Required"),

    drugaRadionica: yup
    .string()
    .oneOf(["java", "python", "react", "figma","dotNet","ae","node","seo","unity","agile"], "Niste Izabrali radionicu")
    .required("Required"),

  drugaMotivacija: yup.string(),

  // jobType: yup
  //   .string()
  //   .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
  //   .required("Required"),
  // acceptedTos: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the terms of service"),
});
