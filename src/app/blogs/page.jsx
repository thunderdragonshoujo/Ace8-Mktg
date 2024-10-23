import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/blogs/hero";
import Posts from "../components/blogs/posts";

export const metadata = {
  title:
    "Latest Blogs on DevSecOps, Messaging Systems & Cloud Solutions | Ace8",
  description:
    "Stay updated with Ace8's blogs on DevSecOps, messaging systems, cloud-native solutions, and data management. Explore insights and trends in digital transformation.",
  alternates: {
    canonical: "https://www.ace8.io/blogs",
  },
  openGraph: {
    title:
      "Latest Blogs on DevSecOps, Messaging Systems & Cloud Solutions | Ace8",
    description:
      "Stay updated with Ace8's blogs on DevSecOps, messaging systems, cloud-native solutions, and data management. Explore insights and trends in digital transformation.",
    url: "https://www.ace8.io/blogs",
    siteName: "Ace8",
    locale: "en_US",
    type: "website",
  },
};

const Blogs = () => {
  return (
    <MaxContainer>
      <Hero />
      <Posts />
    </MaxContainer>
  );
};

export default Blogs;
