"use client";
import Hero from "./hero";
import SupportServices from "./supportServices";
import SupportCloudBased from "./supportCloudBased";
import Partner from "./partner";
import SupportOnPremises from "./supportOnPremises";
import CTA from "./CTA";
import Contact from "../common/contact";
import { slideIn } from "../../Animations/common";
import { useEffect } from "react";
import MaxContainer from "../../components/common/maxContainer";
import UseCase from "@/app/components/tomcat/usecase";

const TomCat = () => {
  useEffect(() => {
    slideIn();
  }, []);
  return (
    <div className="sm:pt-[9rem] pt-[6rem] pb-[7rem] overflow-x-hidden w-[100vw]">
      <Hero />
      <SupportServices />
      <SupportCloudBased />
      <SupportOnPremises />
      <Partner />
      <UseCase />
      <CTA />
      <MaxContainer>
        <Contact />
      </MaxContainer>
    </div>
  );
};

export default TomCat;
