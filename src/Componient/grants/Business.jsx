import React from "react";
import { Grant } from "./grants.js";
import { FaHandshake, FaChartBar } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { IoIosPeople, IoMdCheckmark } from "react-icons/io";
import { VscGitStashApply } from "react-icons/vsc";
import { CiBank } from "react-icons/ci";
import { FaPiggyBank } from "react-icons/fa6";

import {
  MdLaptopChromebook,
  MdAddIcCall,
  MdBusinessCenter,
  MdOutlineSecurity,
} from "react-icons/md";

const Businessbnk = () => {
  return (
    <Grant>
      <div className="main">
        <span className="fisi">
          <MdBusinessCenter /> For Businesses
        </span>
        <h1>Business Banking Solutions</h1>
        <p>
          Comprehensive financial services designed to help your business grow
          and thrive
        </p>
      </div>

      <div className="Available">
        <div className="headey">
          <h1>Business Banking Services</h1>
          <p>
            Explore our comprehensive grant programs designed to support various
            financial needs
          </p>
        </div>

        <div className="boxs">
          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#2563eb", backgroundColor: "#dbeafe" }}
            >
              <CiBank />
            </span>
            <h4 style={{ color: "#2563eb" }}>Business Checking</h4>
            <p className="thep">
              Flexible checking accounts with low fees and high transaction
              limits.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> No monthly maintenance fees
              </span>
              <span>
                <IoMdCheckmark /> Unlimited transactions
              </span>
              <span>
                <IoMdCheckmark /> Online banking included
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#9333ea", backgroundColor: "#f3e8ff" }}
            >
              <FaPiggyBank />
            </span>
            <h4 style={{ color: "#9333ea" }}>Business Savings</h4>
            <p className="thep">
              Competitive interest rates to help your business funds grow.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> High-yield interest rates
              </span>
              <span>
                <IoMdCheckmark /> No minimum balance
              </span>
              <span>
                <IoMdCheckmark /> FDIC insured
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#16a34a", backgroundColor: "#dcfce7" }}
            >
              <FaHandshake />
            </span>
            <h4 style={{ color: "#16a34a" }}>Business Loans</h4>
            <p className="thep">
              Flexible financing solutions for expansion, equipment, and working
              capital.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> Competitive rates
              </span>
              <span>
                <IoMdCheckmark /> Quick approval process
              </span>
              <span>
                <IoMdCheckmark /> Flexible terms
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#dc2626", backgroundColor: "#fee2e2" }}
            >
              <IoCard />
            </span>
            <h4 style={{ color: "#dc2626" }}>Merchant Services</h4>
            <p className="thep">
              Accept payments anywhere with our secure payment processing
              solutions.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> Multiple payment methods
              </span>
              <span>
                <IoMdCheckmark /> Secure transactions
              </span>
              <span>
                <IoMdCheckmark /> Real-time reporting
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#ea580c", backgroundColor: "#ffedd5" }}
            >
              <FaChartBar />
            </span>
            <h4 style={{ color: "#ea580c" }}>Cash Management</h4>
            <p className="thep">
              Optimize your cash flow with advanced treasury management tools.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> Automated clearing
              </span>
              <span>
                <IoMdCheckmark /> Wire transfers
              </span>
              <span>
                <IoMdCheckmark /> Account reconciliation
              </span>
            </div>
          </div>

          <div className="box">
            <span
              className="spamsss"
              style={{ color: "#0d9488", backgroundColor: "#ccfbf1" }}
            >
              <IoCard />
            </span>
            <h4 style={{ color: "#0d9488" }}>Business Credit Cards</h4>
            <p className="thep">
              Build business credit while earning rewards on everyday purchases.
            </p>
            <div className="goods">
              <span>
                <IoMdCheckmark /> Cashback rewards
              </span>
              <span>
                <IoMdCheckmark /> Expense tracking
              </span>
              <span>
                <IoMdCheckmark /> Employee cards
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="howtoapply" id="applys">
        <div className="applys">
          <h1>Why Businesses Choose Us</h1>
          <p>
            We understand the unique challenges businesses face and provide
            tailored solutions
          </p>
        </div>

        <div className="applyboxs">
          <div className="applybox">
            <span className="numes">
              <IoIosPeople />
            </span>
            <h4>Dedicated Support</h4>
            <p>Personal relationship managers for your business</p>
          </div>
          <div className="applybox">
            <span className="numes">
              <MdLaptopChromebook />
            </span>
            <h4>Digital Banking</h4>
            <p>Advanced online and mobile banking platforms s</p>
          </div>

          <div className="applybox">
            <span className="numes">
              <FaChartBar />
            </span>
            <h4>Financial Insights</h4>
            <p>Detailed reporting and analytics tools</p>
          </div>
          <div className="applybox">
            <span className="numes">
              <MdOutlineSecurity />
            </span>

            <h4>Security First</h4>
            <p>Enterprise-grade security for all transactions</p>
          </div>
        </div>
      </div>

      <div className="readytoapply">
        <h1>Ready to Bank with Us?</h1>
        <p>
          Let's discuss how we can support your business growth and financial
          success
        </p>
        <div className="div">
          <button onClick={() => (window.location.href = "/open-account")}>
            <VscGitStashApply /> Open Business Account
          </button>
          <button onClick={() => (window.location.href = "/contact-us")}>
            <MdAddIcCall /> Speak with Advisor
          </button>
        </div>
      </div>
    </Grant>
  );
};

export default Businessbnk;
