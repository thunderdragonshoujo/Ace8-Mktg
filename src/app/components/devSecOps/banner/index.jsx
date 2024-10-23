import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Ready to Bridge</span> the Gap Between <span className="text-[#8FD5CC]">Development,</span> Security, <span className="font-[400]">and Operations and Unleash the Full</span> <span className="text-[#8FD5CC]">Potential of Your Organization</span></h2>
                    <p className="mt-[2rem] text-center">Learn more about our DevSecOps approach and how it can drive continuous value delivery, prioritize security, and foster a culture of collaboration and efficiency. Contact us today to embark on a transformative journey and build robust, secure, and scalable software solutions.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Learn More about DevSecOps</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;