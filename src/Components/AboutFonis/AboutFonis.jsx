import React from "react";
import "../AboutFonis/AboutFonis.css";
// import Adacta from "../../assets/tim0.jpg";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SOF from "../../assets/sof.jpg";
import os2s from "../../assets/os2s.png";

const AboutFonis = () => {
  return (
    <div className="a" id="oS2S">
      <div className="ofonisu">
        <div className="about about-container">
          <div className="PrviTekstAbout TekstAbout">
            <h1 className="caption1">O PROJEKTU</h1>
            <p className="tekst1">
              <i>Studenti studentima</i> je projekat Udruženja<br></br>
              studenata informatike FONIS koji se tradicionalno <br></br>održava već dugi
              niz godina, a za cilj ima prenošenje<br></br> znanja kako iz IT
              oblasti, tako i iz menadžmenta i dizajna. <br></br>Glavna zamisao projekta
              jeste spajanje studenata koji žele <br></br>da usavrše svoja znanja i
              veštine sa studentima koji <br></br>svoje znanje i iskustvo žele da podele
              sa drugima. Na ovaj način studenti nalaze inspiraciju za rad na
              ličnom napretku i nalaze polje svog interesovanja. Učešće na S2S-u
              je besplatno i svi studenti iz Srbije mogu učestvovati, <br></br>bez obzira
             na Univerzitet ili usmerenje.<br></br> Ako ste zainteresovani za sticanje
              novih veština<br></br> u društvu kolega, nemojte propustiti ovu<br></br> jedinstvenu
              priliku za to. <br></br>Čekamo vas!
            </p>
          </div>
          <div className="DrugiTekstAbout TekstAbout">
            <p className="caption2">O FONIS-u</p>
            <p className="tekst2">
              Udruženje studenata informatike<br></br> FONIS je studentska, nevladina i<br></br>
              neprofitna organizacija sa sedištem<br></br> na Fakultetu organizacionih
              nauka.<br></br>Organizacijom i realizacijom <br></br>brojnih seminara, stručnih
              predavanja i internacionalih takmičenja okuplja<br></br> buduće IT
              stručnjake s ciljem razmenjivanja i unapređivanja znanja
              informacionih sistema i tehnologija. Zalaganjem svih
              članova, <br></br>FONIS već dugi niz godina održava više<br></br>edukativnih i
              takmičarskih projekata iz<br></br> sveta IT-ja, među kojima je i upravo{" "}
              <br></br>projekat <i>Studenti studentima</i>.
            </p>
          </div>

          <svg
            className="about"
            width="1000"
            height="720"
            viewBox="0 0 1400 1000"
            fill="none"
          >
            <path
              d="M832.096 253.027L832.134 253.072L832.174 253.115C840.818 262.461 840.818 277.688 832.174 287.033L606.776 530.714C602.65 535.174 597.098 537.639 591.354 537.639L24.4047 537.631C12.487 537.63 2.50003 527.124 2.50004 513.746L2.5 26.3845C2.49998 13.0061 12.4874 2.49982 24.4053 2.5H24.4053H609.108C610.368 2.5 611.562 2.58131 612.698 2.79911C614.484 3.14178 617.228 3.76113 619.907 4.72345C622.637 5.70433 624.958 6.92354 626.258 8.30435L832.096 253.027Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="5"
            />
            {/* <switch>
            <foreignObject x="1.1%" y="1.5%" width="775" height="560">
              <p className="caption1">O PROJEKTU</p>
              <p className="tekst1">
                <i>Studenti studentima</i> je projekat Udruženja
                studenata informatike FONIS koji se tradicionalno
                održava već dugi niz godina, a za cilj ima prenošenje
                različitih znanja kako iz IT oblasti, tako i iz menadžmenta
                i dizajna. Glavna zamisao projekta jeste spajanje
                studenata
                koji žele da usavrše svoja znanja i veštine sa
                studentima koji svoje znanje i iskustvo žele da podele sa
                drugima. Na ovaj način studenti nalaze inspiraciju za rad na
                ličnom napretku i širenju spektra znanja, a takođe nalaze i
                polje svog interesovanja.  Učešće na S2S-u je besplatno
                i svi studenti iz Srbije mogu učestvovati, bez obzira na
                Univerzitet ili usmerenje.  Ako ste zainteresovani za
                sticanje novih veština u društvu kolega, nemojte
                propustiti ovu jedinstvenu  priliku za to. Čekamo vas!
              </p>
            </foreignObject>
          </switch> */}
            <svg width="694" height="1550" viewBox="0 0 694 423" fill="">
              <defs>
                <pattern id="img1" width="1" height="1">
                  <image href={SOF} x="-80" y="-100" width="770" height="700" />
                </pattern>
              </defs>
              <path
                d="M663.751 420.5H30.0001C14.8122 420.5 2.5 408.188 2.5 393V30.64C2.5 15.4522 14.8122 3.14001 30 3.14001H407.009C415.927 3.14001 424.292 7.46478 429.447 14.7416L686.19 377.102C699.093 395.313 686.071 420.5 663.751 420.5Z"
                stroke="black"
                stroke-width="5"
                fill="url(#img1)"
              />
            </svg>
            <path
              d="M1377.39 446.5H1377.39L1013.66 446.5H984.91H967.775C960.034 446.5
            952.651 449.763 947.439 455.488L728.901 695.551C725.496 700.159
            723.726 706.28 723.726 712.509C723.726 718.78 725.52 724.942 728.971
            729.56L910.053 971.828C913.354 976.246 917.651 978.508 921.915
            978.508L1377.39 978.5C1381.84 978.499 1386.06 976.094 1389.25
            971.82C1392.45 967.545 1394.5 961.525 1394.5 954.768L1394.5
            470.232C1394.5 463.474 1392.45 457.454 1389.25 453.18C1386.06
            448.906 1381.84 446.5 1377.39 446.5Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="5"
            />
            {/* <switch>
            <foreignObject x="55%" y="47%" width="600" height="490">
              <p className="caption2">O FONIS-u</p>
              <p className="tekst2">
                Udruženje studenata informatike
                FONIS je studentska, nevladina i
                neprofitna organizacija sa sedištem naFakultetu
                organizacionih nauka.Organizacijom i realizacijom
                brojnih seminara,
                 stručnih predavanja i internacionalih takmičenja
                okuplja buduće IT stručnjake s ciljem razmenjivanja i
                unapređivanja znanja informacionih sistema i tehnologija.
                Zajedničkim zalaganjem svih članova, FONIS već dugi niz
                godina održava više edukativnih i takmičarskih projekata
                 iz sveta IT-ja, među kojima je i upravo{" "}
                projekat <i>Studenti studentima</i>.
              </p>
            </foreignObject>
          </switch> */}
            <path
              d="M672.512 2.5H1387C1391.14 2.5 1394.5 5.85786 1394.5
            10V116.546C1394.5 120.688 1391.14 124.046 1387
            124.046H766.802C764.654 124.046 762.61 123.125 761.186
            121.516L666.896 14.9705C662.612 10.1301 666.048 2.5 672.512 2.5Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="5"
            />
            <svg width="1748" height="95" viewBox="0 0 348 95" fill="none">
              <line
                x1="87.0059"
                y1="91.5"
                x2="347.358"
                y2="92.5233"
                stroke="black"
                stroke-width="3"
              />
              <path
                d="M-3.58612e-06 2.10916L241.352 2.10919"
                stroke="black"
                stroke-width="3"
              />
              <line
                y1="-1.5"
                x2="235.746"
                y2="-1.5"
                transform="matrix(0.999971 -0.0076565 -0.0076565 -0.999971 22.613 22.0233)"
                stroke="black"
                stroke-width="3"
              />
              <line
                x1="35.9938"
                y1="39.5"
                x2="273.171"
                y2="38.5233"
                stroke="black"
                stroke-width="3"
              />
              <line
                x1="54.0001"
                y1="56.5"
                x2="291.269"
                y2="56.5233"
                stroke="black"
                stroke-width="3"
              />
              <line
                x1="75.0001"
                y1="74.5"
                x2="319.31"
                y2="74.5233"
                stroke="black"
                stroke-width="3"
              />
            </svg>

            <path
              d="M737.055 447.844H896.004C902.55 447.844 905.954 455.645 901.502 460.444L707.102 670.002C703.896 673.458 698.334 673.134 695.551 669.33L624.917 572.785C622.786 569.872 623.031 565.855 625.501 563.223L731.587 450.211C733.005 448.7 734.984 447.844 737.055 447.844Z"
              fill="#F9EEE1"
              stroke="black"
              stroke-width="5"
            />
            <path
              d="M573.788 561.14L462.808 561.14C456.697 561.14 453.151 568.055
            456.718 573.017L744.36 973.214C745.769 975.174 748.035 976.337
            750.45 976.337L868.471 976.337C874.621 976.337 878.157 969.342
            874.511 964.39L579.827 564.193C578.414 562.273 576.172 561.14
            573.788 561.14Z"
              fill="#F9CA87"
              stroke="black"
              stroke-width="5"
            />
            <svg
              width="1250"
              height="680"
              viewBox="-750 -190 1275 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M236.871 62.9973L237.745 63.6807L238.654 63.0441C242.333 60.468 247.424 58.838 253.093 58.838C258.866 58.838 264.034 60.5221 267.717 63.1698C271.403 65.8191 273.508 69.3458 273.5 73.0893V73.0926C273.5 76.8298 271.39 80.3544 267.701 83.0028C264.014 85.6493 258.847 87.3333 253.074 87.3333C248.36 87.3333 244.065 86.2 240.63 84.3505L239.64 83.8175L238.85 84.6181C234.365 89.1679 226.862 92.2584 218.226 92.2584C215.294 92.2584 212.474 91.8829 209.86 91.2262L209.198 91.0599L208.638 91.45C203.749 94.8535 197.039 96.9876 189.577 96.9876C179.516 96.9876 170.911 93.1282 166.224 87.5723L165.446 86.65L164.379 87.2124C158.881 90.1085 152.185 91.9174 144.85 92.1895L144.412 92.2057L144.051 92.4562C139.025 95.9447 132.139 98.1349 124.461 98.1349C114.715 98.1349 106.228 94.6113 101.261 89.4194L100.448 88.5701L99.4295 89.156C95.6578 91.3248 90.8318 92.6502 85.5404 92.6502C79.6881 92.6502 74.4264 91.0295 70.5223 88.4494L69.914 88.0474L69.222 88.2774C66.4716 89.1918 63.4156 89.7119 60.1647 89.7119C54.8392 89.7119 50.0031 88.3471 46.2786 86.1189L45.1792 85.4612L44.3576 86.4442C41.7172 89.6035 36.741 91.8806 30.8718 91.8806C23.5122 91.8806 17.6852 88.3399 15.9075 84.0101L15.5003 83.0185L14.4303 83.0825C14.189 83.097 13.9998 83.1078 13.8183 83.1078C10.2769 83.1078 7.13659 82.0744 4.91947 80.4812C2.69967 78.8861 1.5 76.8167 1.5 74.6877C1.5 72.5528 2.70348 70.4835 4.92566 68.8898C7.14543 67.2978 10.2862 66.2676 13.8183 66.2676C16.7357 66.2676 19.3701 66.9793 21.4575 68.1253L22.0975 68.4766L22.7689 68.1897C25.1302 67.1803 27.8915 66.5894 30.8718 66.5894C34.0183 66.5894 36.9228 67.2466 39.3496 68.3564L40.4503 68.8598L41.1749 67.8903C44.6856 63.1933 51.786 59.8174 60.1647 59.8174C61.5499 59.8174 62.9064 59.9235 64.2375 60.0985L65.1877 60.2234L65.7003 59.4137C65.8018 59.2534 65.8668 59.1523 65.9393 59.057L66.6626 58.105L65.8959 57.1876C64.0904 55.0274 63.0876 52.5873 63.0876 50.0343C63.0876 46.3494 65.1307 42.8788 68.7123 40.2474C72.2929 37.6169 77.3233 35.9075 82.9748 35.8074L84.94 35.7726L84.3878 33.8862C83.8568 32.072 83.5518 30.2137 83.5518 28.3192C83.5518 21.1045 87.6211 14.4354 94.4791 9.51209C101.335 4.59044 110.882 1.5 121.499 1.5C139.562 1.5 154.262 10.4073 158.283 21.8756L158.589 22.7473L159.505 22.8667C172.571 24.571 182.364 31.9637 184.392 40.7995L184.719 42.2264L186.154 41.9337C187.91 41.5755 189.758 41.3764 191.681 41.3764C197.454 41.3764 202.622 43.0604 206.308 45.7069C209.99 48.3503 212.099 51.8666 212.107 55.5958C212.107 55.6029 212.106 55.6135 212.104 55.6321L212.104 55.6353C212.102 55.6592 212.098 55.7001 212.095 55.7431C212.091 55.7892 212.088 55.8526 212.088 55.9248V57.6305L213.78 57.4125C215.243 57.2239 216.719 57.117 218.246 57.117C225.687 57.117 232.31 59.4341 236.871 62.9973Z"
                fill="white"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <svg
              className="oblacic oblacic1"
              width="1250"
              height="1080"
              viewBox="-800 -475 1275 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M236.871 62.9973L237.745 63.6807L238.654 63.0441C242.333 60.468 247.424 58.838 253.093 58.838C258.866 58.838 264.034 60.5221 267.717 63.1698C271.403 65.8191 273.508 69.3458 273.5 73.0893V73.0926C273.5 76.8298 271.39 80.3544 267.701 83.0028C264.014 85.6493 258.847 87.3333 253.074 87.3333C248.36 87.3333 244.065 86.2 240.63 84.3505L239.64 83.8175L238.85 84.6181C234.365 89.1679 226.862 92.2584 218.226 92.2584C215.294 92.2584 212.474 91.8829 209.86 91.2262L209.198 91.0599L208.638 91.45C203.749 94.8535 197.039 96.9876 189.577 96.9876C179.516 96.9876 170.911 93.1282 166.224 87.5723L165.446 86.65L164.379 87.2124C158.881 90.1085 152.185 91.9174 144.85 92.1895L144.412 92.2057L144.051 92.4562C139.025 95.9447 132.139 98.1349 124.461 98.1349C114.715 98.1349 106.228 94.6113 101.261 89.4194L100.448 88.5701L99.4295 89.156C95.6578 91.3248 90.8318 92.6502 85.5404 92.6502C79.6881 92.6502 74.4264 91.0295 70.5223 88.4494L69.914 88.0474L69.222 88.2774C66.4716 89.1918 63.4156 89.7119 60.1647 89.7119C54.8392 89.7119 50.0031 88.3471 46.2786 86.1189L45.1792 85.4612L44.3576 86.4442C41.7172 89.6035 36.741 91.8806 30.8718 91.8806C23.5122 91.8806 17.6852 88.3399 15.9075 84.0101L15.5003 83.0185L14.4303 83.0825C14.189 83.097 13.9998 83.1078 13.8183 83.1078C10.2769 83.1078 7.13659 82.0744 4.91947 80.4812C2.69967 78.8861 1.5 76.8167 1.5 74.6877C1.5 72.5528 2.70348 70.4835 4.92566 68.8898C7.14543 67.2978 10.2862 66.2676 13.8183 66.2676C16.7357 66.2676 19.3701 66.9793 21.4575 68.1253L22.0975 68.4766L22.7689 68.1897C25.1302 67.1803 27.8915 66.5894 30.8718 66.5894C34.0183 66.5894 36.9228 67.2466 39.3496 68.3564L40.4503 68.8598L41.1749 67.8903C44.6856 63.1933 51.786 59.8174 60.1647 59.8174C61.5499 59.8174 62.9064 59.9235 64.2375 60.0985L65.1877 60.2234L65.7003 59.4137C65.8018 59.2534 65.8668 59.1523 65.9393 59.057L66.6626 58.105L65.8959 57.1876C64.0904 55.0274 63.0876 52.5873 63.0876 50.0343C63.0876 46.3494 65.1307 42.8788 68.7123 40.2474C72.2929 37.6169 77.3233 35.9075 82.9748 35.8074L84.94 35.7726L84.3878 33.8862C83.8568 32.072 83.5518 30.2137 83.5518 28.3192C83.5518 21.1045 87.6211 14.4354 94.4791 9.51209C101.335 4.59044 110.882 1.5 121.499 1.5C139.562 1.5 154.262 10.4073 158.283 21.8756L158.589 22.7473L159.505 22.8667C172.571 24.571 182.364 31.9637 184.392 40.7995L184.719 42.2264L186.154 41.9337C187.91 41.5755 189.758 41.3764 191.681 41.3764C197.454 41.3764 202.622 43.0604 206.308 45.7069C209.99 48.3503 212.099 51.8666 212.107 55.5958C212.107 55.6029 212.106 55.6135 212.104 55.6321L212.104 55.6353C212.102 55.6592 212.098 55.7001 212.095 55.7431C212.091 55.7892 212.088 55.8526 212.088 55.9248V57.6305L213.78 57.4125C215.243 57.2239 216.719 57.117 218.246 57.117C225.687 57.117 232.31 59.4341 236.871 62.9973Z"
                fill="white"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <svg
              width="1075"
              height="100"
              viewBox="-700 -10 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M236.871 62.9973L237.745 63.6807L238.654 63.0441C242.333 60.468 247.424 58.838 253.093 58.838C258.866 58.838 264.034 60.5221 267.717 63.1698C271.403 65.8191 273.508 69.3458 273.5 73.0893V73.0926C273.5 76.8298 271.39 80.3544 267.701 83.0028C264.014 85.6493 258.847 87.3333 253.074 87.3333C248.36 87.3333 244.065 86.2 240.63 84.3505L239.64 83.8175L238.85 84.6181C234.365 89.1679 226.862 92.2584 218.226 92.2584C215.294 92.2584 212.474 91.8829 209.86 91.2262L209.198 91.0599L208.638 91.45C203.749 94.8535 197.039 96.9876 189.577 96.9876C179.516 96.9876 170.911 93.1282 166.224 87.5723L165.446 86.65L164.379 87.2124C158.881 90.1085 152.185 91.9174 144.85 92.1895L144.412 92.2057L144.051 92.4562C139.025 95.9447 132.139 98.1349 124.461 98.1349C114.715 98.1349 106.228 94.6113 101.261 89.4194L100.448 88.5701L99.4295 89.156C95.6578 91.3248 90.8318 92.6502 85.5404 92.6502C79.6881 92.6502 74.4264 91.0295 70.5223 88.4494L69.914 88.0474L69.222 88.2774C66.4716 89.1918 63.4156 89.7119 60.1647 89.7119C54.8392 89.7119 50.0031 88.3471 46.2786 86.1189L45.1792 85.4612L44.3576 86.4442C41.7172 89.6035 36.741 91.8806 30.8718 91.8806C23.5122 91.8806 17.6852 88.3399 15.9075 84.0101L15.5003 83.0185L14.4303 83.0825C14.189 83.097 13.9998 83.1078 13.8183 83.1078C10.2769 83.1078 7.13659 82.0744 4.91947 80.4812C2.69967 78.8861 1.5 76.8167 1.5 74.6877C1.5 72.5528 2.70348 70.4835 4.92566 68.8898C7.14543 67.2978 10.2862 66.2676 13.8183 66.2676C16.7357 66.2676 19.3701 66.9793 21.4575 68.1253L22.0975 68.4766L22.7689 68.1897C25.1302 67.1803 27.8915 66.5894 30.8718 66.5894C34.0183 66.5894 36.9228 67.2466 39.3496 68.3564L40.4503 68.8598L41.1749 67.8903C44.6856 63.1933 51.786 59.8174 60.1647 59.8174C61.5499 59.8174 62.9064 59.9235 64.2375 60.0985L65.1877 60.2234L65.7003 59.4137C65.8018 59.2534 65.8668 59.1523 65.9393 59.057L66.6626 58.105L65.8959 57.1876C64.0904 55.0274 63.0876 52.5873 63.0876 50.0343C63.0876 46.3494 65.1307 42.8788 68.7123 40.2474C72.2929 37.6169 77.3233 35.9075 82.9748 35.8074L84.94 35.7726L84.3878 33.8862C83.8568 32.072 83.5518 30.2137 83.5518 28.3192C83.5518 21.1045 87.6211 14.4354 94.4791 9.51209C101.335 4.59044 110.882 1.5 121.499 1.5C139.562 1.5 154.262 10.4073 158.283 21.8756L158.589 22.7473L159.505 22.8667C172.571 24.571 182.364 31.9637 184.392 40.7995L184.719 42.2264L186.154 41.9337C187.91 41.5755 189.758 41.3764 191.681 41.3764C197.454 41.3764 202.622 43.0604 206.308 45.7069C209.99 48.3503 212.099 51.8666 212.107 55.5958C212.107 55.6029 212.106 55.6135 212.104 55.6321L212.104 55.6353C212.102 55.6592 212.098 55.7001 212.095 55.7431C212.091 55.7892 212.088 55.8526 212.088 55.9248V57.6305L213.78 57.4125C215.243 57.2239 216.719 57.117 218.246 57.117C225.687 57.117 232.31 59.4341 236.871 62.9973Z"
                fill="white"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <svg
              width="275"
              height="700"
              viewBox="0 -265 275 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M236.871 62.9973L237.745 63.6807L238.654 63.0441C242.333 60.468 247.424 58.838 253.093 58.838C258.866 58.838 264.034 60.5221 267.717 63.1698C271.403 65.8191 273.508 69.3458 273.5 73.0893V73.0926C273.5 76.8298 271.39 80.3544 267.701 83.0028C264.014 85.6493 258.847 87.3333 253.074 87.3333C248.36 87.3333 244.065 86.2 240.63 84.3505L239.64 83.8175L238.85 84.6181C234.365 89.1679 226.862 92.2584 218.226 92.2584C215.294 92.2584 212.474 91.8829 209.86 91.2262L209.198 91.0599L208.638 91.45C203.749 94.8535 197.039 96.9876 189.577 96.9876C179.516 96.9876 170.911 93.1282 166.224 87.5723L165.446 86.65L164.379 87.2124C158.881 90.1085 152.185 91.9174 144.85 92.1895L144.412 92.2057L144.051 92.4562C139.025 95.9447 132.139 98.1349 124.461 98.1349C114.715 98.1349 106.228 94.6113 101.261 89.4194L100.448 88.5701L99.4295 89.156C95.6578 91.3248 90.8318 92.6502 85.5404 92.6502C79.6881 92.6502 74.4264 91.0295 70.5223 88.4494L69.914 88.0474L69.222 88.2774C66.4716 89.1918 63.4156 89.7119 60.1647 89.7119C54.8392 89.7119 50.0031 88.3471 46.2786 86.1189L45.1792 85.4612L44.3576 86.4442C41.7172 89.6035 36.741 91.8806 30.8718 91.8806C23.5122 91.8806 17.6852 88.3399 15.9075 84.0101L15.5003 83.0185L14.4303 83.0825C14.189 83.097 13.9998 83.1078 13.8183 83.1078C10.2769 83.1078 7.13659 82.0744 4.91947 80.4812C2.69967 78.8861 1.5 76.8167 1.5 74.6877C1.5 72.5528 2.70348 70.4835 4.92566 68.8898C7.14543 67.2978 10.2862 66.2676 13.8183 66.2676C16.7357 66.2676 19.3701 66.9793 21.4575 68.1253L22.0975 68.4766L22.7689 68.1897C25.1302 67.1803 27.8915 66.5894 30.8718 66.5894C34.0183 66.5894 36.9228 67.2466 39.3496 68.3564L40.4503 68.8598L41.1749 67.8903C44.6856 63.1933 51.786 59.8174 60.1647 59.8174C61.5499 59.8174 62.9064 59.9235 64.2375 60.0985L65.1877 60.2234L65.7003 59.4137C65.8018 59.2534 65.8668 59.1523 65.9393 59.057L66.6626 58.105L65.8959 57.1876C64.0904 55.0274 63.0876 52.5873 63.0876 50.0343C63.0876 46.3494 65.1307 42.8788 68.7123 40.2474C72.2929 37.6169 77.3233 35.9075 82.9748 35.8074L84.94 35.7726L84.3878 33.8862C83.8568 32.072 83.5518 30.2137 83.5518 28.3192C83.5518 21.1045 87.6211 14.4354 94.4791 9.51209C101.335 4.59044 110.882 1.5 121.499 1.5C139.562 1.5 154.262 10.4073 158.283 21.8756L158.589 22.7473L159.505 22.8667C172.571 24.571 182.364 31.9637 184.392 40.7995L184.719 42.2264L186.154 41.9337C187.91 41.5755 189.758 41.3764 191.681 41.3764C197.454 41.3764 202.622 43.0604 206.308 45.7069C209.99 48.3503 212.099 51.8666 212.107 55.5958C212.107 55.6029 212.106 55.6135 212.104 55.6321L212.104 55.6353C212.102 55.6592 212.098 55.7001 212.095 55.7431C212.091 55.7892 212.088 55.8526 212.088 55.9248V57.6305L213.78 57.4125C215.243 57.2239 216.719 57.117 218.246 57.117C225.687 57.117 232.31 59.4341 236.871 62.9973Z"
                fill="white"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            <svg
              width="1620"
              height="440"
              viewBox="-200 -145 500 453"
              fill="none"
            >
              <defs>
                <pattern id="img2" width="1" height="1">
                  <image href={os2s} x="0" y="-100" width="650" height="650" />
                </pattern>
              </defs>
              <path
                d="M10.3609 290.972H638C642.142 290.972 645.5 287.614 645.5 283.472V10.3617C645.5 6.21957 642.142 2.86169 638 2.86169H39.3225C32.9963 2.86169 29.5119 10.2121 33.5167 15.1095L115.27 115.083C125.444 127.526 124.996 145.536 114.215 157.457L4.79833 278.441C0.437106 283.263 3.85899 290.972 10.3609 290.972Z"
                stroke="black"
                stroke-width="5"
                fill="url(#img2)"
              />
            </svg>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutFonis;
