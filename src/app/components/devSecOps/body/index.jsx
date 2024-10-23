import Banner from '../banner'
import MaxContainer from '../../common/maxContainer'
const Index = () => {
    return (
        <section className="bg-white  sm:pb-[7rem] pt-[5rem] sm:pt-[85rem]">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem] text-black">
                    <div className="sm:flex justify-between">
                        <div className="border-b sm:w-[47rem]">
                            <h2 className="sub-header">Continuous <span className="text-[#FF88C3]">Value</span> Delivery with <span className="text-[#FF88C3]">DevOps</span></h2>
                            <p className="mb-[2rem]">Our DevOps services include:</p>
                            <ParagraphWithBorder paragraph={<p className="">Automating all aspects of <span className="text-[500] border border-[#FF88C3] p-[.5rem] rounded-[.6rem]">Infrastructure as Code (IaC),</span> ensuring consistent and scalable infrastructure deployments.</p>} style={'border mb-[2rem]'} />
                            <ParagraphWithBorder paragraph={<p className=""><span className="border border-[#FF88C3] p-[.5rem] rounded-[.6rem]">Full automation</span>   of testing processes, reducing manual effort and accelerating time-to-market.</p>} style={'border bg-[#004C66] sm:ml-[7rem] text-white'} />
                            <ParagraphWithBorder paragraph={<p className="">Embracing a <span className="text-[700] border border-black p-[.5rem] rounded-[.6rem]">"go fast, fail fast"</span>mindset, encouraging rapid iteration and learning.</p>} style={'border mt-[2rem] mb-[3rem]'} />
                        </div>
                        <div className="sm:w-[60rem] w-[100%]">
                            <img src="/skills.png" alt="skills" className="sm:w-[60rem]" />

                            <p className="text-white bg-[#004C66] p-[2rem] rounded-[2rem] mt-[1rem]">At <span className="bg-[white] text-[#004C66] p-[.5rem] rounded-[.6rem] ">Ace8,</span> we understand the need for efficient and secure software delivery. Our DevSecOps approach combines the strengths of development, security, and operations into one cohesive team. By embracing DevOps principles, we enable you to continuously deliver value to your customers.</p>
                        </div>
                    </div>
                    <div className="sm:flex justify-between mt-[5rem] flex-row-reverse text-end sm:text-start">
                        <div className="border-b sm:w-[47rem]">
                            <h2 className="sub-header">Security as the <span className="text-[#458D84]">Top Priority</span></h2>
                            <p className="mb-[2rem]">Our security services encompass:</p>
                            <ParagraphWithBorder paragraph={<p className="">Comprehensive scanning of code and IaC to identify vulnerabilities and enforce security standards consistently.</p>} style={'border border-[#458D84] mb-[2rem]'} />
                            <ParagraphWithBorder paragraph={<p className="">Encouraging a security-first mindset, where considerations for secure design and implementation are integral to every stage of development.</p>} style={'border sm:ml-[7rem]'} />
                        </div>
                        <div className="sm:w-[70rem] w-[100%] hidden sm:block">
                            <img src="/security_code.png" alt="skills" className="sm:w-[70rem]" />
                        </div>
                    </div>

                    <div className="mt-[5rem] sm:flex flex-col mb-[10rem]">
                        <h3 className="sub-header self-center mb-[1rem] sm:text-center sm:w-[45rem]"><span className="font-[400]">Cultural</span> Transformation <span className="font-[400]">for</span> <span className="text-[#0FC1FF]">Success</span></h3>
                        <p className="mb-[2rem] sm:w-[70rem] self-center sm:text-center">DevSecOps is more than just a methodology; it's a cultural shift that drives collaboration and efficiency across your organization.</p>
                        <img src="/transformation_sm.png" className="mb-[3rem] sm:hidden" alt="people" />
                        <img src="/transformation_text.svg" className="sm:hidden" alt="texts" />

                        <div className="hidden sm:flex justify-between">
                            <img src="/transformation_left.png" alt="people" className="w-[55rem]" />
                            <img src="/transformation_right.webp" alt="text" className="w-[50rem]" />
                        </div>
                    </div>
                </div>
                <Banner />
            </MaxContainer>
        </section>
    );
}

export default Index;


const ParagraphWithBorder = ({ paragraph, style }) => {
    return (
        <div className={`${style} py-[1rem] px-[2rem] rounded-[1rem]`}>{paragraph}</div>
    )
}