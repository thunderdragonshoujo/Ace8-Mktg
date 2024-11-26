import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/stories/hero";
import Body from "../components/stories/body";
import { QAllStories } from "../../sanity/lib/query";
import { client } from "../../sanity/lib/client";

export const metadata = {
  title:
    "Customer Success Stories | Ace8 Case Studies on Cloud, Microservices & RabbitMQ",
  description:
    "Explore Ace8's customer success stories on microservices migration, RabbitMQ optimization, real-time payment processors, and rapid web launches using IaC and AWS Lambda.",
  alternates: {
    canonical: "https://www.ace8.io/stories",
  },
  openGraph: {
    title:
      "Customer Success Stories | Ace8 Case Studies on Cloud, Microservices & RabbitMQ",
    description:
      "Explore Ace8's customer success stories on microservices migration, RabbitMQ optimization, real-time payment processors, and rapid web launches using IaC and AWS Lambda.",
    url: "https://www.ace8.io/stories",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

async function getData() {
  const allstories = await client.fetch(QAllStories);
  return {
    allstories
  }
}

const Stories = async () => {
  const {allstories} = await getData()
  return (
    <MaxContainer>
      <Hero />
      <Body allstories={allstories}/>
    </MaxContainer>
  );
};

export default Stories;
