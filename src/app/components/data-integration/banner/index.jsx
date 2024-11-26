import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:mt-[30rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div data-animation-Id='slideIn' className="relative">
                <img src="/_border.png" alt="border" className="absolute z-[0] w-[100%] h-[100%]  inset-0 top-[-1.5rem] left-[1.5rem]" />
                <div className="sm:py-[3rem] relative z-[1] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                    <div className="sm:w-[100rem] sm:mt-[3rem] flex flex-col">
                        <h2 className="text-[2.8rem] sm:text-[4.4rem] font-[700]  self-center text-center mt-[1rem] sm:w-[91rem] sm:mt-[0]"><span className="font-[400]">Ready to</span> Overcome Integration <span className="sm:text-[#8FD5CC] text-[#F8D449]">Challenges</span> and <span className="font-[400]">Unlock the</span> Power of Seamless <span className="font-[400]">Integration</span> <span className="sm:text-[#8FD5CC] text-[#F8D449]">for E-commerce Success</span></h2>
                        <p className="mt-[2rem] hidden sm:block text-center">Contact us now to learn more about our unique approach to integrating your e-commerce data with your data analytics platform. With our seamless integration service, designed to work with Databricks or Snowflake, and our expert design and architecture consulting, we ensure efficient integration without overspending. Experience cost optimization, fault tolerance, and maximize the value of your data analytics investment. Don't let integration stand in the way of your e-commerce success—reach out to us today.</p>
                        <p className="mt-[2rem] sm:hidden text-center">Contact us now to learn more about our unique approach to integrating your e-commerce data with your data analytics platform. With our seamless integration service, designed to work with Databricks or Snowflake, and our expert design and architecture consulting, we ensure efficient integration without overspending. Experience cost optimization, fault tolerance, and maximize the value of your data analytics investment.</p>

                        <Link href='#contact' className="self-center mt-[1rem]">
                            <button className="sm:px-[2.5rem] px-[2rem] py-[1rem] rounded-[.8rem] sm:py-[1.2rem] sm:rounded-[1rem] font-[700] sm:text-[1.4rem] border mt-[2rem]">Contact Us for Seamless Integration</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;