import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div className="relative">
                <img src="/_border.png" alt="border" className="absolute hidden sm:block inset-0 w-[100%]  h-[100%] left-[1.5rem] top-[-1.5rem] z-[0]" />
                <div  data-animation-id='slideIn' className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] relative bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                    <div className=" sm:mt-[3rem] flex flex-col">
                        <h2 className="text-[2.7rem] sm:text-[4.4rem] font-[700] self-center text-center mt-[1rem] sm:w-[110rem] sm:mt-[0]"><span className="font-[400]">Ready to Bridge</span> the Gap Between <span className="sm:text-[#8FD5CC] text-[#72BDFF]">Development,</span> Security, <span className="font-[400]">and Operations and Unleash the Full</span> <span className="sm:text-[#8FD5CC] text-[#72BDFF]">Potential of Your Organization</span></h2>
                        <p className="mt-[2rem] sm:w-[85rem] sm:mx-auto text-center">Learn more about our DevSecOps approach and how it can drive continuous value delivery, prioritize security, and foster a culture of collaboration and efficiency. Contact us today to embark on a transformative journey and build robust, secure, and scalable software solutions.</p>

                        <Link href='#contact' className="self-center mt-[1rem]">
                            <button className="sm:px-[3rem] rounded-[1rem] px-[2rem] text-[1.2rem] font-[800] py-[1.2rem] border-[1.2px] mt-[2rem]">Learn More about DevSecOps</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;