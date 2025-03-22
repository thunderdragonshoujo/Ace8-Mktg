import Img from "../common/image";

const Partner = () => {
    const Partners = [
        {
            icon: "/tomcat-partner.png",
        },
        {
            title: <h3 className="text-[2.2rem]">Certifie AWS <span className="text-[#9B86FE] font-[700]">Professionals</span></h3>,
            description: "Our team includes certified experts across all major AWS services.",
            icon: "/team.svg"
        },
        {
            title: <h3 className="text-[2.2rem] w-[15rem]">Tailored <span className="text-[#9B86FE] font-[700]">Solutions</span></h3>,
            description: "Customized strategies to match your specific workloads and business needs.",
            icon: "/approach.svg"
        },
        {
            title: <h3 className="text-[2.2rem]">Comprehensive <span className="text-[#9B86FE] font-[700]">Support</span></h3>,
            description: "From emergency fixes to proactive monitoring, we’ve got you covered.",
            icon: "/partner-support.svg"
        },
        {
            title: <h3 className="text-[2.2rem] w-[15rem]">Proven <span className="text-[#9B86FE] font-[700]">Success</span></h3>,
            description: "Trusted by enterprises across industries like finance, healthcare, and e-commerce..",
            icon: "/results.svg"
        },
        {
            title: <h3 className="text-[2.2rem] w-[15rem]">24/7 <span className="text-[#9B86FE] font-[700]">Availability</span></h3>,
            description: " Round-the-clock support options aligned with your SLAs.",
            icon: "/plans.svg"
        },
    ]



    return (
        <section className="bg-[#ffffff] sm:px-[10rem] my-[-.5rem] px-[2rem] py-[4rem] sm:py-[7rem]">
            <h2 className="sm:text-[3.8rem] text-[2.8rem] w-[80%] mx-auto
            sm:w-[100%] sm:mx-0 text-[#000000] text-center font-[700]">Why Choose <span className="font-[400]"> Us as Your</span> AWS <span className="text-[#9B86FE]"> Partner?</span></h2>

            <div className="grid gap-x-[1.2rem] sm:items-center sm:grid-cols-8 sm:mt-[3rem] mx-auto max-w-[1400px] sm:grid-rows-2 gap-y-[1rem]">
                <Img
                    src={`/tomcat/tomcat-partner.png`}
                    className="w-[50rem] sm:hidden inline-block mb-[2rem] h-[auto]"
                    alt="icon"
                />
                {
                    Partners.map((partner, index) => {
                        if (partner.title) return (
                            <Card
                                key={index}
                                {...partner}
                                id={index}
                            />
                        )
                        return (
                            <div className="sm:col-start-1  justify-items-center sm:col-span-2 sm:col-end-5">
                                <Img
                                    src={`/AWS/AWS-partner.png`}
                                    className="w-[53rem] hidden sm:inline-block h-[auto]"
                                    alt="icon"
                                />
                            </div>
                        )
                    })
                }

            </div>
            <p className="font-[500] mt-[2rem] sm:mt-[0] text-[#000000] text-center">With us, your AWS environment is in safe hands.</p>

        </section>
    );
}

const Card = ({ title, description, id }) =>
    <div className={`px-[2rem] pr-[3rem] sm:min-h-[38rem] h-[100%] sm:h-[75%] min-h-[32rem] sm:col-span-2 ${id == 3 ? "sm:col-start-3" : id === 0 ? "sm:col-start-4" : "" } rounded-[1.5rem] shadow pt-[4rem] pb-[5rem] bg-[#11151A]`}>
        <Img
            src={`/AWS/0${id}.svg`}
            className={` ${title ? "w-[6rem] h-[6rem]" : "w-[30rem] h-[auto]"}  sm:mb-[8rem] mb-[8rem]`}
            alt="icon"
        />
        {title && title}
        {description && <p className="mt-[2rem] max-w-[25rem]">{description}</p>}
    </div>

export default Partner;