import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Scrollbars } from "react-custom-scrollbars-2";
import { advancedSchema } from "./schemas/yupSheme";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import axios from "axios";
import "./Prijava.css";
// import { json } from "express";

// await new Promise((resolve) => setTimeout(resolve, 1000));
// actions.resetForm();

// const onSubmit = async (values, actions) => {
//   console.log(JSON.stringify(values));
//   alert(JSON.stringify(values));

//   //ovde 'values' saljemo kao body u POST metodi ka backendu

//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };
const onSubmit = async (values, actions) => {
  console.log(JSON.stringify(values));
  alert(JSON.stringify(values));

  let postBody = {
    // prijava: {
    imePrezime: values.imePrezime,
    emailPriv: values.emailPriv,
    newsletter: values.newsletter,
    brojTelefona: values.brojTelefona,
    fakultet: values.fakultet,
    godinaStudija: values.godinaStudija,
    daLiJeRanijeUcestvovao: values.daLiJeRanijeUcestvovao,
    generalnaMotivacija: values.generalnaMotivacija,
    panelDaLi: values.panelDaLi,
    radionicaDaLi: values.radionicaDaLi,
    pitanjaPanelistima: values.pitanjaPanelistima,
    prvaRadionica: values.prvaRadionica,
    prvaMotivacija: values.prvaMotivacija,
    drugaRadionica: values.drugaRadionica,
    drugaMotivacija: values.drugaMotivacija,
    // },
  };
  alert(JSON.stringify(postBody));

  axios
    .post("https://backs2stesting.herokuapp.com/api/prijave", postBody)
    .catch((e) => {
      console.log(e);
    });

  //ovde 'values' saljemo kao body u POST metodi ka backendu

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Prijava = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalMessage, setModalMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const simulateWaiting = (duration) => {
  //   return new Promise((resolve, reject) => {
  //     if (duration < 4000) {
  //       setTimeout(() => {
  //         resolve();
  //       }, duration);
  //     } else {
  //       setTimeout(() => {
  //         reject(new Error("Preveliko cekanje"));
  //       }, duration);
  //     }
  //   });
  // };
  // const openModal = (poruka) => {
  //   setModalMessage(poruka);
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalMessage("");
  //   setModalOpen(false);
  // };

  // //  const onSubmit = async (values, actions) => {
  // //   console.log(JSON.stringify(values));
  // //   alert(JSON.stringify(values));

  // //   const postPrijava = async (prijava) => {
  // //     try {
  // //       setIsLoading(true);
  // //       //   loaderPrijave.classNameList.remove('hide-loader'); ovo je i tamo kom
  // //       const response = await fetch(
  // //         "https://backs2stesting.herokuapp.com/api/prijave",
  // //         {
  // //           method: "POST",
  // //           headers: {
  // //             Accept: "application/json",
  // //             "Content-Type": "application/json",
  // //           },
  // //           body: JSON.stringify(values),
  // //         }
  // //       );
  // //       await simulateWaiting(3000);
  // //       const data = await response.json();
  // //       if (data.success) {
  // //         alert(JSON.stringify(values));
  // //         actions.resetForm();
  // //         openModal("Uspesno poslata prijava");
  // //       } else {
  // //         openModal(data.msg);
  // //       }
  // //     } catch (e) {
  // //       openModal(e.message);
  // //     } finally {
  // //       setIsLoading(false);
  // //     }
  // //   };
  // // };

  // const onSubmit= async (values, { setSubmitting }) => {
  //    if(true) {
  //     let postBody = {
  //       prijava: {
  //         imePrezime: values.imePrezime,
  //         emailPriv: values.emailPriv,
  //         newsletter: values.newsletter,
  //         brojTelefona: values.brojTelefona,
  //         fakultet: values.fakultet,
  //         godinaStudija: values.godinaStudija,
  //         daLiJeRanijeUcestvovao: values.daLiJeRanijeUcestvovao,
  //         generalnaMotivacija: values.generalnaMotivacija,
  //         panelDaLi: values.panelDaLi,
  //         radionicaDaLi: values.radionicaDaLi,
  //         pitanjaPanelistima: values.pitanjaPanelistima,
  //         prvaRadionica: values.prvaRadionica,
  //         prvaMotivacija: values.prvaMotivacija,
  //         drugaRadionica: values.drugaRadionica,
  //         drugaMotivacija: values.drugaMotivacija
  //       },
  //     };

  //     alert(JSON.stringify(postBody));
  //     // setSuccess(true);

  //     axios
  //       .post(
  //         "https://backs2stesting.herokuapp.com/api/prijave",
  //         postBody
  //       )
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  //   setSubmitting(false);
  // }

  return (
    <Scrollbars style={{ height: "100vh" }}>
      <Formik
        initialValues={{
          imePrezime: "",
          emailPriv: "",
          brojTelefona: "",
          fakultet: "",
          godinaStudija: "",
          newsletter: false,
          daLiJeRanijeUcestvovao: "",
          generalnaMotivacija: "",
          panelDaLi: false,
          radionicaDaLi: false,
          pitanjaPanelistima: "",
          prvaRadionica: "",
          prvaMotivacija: "",
          drugaRadionica: "",
          drugaMotivacija: "",
        }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="imePrezimeDiv">
              <label className="brojPitanja">1.</label>
              <CustomInput
                label="Ime i prezime"
                name="imePrezime"
                type="text"
                placeholder="Unesite Vaše ime i prezime"
              />
            </div>
            <div className="emailDiv">
              <label className="brojPitanja">2.</label>
              <CustomInput
                label="Email adresa"
                name="emailPriv"
                type="email"
                placeholder="Unesite Vašu email adresu"
              />
            </div>
            <div className="telefonDiv">
              <label className="brojPitanja">3.</label>
              <CustomInput
                label="Broj telefona"
                name="brojTelefona"
                type="number"
                placeholder="Unesite Vaš broj telefona"
              />
            </div>
            <div className="fakultetDiv">
              <label className="brojPitanja">4.</label>
              <CustomSelect
                label="Fakultet"
                name="fakultet"
                placeholder="Izaberite koji fakultet studirate"
              >
                <option value="">Izaberite koji fakultet studirate</option>
                <option value="fon">FON</option>
                <option value="etf">ETF</option>
                <option value="matf">MATF</option>
                <option value="raf">RAF</option>
                <option value="viser">VIŠER</option>
                <option value="ict">ICT</option>
                <option value="drugo">Drugo</option>
              </CustomSelect>
            </div>
            <div className="godinaDiv">
              <label className="brojPitanja">5.</label>
              <CustomSelect
                label="Godina studija"
                name="godinaStudija"
                placeholder="Izaberite Vašu godinu studija"
              >
                <option value="">Izaberite Vašu godinu studija</option>
                <option value="prva">Prva</option>
                <option value="druga">Druga</option>
                <option value="treca">Treća</option>
                <option value="cetvrta">Četvrta</option>
                <option value="peta">Peta</option>
                <option value="master">Master</option>
                <option value="doktorat">Doktorat</option>
              </CustomSelect>
            </div>
            <div className="newsletterDiv">
              <label className="brojPitanja">6.</label>
              {/* <CustomSelect
                label="Da li želiš da dobijaš obaveštenja o drugim FONIS projektima i aktivnostima "
                name="newsletter"
                placeholder=""
              >
                <option value="">
                  Da li želiš da dobijaš obaveštenja o drugim FONIS projektima i
                  aktivnostima{" "}
                </option>
                <option value= {true}>Da</option>
                <option value={false}>Ne</option>
              </CustomSelect> */}
              <CustomCheckbox
                label="Zelim da dobijam obaveštenja o drugim FONIS projektima i aktivnostima "
                type="checkbox"
                name="newsletter"
              />
            </div>
            <div className="prethodnoDiv">
              <label className="brojPitanja">7.</label>
              {/* <CustomSelect
                label="Da li si ranije učestvovao/la na S2S-u? "
                name="daLiJeRanijeUcestvovao"
                placeholder="Da li si ranije učestvovao/la na S2S-u? "
              >
                <option value="">
                  Da li si ranije učestvovao/la na S2S-u?
                </option>
                <option value={true}>Da</option>
                <option value={true}>Ne</option>
              </CustomSelect> */}
              <CustomCheckbox
                label="Da li si ranije učestvovao/la na S2S-u?"
                type="checkbox"
                name="daLiJeRanijeUcestvovao"
              />
            </div>
            <div className="generalnaMotivacijaDiv">
              <label className="brojPitanja">8.</label>
              <CustomTextArea
                label="Šta te je navelo da se ove godine prijaviš na S2S? "
                name="generalnaMotivacija"
                placeholder="Objasni motivaciju za projekat xxxxx"
              ></CustomTextArea>
            </div>
            <div className="panelDiv">
              <label className="brojPitanja">9.</label>
              <CustomCheckbox
                label="Želim da se prijavim za panel diskusiju"
                type="checkbox"
                name="panelDaLi"
              />
            </div>
            <div className="radionicaDiv">
              <label className="brojPitanja">10.</label>
              <CustomCheckbox
                label="Želim da se prijavim za radionicu"
                type="checkbox"
                name="radionicaDaLi"
              />
            </div>
            <div className="pitanjaPanelistima">
              <label className="brojPitanja">11.</label>
              <CustomTextArea
                label="Ovogodišnja tema panela je xxx. Koja pitanja bi postavio/la panelistima na ovu temu? "
                name="pitanjaPanelistima"
                placeholder="Ovogodišnja tema panela je xxx. Koja pitanja bi postavio/la panelistima na ovu temu? "
              ></CustomTextArea>
            </div>
            <div className="prviIzborDiv">
              <label className="brojPitanja">12.</label>
              <CustomSelect
                label="Odaberi radionicu na kojoj primarno želiš da prisustvuješ"
                name="prvaRadionica"
                placeholder="Odaberi radionicu na kojoj primarno želiš da prisustvuješ"
              >
                <option value="">
                  Odaberi radionicu na kojoj primarno želiš da prisustvuješ
                </option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="figma">Figma</option>
              </CustomSelect>
            </div>
            <div className="prvaMotivacijaDiv">
              <label className="brojPitanja">13.</label>
              <CustomTextArea
                label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
                name="prvaMotivacija"
                placeholder="Unesi motivaciju za radionicu "
              ></CustomTextArea>
            </div>
            <div className="drugiIzborDiv">
              <label className="brojPitanja">14.</label>
              <CustomSelect
                label="Odaberi alternativnu radionicu kojoj želiš da prisustvuješ"
                name="drugaRadionica"
                placeholder="sta je ovo"
              >
                <option value="">
                  Odaberi alternativnu radionicu kojoj želiš da prisustvuješ
                </option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="React">React</option>
                <option value="Figma">Figma</option>
              </CustomSelect>
            </div>
            <div className="drugaMotivacija">
              <label className="brojPitanja">15.</label>
              <CustomTextArea
                label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
                name="drugaMotivacija"
                placeholder="Zasto se prijavljujes za ovo "
              ></CustomTextArea>
            </div>
            <button disabled={isSubmitting} type="submit">
              Prijava
            </button>
          </Form>
        )}
      </Formik>
      {/* {modalOpen ? (
        <div className="success-modal-container">
          <div className="success-modal-content">
            <p>{modalMessage}</p>
            <button className="modal-button" onClick={closeModal}>
              OK!
            </button>
          </div>
        </div>
      ) : null} */}
    </Scrollbars>
  );
};

export default Prijava;
