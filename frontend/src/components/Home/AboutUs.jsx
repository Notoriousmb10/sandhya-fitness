import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  const contactRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-10 border-t-2">
      <h1 className="text-center mb-4 font-bold text-2xl">
        Contact <span className="text-coral-red">Us</span>
      </h1>
      <div className="text-center font-poppins flex max-md:flex-col md-plus:flex-col gap-4">
        <p>+918828111327</p>
        <p>
          280-248, RSC Rd Number 16, Navaratna CHS, Gorai 1, Borivali West,
          Mumbai, Maharashtra 400092
        </p>
      </div>
      <div className="flex justify-center mt-4  gap-4 text-2xl py-4">
        <div className="cursor-pointer">
          <FaInstagram
            onClick={() =>
              contactRedirect(
                "https://www.instagram.com/sandhyafitness/?igsh=OWQ0ZDIweThieHJz"
              )
            }
          />
        </div>

        <div className="cursor-pointer">
          <FaWhatsapp
            onClick={() => contactRedirect("https://wa.me/918828111327")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
