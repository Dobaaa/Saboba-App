import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center text-2xl pt-10 text gray-500">
        <p>{t("contact.title")}</p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col  justify-center items-start gap-6">
          <p className="text-lg font-semibold text-gray-600">
            {t("contact.office")}
          </p>
          <p className="text-gray-500">{t("contact.address")}</p>
          <p className="text-gray-500">{t("contact.contactInfo")}</p>
          <p className="text-gray-600 text-lg font-semibold">
            {t("contact.careers")}
          </p>
          <p className="text-gray-500">{t("contact.careersDescription")}</p>
          <textarea name="" id=""></textarea>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            {t("contact.exploreJobs")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
