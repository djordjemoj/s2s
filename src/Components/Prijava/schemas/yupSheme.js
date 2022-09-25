import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  emailPriv: yup
    .string()
    .email("Molim Vas unesite ispravnu email adresu")
    .required("Obavezno"),
  age: yup.number().positive().integer().required("Obavezno"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required(""),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Obavezno"),
});

export const advancedSchema = yup.object().shape({
  imePrezime: yup
    .string()
    .min(3, "Ime i prezime mora sadržati barem 3 karaktera")
    .required("Obavezno"),

  emailPriv: yup.string().email().required("Obavezno"),

  brojTelefona: yup.number().required(true ? "Obavezno" : ""),
  // ovk kao gore moze da se bira
  fakultet: yup
    .string()
    .oneOf(
      ["fon", "etf", "matf", "raf", "viser", "ict", "drugo"],
      "Invalid Job Type"
    )
    .required("Obavezno"),

  godinaStudija: yup
    .string()
    .oneOf(
      ["prva", "druga", "treca", "cetvrta", "peta", "master"],
      "Invalid Job Type"
    )
    .required("Obavezno"),

  newsletter: yup.boolean().oneOf([true, false], ""),

  daLiJeRanijeUcestvovao: yup
    .boolean()
    .oneOf([true, false], "")
    .required("Obavezno"),

  generalnaMotivacija: yup
    .string()
    .min(3, "Moras napisati bar nesto")
    .required("Obavezno"),

  panelDaLi: yup.boolean().oneOf([true, false], ""),

  radionicaDaLi: yup.boolean().oneOf([true, false], ""),

  pitanjaPanelistima: yup
    .string()
    .when("panel", {
      is: true,
      then: yup
        .string()
        .min(3, "Morate napisati bar nešto")
        .required("Obavezno"),
    })
    .required(""),
  //ovo je logika za to da li je nesto obavezno, takodje mozemo da stavimo za laptop

  prvaRadionica: yup
    .string()
    .oneOf(
      [
        "java",
        "python",
        "react",
        "figma",
        "dotNet",
        "ae",
        "node",
        "seo",
        "unity",
        "agile",
      ],
      "Niste izabrali radionicu"
    )
    .required("Obavezno"),

  prvaMotivacija: yup
    .string()
    .min(3, "Morate napisati bar nešto")
    .required("Obavezno"),

  drugaRadionica: yup
    .string()
    .oneOf(
      [
        "java",
        "python",
        "react",
        "figma",
        "dotNet",
        "ae",
        "node",
        "seo",
        "unity",
        "agile",
      ],
      "Niste Izabrali radionicu"
    )
    .required("Obavezno"),

  drugaMotivacija: yup.string(),

  // jobType: yup
  //   .string()
  //   .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
  //   .required("Obavezno"),
  // acceptedTos: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the terms of service"),
});
