// import React, { useState } from "react";
// import { Form, Formik } from "formik";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import { advancedSchema } from "./schemas/yupSheme";
// import CustomInput from "./CustomInput";
// import CustomSelect from "./CustomSelect";
// import CustomTextArea from "./CustomTextArea";
// import axios from "axios";
// import "./Prijava.css";
// import {
//   LazyLoadImage,
//   // trackWindowScroll,
// } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { HashLink } from "react-router-hash-link";
// // import { motion } from "framer-motion";
// import S2SLOGO from "../../assets/s2slogo.png";

// const Prijava = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const openModal = (poruka) => {
//     setModalMessage(poruka);
//     setModalOpen(true);
//   };
//   const closeModal = () => {
//     setModalMessage("");
//     setModalOpen(false);
//   };

//   const onSubmit = async (values, actions) => {
//     // console.log(JSON.stringify(values));
//     // alert(JSON.stringify(values));

//     let postBody = {
//       imePrezime: values.imePrezime,
//       emailPriv: values.emailPriv,
//       newsletter: values.newsletter,
//       brojTelefona: values.brojTelefona,
//       fakultet: values.fakultet,
//       godinaStudija: values.godinaStudija,
//       daLiJeRanijeUcestvovao: values.daLiJeRanijeUcestvovao,
//       generalnaMotivacija: values.generalnaMotivacija,
//       panelDaLi: values.panelDaLi,
//       radionicaDaLi: values.radionicaDaLi,
//       pitanjaPanelistima: values.pitanjaPanelistima,
//       prvaRadionica: values.prvaRadionica,
//       prvaMotivacija: values.prvaMotivacija,
//       drugaRadionica: values.drugaRadionica,
//       drugaMotivacija: values.drugaMotivacija,
//       laptop: values.laptop,
//     };

//     axios
//       .post(
//         "https://backs2stesting.herokuapp.com/api/prijave",
//         //  " http://localhost:5000/api/prijave"

//         postBody
//       )
//       .catch((e) => {
//         // console.log(e);
//         // alert(e);
//         openModal(e);
//       });
//     // alert("Uspe??no ste se prijavili!");
//     openModal("Uspe??no poslata prijava!");

//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
//   };
//   return (
//     <Scrollbars style={{ height: "100vh" }}>
//       {modalOpen ? (
//         <div className="success-modal-container">
//           <div className="success-modal-content">
//             <p className="textUModaluPrijava">{modalMessage}</p>
//             <HashLink to="/#" className="hashZatvoriModal">
//               <button className="dugmeZatvoriModal" onClick={closeModal}>
//                 <span>PO??ETNA</span>
//               </button>
//             </HashLink>
//           </div>
//         </div>
//       ) : null}

//       <div className="Prijava-ceo">
//         <div className="PrijavaTop">
//           <a className="PrijavaTop-logo" href="/#">
//             <LazyLoadImage
//               alt="s2sLogo"
//               src={S2SLOGO}
//               // width="100%"
//               height="100%"
//               className="prijLogo"
//               effect="blur"
//               // placeholder={"<span>Loading..</span>"}
//               // placeholderSrc={logoplaceholder}
//             />
//             {/* <img src={S2SLOGO} alt="ss" width="200px"
//             height="200px" /> */}
//           </a>
//           <div className="PrijavaTop-svg">
//             <div className="UmestoSVG">
//               <h1>PRIJAVA</h1>
//             </div>
//           </div>
//         </div>

