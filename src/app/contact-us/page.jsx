import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/contact/hero";
import Body from "../components/contact/body";
import Brands from "../components/common/brand";

export const metadata = {
  title: "Contact Us for Expert DevSecOps & Cloud Solutions | Ace8",
  description:
    "Get in touch with Ace8 for expert consulting on DevSecOps, cloud solutions, messaging systems, and more. We're here to help you with your digital transformation needs.",
  alternates: {
    canonical: "https://www.ace8.io/contact-us",
  },
  openGraph: {
    title: "Contact Us for Expert DevSecOps & Cloud Solutions | Ace8",
    description:
      "Get in touch with Ace8 for expert consulting on DevSecOps, cloud solutions, messaging systems, and more. We're here to help you with your digital transformation needs.",
    url: "https://www.ace8.io/contact-us",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const Index = () => {
  return (
    <MaxContainer>
      <Hero />
      <Body />
      <Brands />
    </MaxContainer>
  );
};

export default Index;
