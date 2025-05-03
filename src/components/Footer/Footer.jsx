import React from "react";
import Ready from "../Ready/Ready";
import {
  FaCircle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


import Container from "../Container/Container";
import footerlogo from '../../assets/FooterLogo.png';

const Footer = () => {
  return (
    <footer className="pt-[32px] pb-[90px] bg-white relative">
      <Ready />
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 max-w-[1440px]">
          <div className="flex flex-col gap-7 max-w-[534px]">
            <div className="flex items-center gap-3">
              <img src={footerlogo} alt="" />
            </div>
            
            <p className="text-blue-900 text-sm font-normal font-['Manrope'] leading-normal">
              SalesRank.AI offers a comprehensive suite of AI-powered solutions
              to help you find expert sales professionals who can elevate every
              aspect of your business. From performance rankings and skill
              verification to industry benchmarking and real-time analytics, we
              provide the insights and tools to optimize your sales strategy and
              drive growth.
            </p>
            
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-28">
            <nav aria-label="Main navigation">
              <h3 className="text-sky-950 text-lg font-semibold font-['Manrope'] mb-4">
                Navigation
              </h3>
              <ul className="space-y-2 text-blue-900 text-sm font-normal font-['Manrope']">
                {['Service', 'Agency', 'Case Study', 'Resource', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-700 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sky-950 text-lg font-semibold font-['Manrope'] mb-4">
                Licence
              </h3>
              <ul className="space-y-2 text-blue-900 text-sm font-normal font-['Manrope']">
                {['Privacy Policy', 'Copyright', 'Email Address'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-700 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic">
              <h3 className="text-sky-950 text-lg font-semibold font-['Manrope'] mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-blue-900 text-sm font-normal font-['Manrope']">
                <a href="tel:4065550120" className="block hover:text-blue-700 transition">
                  (406) 555-0120
                </a>
                <a href="mailto:Hey@boostim.com" className="block hover:text-blue-700 transition">
                  Hey@boostim.com
                </a>
                <p className="w-52 leading-normal">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
            </address>

            <div>
              <h3 className="text-sky-950 text-lg font-semibold font-['Manrope'] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-6 h-6 flex items-center justify-center hover:text-blue-700 transition">
                  <FaFacebook className="text-blue-950 text-lg" />
                </a>
                <a href="#" aria-label="Twitter" className="w-6 h-6 flex items-center justify-center hover:text-blue-700 transition">
                  <FaTwitter className="text-blue-950 text-lg" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-6 h-6 flex items-center justify-center hover:text-blue-700 transition">
                  <FaLinkedin className="text-blue-950 text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;