//         <Formik
//           className="FormaPrijava"
//           initialValues={{
//             imePrezime: "",
//             emailPriv: "",
//             brojTelefona: "",
//             fakultet: "",
//             godinaStudija: "",
//             newsletter: false,
//             daLiJeRanijeUcestvovao: "",
//             generalnaMotivacija: "",
//             panelDaLi: false,
//             radionicaDaLi: true,
//             pitanjaPanelistima: "",
//             prvaRadionica: "",
//             prvaMotivacija: "",
//             drugaRadionica: "",
//             drugaMotivacija: "",
//             laptop: false,
//           }}
//           validationSchema={advancedSchema}
//           onSubmit={onSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="FormaPrijava">
//               <div className="PrvaPolPitanja">
//                 <div className="imePrezimeDiv pitanjeX">
//                   <div className="brojPitanja">1</div>
//                   <CustomInput
//                     label="Ime i prezime"
//                     // label={radionica1}
//                     name="imePrezime"
//                     type="text"
//                     placeholder="Unesi svoje ime i prezime"
//                   />
//                 </div>
//                 <div className="emailDiv pitanjeX">
//                   <div className="brojPitanja">2</div>
//                   <CustomInput
//                     label="Mejl"
//                     // label={isLaptopNecessary1? "jeste" : "nije"}
//                     name="emailPriv"
//                     type="email"
//                     placeholder="Unesi svoju mejl adresu"
//                   />
//                 </div>
//                 <div className="telefonDiv pitanjeX">
//                   <div className="brojPitanja">3</div>
//                   <CustomInput
//                     label="Broj telefona"
//                     name="brojTelefona"
//                     type="number"
//                     placeholder="Unesi svoj broj telefona"
//                   />
//                 </div>
//                 <div className="fakultetDiv pitanjeX">
//                   <div className="brojPitanja">4</div>
//                   <CustomSelect
//                     label="Izaberi fakultet na kom studira??"
//                     name="fakultet"
//                     placeholder="Fakultet"
//                   >
//                     <option value="">Fakultet</option>
//                     <option value="fon">FON</option>
//                     <option value="etf">ETF</option>
//                     <option value="matf">MATF</option>
//                     <option value="raf">RAF</option>
//                     <option value="viser">VI??ER</option>
//                     <option value="ict">ICT</option>
//                     <option value="drugo">Drugo</option>
//                   </CustomSelect>
//                 </div>
//                 <div className="godinaDiv pitanjeX">
//                   <div className="brojPitanja">5</div>
//                   <CustomSelect
//                     label="Izaberi svoju godinu studija"
//                     name="godinaStudija"
//                     placeholder="Godina studija"
//                   >
//                     <option value="">Godina studija</option>
//                     <option value="prva">Prva</option>
//                     <option value="druga">Druga</option>
//                     <option value="treca">Tre??a</option>
//                     <option value="cetvrta">??etvrta</option>
//                     <option value="peta">Peta</option>
//                     <option value="master">Master</option>
//                   </CustomSelect>
//                 </div>
//                 <div className="newsletterDiv pitanjeX pitanjeVeciMarginBottom">
//                   <div className="brojPitanja">6</div>
//                   {/* <CustomCheckbox
//                     label="??elim da dobijam obave??tenja o drugim FONIS projektima i aktivnostima "
//                     type="checkbox"
//                     name="newsletter"
//                   />
//                 </div> */}
//                   <CustomSelect
//                     label="??eli?? li da dobija?? obave??tenja o drugim FONIS projektima i aktivnostima?"
//                     name="newsletter"
//                   >
//                     <option value={false}>Ne</option>
//                     <option value={true}>Da</option>
//                   </CustomSelect>
//                 </div>

//                 <div className="prethodnoDiv pitanjeX">
//                   <div className="brojPitanja">7</div>
//                   <CustomSelect
//                     label="Da li si ranije u??estvovao/la na S2S-u? "
//                     name="daLiJeRanijeUcestvovao"
//                     // placeholder="Da li si ranije u??estvovao/la na S2S-u? "
//                   >
//                     <option value="">Izaberite odgovor:</option>
//                     <option value={false}>Ne</option>
//                     <option value={true}>Da</option>
//                   </CustomSelect>
//                   {/* <CustomCheckbox
//                   label="Da li si ranije u??estvovao/la na S2S-u?"
//                   type="checkbox"
//                   name="daLiJeRanijeUcestvovao"
//                 /> */}
//                 </div>
//                 <div className="generalnaMotivacijaDiv pitanjeX">
//                   <div className="brojPitanja">8</div>
//                   <CustomTextArea
//                     label="??ta te je motivisalo da prijavi?? na S2S?"
//                     name="generalnaMotivacija"
//                     placeholder="Unesi odgovor"
//                   ></CustomTextArea>
//                 </div>
//               </div>
//               <div className="DrugaPolPitanja">
//                 <div className="panelDiv pitanjeX pitanjeVeciMarginBottom">
//                   <div className="brojPitanja">9</div>
//                   <div className="container-checkbox">
//                     <CustomSelect
//                       label="??elim da se prijavim za panel diskusiju"
//                       name="panelDaLi"
//                     >
//                       <option value={false}>Ne</option>
//                       <option value={true}>Da</option>
//                     </CustomSelect>
//                   </div>
//                 </div>

