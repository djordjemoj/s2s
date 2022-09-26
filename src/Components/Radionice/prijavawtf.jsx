import React from "react";
import { Form, Formik } from "formik";
import { Scrollbars } from "react-custom-scrollbars-2";
import { advancedSchema } from "./schemas/yupSheme";
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

const onSubmit = async (values, actions) => {
  console.log(JSON.stringify(values));
  alert(JSON.stringify(values));

  let postBody = {
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
    // laptop: values.laptop,
  };

  axios
    .post("https://backs2stesting.herokuapp.com/api/prijave", postBody)
    .catch((e) => {
      console.log(e);
    });
  alert("Uspešno ste se prijavili!");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Prijava = () => {
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
            // laptop: false,
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
                    // label={radionica1}
                    name="imePrezime"
                    type="text"
                    placeholder="Unesite Vaše ime i prezime"
                  />
                </div>
                <div className="emailDiv pitanjeX">
                  <div className="brojPitanja">2</div>
                  <CustomInput
                    label="Email adresa"
                    // label={isLaptopNecessary1? "jeste" : "nije"}
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
                    label="Izaberite koji fakultet studirate"
                    name="fakultet"
                    placeholder="Fakultet"
                  >
                    <option value="">Fakultet</option>
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
                    label="Izaberite Vašu godinu studija"
                    name="godinaStudija"
                    placeholder="Godina studija"
                  >
                    <option value="">Godina studija</option>
                    <option value="prva">Prva</option>
                    <option value="druga">Druga</option>
                    <option value="treca">Treća</option>
                    <option value="cetvrta">Četvrta</option>
                    <option value="peta">Peta</option>
                    <option value="master">Master</option>
                  </CustomSelect>
                </div>
                <div className="newsletterDiv pitanjeX pitanjeVeciMarginBottom">
                  <div className="brojPitanja">6</div>
                  {/* <CustomCheckbox
                    label="Želim da dobijam obaveštenja o drugim FONIS projektima i aktivnostima "
                    type="checkbox"
                    name="newsletter"
                  />
                </div> */}
                  <CustomSelect
                    label="Želim da dobijam obaveštenja o drugim FONIS projektima i aktivnostima "
                    name="newsletter"
                  >
                    <option value={false}>Ne</option>
                    <option value={true}>Da</option>
                  </CustomSelect>
                </div>

                <div className="prethodnoDiv pitanjeX">
                  <div className="brojPitanja">7</div>
                  <CustomSelect
                    label="Da li si ranije učestvovao/la na S2S-u? "
                    name="daLiJeRanijeUcestvovao"
                    placeholder="Da li si ranije učestvovao/la na S2S-u? "
                  >
                    <option value="">Izaberite odgovor:</option>
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
                    placeholder="Unesite svoj odgovor ovde"
                  ></CustomTextArea>
                </div>
              </div>
              <div className="DrugaPolPitanja">
                

                <div className="obavestenje pitanjeX">
                  <h3>
                    Za radionice ASP.NET, Kako napraviti [prvu] igricu, Adobe
                    After Effects, Kako napraviti kriptovalutu i Uvod u Python
                    kroz pravljenje igrica{" "}
                    <b>
                      <span>je potrebno da ponesete sopstveni laptop!</span>
                    </b>{" "}
                  </h3>
                </div>
               
                <div
                  className="MagicPitanjaRadionice"
                  // style={{ display: true? "none" : "auto" }}
                >
                  <div className="prviIzborDiv pitanjeX">
                    <div className="brojPitanja">12</div>
                    <CustomSelect
                      label="Odaberi radionicu na kojoj primarno želiš da prisustvuješ"
                      name="prvaRadionica"
                      placeholder="Primarna radionica"
                      // value={radionica1}
                      // onChange={(e) => {
                      //   setRadionica1(e.target.value);
                      //   funkcijaProveri1(e.target.value);
                      // }}
                    >
                      <option value="">Primarna radionica</option>
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
                  {/* ovo za radionicu se prikazuje samo ako je ispunjen neki uslov
                  a ako nije, onda ne sme da bude required, smisli kako */}
                  {/* {isLaptopNecessary1 === true && (
                    <div className="laptopPitanje pitanjeX">
                      <div className="brojPitanja">###</div>
                      <CustomSelect
                        label="Izabrana radionica zahteva da ponesete sopstveni laptop"
                        name="laptop"
                      >
                        <option value="">Poneću sopstveni laptop</option>
                        <option value={false}>Ne</option>
                        <option value={true}>Da</option>
                      </CustomSelect>
                    </div>
                  )} */}

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
                      placeholder="Unesite svoj odgovor ovde"
                    ></CustomTextArea>
                  </div>
                  <div className="drugiIzborDiv pitanjeX">
                    <div className="brojPitanja">14</div>
                    <CustomSelect
                      label="Odaberi alternativnu radionicu kojoj želiš da prisustvuješ"
                      name="drugaRadionica"
                      placeholder="Alternativna radionica"
                      // value={radionica2}
                      // onChange={(e) => {
                      //   setRadionica2(e.target.value);
                      //   funkcijaProveri2();
                      // }}
                    >
                      <option value="">Alternativna radionica</option>
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
                  {/* {isLaptopNecessary2 === true && (
                    <div className="laptopPitanje pitanjeX">
                      <div className="brojPitanja">###</div>
                      <CustomSelect
                        label="Izabrana radionica zahteva da ponesete sopstveni laptop"
                        name="laptop"
                      >
                        <option value="">Poneću sopstveni laptop</option>
                        <option value={false}>Ne</option>
                        <option value={true}>Da</option>
                      </CustomSelect>
                    </div>
                  )} */}
                  <div className="drugaMotivacija pitanjeX">
                    <div className="brojPitanja">15</div>
                    <CustomTextArea
                      label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
                      name="drugaMotivacija"
                      placeholder="Unesite svoj odgovor ovde"
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
