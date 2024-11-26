'use client';
import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';
import PlaceTextBesideImage from '../../common/placeTextBesideImage'

const Index = () => {
    return (
        <>
            <Intro />
            <SubIntro />
        </>
    );
}

export default Index;


const Intro = () => {
    const Activities = [
        {
            number: '01',
            numberStyle: 'text-[#FF88C3]',
            header: <h2 className="text-[4rem] sm:w-[45rem] font-[700]"><span className="text-[#FF88C3]">Start Strong</span> <span className="font-[400]">With Golang</span> Starter Kits</h2>,
            texts: [
                'Accelerate your microservices development with our Golang starter kits.',
                'Our starter kits enable you to quickly get started by running Go code in Docker containers or as AWS Lambdas.'
            ],
            image: '/GROUP01.png',
            imageStyle: 'w-[75rem]',
            containerStyle: 'sm:justify-end sm:gap-[5rem] pr-[3rem] mt-[10rem]',
            lineColor: 'bg-[#FF88C3]',
            fill: '#000000'
        },
        {
            number: '02',
            numberStyle: 'text-[#458D84]',
            header: <h2 className="text-[4rem] max-w-[43rem] font-[700]"><span className="text-[#458D84]">Expert Guidance</span> <span className="font-[400]">Through Microservices</span> Architecture</h2>,
            texts: [
                'Navigating the complexities of microservices architecture can be challenging.Trust Ace8 to guide you through the process',
                'Our experienced team will provide you with the support and expertise you need to succeed.'
            ],
            image: '/GROUP2.png',
            imageStyle: 'w-[75rem]',
            containerStyle: 'sm:justify-end sm:gap-[5rem] flex-row-reverse pl-[3rem] mt-[10rem]',
            lineColor: 'bg-[#458D84]',
            fill: '#000000'
        },
    ]

    return (
        <section className="bg-white text-black pt-[4rem] sm:pt-[0] pb-[4rem]">
            <MaxContainer>
                <div className="px-[3rem] sm:flex sm:flex-col">
                    <div data-animation-id='slideIn' className="sm:w-[85rem] sm:flex sm:flex-col sm:self-center items-center">
                        <h2 className="sub-header text-center sm:w-[90rem]">Comprehensive <span className="font-[400]">Microservices Design</span> and <span className="text-[#5747A5]">Development</span> Services</h2>
                        <div className="flex justify-around sm:w-[60rem] items-center mt-[2rem]">
                            <img src="/html.svg" alt="" />
                            <p className="px-[1.5rem] w-[18rem] sm:w-[40rem] text-white text-[1rem] sm:text-[1.2rem] sm:font-[700] py-[.8rem] bg-[#5747A5] sm:bg-conner-gradient-ii text-center rounded-[.5rem]">Building Scalable, Efficient, and Maintainable Microservices</p>
                            <img src="/figma.svg" alt="" />
                        </div>
                        <p className="text-center mt-[2rem]">Ace8 provides comprehensive microservices design and development services to empower you in building highly scalable, efficient, and maintainable microservices. Our team of experts strictly adheres to industry best practices, including loose coupling and the 12Factor approach. With a specialization in eCommerce services for customers, carts, orders, returns, payments, and accounting, we offer a range of solutions tailored to your specific needs.</p>
                    </div>

                    <img src="/activate.svg" className='mt-[3rem] sm:w-[45rem] sm:hidden' alt="activate section" />
                    <img src="/golang.svg" className='sm:hidden mt-[3rem]' alt="learn golang" />
                    <img src="/expert.svg" className='sm:hidden mt-[3rem]' alt="expert section" />
                </div>
                <div data-animation-id='slideIn' className="justify-around sm:flex hidden mt-[10rem]">
                    <Image width={1000} height={577} src={'/code_json.png'} className='w-[80rem]' alt='code' />
                    <img src="/activate.svg" className='mt-[3rem] sm:w-[45rem]' alt="activate section" />
                </div>
                {
                    Activities.map((activity, i) => (<Activity key={i} activity={activity} />))
                }
            </MaxContainer>
        </section>
    )
}