//                 {/* <div className="radionicaDiv pitanjeX pitanjeVeciMarginBottom">
//                   <div className="brojPitanja">10</div>
                  

//                   <CustomSelect
//                     label="??elim da se prijavim za radionicu:"
//                     name="radionicaDaLi"
//                   >
//                     <option value={false}>Ne</option>
//                     <option value={true}>Da</option>
//                   </CustomSelect>
//                 </div> */}
//                 <div className="obavestenje pitanjeX">
//                   <h3>
//                     Za radionice:<br></br>
//                     <i>ASP.NET behind the scenes</i>
//                     <br></br>
//                     <i>Kako napraviti [prvu] igricu</i>
//                     <br></br>
//                     <i>Adobe After Effects</i>
//                     <br></br>
//                     <i>Kako SEO uti??e na poslovanje</i>
//                     <br></br>
//                     <i>Uvod u Python kroz pravljenje igrica</i>
//                     <br></br>
//                     <span>potrebno je da ponese?? sopstveni laptop.</span>
//                   </h3>
//                 </div>

//                 <div className="laptopPitanje pitanjeX">
//                   <div className="brojPitanja">10</div>
//                   <CustomSelect
//                     label="Da li bi poneo/la svoj laptop?"
//                     name="laptop"
//                   >
//                     <option value="">Izaberite odgovor:</option>
//                     <option value={false}>Ne</option>
//                     <option value={true}>Da</option>
//                   </CustomSelect>
//                 </div>

//                 {/* OVDE POCINJE DRUGI DEO PITANJA */}
//                 {/* <div className="MagicPitanjaPanelistima">
//                   <div className="pitanjaPanelistima pitanjeX">
//                     <div className="brojPitanja">11</div>
//                     <CustomTextArea
//                       label="Ovogodi??nja tema panela je xxx. Koja pitanja bi postavio/la panelistima na ovu temu? "
//                       name="pitanjaPanelistima"
//                       placeholder="Unesite svoj odgovor ovde"
//                     ></CustomTextArea>
//                   </div>
//                 </div> */}
//                 <div
//                   className="MagicPitanjaRadionice"
//                   // style={{ display: true? "none" : "auto" }}
//                 >
//                   <div className="prviIzborDiv pitanjeX">
//                     <div className="brojPitanja">11</div>
//                     <CustomSelect
//                       label="Odaberi radionicu na kojoj bi primarno ??eleo/la da prisustvuje??:"
//                       name="prvaRadionica"
//                       placeholder="Primarna radionica"
//                       // value={radionica1}
//                       // onChange={(e) => {
//                       //   setRadionica1(e.target.value);
//                       //   funkcijaProveri1(e.target.value);
//                       // }}
//                     >
//                       <option value="nista">Primarna radionica</option>
//                       <option value="dotNet">ASP.NET behind the scenes</option>
//                       <option value="ae">Adobe After Effects</option>
//                       <option value="agile">Make IT Agile</option>
//                       <option value="figma">
//                         Osnovi i izrada prototipa u Figmi
//                       </option>
//                       <option value="java">Uvod u Javu</option>
//                       <option value="node">Kako napraviti kriptovalutu</option>
//                       <option value="python">
//                         Uvod u Python kroz pravljenje igrica
//                       </option>
//                       <option value="react">React: From Zero to Hero</option>
//                       <option value="seo">Kako SEO uti??e na poslovanje</option>
//                       <option value="unity">
//                         Kako napraviti [prvu] igricu
//                       </option>
//                     </CustomSelect>
//                   </div>
                 
