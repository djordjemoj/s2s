import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Agenda/Agenda.Module.css";

const Agenda = () => {
  const [visibleNedelja, setVisibleNedelja] = useState(false);
  const [visibleSubota, setVisibleSubota] = useState(false);

  async function prikaziNedelju() {
    if (visibleSubota) {
      setVisibleSubota(false);
      await sleep(2700);
    }

    setVisibleNedelja(!visibleNedelja);
  }
  async function prikaziSubotu() {
    if (visibleNedelja) {
      setVisibleNedelja(false);
      await sleep(2700);
    }

    setVisibleSubota(!visibleSubota);
  }
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="Agenda-sve">
      <div className="Agenda-container">
        <div className="Agenda-dugmad">
          <div className="Subota ag-dug">
            {/* <svg
              onClick={() => prikaziSubotu()}
              viewBox="0 0 338 370"
              fill="none"
            >
              <path
                d="M160.528 364.456L11.5282 282.021C5.95746 278.939 2.5 273.075 2.5 266.708V103.292C2.5 96.9253 5.95746 91.0611 11.5282 87.9791L160.528 5.54419C165.8 2.62778 172.2 2.62778 177.472 5.54419L326.472 87.9791C332.043 91.0611 335.5 96.9253 335.5 103.292V266.708C335.5 273.075 332.043 278.939 326.472 282.021L177.472 364.456C172.2 367.372 165.8 367.372 160.528 364.456Z"
                fill="#F9CA87"
                stroke="black"
                
                stroke-width="5"
              />{" "}
              <text
                x="50%"
                y="50%"
                fill="black"
                textAnchor="middle"
                dominant-baseline="middle"
                fontSize="200%"
                fontWeight="700"
              >
                SUBOTA
              </text>
              
            </svg> */}
            <svg
              onClick={() => prikaziSubotu()}
              viewBox="0 0 191 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.7802 202.011L11.3014 160.612C5.4041 157.334 1.75906 151.105 1.78966 144.358L2.15456 63.8919C2.18516 57.1449 5.88654 50.9495 11.8133 47.7251L86.6646 7.00314C92.2294 3.97566 98.9565 4.00615 104.494 7.08399L178.972 48.4831C184.87 51.7612 188.515 57.9898 188.484 64.7369L188.119 145.203C188.089 151.95 184.387 158.145 178.461 161.37L103.609 202.092C98.0445 205.119 91.3174 205.089 85.7802 202.011Z"
                fill="#F9CA87"
                stroke="black"
                stroke-width="3"
              />
              <path
                d="M56.9858 100.565C56.9176 99.8778 56.625 99.3437 56.108 98.9631C55.5909 98.5824 54.8892 98.392 54.0028 98.392C53.4006 98.392 52.892 98.4773 52.4773 98.6477C52.0625 98.8125 51.7443 99.0426 51.5227 99.3381C51.3068 99.6335 51.1989 99.9688 51.1989 100.344C51.1875 100.656 51.2528 100.929 51.3949 101.162C51.5426 101.395 51.7443 101.597 52 101.767C52.2557 101.932 52.5511 102.077 52.8864 102.202C53.2216 102.321 53.5795 102.423 53.9602 102.509L55.5284 102.884C56.2898 103.054 56.9886 103.281 57.625 103.565C58.2614 103.849 58.8125 104.199 59.2784 104.614C59.7443 105.028 60.1051 105.517 60.3608 106.08C60.6222 106.642 60.7557 107.287 60.7614 108.014C60.7557 109.082 60.483 110.009 59.9432 110.793C59.4091 111.571 58.6364 112.176 57.625 112.608C56.6193 113.034 55.4063 113.247 53.9858 113.247C52.5767 113.247 51.3494 113.031 50.304 112.599C49.2642 112.168 48.4517 111.528 47.8665 110.682C47.2869 109.83 46.983 108.776 46.9545 107.52H50.5256C50.5653 108.105 50.733 108.594 51.0284 108.986C51.3295 109.372 51.7301 109.665 52.2301 109.864C52.7358 110.057 53.3068 110.153 53.9432 110.153C54.5682 110.153 55.1108 110.062 55.571 109.881C56.0369 109.699 56.3977 109.446 56.6534 109.122C56.9091 108.798 57.0369 108.426 57.0369 108.006C57.0369 107.614 56.9205 107.284 56.6875 107.017C56.4602 106.75 56.125 106.523 55.6818 106.335C55.2443 106.148 54.7074 105.977 54.071 105.824L52.1705 105.347C50.6989 104.989 49.5369 104.429 48.6847 103.668C47.8324 102.906 47.4091 101.881 47.4148 100.591C47.4091 99.5341 47.6903 98.6108 48.2585 97.821C48.8324 97.0312 49.6193 96.4148 50.6193 95.9716C51.6193 95.5284 52.7557 95.3068 54.0284 95.3068C55.3239 95.3068 56.4545 95.5284 57.4205 95.9716C58.392 96.4148 59.1477 97.0312 59.6875 97.821C60.2273 98.6108 60.5057 99.5256 60.5227 100.565H56.9858ZM74.0249 95.5455H77.7152V106.881C77.7152 108.153 77.4112 109.267 76.8033 110.222C76.201 111.176 75.3572 111.92 74.272 112.455C73.1868 112.983 71.9226 113.247 70.4794 113.247C69.0305 113.247 67.7635 112.983 66.6783 112.455C65.593 111.92 64.7493 111.176 64.147 110.222C63.5447 109.267 63.2436 108.153 63.2436 106.881V95.5455H66.9339V106.565C66.9339 107.23 67.0788 107.821 67.3686 108.338C67.6641 108.855 68.0788 109.261 68.6129 109.557C69.147 109.852 69.7692 110 70.4794 110C71.1953 110 71.8175 109.852 72.3459 109.557C72.88 109.261 73.2919 108.855 73.5817 108.338C73.8771 107.821 74.0249 107.23 74.0249 106.565V95.5455ZM80.7514 113V95.5455H87.7401C89.0241 95.5455 90.0952 95.7358 90.9531 96.1165C91.8111 96.4972 92.456 97.0256 92.8878 97.7017C93.3196 98.3722 93.5355 99.1449 93.5355 100.02C93.5355 100.702 93.3991 101.301 93.1264 101.818C92.8537 102.33 92.4787 102.75 92.0014 103.08C91.5298 103.403 90.9901 103.634 90.3821 103.77V103.94C91.0469 103.969 91.669 104.156 92.2486 104.503C92.8338 104.849 93.3082 105.335 93.6719 105.96C94.0355 106.58 94.2173 107.318 94.2173 108.176C94.2173 109.102 93.9872 109.929 93.527 110.656C93.0724 111.378 92.3991 111.949 91.5071 112.369C90.6151 112.79 89.5156 113 88.2088 113H80.7514ZM84.4418 109.983H87.4503C88.4787 109.983 89.2287 109.787 89.7003 109.395C90.1719 108.997 90.4077 108.469 90.4077 107.81C90.4077 107.327 90.2912 106.901 90.0582 106.531C89.8253 106.162 89.4929 105.872 89.0611 105.662C88.6349 105.452 88.1264 105.347 87.5355 105.347H84.4418V109.983ZM84.4418 102.849H87.1776C87.6832 102.849 88.1321 102.761 88.5241 102.585C88.9219 102.403 89.2344 102.148 89.4616 101.818C89.6946 101.489 89.8111 101.094 89.8111 100.634C89.8111 100.003 89.5866 99.4943 89.1378 99.108C88.6946 98.7216 88.0639 98.5284 87.2457 98.5284H84.4418V102.849ZM112.658 104.273C112.658 106.176 112.298 107.795 111.576 109.131C110.86 110.466 109.883 111.486 108.644 112.19C107.411 112.889 106.025 113.239 104.485 113.239C102.934 113.239 101.542 112.886 100.309 112.182C99.076 111.477 98.1016 110.457 97.3857 109.122C96.6697 107.787 96.3118 106.17 96.3118 104.273C96.3118 102.369 96.6697 100.75 97.3857 99.4148C98.1016 98.0795 99.076 97.0625 100.309 96.3636C101.542 95.6591 102.934 95.3068 104.485 95.3068C106.025 95.3068 107.411 95.6591 108.644 96.3636C109.883 97.0625 110.86 98.0795 111.576 99.4148C112.298 100.75 112.658 102.369 112.658 104.273ZM108.917 104.273C108.917 103.04 108.732 102 108.363 101.153C107.999 100.307 107.485 99.6648 106.82 99.2273C106.156 98.7898 105.377 98.571 104.485 98.571C103.593 98.571 102.815 98.7898 102.15 99.2273C101.485 99.6648 100.968 100.307 100.599 101.153C100.235 102 100.053 103.04 100.053 104.273C100.053 105.506 100.235 106.545 100.599 107.392C100.968 108.239 101.485 108.881 102.15 109.318C102.815 109.756 103.593 109.974 104.485 109.974C105.377 109.974 106.156 109.756 106.82 109.318C107.485 108.881 107.999 108.239 108.363 107.392C108.732 106.545 108.917 105.506 108.917 104.273ZM113.93 98.5881V95.5455H128.266V98.5881H122.922V113H119.274V98.5881H113.93ZM131.502 113H127.548L133.573 95.5455H138.329L144.346 113H140.391L136.019 99.5341H135.883L131.502 113ZM131.255 106.139H140.596V109.02H131.255V106.139Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="Agenda-agenda ag-dug">
            <svg viewBox="0 0 338 380" fill="none">
              <path
                d="M177.575 372.312L326.575 288.554C332.088 285.455 335.5 279.623 335.5 273.299V106.701C335.5 100.377 332.088 94.5446 326.575 91.4457L177.575 7.68832C172.25 4.69498 165.75 4.69498 160.425 7.68832L11.4247 91.4457C5.91195 94.5446 2.5 100.377 2.5 106.701L2.5 273.299C2.5 279.623 5.91196 285.455 11.4247 288.554L160.425 372.312C165.75 375.305 172.25 375.305 177.575 372.312Z"
                fill="#F9EEE1"
                stroke="black"
                stroke-width="5"
              />
              <path
                d="M70.832 202.52H88.592L88.064 196.328H71.408L70.832 202.52ZM79.616 187.736L84.368 198.632L84.08 200.696L88.112 209H97.328L79.616 173.288L61.952 209H71.12L75.296 200.36L74.912 198.584L79.616 187.736ZM116.052 196.856H124.98C124.692 197.72 124.292 198.536 123.78 199.304C123.3 200.04 122.708 200.696 122.004 201.272C121.3 201.816 120.452 202.248 119.46 202.568C118.468 202.856 117.364 203 116.148 203C114.164 203 112.404 202.568 110.868 201.704C109.364 200.808 108.164 199.56 107.268 197.96C106.404 196.328 105.972 194.408 105.972 192.2C105.972 189.96 106.42 188.072 107.316 186.536C108.244 184.968 109.476 183.768 111.012 182.936C112.58 182.104 114.292 181.688 116.148 181.688C118.1 181.688 119.716 182.136 120.996 183.032C122.308 183.896 123.348 185 124.116 186.344L131.316 182.6C130.26 181.032 128.996 179.656 127.524 178.472C126.084 177.256 124.42 176.312 122.532 175.64C120.644 174.968 118.516 174.632 116.148 174.632C113.492 174.632 111.028 175.048 108.756 175.88C106.484 176.712 104.5 177.896 102.804 179.432C101.108 180.968 99.7958 182.824 98.8678 185C97.9398 187.144 97.4758 189.544 97.4758 192.2C97.4758 194.856 97.9238 197.288 98.8198 199.496C99.7478 201.672 101.028 203.56 102.66 205.16C104.292 206.728 106.228 207.944 108.468 208.808C110.708 209.64 113.172 210.056 115.86 210.056C118.708 210.056 121.236 209.56 123.444 208.568C125.652 207.544 127.492 206.136 128.964 204.344C130.436 202.552 131.524 200.488 132.228 198.152C132.932 195.816 133.204 193.304 133.044 190.616H116.052V196.856ZM143.866 209H160.81V202.328H143.866V209ZM143.866 182.072H160.81V175.4H143.866V182.072ZM143.866 194.6H159.85V188.072H143.866V194.6ZM138.49 175.4V209H146.266V175.4H138.49ZM190.595 175.4V194.312L167.411 173.72V209H175.187V190.088L198.419 210.68V175.4H190.595ZM205.521 175.4V209H213.873V175.4H205.521ZM217.521 209C221.201 209 224.385 208.312 227.073 206.936C229.761 205.56 231.841 203.624 233.313 201.128C234.785 198.6 235.521 195.624 235.521 192.2C235.521 188.744 234.785 185.768 233.313 183.272C231.841 180.776 229.761 178.84 227.073 177.464C224.385 176.088 221.201 175.4 217.521 175.4H210.897V182.6H217.233C218.513 182.6 219.745 182.76 220.929 183.08C222.145 183.4 223.201 183.928 224.097 184.664C225.025 185.4 225.761 186.392 226.305 187.64C226.849 188.856 227.121 190.376 227.121 192.2C227.121 194.024 226.849 195.56 226.305 196.808C225.761 198.024 225.025 199 224.097 199.736C223.201 200.472 222.145 201 220.929 201.32C219.745 201.64 218.513 201.8 217.233 201.8H210.897V209H217.521ZM244.551 202.52H262.311L261.783 196.328H245.127L244.551 202.52ZM253.335 187.736L258.087 198.632L257.799 200.696L261.831 209H271.047L253.335 173.288L235.671 209H244.839L249.015 200.36L248.631 198.584L253.335 187.736Z"
                fill="black"
              />
            </svg>
          </div>

          <div className="Nedelja ag-dug">
            {/* <svg
              onClick={() => prikaziNedelju()}
              viewBox="0 0 338 370"
              fill="none"
            >
              <path
                d="M160.528 364.456L11.5282 282.021C5.95746 278.939 2.5 273.075 2.5 266.708V103.292C2.5 96.9253 5.95746 91.0611 11.5282 87.9791L160.528 5.54419C165.8 2.62778 172.2 2.62778 177.472 5.54419L326.472 87.9791C332.043 91.0611 335.5 96.9253 335.5 103.292V266.708C335.5 273.075 332.043 278.939 326.472 282.021L177.472 364.456C172.2 367.372 165.8 367.372 160.528 364.456Z"
                fill="#199AD4"
                stroke="black"
                stroke-width="5"
              />
            </svg> */}
            <svg
              onClick={() => prikaziNedelju()}
              viewBox="0 0 191 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.7802 202.011L11.3014 160.612C5.4041 157.334 1.75906 151.105 1.78966 144.358L2.15456 63.8919C2.18516 57.1448 5.88654 50.9495 11.8133 47.7251L86.6646 7.00314C92.2294 3.97564 98.9565 4.00615 104.494 7.08399L178.972 48.4831C184.87 51.7612 188.515 57.9898 188.484 64.7369L188.119 145.203C188.089 151.95 184.387 158.145 178.461 161.37L103.609 202.092C98.0445 205.119 91.3174 205.089 85.7802 202.011Z"
                fill="#199AD4"
                stroke="black"
                stroke-width="3"
              />
              <path
                d="M56.1165 95.5455V113H52.929L45.3352 102.014H45.2074V113H41.517V95.5455H44.7557L52.2898 106.523H52.4432V95.5455H56.1165ZM59.1655 113V95.5455H70.9268V98.5881H62.8558V102.747H70.3217V105.79H62.8558V109.957H70.9609V113H59.1655ZM80.0483 113H73.8608V95.5455H80.0994C81.8551 95.5455 83.3665 95.8949 84.6335 96.5938C85.9006 97.2869 86.875 98.2841 87.5568 99.5852C88.2443 100.886 88.5881 102.443 88.5881 104.256C88.5881 106.074 88.2443 107.636 87.5568 108.943C86.875 110.25 85.8949 111.253 84.6165 111.952C83.3438 112.651 81.821 113 80.0483 113ZM77.5511 109.838H79.8949C80.9858 109.838 81.9034 109.645 82.6477 109.259C83.3977 108.866 83.9602 108.261 84.3352 107.443C84.7159 106.619 84.9062 105.557 84.9062 104.256C84.9062 102.966 84.7159 101.912 84.3352 101.094C83.9602 100.276 83.4006 99.6733 82.6562 99.2869C81.9119 98.9006 80.9943 98.7074 79.9034 98.7074H77.5511V109.838ZM91.3217 113V95.5455H103.083V98.5881H95.0121V102.747H102.478V105.79H95.0121V109.957H103.117V113H91.3217ZM106.017 113V95.5455H109.707V109.957H117.19V113H106.017ZM126.623 95.5455H130.271V107.716C130.271 108.841 130.018 109.818 129.512 110.648C129.012 111.477 128.316 112.116 127.424 112.565C126.532 113.014 125.495 113.239 124.313 113.239C123.262 113.239 122.308 113.054 121.45 112.685C120.597 112.31 119.921 111.741 119.421 110.98C118.921 110.213 118.674 109.25 118.68 108.091H122.353C122.364 108.551 122.458 108.946 122.634 109.276C122.816 109.599 123.063 109.849 123.376 110.026C123.694 110.196 124.069 110.281 124.501 110.281C124.955 110.281 125.339 110.185 125.651 109.991C125.969 109.793 126.211 109.503 126.376 109.122C126.54 108.741 126.623 108.273 126.623 107.716V95.5455ZM136.33 113H132.376L138.401 95.5455H143.157L149.174 113H145.219L140.847 99.5341H140.711L136.33 113ZM136.083 106.139H145.424V109.02H136.083V106.139Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="Dropdown-subota Dropdown">
          <motion.div
            animate={{ height: visibleSubota ? "auto" : "1px" }}
            initial={{ height: "1px" }}
            transition={{ duration: 2.7, ease: [0.5, 0.48, 0.45, 0.96] }} //mozda ima neka funkcija za ovo
            style={{
              overflow: "hidden",
            }}
            className="DropdownGrid"
          >
            <motion.div
              className="ag-item agenda-grid-item-1 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.05",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="650"
                  dominant-baseline="middle"
                >
                  13.00
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-2 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.05",
              }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Otvaranje
                </text>
                {/* <text x="50%" y ="65%" fill = "black" textAnchor="middle" fontWeight="600" dominant-baseline="middle" fontWeight="600">45min</text> */}
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-3 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.3",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Prvi deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-4 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.3",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  13.45
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-5 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.6",
              }}
              // initial={{opacity: 0}}
              // exit={{opacity: 0}}
              // whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  15.00
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-6 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.6",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Pauza
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-7 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.9",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Drugi deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-8 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{
                delay: "1.5",
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.9",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  15.20
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-9 ag-item-levo-hex "
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "1.2",
              }}
              //initial={{opacity: 0}}
              // exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  16.45
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-10 ag-item-desno-rect"
              default
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "1.2",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Pauza
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-11 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "1.5",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Treci deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-12 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "1.5",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  16.55
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="Dropdown-nedelja">
          <motion.div
            animate={{ height: visibleNedelja ? "auto" : "1px" }}
            initial={{ height: "1px" }}
            transition={{ duration: 2.7, ease: [0.5, 0.48, 0.45, 0.96] }} //mozda ima neka funkcija za ovo
            style={{
              overflow: "hidden",
            }}
            className="DropdownGrid"
          >
            <motion.div
              className="ag-item agenda-grid-item-1 ag-item-levo-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.05",
              }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Panel
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-2 ag-item-desno-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.05",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="650"
                  dominant-baseline="middle"
                >
                  11.00
                </text>
              </svg>
            </motion.div>
            {/*  */}

            <motion.div
              className="ag-item agenda-grid-item-4 ag-item-levo-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.3",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  12.45
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-3 ag-item-desno-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.3",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Pauza
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-6 ag-item-levo-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.6",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Prvi deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-5 ag-item-desno-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "150%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.6",
              }}
              // initial={{opacity: 0}}
              // exit={{opacity: 0}}
              // whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  13.05
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-8 ag-item-levo-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-250%" }}
              transition={{
                delay: "1.5",
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "0.9",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  14.20
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-7 ag-item-desno-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "0.9",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Pauza - obrok
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-10 ag-item-levo-rect-nedelja"
              default
              animate={{ x: visibleNedelja ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "1.2",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Drugi deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-9 ag-item-desno-hex-nedelja "
              animate={{ x: visibleNedelja ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "1.2",
              }}
              //initial={{opacity: 0}}
              // exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  14.55
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-12 ag-item-levo-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "1.5",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  16.10
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-11 ag-item-desno-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "1.5",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Pauza
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-14 ag-item-levo-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-200%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "1.8",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Treci deo radionice
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-13 ag-item-desno-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "200%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "1.5",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  16.30
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-16 ag-item-levo-hex-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "-250%" }}
              transition={{
                type: "spring",
                stiffness: 500,
                mass: 0.3,
                damping: 22,
                delay: "2.1",
              }}
              //initial={{opacity: 0}}
              //            exit={{opacity: 0}}
              //           whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 173 184" fill="none">
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#199AD4"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  17.50
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-15 ag-item-desno-rect-nedelja"
              animate={{ x: visibleNedelja ? "0%" : "250%" }}
              transition={{
                type: "spring",
                stiffness: 150,
                mass: 0.5,
                damping: 29,
                delay: "2.1",
              }}
              //  initial={{opacity: 0}}
              //     exit={{opacity: 0}}
              //     whileInView={{ opacity: 1 }}
            >
              <svg viewBox="0 0 204 114" fill="none">
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="2"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  textAnchor="middle"
                  fontWeight="600"
                  dominant-baseline="middle"
                >
                  Zatvaranje
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="Kraj-agende"
          animate={{ y: visibleSubota ? "-100%" : "+0%" }} //ovde je bilo 40 al ne radi nis spec
          transition={{ duration: "1" }}
        >
          <svg viewBox="0 0 1355 223" fill="none">
            <path
              d="M1151.43 134.409L1341.26 10.9554C1343.73 9.34859 1346.39 9.59564 1348.55 11.1451C1350.76 12.7322 1352.5 15.7603 1352.5 19.6833V213C1352.5 217.142 1349.14 220.5 1345 220.5H10C5.85791 220.5 2.5 217.142 2.5 213V19.7788C2.5 15.8463 4.24341 12.8151 6.46399 11.231C8.63135 9.68484 11.2941 9.44476 13.7671 11.0686L201.568 134.387C203.677 135.772 206.121 136.463 208.626 136.418L243.176 135.798C245.545 135.756 247.835 135.058 249.824 133.742L446.356 3.66864C448.592 2.18867 451.23 2.18867 453.466 3.66864L649.888 133.669C651.936 135.024 654.337 135.746 656.793 135.745L691.894 135.729C694.329 135.728 696.711 135.015 698.746 133.679L896.956 3.59825C899.179 2.13924 901.796 2.13924 904.019 3.59825L1102.31 133.732C1104.28 135.027 1106.58 135.737 1108.94 135.78L1144.38 136.428C1146.88 136.473 1149.33 135.77 1151.43 134.409Z"
              fill="#F99D1D"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Agenda;
