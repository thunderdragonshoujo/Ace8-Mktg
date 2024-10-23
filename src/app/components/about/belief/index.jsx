import Image from "next/image";
const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem] py-[4rem] sm:py-[6rem] flex flex-col">
            <p className="text-[2rem] sm:text-[2.8rem] sm:leading-[4rem] text-center sm:self-center font-[700] sm:w-[70rem]" data-animation-id='slideIn'><span className="font-[400]">With over 100 years of experience,</span> and <span className="text-[#46D7B4] sm:text-[#8FD5CC]">the desire to always stay on the cutting edge,</span><span className="font-[400]"> we are empowered</span> to transform your business. </p>

            <div className="sm:mt-[5rem] sm:flex hidden flex-col">
                <h2 data-animation-id='slideIn' className="font-[700] sm:text-[3rem] text-[5rem] text-center sm:mb-[1rem]"><span className="text-[#8ACDC5]">Our</span> Beliefs</h2>
                <img src="/belief_sm.webp" className="sm:w-[100rem] self-center" alt="belief" />
            </div>

            <img src="/our_belief.svg" className="mt-[5rem] sm:hidden" alt="belief" />

            <div className="mt-[5rem] sm:hidden">
                <h2 className="sub-header text-center mb-[2.5rem]">Why <span className="text-[#C496FF]">We Do This</span></h2>
                <img src="/why_we_do_this.svg" alt="" />
            </div>
            <div className="mt-[4.5rem]" data-animation-id='slideIn'>
                <h2 className="sub-header text-center sm:text-start"><span className="text-[#13D2FF] sm:text-[#FF88C3]">Our</span> Values</h2>
                <img src="/about_values.svg" alt="" className="mt-[2rem] sm:hidden" />
                <img src="/values_sm.svg" alt="" className="mt-[2rem] sm:block hidden" />
            </div>
        </section>
    );
}
 
export default Index;