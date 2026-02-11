import React, { useState } from "react";
import { Nav } from "./Navbar";
import Logo from "../../assets/Logo/logo.png";
import { IoIosPersonAdd } from "react-icons/io";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { IoPerson, IoCard } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaHandshake, FaHandHoldingUsd } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropmenue, setDropmenue] = useState(false);
  const [sererdrop, setSererdrop] = useState(false);
  const [service, setService] = useState(false);

  const dropdwn = () => {
    setDropmenue((prev) => !prev);
  };

  return (
    <Nav>
      <div className="Nav-bar">
        <div className="navleft" onClick={() => (window.location.href = "/")}>
          <img src={Logo} alt="Logo" />
        </div>

        {dropmenue && (
          <div className="mobilesview">
            <ul className="myurls">
              <li onClick={() => (window.location.href = "/")}>Home</li>
              <li onClick={() => (window.location.href = "/about-us")}>
                About
              </li>

              <li
                onClick={() => setSererdrop((prev) => !prev)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Services <IoMdArrowDropdown style={{ fontSize: "15px" }} />
              </li>
              {sererdrop && (
                <div className="dropsmallscreen">
                  <span onClick={() => (window.location.href = "/personal")}>
                    Personal Banking
                  </span>
                  <span onClick={() => (window.location.href = "/business")}>
                    Business Banking
                  </span>
                  <span onClick={() => (window.location.href = "/loan-credit")}>
                    Loans & Credit
                  </span>
                  <span onClick={() => (window.location.href = "/login")}>
                    Cards
                  </span>
                  <span onClick={() => (window.location.href = "/grants-aids")}>
                    Grand & aids
                  </span>
                </div>
              )}
              <li onClick={() => (window.location.href = "/contact-us")}>
                Contact
              </li>
              <li onClick={() => (window.location.href = "/login")}>Login</li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "3px",
                }}
                onClick={() => (window.location.href = "/open-account")}
              >
                Open Account
              </li>
            </ul>
          </div>
        )}

        <div className="dropdown-icon">
          {dropmenue ? (
            <RiCloseLargeFill onClick={dropdwn} />
          ) : (
            <RiMenu3Fill onClick={dropdwn} />
          )}
        </div>

        <div className="navmiddle">
          <ul>
            <li onClick={() => (window.location.href = "/")}>Home</li>
            <li onClick={() => (window.location.href = "/about-us")}>About</li>
            <div
              className="wrappersss"
              onMouseLeave={() => setService(false)}
              onMouseEnter={() => setService(true)}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Services <MdKeyboardArrowDown className="myhover" />
              </li>
              {service && (
                <div
                  className="dropdownserver"
                  onMouseEnter={() => setService(true)}
                  onMouseLeave={() => setService(false)}
                >
                  <span onClick={() => (window.location.href = "/personal")}>
                    <IoPerson style={{ color: "#0284c7" }} /> Personal Banking
                  </span>
                  <span onClick={() => (window.location.href = "/business")}>
                    <MdBusinessCenter style={{ color: "#129c6b" }} /> Business
                    Banking
                  </span>
                  <span onClick={() => (window.location.href = "/loan-credit")}>
                    <FaHandshake style={{ color: "#14b8a6" }} /> Loans & Credit
                  </span>
                  <span onClick={() => (window.location.href = "/login")}>
                    <IoCard style={{ color: "#9333ea" }} /> Cards
                  </span>
                  <span onClick={() => (window.location.href = "/grants-aids")}>
                    <FaHandHoldingUsd style={{ color: "#e23e19" }} /> Grands &
                    Aids
                  </span>
                </div>
              )}
            </div>

            <li
              onClick={() => (window.location.href = "/contact-us")}
              style={{ marginLeft: "120px" }}
            >
              Contact
            </li>
          </ul>
        </div>

        <div className="navright">
          <span onClick={() => (window.location.href = "/login")}>Login</span>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
            onClick={() => (window.location.href = "/open-account")}
          >
            <IoIosPersonAdd /> Open Account
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
