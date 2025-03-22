import ButtonLink from "../common/buttonLink";


const AWSOfferings = () => {
    const offerings = [
        {
            title: "Amazon Redshift Spectrum & Data Warehousing",
            text: "Enable real-time analytics on massive datasets"
        },
        {
            title: "AWS Serverless Computing",
            text: "Build scalable applications using AWS Lambda and Amazon Aurora Serverless v2."
        },
        {
            title: "Cloud Migration & Modernization",
            text: "Seamlessly transition to the cloud or modernize legacy systems with tools like the AWS Migration Hub and Mainframe Modernization solutions."
        },
        {
            title: "Enterprise Security & Compliance",
            text: "Leverage tools like AWS Private Certificate Authority and Trusted Advisor for robust security and compliance."
        }
    ]
    return (
        <section className="py-[7rem] px-[2.5rem] flex flex-col sm:px-[15rem] text-[#0D1117] bg-white">
            <h2 className="text-center font-[800] text-[3rem] leading-[3.5rem]">Thinking About <span className="font-[400]"> Advanced</span> <span className="text-[#FF88C3]">AWS Offerings?</span></h2>
            <p className="text-center">If you're exploring premium AWS services, we’ll help you unlock their full potential:</p>
            <div className="max-w-[1400px] w-[100%] sm:mt-[12rem] mt-[4rem] flex flex-col gap-y-[6rem] mx-auto">
                {
                    offerings.map((item, index) =>
                        <Offerings
                            {...item}
                            id={index}
                        />
                    )
                }
            </div>
            <p className="sm:mt-[6rem] mt-[3rem] font-[500] text-center">Discover the advantages of advanced AWS offerings with expert guidance.</p>

            <ButtonLink
                text={"Learn About Our Advanced Services"}
                link={"#"}
                className={"border border-[#5545A0] mx-auto rounded-[.5rem] font-[800] text-[#000000]"}
            />
        </section>
    );
}

const Offerings = ({ title, text, id }) => {
    return (
        <div className={`flex ${id % 2 ? "ml-auto" : "mr-auto"} py- items-center gap-[4rem]`}>
            <h3 className="text-[2.5rem] text-[#FF88C3] font-[700]">{`0${id + 1}`}</h3>
            <div className="">
                <h4 className="mb-[.5rem] text-[1.8rem] font-[600]">{title}</h4>
                <p className="max-w-[45rem]">{text}</p>
            </div>
        </div>
    )
}

export default AWSOfferings;