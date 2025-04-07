import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>{t("about.title")}</p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>{t("about.welcome")}</p>
          <p>{t("about.commitment")}</p>
          <b className="text-gray-800">{t("about.visionTitle")}</b>
          <p>{t("about.vision")}</p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>{t("about.whyChooseUs")}</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>{t("about.efficiency.title")}:</b>
          <p>{t("about.efficiency.description")}</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>{t("about.convenience.title")}:</b>
          <p>{t("about.convenience.description")}</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>{t("about.personalization.title")}:</b>
          <p>{t("about.personalization.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
