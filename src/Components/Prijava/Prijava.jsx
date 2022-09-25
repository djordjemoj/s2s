import React, { useEffect, useState } from "react";
import { Form, Formik, useFormik, Field } from "formik";
import { Scrollbars } from "react-custom-scrollbars-2";
import { advancedSchema } from "./schemas/yupSheme";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import axios from "axios";
import "./Prijava.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import S2SLOGO from "../../assets/s2slogo.png";
// import logoplaceholder from "../../assets/smallLogo.png";

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
// const [panelBoll, setPanelBool] = useState(values.panelDaLi);
//   const [radioniceBoll, setRadioniceBool] = useState(values.panelDaLi);

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

  // const promenjiveKontroleri{
  //   prikazPanel: isSubmitting.panelDaLi
  // }

  

  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div className="Prijava-ceo">
        <div className="PrijavaTop">
          <a className="PrijavaTop-logo" href="#">
            <LazyLoadImage
              alt="s2sLogo"
              src={S2SLOGO}
              // width="100%"
              height="100%"
              className="prijLogo"
              effect="blur"
              // placeholder={"<span>Loading..</span>"}
              // placeholderSrc={logoplaceholder}
            />
            {/* <img src={S2SLOGO} alt="ss" width="200px"
            height="200px" /> */}
          </a>
          <div className="PrijavaTop-svg">
            <div className="UmestoSVG">
              <h1>PRIJAVA</h1>
            </div>
          </div>
        </div>
        <Formik
          className="FormaPrijava"
          initialValues={{
            imePrezime: "",
            emailPriv: "",
            brojTelefona: "",
            fakultet: "",
            godinaStudija: "",
            newsletter: false,
            daLiJeRanijeUcestvovao: "",
            generalnaMotivacija: "",
            panelDaLi: true,
            radionicaDaLi: true,
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
            <Form className="FormaPrijava">
              <div className="PrvaPolPitanja">
                <div className="imePrezimeDiv pitanjeX">
                  <div className="brojPitanja">1</div>
                  <CustomInput
                    label="Ime i prezime"
                    name="imePrezime"
                    type="text"
                    placeholder="Unesite Vaše ime i prezime"
                  />
                </div>
                <div className="emailDiv pitanjeX">
                  <div className="brojPitanja">2</div>
                  <CustomInput
                    label="Email adresa"
                    name="emailPriv"
                    type="email"
                    placeholder="Unesite Vašu email adresu"
                  />
                </div>
                <div className="telefonDiv pitanjeX">
                  <div className="brojPitanja">3</div>
                  <CustomInput
                    label="Broj telefona"
                    name="brojTelefona"
                    type="number"
                    placeholder="Unesite Vaš broj telefona"
                  />
                </div>
                <div className="fakultetDiv pitanjeX">
                  <div className="brojPitanja">4</div>
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
                <div className="godinaDiv pitanjeX">
                  <div className="brojPitanja">5</div>
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
                <div className="newsletterDiv pitanjeX pitanjeVeciMarginBottom">
                  <div className="brojPitanja">6</div>
                  <CustomCheckbox
                    label="Zelim da dobijam obaveštenja o drugim FONIS projektima i aktivnostima "
                    type="checkbox"
                    name="newsletter"
                  />
                  {/* <label>
            <Field type="checkbox" name="toggle" />
            {`${isSubmitting.newsletter}`}
          </label> */}
                </div>

                <div className="prethodnoDiv pitanjeX">
                  <div className="brojPitanja">7</div>
                  <CustomSelect
                    label="Da li si ranije učestvovao/la na S2S-u? "
                    name="daLiJeRanijeUcestvovao"
                    placeholder="Da li si ranije učestvovao/la na S2S-u? "
                  >
                    {/* <option value="">
                  Da li si ranije učestvovao/la na S2S-u?
                </option> */}
                    <option value={false}>Ne</option>
                    <option value={true}>Da</option>
                  </CustomSelect>
                  {/* <CustomCheckbox
                  label="Da li si ranije učestvovao/la na S2S-u?"
                  type="checkbox"
                  name="daLiJeRanijeUcestvovao"
                /> */}
                </div>
                <div className="generalnaMotivacijaDiv pitanjeX">
                  <div className="brojPitanja">8</div>
                  <CustomTextArea
                    label="Šta te je navelo da se ove godine prijaviš na S2S? "
                    name="generalnaMotivacija"
                    placeholder="Objasni motivaciju za projekat xxxxx"
                  ></CustomTextArea>
                </div>
              </div>
              <div className="DrugaPolPitanja">
                <div className="panelDiv pitanjeX pitanjeVeciMarginBottom">
                  <div className="brojPitanja">9</div>
                  <div className="container-checkbox">
                    <CustomCheckbox
                      // className="MojCheckbox ne treba mi jer moze samo name da se stavi u css jer mu je to klasa
                      label="Želim da se prijavim za panel diskusiju"
                      type="checkbox"
                      name="panelDaLi"
                    />
                  </div>
                </div>
                <div className="radionicaDiv pitanjeX pitanjeVeciMarginBottom">
                  <div className="brojPitanja">10</div>
                  <CustomCheckbox
                    label="Želim da se prijavim za radionicu"
                    type="checkbox"
                    name="radionicaDaLi"
                  />
                </div>
                {/* OVDE POCINJE DRUGI DEO PITANJA */}
                <div className="MagicPitanjaPanelistima">
                  <div className="pitanjaPanelistima pitanjeX">
                    <div className="brojPitanja">11</div>
                    <CustomTextArea
                      label="Ovogodišnja tema panela je xxx. Koja pitanja bi postavio/la panelistima na ovu temu? "
                      name="pitanjaPanelistima"
                      placeholder="Ovogodišnja tema panela je xxx. Koja pitanja bi postavio/la panelistima na ovu temu? "
                    ></CustomTextArea>
                  </div>
                </div>
                <div
                  className="MagicPitanjaRadionice"
                  // style={{ filter: this.props.onSubmit? "blur(0)" : "blur(10px)" }}
                >
                  <div className="prviIzborDiv pitanjeX">
                    <div className="brojPitanja">12</div>
                    <CustomSelect
                      label="Odaberi radionicu na kojoj primarno želiš da prisustvuješ"
                      name="prvaRadionica"
                      placeholder="Odaberi radionicu na kojoj primarno želiš da prisustvuješ"
                    >
                      <option value="">
                        Odaberi radionicu na kojoj primarno želiš da
                        prisustvuješ
                      </option>
                      <option value="dotNet">ASP.NET</option>
                      <option value="ae">AfterEffects</option>
                      <option value="agile">Agile</option>
                      <option value="figma">Figma</option>
                      <option value="java">Java</option>
                      <option value="node">Node.js</option>
                      <option value="python">Python</option>
                      <option value="react">React</option>
                      <option value="seo">SEO</option>
                      <option value="unity">Unity</option>
                    </CustomSelect>
                  </div>
                  {/* ovde treba da bude ono ako je nesto od navedenog, 
              da izadje ono za laptop, sto je obavezno za submit, 
              al ne samo da izadje nego mozda da se tek tad renderuje &&
              i kaze, ova radionica zahteva laptop, kako biste prisustvovali
               potrebno je da ponesete lap top
              Ponecu svoj lap top checkbox  ako ne (required)*/}
                  <div className="prvaMotivacijaDiv pitanjeX">
                    <div className="brojPitanja">13</div>
                    <CustomTextArea
                      label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
                      name="prvaMotivacija"
                      placeholder="Unesi motivaciju za radionicu "
                    ></CustomTextArea>
                  </div>
                  <div className="drugiIzborDiv pitanjeX">
                    <div className="brojPitanja">14</div>
                    <CustomSelect
                      label="Odaberi alternativnu radionicu kojoj želiš da prisustvuješ"
                      name="drugaRadionica"
                      placeholder="sta je ovo"
                    >
                      <option value="">
                        Odaberi alternativnu radionicu kojoj želiš da
                        prisustvuješ
                      </option>
                      <option value="dotNet">ASP.NET</option>
                      <option value="ae">AfterEffects</option>
                      <option value="agile">Agile</option>
                      <option value="figma">Figma</option>
                      <option value="java">Java</option>
                      <option value="node">Node.js</option>
                      <option value="python">Python</option>
                      <option value="react">React</option>
                      <option value="seo">SEO</option>
                      <option value="unity">Unity</option>
                    </CustomSelect>
                  </div>
                  <div className="drugaMotivacija pitanjeX">
                    <div className="brojPitanja">15</div>
                    <CustomTextArea
                      label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
                      name="drugaMotivacija"
                      placeholder="Zasto se prijavljujes za ovo "
                    ></CustomTextArea>
                  </div>
                </div>
              </div>
              <div className="dugmeSubmitContainer">
                <button
                  className="dugmeSubmit"
                  disabled={isSubmitting}
                  type="submit"
                >
                  PROSLEDI
                </button>
                {/* <button type="button" onClick={() => alert(JSON.stringify(formik.values.imePrezime))}>
                  Log values
                </button> */}
              </div>
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
      </div>
    </Scrollbars>
  );
};

export default Prijava;
