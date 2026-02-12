import React from "react";
import { LuFileTerminal } from "react-icons/lu";

import { Term } from "./Term.js";

const Termservice = () => {
  return (
    <Term>
      <div className="main">
        <span
          className="fisi"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <LuFileTerminal /> Legal Information
        </span>
        <h1>Terms of Service</h1>
        <p>
          Please read these terms carefully before using our banking services
        </p>
      </div>

      <div className="termsbody">
        <div>
          <h1>1. Acceptance of Terms</h1>
          <p>
            By accessing and using West Vent Trust Bank banking services, you
            accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </div>

        <div>
          <h1>2. Account Opening and Maintenance</h1>
          <p>To open an account with West Vent Trust Bank, you must:</p>
          <ul>
            <li>Be at least 18 years of age</li>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </div>

        <div>
          <h1>3. Account Security</h1>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and password. You agree to notify us immediately
            of any unauthorized use of your account.
          </p>
        </div>

        <div>
          <h1>4. Services and Fees</h1>
          <p>
            West Vent Trust Bank provides various banking services including but
            not limited to:
          </p>
          <ul>
            <li>Savings and checking accounts</li>
            <li>Online and mobile banking</li>
            <li>Loan services</li>
            <li>Investment products</li>
            <li>Credit cards</li>
          </ul>
        </div>

        <div>
          <h1>5. Privacy and Data Protection</h1>
          <p>
            We are committed to protecting your privacy and personal
            information. Please review our Privacy Policy for detailed
            information about how we collect, use, and protect your data.
          </p>
        </div>

        <div>
          <h1>6. Electronic Communications</h1>
          <p>
            By using our services, you consent to receive communications from us
            electronically, including account statements, notices, and other
            disclosures.
          </p>
        </div>

        <div>
          <h1>7. Limitation of Liability</h1>
          <p>
            West Vent Trust Bank shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from
            your use of our services.
          </p>
          <p></p>
        </div>

        <div>
          <h1>8. Modifications to Terms</h1>
          <p>
            We reserve the right to modify these terms at any time. We will
            notify you of any changes by posting the new terms on our website.
          </p>
        </div>

        <div>
          <h1>9. Governing Law</h1>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which West Vent Trust Bank operates.
          </p>
        </div>

        <div>
          <h1>10. Contact Information</h1>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
        </div>

        <div className="contact">
          <span>Email: info@westventtrust.org</span>
          <span>Phone: 1-800-BANKING</span>
          <span>
            Address: 123 Banking Street, Financial District, New York, NY 10001
          </span>
        </div>

        <span style={{ fontSize: "11px" }}>
          Last updated: February 11, 2026
        </span>
      </div>
    </Term>
  );
};

export default Termservice;
