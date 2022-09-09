import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Agenda/Agenda.Module.css";

const Agenda = () => {
  const [visibleNedelja, setVisibleNedelja] = useState(false);
  const [visibleSubota, setVisibleSubota] = useState(false);

  async function prikaziNedelju() {
    if (visibleSubota) {
      setVisibleSubota(false);
      await sleep(500);
    }

    setVisibleNedelja(!visibleNedelja);
  }
  async function prikaziSubotu() {
    if (visibleNedelja) {
      setVisibleNedelja(false);
      await sleep(500);
    }

    setVisibleSubota(!visibleSubota);
  }
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="Agenda-sve">
      <div className="Agenda-container">
        <div className="Agenda-dugmad">
          <div className="Subota ag-dug">
            <svg
              onClick={() => prikaziSubotu()}
              viewBox="0 0 338 370"
              fill="none"
            >
              <path
                d="M160.528 364.456L11.5282 282.021C5.95746 278.939 2.5 273.075 2.5 266.708V103.292C2.5 96.9253 5.95746 91.0611 11.5282 87.9791L160.528 5.54419C165.8 2.62778 172.2 2.62778 177.472 5.54419L326.472 87.9791C332.043 91.0611 335.5 96.9253 335.5 103.292V266.708C335.5 273.075 332.043 278.939 326.472 282.021L177.472 364.456C172.2 367.372 165.8 367.372 160.528 364.456Z"
                fill="#F9CA87"
                stroke="black"
                stroke-width="5"
              />
            </svg>
          </div>
          <div className="Agenda-agenda ag-dug">
            <svg
              viewBox="0 0 338 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <svg
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
            </svg>
          </div>
        </div>
        <div className="Dropdown-subota Dropdown">
          <motion.div
            animate={{ height: visibleSubota ? "auto" : "0px" }}
            initial={{ height: "0px" }}
            transition={{ duration: 1.2, ease: "linear" }} //mozda ima neka funkcija za ovo
            style={{
              overflow: "hidden",
            }}
            className="DropdownGrid"
          >
            <motion.div
              className="ag-item agenda-grid-item-1 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-2 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-3 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{ duration: 0.4 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-4 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-5 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-6 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-7 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{ duration: 0.4 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-8 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-9 ag-item-levo-hex "
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-10 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-11 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{ duration: 0.4 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-12 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-13 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-14 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-15 ag-item-levo-rect"
              animate={{ x: visibleSubota ? "0%" : "-250%" }}
              transition={{ duration: 0.4 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-16 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-17 ag-item-levo-hex"
              animate={{ x: visibleSubota ? "0%" : "-200%" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
            <motion.div
              className="ag-item agenda-grid-item-18 ag-item-desno-rect"
              animate={{ x: visibleSubota ? "0%" : "200%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 204 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.55566"
                  y="2.57617"
                  width="198"
                  height="108"
                  rx="7.5"
                  fill="#F9EEE1"
                  stroke="black"
                  stroke-width="5"
                />
              </svg>
            </motion.div>

            <motion.div
              className="ag-item agenda-grid-item-19 ag-item-desno-hex"
              animate={{ x: visibleSubota ? "0%" : "250%" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 173 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.026 178.972L12.2212 142.784C6.62868 139.708 3.154 133.832 3.154 127.45L3.15399 56.7289C3.15399 50.3464 6.62867 44.4701 12.2212 41.3946L78.0259 5.20662C83.277 2.31893 89.6404 2.31893 94.8914 5.20662L160.696 41.3946C166.289 44.4701 169.763 50.3464 169.763 56.7288L169.763 127.45C169.763 133.832 166.289 139.708 160.696 142.784L94.8915 178.972C89.6404 181.86 83.277 181.86 78.026 178.972Z"
                  fill="#F9CA87"
                  stroke="black"
                  stroke-width="5"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  text-anchor="middle"
                  dominant-baseline="middle"
                >
                  14 - 15 h
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
        <div className="Dropdown-nedelja">
          <motion.div
            animate={{ height: visibleNedelja ? "300px" : "0px" }}
            // treba umesto px da bude auto, u zav od
            initial={{ height: "0px" }}
            transition={{ duration: 0.5 }}
            style={{
              overflow: "hidden",
              backgroundColor: "#F5F5F5",
            }}
          >
            <motion.div></motion.div>
          </motion.div>
        </div>
        <div className="Kraj-agende">
          <svg viewBox="0 0 1355 223" fill="none">
            <path
              d="M1151.43 134.409L1341.26 10.9554C1343.73 9.34859 1346.39 9.59564 1348.55 11.1451C1350.76 12.7322 1352.5 15.7603 1352.5 19.6833V213C1352.5 217.142 1349.14 220.5 1345 220.5H10C5.85791 220.5 2.5 217.142 2.5 213V19.7788C2.5 15.8463 4.24341 12.8151 6.46399 11.231C8.63135 9.68484 11.2941 9.44476 13.7671 11.0686L201.568 134.387C203.677 135.772 206.121 136.463 208.626 136.418L243.176 135.798C245.545 135.756 247.835 135.058 249.824 133.742L446.356 3.66864C448.592 2.18867 451.23 2.18867 453.466 3.66864L649.888 133.669C651.936 135.024 654.337 135.746 656.793 135.745L691.894 135.729C694.329 135.728 696.711 135.015 698.746 133.679L896.956 3.59825C899.179 2.13924 901.796 2.13924 904.019 3.59825L1102.31 133.732C1104.28 135.027 1106.58 135.737 1108.94 135.78L1144.38 136.428C1146.88 136.473 1149.33 135.77 1151.43 134.409Z"
              fill="#F99D1D"
              stroke="black"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      ;
    </div>
  );
};

export default Agenda;