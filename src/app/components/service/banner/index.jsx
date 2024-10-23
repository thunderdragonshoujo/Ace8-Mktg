import Link from "next/link";
const Index = () => {
    return (
        <section className="mt-[6rem] sm:mb-[10rem] pt-[2rem] sm:pt-[0] pb-[4rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative">
            <img src="/service_banner_sm2.png" className="mix-blend-soft-light w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:hidden" alt="background" />
            <div className="sm:pl-[5rem] sm:py-[3rem]  rounded-[2rem] sm:pb-[5rem] sm:grid sm:place-content-center relative">
                <img
                    src="/service_banner2.png"
                    className="w-[100%] rounded-[2rem] mix-blend-soft-light difference h-[100%] absolute inset-0 z-[-1]  sm:block hidden" alt="background" />
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] max-w-[70rem] sm:mt-[0]">Increase your Velocity and <span className="text-[#8FD5CC]">Resilience with Ace8</span></h2>
                    <p className="mt-[2rem] text-center">We make you move faster, reliably, unlocking your full potential. From architectural and implementation assessments to full deliveries, we believe in continuous innovation. Our offerings span assessments and services covering Microservices, Message Brokers, DevSecOps, and more. Explore our optimized products like Onboarding as as Service and Golang Starter Kits to help kickstart your Digital Transformation Today. Ready to innovate relentlessly? Choose Ace8 for transformative tech solutions.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Contact Us for Streamlined Software Delivery</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;