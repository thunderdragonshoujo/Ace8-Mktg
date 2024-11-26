import Banner from '../banner'
import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';
const Index = () => {
    return (
        <section className="bg-white  sm:pb-[7rem] pt-[5rem] sm:pt-[85rem]">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem] text-black">
                    <div className="sm:flex justify-between"  data-animation-id='slideIn'>
                        <div className="border-b sm:w-[43rem]">
                            <h2 className="sub-header text-[2.8rem] font-[700]">Continuous <span className="sm:text-[#FF88C3] text-[#004C66]">Value</span> <span className="font-[400]">Delivery</span> with <span className="sm:text-[#FF88C3] text-[#004C66]">DevOps</span></h2>
                            <p className="mb-[2rem] mt-[1rem] sm:mt-[0]">Our DevOps services include:</p>

                            <ParagraphWithBorder paragraph={<p className="">Automating all aspects of <span className="text-[500] border border-[#FF88C3] p-[.5rem] font-[500] rounded-[.6rem]">Infrastructure as Code (IaC),</span> ensuring consistent and scalable infrastructure deployments.</p>} style={'border mb-[2rem]'} />

                            <ParagraphWithBorder paragraph={<p className=""><span className="border sm:border-[#FF88C3] border-white p-[.5rem] rounded-[.6rem]">Full automation</span>   of testing processes, reducing manual effort and accelerating time-to-market.</p>} style={'border bg-[#004C66] sm:ml-[7rem] text-white'} />

                            <ParagraphWithBorder paragraph={<p className="">Embracing a <span className="text-[700] border border-black p-[.5rem] rounded-[.6rem]">"go fast, fail fast"</span>mindset, encouraging rapid iteration and learning.</p>} style={'border mt-[2rem] mb-[3rem]'} />
                        </div>
                        <div className="sm:w-[60rem] sm:hidden w-[100%]">
                            <img src="/skills.png" alt="skills" className="sm:w-[60rem]" />

                            <p className="text-white bg-[#004C66] p-[2rem] rounded-[2rem] mt-[1rem]">At <span className="bg-[white] text-[#004C66] p-[.5rem] rounded-[.6rem] ">Ace8,</span> we understand the need for efficient and secure software delivery. Our DevSecOps approach combines the strengths of development, security, and operations into one cohesive team. By embracing DevOps principles, we enable you to continuously deliver value to your customers.</p>
                        </div>
                        <Image 
                            src={'/_skills_sm.png'}
                            width={945}
                            height={596}
                            alt='skills'
                            className='hidden sm:block sm:w-[70rem] h-[50rem]'
                        />
                    </div>
                    <div  data-animation-id='slideIn' className="sm:flex justify-between mt-[5rem] flex-row-reverse text-end sm:text-start">
                        <div className="border-b sm:w-[45rem]">
                            <h2 className="sub-header">Security as <span className="font-[400]">the</span> <span className="sm:text-[#458D84] text-[#063771]">Top Priority</span></h2>
                            <p className="mb-[2rem]">Our security services encompass:</p>
                            <ParagraphWithBorder paragraph={<p className="">Comprehensive scanning of code and IaC to identify vulnerabilities and enforce security standards consistently.</p>} style={'border sm:bg-white bg-[#063771] text-white sm:text-black border-[#458D84] mb-[2rem]'} />
                            <ParagraphWithBorder paragraph={<p className="">Encouraging a security-first mindset, where considerations for secure design and implementation are integral to every stage of development.</p>} style={'border sm:ml-[7rem]'} />
                        </div>
                        <div className="sm:w-[70rem] w-[100%] hidden sm:block">
                            <img src="/security_code.png" alt="skills" className="sm:w-[70rem]" />
                        </div>
                    </div>

                    <div className="mt-[5rem] sm:flex flex-col mb-[4rem]">
                        <h3  data-animation-id='slideIn' className="sub-header w-[25rem] text-[2.8rem] font-[700] self-center mb-[1rem] sm:text-center sm:w-[60rem]"><span className="font-[400]">Cultural</span> Transformation <span className="font-[400]">for</span> <span className="text-[#0FC1FF] sm:text-[#FF88C3]">Success</span></h3>
                        <p  data-animation-id='slideIn' className="mb-[2rem] sm:w-[60rem] self-center sm:text-center">DevSecOps is more than just a methodology; it's a cultural shift that drives collaboration and efficiency across your organization.</p>
                        <img src="/transformation_sm.png" className="mb-[3rem] sm:hidden" alt="people" />
                        <img src="/transformation_text.svg" className="sm:hidden" alt="texts" />

                        <div  data-animation-id='slideIn' className="hidden sm:flex justify-between">
                            <img src="/transformation_left.png" alt="people" className="w-[52rem]" />
                            <img src="/transformation_right.webp" alt="text" className="w-[65rem]" />
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