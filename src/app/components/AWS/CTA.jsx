import ButtonLink from "../common/buttonLink";
const CTA = () => {
    return (
        <div className="flex sm:bg-AWS-banner px-[2rem] sm:px-[0] bg-[length:100%_100%] bg-[#0B0E21] sm:bg-[#0B0E21] sm:bg-blend-multiply rounded-[1.8rem] max-w-[1200px] sm:py-[10rem] py-[7rem] sm:w-[85%] mx-auto mt-[8rem] flex-col justify-center relative items-center">
            <div className="absolute hidden sm:block bg-[length:100%_100%] width-[100%] height-[100%] z-[-1] w-[100%] bg-banner-outline bottom-[1.5rem] top-[-1.5rem] right-[-2rem]"></div>

            <h3 className="text-[3rem] text-center sm:text-start mb-[1rem]">Ready to Transform Your <span className="font-[800] text-[#8FD5CC] mb-[2rem]">AWS Ecosystem</span></h3>

            <p className="text-center sm:text-[2rem] text-[1.6rem] max-w-[90rem]">
                Don’t let cloud complexities slow you down. Whether you're optimizing costs, modernizing applications, or scaling globally, we provide the expertise you need to succeed in the cloud.
            </p>

            <ButtonLink
                link="#contact"
                text="Optimize Your Incident Management"
                className="sm:mt-[2rem] mt-[2rem] font-[800] border border-[#ffffff] sm:px-[5rem] px-[2rem] rounded-[.7rem] mx-auto hover:text-[#0D1117] hover:bg-[#ffffff]
                    transition-all duration-300 ease-in-out"
            />
        </div>
    )
}

export default CTA;