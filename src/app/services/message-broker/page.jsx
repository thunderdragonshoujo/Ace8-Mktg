import Hero from "../../components/message-broker/hero";
import Technology from "../../components/message-broker/technologies";
import Service from "../../components/message-broker/services";
import Achievement from "../../components/message-broker/achivement";
import Values from "../../components/message-broker/values";
import MaxContainer from "../../components/common/maxContainer";
import Banner from "../../components/message-broker/banner";
import Contact from "../../components/common/contact";

export const metadata = {
  title:
    "Message Broker Services | Expert RabbitMQ Consulting & Support | AceMQ",
  description:
    "AceMQ offers expert messaging and queuing services, specializing in RabbitMQ. From consulting and troubleshooting to support and training, we provide tailored solutions to optimize your messaging systems.",
  alternates: {
    canonical: "https://www.ace8.io/services/message-broker",
  },
  openGraph: {
    title:
      "Message Broker Services | Expert RabbitMQ Consulting & Support | AceMQ",
    description:
      "AceMQ specializes in messaging and queuing solutions, offering RabbitMQ consulting, support, and troubleshooting. Our expert engineers ensure reliable, scalable, and high-performance systems.",
    url: "https://www.ace8.io/services/message-broker",
    siteName: "AceMQ",
    locale: "en_US",
    type: "website",
  },
};

const MessageBroker = () => {
  return (
    <>
      <Hero />
      <Technology />
      <Service />
      <Achievement />
      <Values />
      <MaxContainer>
        <div className="bg-white">
          <Banner />
          <Contact route={"message-broker"} />
        </div>
      </MaxContainer>
    </>
  );
};

export default MessageBroker;
