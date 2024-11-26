import Link from "next/link";
import Image from "next/image";
const Index = () => {
    return (
        <section className="mt-[6rem]  pt-[3rem] bg-black sm:bg-transparent sm:pt-[0] pb-[4rem] sm:pb-[0] sm:px-[10rem]">
            <div data-animation-id='slideIn' className="relative sm:top-[-20rem]">
                <Image
                    src={'/_border.png'}
                    width={1620}
                    height={574}
                    alt="border"
                    className="absolute hidden sm:block inset-0 w-[100%] h-[100%] left-[1rem] z-[0] isolate top-[-2rem]"
                />
                <div  style={{ backgroundSize: '100% 100%, 100% 100%, 100% 100%' }} className="sm:pl-[5rem] px-[3rem] sm:py-[3rem] sm:pb-[5rem] sm:bg-banner_hand bg-contain  bg-no-repeat sm:grid sm:place-content-center  relative z-[1]">
                    <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                        <h2 className="sub-header text-[3rem] font-[700] self-center text-center mt-[1rem] sm:w-[100rem] sm:mt-[0]"><span className="font-[400]">Trust AceMQ for</span> <span className="text-[#A7D28A] sm:text-[#8FD5CC]">Microservices</span> <span className="font-[400]">Design,</span> Development, and <span className="text-[#A7D28A] sm:text-[#8FD5CC]">Refactoring</span></h2>
                        <p className="mt-[2rem] hidden sm:block text-center">We make you move faster, reliably, unlocking your full potential. From architectural and implementation assessments to full deliveries, we believe in continuous innovation. Our offerings span assessments and services covering Microservices, Message Brokers, DevSecOps, and more. Explore our optimized products like Onboarding as as Service and Golang Starter Kits to help kickstart your Digital Transformation Today. Ready to innovate relentlessly? Choose Ace8 for transformative tech solutions.</p>
                        <p className="mt-[2rem] sm:hidden text-center">Ready to build scalable, efficient, and maintainable microservices? Trust Ace8 for comprehensive microservices design, development, and refactoring services. Accelerate your development with our Golang starter kits and expert guidance through the complexities of microservices architecture. </p>

                        <Link href='#contact' className="self-center mt-[1rem]">
                            <button className="border-[1.5px] px-[3rem] font-[800] py-[1rem] rounded-[1rem] text-[1.4rem]  mt-[2rem]">Get Started With Ace8</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;