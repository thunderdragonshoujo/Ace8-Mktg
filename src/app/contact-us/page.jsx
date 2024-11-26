import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/contact/hero";
import Body from "../components/contact/body";
import Brands from "../components/common/brand";
import { client } from "../../sanity/lib/client";

export async function generateMetadata() {
  const page = await client.fetch(`*[ _type == "contact"]`);  
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

async function getData() {
  const contactPage = await client.fetch(`*[ _type == "contact"]{
    meta_tags,
    meta_description,
    meta_tags,
    title,
    short_info,
    email,
    mobile_number
  }`);
  return {
    contactPage:contactPage[0]
  }
}

const Index = async () => {
  const { contactPage } = await getData()
  console.log("🚀 ~ Index ~ contactPage:", contactPage)

  return (
    <MaxContainer>
      <Hero data={contactPage}/>
      <Body />
      <Brands />
    </MaxContainer>
  );
};

export default Index;