//                   <div className="prvaMotivacijaDiv pitanjeX">
//                     <div className="brojPitanja">12</div>
//                     <CustomTextArea
//                       label="??ta te najvi??e interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
//                       name="prvaMotivacija"
//                       placeholder="Kako bi se tvoja prijava istakla, napi??i zbog ??ega se prijavljuje?? za ovu radionicu: "
//                     ></CustomTextArea>
//                   </div>
//                   <div className="drugiIzborDiv pitanjeX">
//                     <div className="brojPitanja">13</div>
//                     <CustomSelect
//                       label="Odaberi alternativnu radionicu kojoj ??eli?? da prisustvuje??:"
//                       name="drugaRadionica"
//                       placeholder="Alternativna radionica"
//                       // value={radionica2}
//                       // onChange={(e) => {
//                       //   setRadionica2(e.target.value);
//                       //   funkcijaProveri2();
//                       // }}
//                     >
//                       <option value="">Alternativna radionica</option>
//                       <option value="dotNet">ASP.NET behind the scenes</option>
//                       <option value="ae">Adobe After Effects</option>
//                       <option value="agile">Make IT Agile</option>
//                       <option value="figma">
//                         Osnovi i izrada prototipa u Figmi
//                       </option>
//                       <option value="java">Uvod u Javu</option>
//                       <option value="node">Kako napraviti kriptovalutu</option>
//                       <option value="python">
//                         Uvod u Python kroz pravljenje igrica
//                       </option>
//                       <option value="react">React: From Zero to Hero</option>
//                       <option value="seo">Kako SEO uti??e na poslovanje</option>
//                       <option value="unity">
//                         Kako napraviti [prvu] igricu
//                       </option>
//                     </CustomSelect>
//                   </div>
//                   {/* {isLaptopNecessary2 === true && (
//                     <div className="laptopPitanje pitanjeX">
//                       <div className="brojPitanja">###</div>
//                       <CustomSelect
//                         label="Izabrana radionica zahteva da ponesete sopstveni laptop"
//                         name="laptop"
//                       >
//                         <option value="">Pone??u sopstveni laptop</option>
//                         <option value={false}>Ne</option>
//                         <option value={true}>Da</option>
//                       </CustomSelect>
//                     </div>
//                   )} */}
//                   <div className="drugaMotivacija pitanjeX">
//                     <div className="brojPitanja">14</div>
//                     <CustomTextArea
//                       label="??ta te najvi??e interesuje u vezi oblasti koja se prelazi na ovoj radionici? "
//                       name="drugaMotivacija"
//                       // placeholder="Unesite odgovor"
//                       placeholder="Kako bi se tvoja prijava istakla, napi??i zbog ??ega se prijavljuje?? za ovu radionicu: "

//                     ></CustomTextArea>
//                   </div>
//                 </div>
//               </div>
//               <div className="dugmeSubmitContainer">
//                 <button
//                   className="dugmeSubmit"
//                   disabled={isSubmitting}
//                   type="submit"
//                 >
//                   PROSLEDI
//                 </button>
//                 {/* <button type="button" onClick={() => alert(JSON.stringify(formik.values.imePrezime))}>
//                   Log values
//                 </button> */}
//               </div>
//             </Form>
//           )}
//         </Formik>
//         {/* {modalOpen ? (
//         <div className="success-modal-container">
//           <div className="success-modal-content">
//             <p>{modalMessage}</p>
//             <button className="modal-button" onClick={closeModal}>
//               OK!
//             </button>
//           </div>
//         </div>
//       ) : null} */}
//       </div>
//     </Scrollbars>
//   );
// };

// export default Prijava;
