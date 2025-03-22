"use client";
import dynamic from "next/dynamic";

import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";

const LazyForm = dynamic(() => import("./Form"), {
  ssr: false,
});

const Index = () => {
  return (
    <section className="bg-white relative px-[3rem] sm:px-[0] pt-[3rem] sm:pt-[0] sm:flex sm:pb-[8rem] pb-[5rem] sm:pr-[10rem]  justify-between">
      <div className="bg-[#080A0F] sm:px-[1rem] sm:py-[12rem] sm:pb-[6rem] relative flex flex-col sm:rounded-tr-none rounded-tl-[40px] sm:rounded-tl-none rounded-br-[40px]  h-[20rem] sm:h-auto">
        <img className="sm:w-[70rem]" src="/map.png" alt="" />
        <img
          src="/contact_info.png"
          className="sm:w-[50rem] hidden absolute self-center bottom-[-7rem]"
          alt=""
        />
        <ContactInfo />
      </div>
      <LazyForm />
    </section>
  );
};

export default Index;

const ContactInfo = () => {
  return (
    <div className="bg-[#232323] sm:ml-[9rem]  sm:translate-y-[10rem] sm:max-w-[45rem] max-w-[27rem] w-[27rem] sm:w-[45rem] mx-auto   rounded-[1rem] sm:px-[4.5rem] px-[2.5rem] sm:py-[2.7rem] py-[2rem] flex justify-between">
      <div className="">
        <h3 className="font-[700] text-[1.5rem]">Email Us</h3>
        <p className="text-[1.2rem] sm:text-[1.7rem]">info@ace8.io</p>
      </div>
      <div className="">
        <h3 className="font-[700] text-[1.5rem]">Call Us</h3>
        <p className="text-[1.2rem] sm:text-[1.7rem]">305-204-2607</p>
      </div>
    </div>
  );
};