const SubIntro = () => {
    const Activities = [
        {
            number: '01',
            numberStyle: 'text-[#9B86FE]',
            header: <h2 className="text-[4rem] sm:mb-[1.5rem] sm:leading-[5.2rem] max-w-[35rem] font-[700]"><span className="text-[#9B86FE]">Careful Planning</span> <span className="font-[400]">and Automated</span> Conversion</h2>,
            texts: [
                'We begin by carefully planning the migration process, considering Lambda\'s limitations and understanding the reasons for moving from ECS',
                'Our specialized tools, including Code Parser, Rule Based Translation, AWS Lambda Handler Generator, AWS Lambda Template Generator, and AWS API Gateway Generator, automate the conversion process.'
            ],
            image: '/Tinkter.png',
            imageStyle: 'w-[75rem]',
            containerStyle: 'sm:justify-end sm:pr-[7rem] sm:gap-x-[5rem] flex-row-reverse mt-[10rem] text-white',
            lineColor: 'bg-[#9B86FE]',
            fill: '#ffffff'
        },
        {
            number: '02',
            numberStyle: 'text-[#FF88C3]',
            header: <h2 className="text-[4rem] font-[700]"><span className="font-[400]">Redesign</span> and <span className="text-[#FF88C3]">Optimization</span></h2>,
            texts: [
                'During the redesign phase, we conduct a thorough code review and implement best practices, such as the Dependency Injection Pattern.',
                'We also incorporate NewRelic Telemetry and GOQU Query Builder, while eliminating the Control Freak Anti Pattern and ensuring secure SQL queries by translating them into GOQU Expressions.'
            ],
            image: '/_optimization.png',
            imageStyle: 'w-[77rem]',
            containerStyle: 'sm:pr-[3rem] sm:pl-[10rem] mt-[10rem] text-white',
            lineColor: 'bg-[#9B86FE]',
            fill: '#ffffff'
        },
        {
            number: '03',
            numberStyle: 'text-[#9B86FE]',
            header: <h2 className="text-[4rem] sm:w-[40rem] font-[700]"><span className="font-[400]">Enhanced Functionality</span> <span className="text-[#9B86FE]">and Configuration</span></h2>,
            texts: [
                'We enhance your microservices architecture by creating constructor-based dependency injection facilities and adding NewRelic transaction tracing capabilities.',
                'Additionally, we centralize configuration values using AWS Secret Manager to ensure robustness and security.'
            ],
            image: '/code4.png',
            imageStyle: 'w-[68rem]',
            containerStyle: 'sm:justify-start sm:gap-[7rem] items-center flex-row-reverse pr-[10rem] mt-[10rem] text-white',
            lineColor: 'bg-[#9B86FE]',
            fill: '#ffffff'
        },
    ]
    return (
        <section className="pt-[5rem] sm:pb-[30rem]">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem] flex flex-col">
                    <div className="sm:flex sm:flex-col sm:items-center sm:self-center sm:w-[100rem]">
                        <h2 data-animation-id='slideIn' className="sub-header sm:w-[90rem] text-center"><span className="font-[400]">Refactor Your</span> <span className="text-[#9B86FE] sm:text-[#FF88C3]">Microservices</span><span className="sm:text-[#FF88C3]"> Architecture to </span> <span className="text-[#9B86FE] sm:text-white">AWS Lambda</span></h2>
                        <div data-animation-id='slideIn' style={{ backgroundSize: '100% 100%' }} className="p-[1rem] py-[2rem] my-[3rem] sm:bg-purple_border bg-blue_border bg-no-repeat">
                            <p className="text-center">If you're considering migrating your microservices architecture to AWS Lambda, our expert team is here to streamline the process for maximum efficiency. From meticulous planning and automated conversion to comprehensive redesign and implementation, we have you covered at every step.</p>
                        </div>
                    </div>
                    <img src="/lambda_code_snippet.png" className='sm:hidden' alt="code snippet" />
                    <img data-animation-id='slideIn' src="/lambda_code_sm.png" className='hidden sm:block mt-[5rem]' alt="code snippet" />
                    <img src="/planning.svg" className='sm:hidden mt-[3rem]' alt="" />
                    <img src="/redesign.svg" className='sm:hidden mt-[3rem]' alt="" />
                    <img src="/enhanced.svg" className='sm:hidden mt-[3rem]' alt="" />
                </div>
                {
                    Activities.map((activity, i) => (<Activity key={i} activity={activity} />))
                }
            </MaxContainer>
        </section>
    )
}


const Activity = ({ activity }) => (
    <div data-animation-id='slideIn' className={`hidden ${activity.containerStyle} justify-between sm:flex items-start text-black`}>
        <div className="max-w-[51rem]">
            <h2 className={`text-[7.5rem] sm:leading-[7rem] opacity-[.2] font-[700] ${activity.numberStyle}`}>{activity.number}</h2>
            {activity.header}
            <div className="flex flex-col gap-[.5rem]">
                {
                    activity.texts.map((item, index) => (<div key={index} className="flex w-[100%] h-auto gap-[1rem]">
                        <div className="w-[2.3rem] flex flex-col gap-[.5rem] items-center">
                            <div style={{ border: `2px solid ${activity.fill}` }} className={`rounded-full ${'w-[2rem] aspect-square'}`}></div>
                            {index + 1 !== activity.texts.length && <div className={`w-[2px] h-[70%] ${activity.lineColor}`}></div>}
                        </div>
                        <p className="w-[100%] sm:text-[1.4rem]">{item}</p>
                    </div>))
                }
            </div>
        </div>
        <Image width={1000} height={489} src={activity.image} className={`${activity.imageStyle}`} alt='content-img' />
    </div>
)