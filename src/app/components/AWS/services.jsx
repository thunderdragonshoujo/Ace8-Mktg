import Img from "../common/image";
import CTA from "./CTA";
import ButtonLink from "../common/buttonLink";
import MaxContainer from "../common/maxContainer";
import Contact from "../common/contact";


const AWSServices = () => {
    const cards = [
        {
            title: <h3 className="text-[2.4rem] max-w-[26rem]">Cloud Optimization <span className="font-[700] text-[#9B86FE]">Cost & Management</span></h3>,
            texts: [
                "Rightsizing Recommendations",
                "Trusted Advisor Cost Optimization",
                "Billing Conductor Implementation"
            ],
            icon: "/AWS/management.svg"
        },
        {
            title: <h3 className="text-[2.4rem]">Security <span className="font-[700] text-[#9B86FE]">& Governance</span></h3>,
            texts: [
                "Web Application Firewall (WAF) Setup",
                "Identity & Access Management (IAM)",
                "Network Firewall Configuration"
            ],
            icon: "/AWS/management.svg"
        },
        {
            title: <h3 className="text-[2.4rem] max-w-[26rem]">Generativee AI with <span className="font-[700] text-[#9B86FE]">AWS Bedrock</span></h3>,
            texts: [
                "Foundation Model Selection and Integration",
                "Custom Model Fine-tuning",
                "Retrieval Augmented Generation (RAG) Implementation",
                "AI Agent Development for Complex Tasks",
                "Secure and Compliant AI Application Deployment",
            ],
            icon: "/AWS/bedrock.svg"
        },
        {
            title: <h3 className="text-[2.2rem] max-w-[15rem]">Data Analytics <span className="font-[700] text-[#9B86FE]">& Storage</span></h3>,
            texts: [
                "Amazon Kinesis Data Analytics",
                "Amazon S3 Storage Management",
                "Amazon MemoryDB for Redis",
            ],
            icon: "/AWS/storage.svg"
        },
        {
            title: <h3 className="text-[2.2rem] max-w-[26rem]">Application <span className="font-[700] text-[#9B86FE]">Modernization</span></h3>,
            texts: [
                "Serverless Application Development",
                "Microservices Architecture Design",
                "Container Orchestration (Amazon EKS Anywhere)",
            ],
            icon: "/AWS/modernization.svg"
        },
        {
            title: <h3 className="text-[2.2rem] max-w-[26rem]">Migration & Disaster <span className="font-[700] text-[#9B86FE]">Recovery</span></h3>,
            texts: [
                "Database Migration Service",
                "Elastic Disaster Recovery Solutions",
                "Cloud Governance & Multi-cloud Strategies",
            ],
            icon: "/AWS/_recovery.svg"
        },
        {
            title: <h3 className="text-[2.2rem] max-w-[18rem]">Specialized tools <span className="font-[700] text-[#9B86FE]">& Features</span></h3>,
            texts: [
                "Amazon Route 53 Resolver DNS Firewall",
                "Amazon FSx for OpenZFS",
                "Amazon Braket Quantum Computing",
            ],
            icon: "/AWS/features.svg"
        },

    ]
    return (
        <section className="bg-[#0D1117] flex flex-col py-[7rem] pt-[10rem] sm:px-[10rem]">
            <h3 className="sm:text-[3.8rem] text-[3rem] sm:w-[40rem] mx-auto mb-[6rem] text-center">Our Specialized <span className="text-[#FF88C3] font-[600]">AWS</span> <span className="font-[700]">Services</span> </h3>

            <div className="max-w-[1400px] px-[2rem] gap-[2rem] w-[100%] mx-auto flex flex-col justify-center">
                <div className="grid sm:gap-x-[1.5rem] gap-y-[2rem] sm:grid-cols-3">
                    {
                        cards.map((card, index) => {
                            if (index < 3) {
                                return (
                                    <Card
                                        key={index}
                                        {...card}
                                        id={index}
                                    />
                                )
                            }
                        })
                    }
                </div>
                <div className="grid sm:gap-x-[1.5rem] gap-y-[2rem] sm:grid-cols-4">
                    {
                        cards.map((card, index) => {
                            if (index >= 3) {
                                return (
                                    <Card
                                        key={index}
                                        {...card}
                                        id={index}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>

            <ButtonLink
                link="#contact"
                text="Contact Us for a Free Consultation"
                className="mt-[2rem] font-[800] border border-[#5545A0] sm:px-[5rem] px-[2rem] rounded-[.7rem] mx-auto hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
            />

            <CTA />

            <MaxContainer>
                <Contact />
            </MaxContainer>
        </section>
    );
}

const Card = ({ title, texts, icon, id }) => {
    return (
        <div className="py-[2rem] pb-[3.5rem] flex flex-col gap-y-[2.3rem] px-[2.5rem] bg-[#11151A] rounded-[1.5rem]">
            <Img
                className={"w-[7rem] h-[7rem]"}
                src={icon}
                alt="icon"
            />
            {title}
            <ul className="mt-2 text-sm list-inside">
                {texts.map((text, index) => (
                    <li key={index} className={`text-[1.4rem]  ${id >= 3 ? "w-[100%]" : "sm:w-[30rem]"} relative pl-[2rem] leading-[2rem] before:absolute before:content-['•'] before:left-0 before:text-white mb-[1rem]`}>{text}</li>
                ))}
            </ul>
        </div>
    )
}


export default AWSServices;
