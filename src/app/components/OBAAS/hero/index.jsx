import Image from "next/image";
import MaxContainer from "../../../components/common/maxContainer";

const Index = () => {
  return (
    <section className="">
      <MaxContainer>
        <div className="py-[5.5rem] sm:pt-[15rem] sm:pb-[17rem] px-[1.5rem] sm:px-[10rem] relative">
          <Image
            src="/OBASS_sm.png"
            className="absolute mix-blend-overlay inset-0 sm:hidden top-0 w-[100%] h-[100%]"
            width={790}
            height={387}
            alt="wheel"
          />
          <Image
            src="/OBAAS_bg.png"
            className="absolute mix-blend-overlay  sm:block hidden inset-0 top-0 w-[100%] h-[100%]"
            width={1920}
            height={940}
            alt="wheel"
          />
          <div className="flex flex-col items-center relative">
            <h1 className="header text-center sm:w-[100rem]">
              Unlock <span className="font-[400]">Developer </span>{" "}
              <span className="text-[#9B86FE]">Productivity</span>{" "}
              <span className="">with </span> Onboarding as as Service (OBaaS)
            </h1>
            <p className="text-center sm:w-[90rem] mt-[3rem] sn:mt-[0]">
              Fast-Track Onboarding for Immediate Impact
            </p>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Index;
