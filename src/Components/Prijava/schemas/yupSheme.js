import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// export const basicSchema = yup.object().shape({
//   emailPriv: yup
//     .string()
//     .email("Molim Vas unesite ispravnu email adresu")
//     .required("*Obavezno polje"),
//   age: yup.number().positive().integer().required("*Obavezno polje"),
//   password: yup
//     .string()
//     .min(5)
//     .matches(passwordRules, { message: "Please create a stronger password" })
//     .required(""),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("*Obavezno polje"),
// });

export const advancedSchema = yup.object().shape({
  imePrezime: yup
    .string()
    .min(3, "Ime i prezime mora sadržati barem 3 karaktera")
    .required("*Obavezno polje"),

  emailPriv: yup
    .string()
    .email("Unesite ispravnu mejl adresu")
    .required("*Obavezno polje"),

  brojTelefona: yup
    .string()
    .matches(phoneRegExp, "Broj koji ste uneli nije validan")
    .required("*Obavezno polje"),
  // ovk kao gore moze da se bira
  //jako zanimljivo
  fakultet: yup
    .string()
    .oneOf(
      ["fon", "etf", "matf", "raf", "viser", "ict", "drugo"],
      "Invalid Job Type"
    )
    .required("*Obavezno polje"),

  godinaStudija: yup
    .string()
    .oneOf(
      ["prva", "druga", "treca", "cetvrta", "peta", "master"],
      "Invalid Job Type"
    )
    .required("*Obavezno polje"),

  newsletter: yup.boolean().oneOf([true, false], ""),

  daLiJeRanijeUcestvovao: yup
    .boolean()
    .oneOf([true, false], "")
    .required("*Obavezno polje"),

  generalnaMotivacija: yup
    .string()
    .min(3, "Napišite zbog čega se prijavljujete na S2S:")
    .required("*Obavezno polje"),

  panelDaLi: yup.boolean().oneOf([true, false], ""),

  // radionicaDaLi: yup.boolean().oneOf([true, false], ""),

  // pitanjaPanelistima: yup
  //   .string()
  //   .when("panel", {
  //     is: true,
  //     then: yup
  //       .string()
  //       .min(3, "Morate napisati bar nešto"),

  //   })
  //   .required(""),
  // pitanjaPanelistima: yup.string(),
  //ovo je logika za to da li je nesto *Obavezno polje, takodje mozemo da stavimo za laptop

  // prvaRadionica: yup
  //   .string()
  //   .oneOf(
  //     [
  //       "java",
  //       "python",
  //       "react",
  //       "figma",
  //       "dotNet",
  //       "ae",
  //       "node",
  //       "seo",
  //       "unity",
  //       "agile",
  //     ],
  //     "Niste izabrali radionicu"
  //   )
  //   .required("*Obavezno polje"),

  prvaRadionica: yup
        .string().when(
        "laptop", {
              is: true,
              then: yup
                .string().oneOf(
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
                      "Nisi izabrao/la radionicu"),
                
                otherwise: yup
                .string().oneOf(
                      [
                        "java",
                        "react",
                        "figma",
                        // "seo",
                        "node",
                        "agile",
                      ],"Ukoliko zeliš da slušaš ovu radionicu, neophodno je da poneseš svoj laptop"),
                    }),
        

  prvaMotivacija: yup
  .string()
    // .min(2, "Napiši zbog čega se prijavljuješ na primarnu radionicu:")
    ,
      
    
  drugaRadionica: yup
  .string().when(
  "laptop", {
        is: true,
        then: yup
          .string().oneOf(
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
                "Nisi izabrao/la radionicu"),
          
                otherwise: yup
          .string().oneOf(
                [
                  "java",
                  "react",
                  "figma",
                  // "seo",
                  "node",
                  "agile",
                ],"Ukoliko zeliš da slušaš ovu radionicu, neophodno je da poneseš svoj laptop"),
              }),

  drugaMotivacija: yup
  .string()
    // .min(2, "Napiši zbog čega se prijavljuješ na primarnu radionicu:")
    ,

  laptop: yup.boolean().oneOf([true, false], "").required("*Obavezno polje"),


});
