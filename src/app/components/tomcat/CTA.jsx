import Img from "../common/image";
import ButtonLink from "../common/buttonLink";
import useMediaQuery from "@/app/Hooks/useMediaQuery";

const CTA = () => {

    const timelines = [
        {
            title: "Schedule a Consultation",
            description: "connect with our experts to discuss your current challenges and objectives.",
            style: "sm:mt-[10rem]",
            icon: "/01"
        },
        {
            title: "Receive a Custom Plan",
            description: "We’ll assess your environment and propose tailored recommendations",
            style: "self-center text-end",
            icon: ""
        },
        {
            title: "Transform Your Tomcat Deployment",
            description: "Implement proven strategies for performance, scalability, and security. ",
            style: "self-end sm:mb-[7rem]",
            icon: ""
        },
    ]

    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <section className="py-[6rem] sm:py-[5rem]">
            <h2 className="text-center text-[3rem]">Getting <span className="font-[800] text-[#9B86FE] mb-[4rem]">Started</span></h2>
            <p className="text-center mt-[2rem] sm:mt-[0] sm:w-[100%]  w-[90%] mx-auto">Taking the first step toward an optimized Apache Tomcat deployment is simple</p>

            <div className="flex flex-col mt-[5rem] sm:flex-row sm:mt-[9rem] justify-center sm:gap-x-[5rem] gap-y-[4rem] sm:mx-auto w-[100%] sm:px-[6rem] max-w-[1200px]">
                {
                    timelines.map((timeline, index) => {
                        if (index === 1 && !isMobile) return (<Timeline
                            {...timeline}
                            key={index}
                            id={index}
                        />)
                    })
                }

                <Img
                    src="/tomcat/timeline.svg"
                    className="w-[5rem] hidden sm:inline-block sm:col-start-2"
                    alt="timeline-circle"
                />

                <div className="flex px-[2.5rem] sm:px-[0] gap-y-[5rem] sm:gap-y-[0] sm:w-[32%] justify-between flex-col">
                    {
                        timelines.map((timeline, index) => {
                            if (!isMobile && index !== 1) {
                                return (<Timeline
                                    {...timeline}
                                    key={index}
                                    id={index}
                                />)
                            } else if (isMobile && index < 3) {
                                return (<Timeline
                                    {...timeline}
                                    key={index}
                                    id={index} />)
                            }
                        })
                    }
                </div>
            </div>

            <Banner />
        </section>
    );
}

const Timeline = ({ title, description, style, id }) =>
    <div className={`flex gap-[3rem] ${id % 2 ? "flex-row-reverse" : ""} ${style} ${id % 2 ? "sm:w-[33%]" : "w-[100%]"} h-fit`}>
        <Img
            src={`/0${id + 1}.svg`}
            className={`w-[5rem] h-[5rem] sm:hidden`}
        />
        <div className="flex flex-col">
            <h4 className="text-[1.8rem] font-[500]">{title}</h4>
            <p className={`sm:w-[90%] ${id % 2 ? "ml-auto" : "mr-auto"} sm:mt-[1.2rem] mt-[.8rem]`}>{description}</p>
        </div>
    </div>
export default CTA;



const Banner = () => {
    return (
        <div className="flex sm:bg-tomcat-banner px-[2rem] sm:px-[0] bg-[length:100%_100%] bg-[#000000] sm:bg-[#0D1117] sm:bg-blend-hue rounded-[1.8rem] max-w-[1200px] sm:py-[10rem] py-[7rem] sm:w-[85%] mx-auto mt-[10rem] flex-col justify-center relative items-center">
            <div className="absolute hidden sm:block bg-[length:100%_100%] width-[100%] height-[100%] z-[-1] w-[100%] bg-banner-outline bottom-[2rem] top-[-2rem] right-[-2rem]"></div>
            <p className="text-center sm:text-[2rem] text-[1.6rem] max-w-[75rem]">
                Let us help you unlock the full potential of Apache Tomcat. Whether your deployment is on-premises, in the cloud, or both, our expertise ensures your Java applications deliver consistent value.
            </p>

            <ButtonLink
                link="#contact"
                text="Contact Us for Free Consultation"
                className="sm:mt-[3rem] mt-[5rem] font-[800] border border-[#ffffff] sm:px-[5rem] px-[2rem] rounded-[.7rem] mx-auto hover:text-[#0D1117] hover:bg-[#ffffff]
                    transition-all duration-300 ease-in-out"
            />
        </div>
    )
}




