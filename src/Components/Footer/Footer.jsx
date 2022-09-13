import React from "react";
import "../Footer/Footer.css";
import LOGO from "../../assets/s2slogo.png";
import FONISLOGO from "../../assets/fonislogo.png";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
// moramo da nadjemo drugo resenje za ovo iznad ali nmvz za sad
const Footer = () => {
  return (
    <div className="CeoFooter">
      <div className="first">
        <svg
          className="base"
          xmlns="http://www.w3.org/2000/svg"
          width="588"
          height="382"
          viewBox="0 0 588 382"
          fill="none"
        >
          <path
            d="M2.5 12.04C2.5 6.79332 6.75329 2.54004 12 2.54004L575.382 2.54004C582.741 2.54004 587.305 10.5448 583.558 16.8776L485.53 182.559C482.848 187.092 482.835 192.723 485.496 197.269L583.693 365.002C587.401 371.335 582.834 379.301 575.495 379.301H12C6.75329 379.301 2.5 375.048 2.5 369.801L2.5 12.04Z"
            fill="#0C5073"
            stroke="black"
            stroke-width="5"
          />
        </svg>
        <div className="first-text">
          <p className="text-kontakt">
            {/* ovo cemo vrv da prebacimo u sam svg <text> jer je lakse za resp */}
            ADRESA <br />
            Fakultet Organizacionih nauka <br />
            Jove Ilića 154, Beograd
            <br />
            <br />
            NAŠ SAJT:<span style={{ color: "orange" }}> fonis.rs</span> <br />
            <br />
          </p>
          <a href="https://fonis.rs/" target="_blank">
            <img className="img-first" src={FONISLOGO} alt="FONIS" />
          </a>
        </div>
      </div>

      <div className="second">
        <svg
          className="base"
          xmlns="http://www.w3.org/2000/svg"
          width="588"
          height="382"
          viewBox="0 0 421 383"
          fill="none"
        >
          <path
            d="M415.301 199.761C418.242 194.473 418.242 188.04 415.301 182.751L320.088 11.5357C317.001 5.9836 311.147 2.54076 304.794 2.54076H115.65C109.297 2.54076 103.444 5.9836 100.356 11.5357L5.14352 182.751C2.20254 188.04 2.20251 194.473 5.14352 199.761L100.356 370.977C103.444 376.529 109.297 379.972 115.65 379.972H304.794C311.147 379.972 317.001 376.529 320.088 370.977L415.301 199.761Z"
            fill="#0C5073"
            stroke="black"
            stroke-width="5"
          />
        </svg>
        <a href="#">
          <img className="second-img" src={LOGO} alt="LOGO" />
        </a>
      </div>
      <div className="third">
        <svg
          className="base"
          xmlns="http://www.w3.org/2000/svg"
          width="588"
          height="382"
          viewBox="0 0 588 382"
          fill="none"
        >
          <path
            d="M585.5 12.04C585.5 6.79332 581.247 2.54004 576 2.54004L12.6177 2.54004C5.25946 2.54004 0.694702 10.5448 4.44159 16.8776L102.47 182.559C105.152 187.092 105.165 192.723 102.504 197.269L4.30664 365.002C0.598938 371.335 5.16638 379.301 12.505 379.301H576C581.247 379.301 585.5 375.048 585.5 369.801V12.04Z"
            fill="#0C5073"
            stroke="black"
            stroke-width="5"
          />
        </svg>
        <div className="grid-proba">
          <div className="grid-first">
            <a
              className="links"
              href="https://www.facebook.com/fonis.rs"
              target="_blank"
            >
              <svg
                className="base"
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="124"
                viewBox="0 0 142 124"
                fill="none"
              >
                <path
                  d="M99.3583 0.59668L42.3424 0.59668C39.9798 0.597889 37.6591 1.20807 35.6134 2.36594C33.5677 3.52382 31.8689 5.18863 30.6876 7.19322L2.17959 55.5634C1.00431 57.5687 0.385864 59.8407 0.385864 62.1531C0.385864 64.4655 1.00431 66.7376 2.17959 68.7429L30.6876 117.086C31.8667 119.092 33.565 120.759 35.6113 121.917C37.6575 123.075 39.9792 123.684 42.3424 123.683H99.3583C101.717 123.679 104.033 123.068 106.074 121.91C108.115 120.752 109.809 119.088 110.985 117.086L139.493 68.7158C140.676 66.7127 141.298 64.4398 141.298 62.1261C141.298 59.8123 140.676 57.5394 139.493 55.5363L110.985 7.19322C109.807 5.1926 108.112 3.53034 106.072 2.3727C104.031 1.21506 101.716 0.602634 99.3583 0.59668V0.59668Z"
                  fill="#199AD4"
                />
              </svg>
              <div className="grid-first-logo">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>
          </div>
          <div className="grid-second">
            <a
              className="links"
              href="https://www.instagram.com/fonis_fon/"
              target="_blank"
            >
              <svg
                className="base"
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="124"
                viewBox="0 0 142 124"
                fill="none"
              >
                <path
                  d="M99.3583 0.59668L42.3424 0.59668C39.9798 0.597889 37.6591 1.20807 35.6134 2.36594C33.5677 3.52382 31.8689 5.18863 30.6876 7.19322L2.17959 55.5634C1.00431 57.5687 0.385864 59.8407 0.385864 62.1531C0.385864 64.4655 1.00431 66.7376 2.17959 68.7429L30.6876 117.086C31.8667 119.092 33.565 120.759 35.6113 121.917C37.6575 123.075 39.9792 123.684 42.3424 123.683H99.3583C101.717 123.679 104.033 123.068 106.074 121.91C108.115 120.752 109.809 119.088 110.985 117.086L139.493 68.7158C140.676 66.7127 141.298 64.4398 141.298 62.1261C141.298 59.8123 140.676 57.5394 139.493 55.5363L110.985 7.19322C109.807 5.1926 108.112 3.53034 106.072 2.3727C104.031 1.21506 101.716 0.602634 99.3583 0.59668V0.59668Z"
                  fill="#199AD4"
                />
              </svg>
              <div className="grid-second-logo">
                <svg
                  viewBox="0 0 72 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.0624 0.657227L21.5544 0.657227C20.3732 0.657842 19.2128 0.968186 18.1899 1.5571C17.1671 2.14601 16.3177 2.99276 15.727 4.01232L1.47304 28.614C0.885396 29.634 0.576172 30.7896 0.576172 31.9657C0.576172 33.1418 0.885396 34.2974 1.47304 35.3173L15.727 59.9053C16.3166 60.9258 17.1658 61.7733 18.1889 62.3623C19.212 62.9514 20.3729 63.2612 21.5544 63.2604H50.0624C51.2416 63.2587 52.3997 62.9478 53.4202 62.3589C54.4406 61.77 55.2876 60.9238 55.876 59.9053L70.13 35.3036C70.721 34.2848 71.0322 33.1287 71.0322 31.9519C71.0322 30.7751 70.721 29.6191 70.13 28.6003L55.876 4.01232C55.2865 2.99478 54.4393 2.14932 53.4191 1.56053C52.3988 0.971743 51.2414 0.660255 50.0624 0.657227V0.657227Z"
                    fill="#199AD4"
                  />
                </svg>  
                <i className="fab fa-instagram"></i>
              </div>
            </a>
          </div>
          <div className="grid-third">
            <a
              className="links"
              href="https://www.linkedin.com/company/fonis/"
              target="_blank"
            >
              <svg
                className="base"
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="124"
                viewBox="0 0 142 124"
                fill="none"
              >
                <path
                  d="M99.3583 0.59668L42.3424 0.59668C39.9798 0.597889 37.6591 1.20807 35.6134 2.36594C33.5677 3.52382 31.8689 5.18863 30.6876 7.19322L2.17959 55.5634C1.00431 57.5687 0.385864 59.8407 0.385864 62.1531C0.385864 64.4655 1.00431 66.7376 2.17959 68.7429L30.6876 117.086C31.8667 119.092 33.565 120.759 35.6113 121.917C37.6575 123.075 39.9792 123.684 42.3424 123.683H99.3583C101.717 123.679 104.033 123.068 106.074 121.91C108.115 120.752 109.809 119.088 110.985 117.086L139.493 68.7158C140.676 66.7127 141.298 64.4398 141.298 62.1261C141.298 59.8123 140.676 57.5394 139.493 55.5363L110.985 7.19322C109.807 5.1926 108.112 3.53034 106.072 2.3727C104.031 1.21506 101.716 0.602634 99.3583 0.59668V0.59668Z"
                  fill="#199AD4"
                />
              </svg>
              <div className="grid-third-logo">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;