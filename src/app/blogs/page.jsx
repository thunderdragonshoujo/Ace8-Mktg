import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/blogs/hero";
import Posts from "../components/blogs/posts";
import { client } from "../../sanity/lib/client";
import { AllPostQuery } from "../../sanity/lib/query";

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

async function getData() {
  const allblogs = await client.fetch(AllPostQuery);
  const featuredBlog = allblogs.find((item)=>item?.featured)
  return {
      allblogs: allblogs?.filter((item)=>item.slug.current !== featuredBlog?.slug.current),
      featuredBlog
  }
}

const Blogs = async () => {
  const {allblogs, featuredBlog} = await getData()

  return (
    <MaxContainer>
      <Hero />
      <Posts blogs={allblogs} featuredBlog={featuredBlog}/>
    </MaxContainer>
  );
};

export default Blogs;
