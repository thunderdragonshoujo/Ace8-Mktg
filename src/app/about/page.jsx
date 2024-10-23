import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/about/hero";
import Brand from "../components/common/brand";
import Story from "../components/about/story";
import Belief from "../components/about/belief";
import Partners from "../components/common/partners";

export const metadata = {
  title:
    "About Ace8 | Full-Stack Specialists in DevSecOps, Cloud, Data & Messaging Solutions",
  description:
    "Discover how Ace8 leads in DevSecOps, cloud-native solutions, data management, and messaging systems. Empowering organizations through cutting-edge technology since 2016.",
  alternates: {
    canonical: "https://www.ace8.io/about",
  },
  openGraph: {
    title:
      "About Ace8 | Full-Stack Specialists in DevSecOps, Cloud, Data & Messaging Solutions",
    description:
      "Discover how Ace8 leads in DevSecOps, cloud-native solutions, data management, and messaging systems. Empowering organizations through cutting-edge technology since 2016.",
    url: "https://www.ace8.io/about",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const About = () => {
  return (
    <>
      <Hero />
      <MaxContainer>
        <Brand />
      </MaxContainer>
      <Story />
      <MaxContainer>
        <Belief />
        <Partners />
      </MaxContainer>
    </>
  );
};

export default About;
