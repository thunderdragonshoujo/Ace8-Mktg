import Hero from "../../components/micro-service/hero";
import Body from "../../components/micro-service/body";
import Banner from "../../components/micro-service/banner";
import Contact from "../../components/common/contact";
import MaxContainer from "../../components/common/maxContainer";

export const metadata = {
  title: "Comprehensive Microservices Design & AWS Lambda Migration | Ace8",
  description:
    "AceMQ offers expert microservices design, development, and refactoring services. Specializing in Golang starter kits and AWS Lambda migration, we streamline your architecture for efficiency and scalability.",
  alternates: {
    canonical: "https://www.ace8.io/services/micro-service",
  },
  openGraph: {
    title: "Comprehensive Microservices Design & AWS Lambda Migration | Ace8",
    description:
      "AceMQ offers expert microservices design, development, and refactoring services. Specializing in Golang starter kits and AWS Lambda migration, we streamline your architecture for efficiency and scalability.",
    url: "https://www.ace8.io/services/micro-service",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const MicroService = () => {
  return (
    <>
      <Hero />
      <Body />
      <div className="sm:bg-white sm:py-[3rem]">
        <MaxContainer>
          <Banner />
          <Contact route={"micro-service"} />
        </MaxContainer>
      </div>
    </>
  );
};

export default MicroService;
