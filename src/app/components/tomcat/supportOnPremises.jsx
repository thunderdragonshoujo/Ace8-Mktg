import Img from "../common/image";
import ButtonLink from "../common/buttonLink";

const SupportOnPremises = () => {

    const Services = [
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Perfomance <span className="text-[#9B86FE] font-[700]">Optimization</span></h3>,
            description: "Fine-tune your Tomcat servers for reliability and efficiency.",
            icon: "/optimization.svg"
        },
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Custom <span className="text-[#9B86FE] font-[700]">Configuration</span></h3>,
            description: "Align Tomcat setups with your specific operational needs and workloads.",
            icon: "/configuration.svg"
        },
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Best Practices <span className="text-[#9B86FE] font-[700]">Mentoring</span></h3>,
            description: "Equip your team with knowledge and strategies to manage Tomcat effectively.",
            icon: "/mentoring.svg"
        },
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Break-Fix <span className="text-[#9B86FE] font-[700]">Services</span></h3>,
            description: "Rapid resolution of critical issues minimize downtime..",
            icon: "/services.svg"
        },
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Security <span className="text-[#9B86FE] font-[700]">Hardening</span></h3>,
            description: "Implement the latest security measures to protect sensitive data.",
            icon: "/hardening.svg"
        },
        {
            title: <h3 className="text-[2.3rem] w-[20rem] font-[400]">Cluster <span className="text-[#9B86FE] font-[700]">Management</span></h3>,
            description: "Configure load balancing and failover mechanisms for high availability.",
            icon: "/management.svg"
        },
    ]

    return (
        <section className="flex bg-[#0D1117] flex-col pt-[3.5rem] pb-[7rem] sm:px-[8rem] px-[2rem]">
            <h2 className="text-center sm:max-w-[50rem] max-w-[30rem] mx-auto sm:text-[3.8rem] text-[2.8rem] font-[800]"><span className="font-[400]">Support for<br className="sm:hidden"></br></span> <span className="text-[#FF88C3]"> On-Premises </span>
                <br className="sm:hidden"></br>Tomcat <span className="font-[400]">Deployments </span></h2>

            <p className="text-center max-w-[60rem] mx-auto mt-[2rem]">For enterprises running Apache Tomcat on-premises, maintaining optimal performance and security is vital. We provide comprehensive on-premises support to help you leverage Tomcat’s full potential.</p>

            <div className="grid mt-[6rem] max-w-[1200px] gap-x-[1.5rem] gap-y-[3.5rem] mx-auto grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {
                    Services.map((service, index) => {
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
                text="Explore On-Premises Tomcat Services"
                className="mt-[5rem] font-[800] border border-[#5545A0] px-[5rem] rounded-[.7rem] mx-auto hover:bg-[#5545A0]
                    transition-all duration-300 ease-in-out"
            />
        </section>
    );
}

const Card = ({ title, description, icon, id }) =>
    <div className="px-[2rem] rounded-[1.5rem] w-[350px] shadow pt-[4rem] pb-[5rem] bg-[#11151A]">
        <Img
            src={`/tomcat/${icon}`}
            className="w-[6rem] mb-[2rem] h-[6rem]"
            alt="icon"
        />
        {title}
        <p className="mt-[2rem] max-w-[30rem]">{description}</p>
    </div>

export default SupportOnPremises;