import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center">
        {/* left section */}
        <div>
          <img className="w-24 h-[46px] mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            {t("footer.description")}
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">{t("footer.quickLinks")}</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">{t("footer.services")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about.title")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contact")}</Link>
            </li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">{t("footer.contact")}</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>{t("footer.phone")}: +201211998934</li>
            <li>{t("footer.email")}: saboba@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copy right text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">{t("footer.rights")} Doba </p>
      </div>
    </div>
  );
};

export default Footer;
