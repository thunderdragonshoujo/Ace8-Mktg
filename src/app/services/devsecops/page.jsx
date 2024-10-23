import MaxContainer from "../../components/common/maxContainer";
import Hero from "../../components/devSecOps/hero";
import Body from "../../components/devSecOps/body";
import Contact from "../../components/common/contact";

export const metadata = {
  title: "DevSecOps Services: Secure & Efficient Software Delivery | Ace8",
  description:
    "At Ace8, our DevSecOps services combine development, security, and operations to deliver continuous value with a security-first approach. Transform your processes for efficiency and resilience.",
  alternates: {
    canonical: "https://www.ace8.io/services/devsecops",
  },
  openGraph: {
    title: "DevSecOps Services: Secure & Efficient Software Delivery | Ace8",
    description:
      "At Ace8, our DevSecOps services combine development, security, and operations to deliver continuous value with a security-first approach. Transform your processes for efficiency and resilience.",
    url: "https://www.ace8.io/services/devsecops",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const DevSecOps = () => {
  return (
    <>
      <MaxContainer>
        <Hero />
      </MaxContainer>
      <Body />
      <MaxContainer>
        <Contact route={"devsecops"} />
      </MaxContainer>
    </>
  );
};

export default DevSecOps;
