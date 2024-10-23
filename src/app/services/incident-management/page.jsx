import Hero from "../../components/incidentManagement/hero";
import Body from "../../components/incidentManagement/body";
import Banner from "../../components/incidentManagement/banner";
import MaxContainer from "../../components/common/maxContainer";
import Contact from "../../components/common/contact";

export const metadata = {
  title:
    "Proactive Incident Management Services for Reliable Operations | Ace8",
  description:
    "Experience proactive incident management with Ace8. Our unique approach combines chaos engineering, AI-powered Netflix Dispatch, and 24/7 support to ensure rapid, efficient incident resolution.",
  alternates: {
    canonical: "https://www.ace8.io/services/incident-management",
  },
  openGraph: {
    title:
      "Proactive Incident Management Services for Reliable Operations | Ace8",
    description:
      "Experience proactive incident management with Ace8. Our unique approach combines chaos engineering, AI-powered Netflix Dispatch, and 24/7 support to ensure rapid, efficient incident resolution.",
    url: "https://www.ace8.io/services/incident-management",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const IncidentManagement = () => {
  return (
    <>
      <Hero />
      <Body />
      <MaxContainer>
        <Banner />
        <Contact route={"incident-management"} />
      </MaxContainer>
    </>
  );
};

export default IncidentManagement;
