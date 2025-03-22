import Img from "../common/image";

const UseCase = () => {
    return (
        <section className="sm:px-[10rem]  bg-[#0D1117] pt-[5rem] sm:pt-[13rem]">
            <div className="flex max-w-[1600px] mx-auto sm:bg-[length:100%_100%] sm:bg-AWS-usecase sm:max-h-[60rem] gap-[3rem] bg-no-repeat sm:px-[7rem] sm:pt-[7rem] px-[2.5rem]">
                <div className="border rounded-[1.5rem] p-[2rem] border-[#9B86FE] sm:border-none">
                    <h2 className="text-[3rem] leading-[3.5rem] sm:leading-[4.5rem] text-center sm:text-start font-[800] max-w-[60rem]">
                        AWS <span className="font-[400]">Infrastructure</span> for a Major <span className="text-[#9B86FE]">Transportation Enterprise</span>
                    </h2>

                    <p className="max-w-[70rem] text-center sm:text-start mt-[1rem]">
                        Ace8 developed all Infrastructure as Code (IaC) for a major transportation enterprise, enabling over 20 microservices across dozens of vendors while ensuring strict security controls. Our team designed specialized data handling techniques to seamlessly move data between Production and Test environments with automated obfuscation, ensuring compliance and security. In addition to managing all services as code, we provided ongoing system-wide support, handling incident management and proactive monitoring to maintain operational stability. Our expertise also extended to guiding development teams in cloud-native best practices, improving deployment efficiency, scalability, and system resilience. This holistic approach empowered the enterprise to achieve a secure, automated, and well-orchestrated cloud infrastructure, reducing risks and operational overhead.
                    </p>
                </div>
                <Img
                    className={"w-[50rem] hidden sm:inline-block translate-y-[-8rem] h-[50rem]"}
                    src={"/AWS/usecase.png"}
                    alt="usecase"
                />
            </div>
        </section>
    );
}

export default UseCase;