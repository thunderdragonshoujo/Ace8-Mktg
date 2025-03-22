import Img from "../common/image";
import ButtonLink from "../common/buttonLink";
import MaxContainer from "../../components/common/maxContainer";
import Brand from "@/app/components/common/brand";

const SupportServices = () => {
    const services = [
        {
            title: <h3 className="sm:text-[1.7rem] text-[1.7rem] text-center font-[700]">24/7 Technical <span className="text-[#9B86FE]">Support</span></h3>,
            description: "Access to our experts around the clock",
            icon: "/support.svg",
        },
        {
            title: <h3 className="sm:text-[1.7rem] text-[1.7rem] text-center font-[700]"><span className="text-[#FF88C3]">Installation</span> and Configuration</h3>,
            description: "Optimize your Tomcat setup for peak Performance",
            icon: "/installation.svg",
        },
        {
            title: <h3 className="sm:text-[1.7rem] text-[1.7rem] text-center font-[700]">Emergency <span className="text-[#5747A5]">Hot Fixes</span></h3>,
            description: "Rapid solutions for critical issues.",
            icon: "/Hot-fixes.svg",
        },
        {
            title: <h3 className="sm:text-[1.7rem] text-[1.7rem] text-center font-[700]">Security <span className="text-[#8FD5CC]">Vulnerability</span> Notifications</h3>,
            description: "Stay informed about potential threats.",
            icon: "/vulnerability.svg",
        },
        {
            title: <h3 className="sm:text-[1.7rem] text-[1.7rem] text-center font-[700]">Compliance <span className="text-[#5747A5]">Assistance</span></h3>,
            description: "Meet internal and external policy requirements",
            icon: "/assistance.svg",
        },
    ]

    return (
        <section className="sm:pb-[8rem] sm:py-[0] py-[4rem] bg-[#0D1117]">
            <MaxContainer>
                <Brand />
                <div className="flex isolate z-[1] border mt-[6rem] mb-[7rem] border-[#9B86FE] bg-[#0B0E12] sm:w-[85rem] mx-auto items-center overflow-y-visible gap-[5rem] justify-between sm:pl-[6rem] relative rounded-[2rem] h-[24rem]">
                    <p className="sm:w-[55rem]"><span className="font-[700] text-[#9B86FE]">Apache Tomcat</span> is a cornerstone for deploying and managing Java-based applications. Whether on-premises or in the cloud, achieving optimal performance and reliability requires expertise. Our specialized Tomcat services ensure your deployments run smoothly, securely, and aligned with your business goals.</p>

                    <Img
                        src={"/tomcat/tomcat.svg"}
                        alt="tomcat image"
                        className="size-[28rem] top-[-3rem] absolute right-[-14rem]"

                    />
                    
                </div>
            </MaxContainer>

            <div className="mt-[5rem] flex flex-col">
                <h2 className="sm:text-[3.8rem] text-[2.6rem] sm:max-w-[65rem] max-w-[25rem] mx-auto text-center font-[800]"><span className="font-[400]">Comprehensive</span> <span className="text-[#FF88C3]">Tomcat Consulting </span>
                    & Support Services</h2>

                <div className="max-w-[1400px] mt-[4rem] justify-items-center gap-y-[6rem] grid sm:grid-rows-2 sm:grid-cols-6 mx-auto">
                    {
                        services.map((service, index) => {
                            return (
                                <Card
                                    key={index}
                                    {...service}
                                    id={index}
                                />
                            )
                        })
                    }
                </div>

                <ButtonLink
                    link="#contact"
                    text="Connect with Our Tomcat Experts"
                    className="sm:mt-[5rem] mt-[4rem] font-[800] border border-[#5545A0] px-[5rem] rounded-[.7rem] mx-auto hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
                />
            </div>
        </section>
    );
}

const Card = ({ title, description, icon, id }) => {
    return (
        <div className={`flex flex-col sm:col-span-2 ${id == 3 ? "sm:col-start-2" : ""} items-center`}>
            <Img
                src={`/tomcat/${icon}`}
                className="w-[10rem] mb-[2rem] h-[6rem]"
                alt="icon"
            />
            {title}
            <p className="text-center sm:w-[25rem] mx-auto sm:mt-[1.8rem] mt-[1rem]">{description}</p>
        </div>
    )
}

export default SupportServices;