import Link from "next/link";
const Index = () => {
    return (
        <section className="mt-[6rem] sm:mt-[-20rem] sm:mb-[10rem] pt-[3rem] bg-black sm:bg-transparent sm:pt-[0] pb-[4rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative">
            <div className="sm:pl-[5rem] sm:py-[3rem] sm:pb-[5rem] bg-black sm:grid sm:place-content-center relative">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] sm:w-[60rem] sm:mt-[0]"><span className="font-[400]">Trust AceMQ for</span> <span className="text-[#A7D28A]">Microservices</span> <span className="font-[400]">Design,</span> Development, and <span className="text-[#A7D28A]">Refactoring</span></h2>
                    <p className="mt-[2rem] text-center">We make you move faster, reliably, unlocking your full potential. From architectural and implementation assessments to full deliveries, we believe in continuous innovation. Our offerings span assessments and services covering Microservices, Message Brokers, DevSecOps, and more. Explore our optimized products like Onboarding as as Service and Golang Starter Kits to help kickstart your Digital Transformation Today. Ready to innovate relentlessly? Choose Ace8 for transformative tech solutions.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Get Started With Ace8</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;