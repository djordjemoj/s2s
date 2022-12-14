import React from "react";
import "../Footer/Footer.css";
import LOGO from "../../assets/s2slogo.png";
import FONISLOGO from "../../assets/fonislogo.png";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="CeoFooter" >
      <div className="first footer-deo">
        <svg className="base" viewBox="0 0 588 382" fill="none">
          <path
            d="M2.5 12.04C2.5 6.79332 6.75329 2.54004 12 2.54004L575.382 2.54004C582.741 2.54004 587.305 10.5448 583.558 16.8776L485.53 182.559C482.848 187.092 482.835 192.723 485.496 197.269L583.693 365.002C587.401 371.335 582.834 379.301 575.495 379.301H12C6.75329 379.301 2.5 375.048 2.5 369.801L2.5 12.04Z"
            fill="var(--accent-color)"
            stroke="black"
            stroke-width="5"
          />

          <switch>
            <foreignObject
              x="10%"
              y="6%"
              width="450"
              height="1000"
              fontSize="35px"
            >
              <p
                style={{
                  color: "#f0f8ffc3",
                  // marginLeft: "0%",
                  marginRight: "6.5%",
                  textAlign: "center",
                }}
              >
                ADRESA: <br />
                Jove Ilića 154, Beograd <br />
                MEJL: <br />{" "}
                <a
                  href="mailto:s2s@fonis.rs"
                  style={{
                    color: "#ffa142c3",
                  }}
                >
                  s2s@fonis.rs
                </a>{" "}
                <br></br>
                NAŠ SAJT: <br />
                <a
                  href="https://fonis.rs/"
                   target="_blank" rel="noreferrer noopener"
                  style={{
                    color: "#ffa142c3",
                  }}
                >
                  fonis.rs
                </a>
              </p>
              <a href="https://fonis.rs/"  target="_blank" rel="noreferrer noopener">
                <img className="img-first" src={FONISLOGO} alt="FONIS" />
              </a>
            </foreignObject>
          </switch>
        </svg>
      </div>

      <div className="second footer-deo" >
        <HashLink to="#">
          <svg
            className="base"
            width="588"
            height="382"
            viewBox="0 0 421 383"
            fill="none"
          >
            <path
              d="M415.301 199.761C418.242 194.473 418.242 188.04 415.301 182.751L320.088 11.5357C317.001 5.9836 311.147 2.54076 304.794 2.54076H115.65C109.297 2.54076 103.444 5.9836 100.356 11.5357L5.14352 182.751C2.20254 188.04 2.20251 194.473 5.14352 199.761L100.356 370.977C103.444 376.529 109.297 379.972 115.65 379.972H304.794C311.147 379.972 317.001 376.529 320.088 370.977L415.301 199.761Z"
              fill="var(--accent-color)"
              stroke="black"
              stroke-width="5"
            />
          </svg>

          <img className="second-img" src={LOGO} alt="LOGO" />
        </HashLink>
      </div>
      <div className="third footer-deo">
        <svg
          className="base"
          width="8000"
          height="382"
          viewBox="0 0 588 382"
          fill="none"
        >
          <path
            d="M585.5 12.04C585.5 6.79332 581.247 2.54004 576 2.54004L12.6177 2.54004C5.25946 2.54004 0.694702 10.5448 4.44159 16.8776L102.47 182.559C105.152 187.092 105.165 192.723 102.504 197.269L4.30664 365.002C0.598938 371.335 5.16638 379.301 12.505 379.301H576C581.247 379.301 585.5 375.048 585.5 369.801V12.04Z"
            fill="var(--accent-color)"
            stroke="black"
            stroke-width="5"
          />
        </svg>
        <div className="grid-proba">
          <div className="grid-first">
            <a
              className="links"
              href="https://www.facebook.com/fonis.rs"
               target="_blank" rel="noreferrer noopener"
            >
              <svg
                className="base"
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
                <FontAwesomeIcon
                  className="gl"
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </div>
            </a>
          </div>
          <div className="grid-second">
            <a
              className="links"
              href="https://www.instagram.com/fonis_fon/"
               target="_blank" rel="noreferrer noopener"
            >
              <svg
                className="base"
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
                <FontAwesomeIcon
                  className="gl"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </div>
            </a>
          </div>
          <div className="grid-third">
            <a
              className="links"
              href="https://www.linkedin.com/company/fonis/"
               target="_blank" rel="noreferrer noopener"
            >
              <svg
                className="base"
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
                <FontAwesomeIcon
                  className="gl"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
