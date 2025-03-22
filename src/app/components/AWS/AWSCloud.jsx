import ButtonLink from "../common/buttonLink";
import Img from "../common/image";
import Brand from "../../components/common/brand";
import MaxConatiner from "../common/maxContainer";

const AWSCloud = () => {
    const cards = [
        {
            title: <h2 className="text-[2.7rem]">AWS Cost <span className="text-[#9B86FE] font-[800]">Optimization</span></h2>,
            description: "Reduce cloud spending without compromising performance.",
            icon: "/AWS/optimization.svg",
        },
        {
            title: <h2 className="text-[2.7rem]">AWS <br></br> <span className="text-[#9B86FE] font-[800]"> Well-Architected</span> Review </h2>,
            description: "Ensure your architecture aligns with best practices for reliability, security, and efficiency.",
            icon: "/AWS/well-architected.svg",
        },
        {
            title: <h2 className="text-[2.7rem]">AWS <span className="text-[#9B86FE] font-[700]"> Security</span>  Enhancement</h2>,
            description: "Protect your cloud environment with tools like AWS WAF (Web Application Firewall) and AWS Identity and Access Management (IAM).",
            icon: "/AWS/security.svg",
        },
        {
            title: <h2 className="text-[2.7rem]">Disaster <br></br><span className="text-[#9B86FE] font-[800]"> Recovery</span> <br></br>Solution</h2>,
            description: "Implement AWS Elastic Disaster Recovery for business continuity.",
            icon: "/AWS/recovery.svg",
        }
    ]

    return (
        <section className="bg-[#0D1117] px-[2.5rem] flex flex-col sm:px-[15rem] sm:pb-[12rem] pb-[5rem]">
            <MaxConatiner>
                <Brand />
            </MaxConatiner>
            <div className="flex flex-col max-w-[90rem] px-[2rem] mx-auto">
                <p className="text-center sm:text-[1.9rem] font-[500]">AWS powers modern businesses with scalable, secure, and cost-effective cloud solutions. Whether you're leveraging AWS for data storage, application development, or enterprise-grade security, our consulting services ensure your AWS environment operates at peak performance while aligning with your business goals.</p>

                <ButtonLink
                    className={"mx-auto hover:bg-[#5545A0] transition-all duration-300 ease-in-out rounded-[.5rem] border-[#5545A0] font-[800]"}
                    link="#"
                    text={"Connect with Our AWS Experts"}
                />
            </div>

            <div className="sm:mt-[14rem] mt-[8rem] w-[100%] max-w-[1400px] mx-auto sm:flex sm:justify-between">
                <h2 className="text-[3rem] text-center mx-auto w-[30rem]">
                    Expert Guidance for <span className="text-[#FF88C3] font-[700]">AWS Cloud</span> Users
                </h2>

                <p className="sm:w-[45rem] w-[30rem] mt-[2rem] sm:mt-[0rem] text-center mx-auto sm:text-end">
                    Using AWS? Unlock the full potential of your cloud infrastructure with our specialized services
                </p>
            </div>

            <div className="sm:mt-[10rem] mt-[5rem] gap-y-[2rem] sm:gap-x-[1.8rem] grid sm:grid-cols-4 max-w-[1700px] mx-auto">
                {
                    cards.map((card, index) => {
                        return (<Card
                            key={index}
                            {...card}
                        />)
                    })
                }
            </div>
            <p className="text-center mt-[6rem]">Stay ahead with tailored solutions for your unique AWS workloads.</p>
            <ButtonLink
                link="#"
                text={"Explore Our AWS Services"}
                className="mt-[1.5rem] font-[800] border border-[#5545A0] sm:px-[5rem] px-[2rem] rounded-[.7rem] mx-auto hover:text-[#ffffff] hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
            />
        </section>
    );
}


const Card = ({ title, description, icon }) => {
    return (
        <div className="bg-[#11151A] rounded-[1rem] flex flex-col gap-y-[2rem] sm:min-h-[45rem] min-h-[35rem] px-[2rem] pt-[4rem]">
            <Img
                src={icon}
                className="w-[5rem]"
            />
            {title}
            <p className="">{description}</p>
        </div>
    )
}

export default AWSCloud;