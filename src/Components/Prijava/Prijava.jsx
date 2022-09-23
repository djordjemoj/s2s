import React from "react";
import { Form, Formik } from "formik";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { advancedSchema } from "./schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import "./Prijava.css";

const onSubmit = async (values, actions) => {
  console.log(JSON.stringify(values));
  alert(JSON.stringify(values));

  //ovde 'values' saljemo kao body u POST metodi ka backendu

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Prijava = () => {
  return (
    <Scrollbars
                style={{ height: "100vh" }}>
    <Formik
      initialValues={{
        imePrezime: "",
        email: "",
        telefon: "",
        fakultet: "",
        godina: "",
        newsletter: "",
        prethodno: "",
        generalnaMotivacija: "",
        panel: false,
        radionica: false,
        pitanjaPanelistima: "",
        prviIzbor: "",
        prvaMotivacija: "",
        drugiIzbor: "",
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
              name="email"
              type="email"
              placeholder="Unesite Vašu email adresu"
            />
          </div>
          <div className="telefonDiv">
            <label className="brojPitanja">3.</label>
            <CustomInput
              label="Broj telefona"
              name="telefon"
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
              name="godina"
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
            <CustomSelect
              label="Da li želiš da dobijaš obaveštenja o drugim FONIS projektima i aktivnostima "
              name="newsletter"
              placeholder="Da li želiš da dobijaš obaveštenja o drugim FONIS projektima i aktivnostima "
            >
              <option value="">
                Da li želiš da dobijaš obaveštenja o drugim FONIS projektima i
                aktivnostima{" "}
              </option>
              <option value="daNews">Da</option>
              <option value="neNews">Ne</option>
            </CustomSelect>
          </div>
          <div className="prethodnoDiv">
            <label className="brojPitanja">7.</label>
            <CustomSelect
              label="Da li si ranije učestvovao/la na S2S-u? "
              name="prethodno"
              placeholder="Da li si ranije učestvovao/la na S2S-u? "
            >
              <option value="">Da li si ranije učestvovao/la na S2S-u?</option>
              <option value="daPrethodno">Da</option>
              <option value="nePrethodno">Ne</option>
            </CustomSelect>
          </div>
          <div className="generalnaMotivacijaDiv">
            <label className="brojPitanja">8.</label>
            <CustomTextArea
              label="Šta te je navelo da se ove godine prijaviš na S2S? "
              name="generalnaMotivacija"
              placeholder="Šta te je navelo da se ove godine prijaviš na S2S? "
            ></CustomTextArea>
          </div>
          <div className="panelDiv">
            <label className="brojPitanja">9.</label>
            <CustomCheckbox
              label="Želim da se prijavim za panel diskusiju"
              type="checkbox"
              name="panel"
            />
          </div>
          <div className="radionicaDiv">
            <label className="brojPitanja">10.</label>
            <CustomCheckbox
              label="Želim da se prijavim za radionicu"
              type="checkbox"
              name="radionica"
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
              name="prviIzbor"
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
              placeholder="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
            ></CustomTextArea>
          </div>
          <div className="drugiIzborDiv">
            <label className="brojPitanja">14.</label>
            <CustomSelect
              label="Odaberi alternativnu radionicu kojoj želiš da prisustvuješ"
              name="drugiIzbor"
              placeholder="Odaberi alternativnu radionicu kojoj želiš da prisustvuješ"
            >
              <option value="">
                Odaberi alternativnu radionicu kojoj želiš da prisustvuješ
              </option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="Figma">Figma</option>
            </CustomSelect>
          </div>
          <div className="drugaMotivacija">
            <label className="brojPitanja">15.</label>
            <CustomTextArea
              label="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
              name="drugaMotivacija"
              placeholder="Šta te najviše interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
            ></CustomTextArea>
          </div>
          <button disabled={isSubmitting} type="submit">
            Prijava
          </button>
        </Form>
      )}
    </Formik>
    </Scrollbars>
  );
};

export default Prijava;
