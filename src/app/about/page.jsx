import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/about/hero";
import Brand from "../components/common/brand";
import Story from "../components/about/story";
import Belief from "../components/about/belief";
import Partners from "../components/common/partners";
import { client } from "../../sanity/lib/client";

export async function generateMetadata() {
  const page = await client.fetch(`*[ _type == "about"]`);  
  return {
    title: page[0]?.meta_title,
    description: page[0]?.meta_description,
    alternates: {
      canonical: "https://www.ace8.io/about",
    },
    keywords: page[0]?.meta_tags,
    openGraph: {
      title:page[0]?.meta_title,
      description: page[0]?.meta_description,
      url: `https://www.ace8.io/about`,
      siteName: "Ace8",
      locale: "en_US",
      type: "website",
    },
  };
}

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
