import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:mt-[17rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Ready to</span> Overcome Integration <span className="text-[#8FD5CC]">Challenges</span> and <span className="font-[400]">Unlock the</span> Power of Seamless <span className="font-[400]">Integration</span> <span className="text-[#8FD5CC]">for E-commerce Success</span></h2>
                    <p className="mt-[2rem] text-center">Contact us now to learn more about our unique approach to integrating your e-commerce data with your data analytics platform. With our seamless integration service, designed to work with Databricks or Snowflake, and our expert design and architecture consulting, we ensure efficient integration without overspending. Experience cost optimization, fault tolerance, and maximize the value of your data analytics investment. Don't let integration stand in the way of your e-commerce success—reach out to us today.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Contact Us for Seamless Integration</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;