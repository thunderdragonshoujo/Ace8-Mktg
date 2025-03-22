import Navbar from "./components/common/navbar";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Brands from "./components/home/brand";
import Domians from "./components/home/domains";
import Services from "./components/home/services";
import Partners from "./components/common/partners";
import Management from "./components/home/management";
import Impact from "./components/home/impact";
import Mission from "./components/home/mission";
import Approach from "./components/home/approach";
import Formular from "./components/home/formula";
import MaxContainer from "./components/common/maxContainer/index";
import dynamic from "next/dynamic";

const LazyContact = dynamic(() => import("./components/home/contact"), {
  ssr: false,
});

export const metadata = {
  title: "Ace8 | Digital Transformation, DevSecOps, Cloud-Native & Automation",
  description:
    "Empowering businesses with cutting-edge solutions in DevSecOps, cloud-native development, automation, and data management. Unlock innovation and resilience with Ace8.",
  alternates: {
    canonical: "https://www.ace8.io/",
  },
  openGraph: {
    title:
      "Ace8 | Digital Transformation, DevSecOps, Cloud-Native & Automation",
    description:
      "Empowering businesses with cutting-edge solutions in DevSecOps, cloud-native development, automation, and data management. Unlock innovation and resilience with Ace8.",
    url: "https://www.ace8.io/",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <MaxContainer>
        <Hero />
        <div className="flex flex-col sm:flex-col-reverse">
          <About />
          <Brands />
        </div>
        <Domians />
        <Services />
        <Impact />
        <Partners />
        <Management />
        <Formular />
        <Mission />
        <Approach />
        <LazyContact />
      </MaxContainer>
    </>
  );
}
