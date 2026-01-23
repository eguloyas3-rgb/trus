import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import useDashboard from './apifetch'
import { Account } from "./Accountprofile";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Accountprofile = () => {

    const fetchdata =useDashboard()
  return (
    <Account>
      <div className="Personal">
        <div className="otpd">
          <FaArrowLeft  onClick={() => window.location.href = '/profile'}/>
           <p onClick={() => window.location.href = '/profile'}>Personal Info</p>
        </div>

        <div className="myinfo">
          <div className="smae">
            <span>Full Name</span>
            <span>{fetchdata?.account?.first_name} {fetchdata?.account?.last_name}</span>
          </div>
          <span className="spann">Verified <MdOutlineKeyboardArrowRight/></span>
        </div >
        <div className="myinfo">
          <div className="smae">
            <span>Email Address</span>
            <span>{fetchdata?.account?.email}</span>
          </div>
          <span className="spann">Verified <MdOutlineKeyboardArrowRight/></span>
        </div >
        <div className="myinfo">
          <div className="smae">
            <span>Phone Number</span>
            <span>{fetchdata?.account?.phone}</span>
          </div>
          <span className="spann">Verified <MdOutlineKeyboardArrowRight/></span>
        </div>
        <div className="myinfo">
          <div className="smae">
            <span>Address</span>
            <span>{fetchdata?.account?.street}</span>
          </div>
          <span className="spann"><MdOutlineKeyboardArrowRight/></span>
        </div>


        <div className="myinfodat" onClick={() => (window.location.href = "/card-lock")}>
          <p>Manage Card</p>
          <span>Lock Card, Report problems</span>
        </div>
        <div className="myinfodat"  onClick={() => (window.location.href = "/contactus")}>
          <p>Get Help</p>
          <span>contact us</span>
        </div>

        <div className="account">
          <div>
            <span>ROUTING#</span>
          <p>251480576</p>
          </div>
          <div>
                      <span>ACCOUNT NUMBER</span>
          <p>{fetchdata?.account?.account_number}</p>
          </div>
        </div>


      </div>
    </Account>
  );
};

export default Accountprofile;
