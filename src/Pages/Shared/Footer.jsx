import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-2xl w-11/12 mx-auto">
        <footer className="footer sm:footer-horizontal  text-base-content py-10 px-2">
          <aside>
            <img className="w-15" src={logo} alt="" />
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {" "}
                Booking.Com
              </span>
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
