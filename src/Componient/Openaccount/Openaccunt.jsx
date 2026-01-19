import React, { useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { Craeteaccount } from "./Openaccunt";
import { CiGlobe } from "react-icons/ci";
import {
  MdOutlineAccessTime,
  MdAccountCircle,
  MdContactPhone,
  MdOutlinePersonalInjury,
} from "react-icons/md";

const Openaccunt = () => {
  const [acreateaccount, setAcreateaccount] = useState("Personal");

  const filter = ["icons1", "icons2", "icons3", "icons4"];

  return (
    <Craeteaccount>
      <div className="mainlogin">
        <div className="first">
          <div className="imagspan">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="heade">
            <h1>Join West Vent Online Bank</h1>
            <p>Create Your Banking Account</p>
            <span>
              Start your financial journey with West Vent Online Bank. Secure,
              fast, and reliable banking at your fingertips.
            </span>
          </div>

          <div className="boxss">
            <div className="boxmaon">
              <span className="icos">
                <RiSecurePaymentLine />
              </span>
              <div className="writes">
                <p>Secure Platform</p>
                <span>Bank-grade security</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <FaMoneyBillTransfer />
              </span>
              <div className="writes">
                <p>Fast Transfers</p>
                <span>Instant payments</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <MdOutlineAccessTime />
              </span>
              <div className="writes">
                <p>24/7 Access</p>
                <span>Always available</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <CiGlobe />
              </span>
              <div className="writes">
                <p>Global Banking</p>
                <span>Worldwide access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="seconds">
          <form action="">
            <p>Create Account</p>

            <div className="infosslide">
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                >
                  <MdOutlinePersonalInjury />
                </span>
                <p>Personal</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                >
                  <MdContactPhone />
                </span>
                <p>Contact</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                >
                  <MdAccountCircle />
                </span>
                <p>Account</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                >
                  <RiLockPasswordFill />
                </span>
                <p>Security</p>
              </div>
            </div>

            {acreateaccount === "Personal" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                  >
                    <MdOutlinePersonalInjury />
                  </span>
                  <p className="mytop">Personal Information</p>
                  <span>Tell us about yourself</span>
                </div>
                <div
                  className="btn"
                  onClick={() => setAcreateaccount("Contact")}
                >
                  <button>Next</button>
                </div>
              </div>
            )}

            {acreateaccount === "Contact" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                  >
                    <MdContactPhone />
                  </span>
                  <p className="mytop">Contact Information</p>
                  <span>How can we reach you?</span>
                </div>

                <div
                  className="btn"
                  onClick={() => setAcreateaccount("Account")}
                >
                  <button>Next</button>
                </div>
              </div>
            )}
            {acreateaccount === "Account" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                  >
                    <MdAccountCircle />
                  </span>
                  <p className="mytop">Account Setup</p>
                  <span>Choose your account preferences</span>
                </div>

                <div
                  className="btn"
                  onClick={() => setAcreateaccount("Security")}
                >
                  <button>Next</button>
                </div>
              </div>
            )}
            {acreateaccount === "Security" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                  >
                    <RiLockPasswordFill />
                  </span>
                  <p className="mytop">Security Setup</p>
                  <span>Secure your account</span>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => (window.location.href = "/")}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Craeteaccount>
  );
};

export default Openaccunt;
