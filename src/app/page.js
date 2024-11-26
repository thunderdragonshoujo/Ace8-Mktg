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
import Contact from "./components/home/contact";
import Formular from "./components/home/formula";
import MaxContainer from "./components/common/maxContainer/index";
import { client } from "../sanity/lib/client";
import { QHomePage } from "../sanity/lib/query";


export async function generateMetadata() {
  const home = await client.fetch(QHomePage);  
  return {
    title: home[0]?.meta_title,
    description: home[0]?.meta_description,
    alternates: {
      canonical: "https://www.ace8.io/",
    },
    keywords: home[0]?.meta_tags,
    openGraph: {
      title:home[0]?.meta_title,
      description: home[0]?.meta_description,
      url: `https://www.ace8.io/`,
      siteName: "Ace8",
      locale: "en_US",
      type: "website",
    },
  };
}

async function getData() {
  const homepage = await client.fetch(QHomePage);
  return {
    homepage:homepage[0]
  }
}

export default async function Home() {
  const { homepage } = await getData()

  return (
    <>
      <MaxContainer>
        <Hero data={homepage}/>
        <div className="flex flex-col sm:flex-col-reverse">
          <About data={homepage}/>
          <Brands data={homepage?.brands}/>
        </div>
        <Domians data={homepage}/>
        <Services data={homepage}/>
        <Impact stories={homepage?.stories}/>
        <Partners />
        <Management />
        <Formular />
        <Mission />
        <Approach />
        <Contact />
      </MaxContainer>
    </>
  );
}
