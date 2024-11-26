import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';

const Index = () => {
    const cards = [
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[20rem]"><span className="font-[400]">Unique</span> <span className="text-[#9B86FE]">Expertise</span></h2>,
            text: 'Benefit from the experience of two original GemFire developers, ensuring unparalleled insights into the platform',
            image: '/unique.svg'
        },
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[30rem]"><span className="font-[400]">Qualified Services</span> <span className="text-[#9B86FE]">Provider</span></h2>,
            text: 'We are a VMware Qualified GemFire Partner and are involved in GemFire Product Development',
            image: '/qualified.svg'
        },
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[30rem]"><span className="font-[400]">Comprehensive</span> <span className="text-[#9B86FE]"> Services</span></h2>,
            text: 'Our experts cover a wide range of services, including configuration audits, architectural reviews, best practices guidance, DR setup, and load testing.',
            image: '/comprehensive.svg'
        },
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[20rem]"><span className="sm:font-[400]">Tailored</span> <span className="text-[#9B86FE]"> Solution</span></h2>,
            text: 'Receive personalized guidance and solutions tailored to your specific GemFire requirements and use cases.',
            image: '/tailored.svg'
        },
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[30rem]"><span className="font-[400]">Confidence and</span> <span className="text-[#9B86FE]"> Assurance</span></h2>,
            text: 'With our expert support, navigate GemFire\'s complex landscape with confidence, knowing you have industry-leading expertise by your side',
            image: '/confidence.svg'
        },
        {
            header: <h2 className="text-[2.7rem] sm:text-[3.2rem] font-[700] my-[2rem] w-[30rem]"><span className="font-[400]">Proven Track</span> <span className="text-[#9B86FE]"> Record</span></h2>,
            text: 'Our team has a proven track record of delivering successful GemFire implementations and optimizations for businesses across various industries.',
            image: '/proven.svg'
        },
    ]
    return (
        <section className="bg-white relative">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem] pt-[15rem] sm:pt-[30rem] pb-[5rem] flex flex-col text-black">
                    <img src="/man_walk.svg" data-animation-id='slideIn' alt="explore" className="absolute  sm:w-[100rem] self-center top-[-3rem] sm:top-[-25rem]" />
                    <div data-animation-id='slideIn' className="flex  justify-around sm:items-center">
                        <p className="sm:w-[65rem] sm:hidden text-[1.2rem] font-[500] sm:text-[2rem] sm:leading-[3rem]">GemFire serves as a distributed XA Engine, offering unparalleled capabilities in its domain.Navigating the high-tech problem space of GemFire requires specialized expertise, which can be nearly impossible to find. However, our team boasts two of GemFire's original developers, ensuring you access to unmatched knowledge and insights.</p>
                        <p className="hidden sm:block w-[80rem] text-[2rem] leading-[3rem]">
                            GemFire serves as a distributed XA Engine, offering unparalleled capabilities in its domain. As the best solution in its space, GemFire stands out, offering an unmatched feature set for a wide variety of applications and providing a sophisticated alternative to Data products like Redis, distributed infrastructure like Zookeeper, and practical data management like Cassandra. Navigating the high-tech problem space of GemFire requires specialized expertise, which can be nearly impossible to find. However, our team boasts two of GemFire's original developers, ensuring you access to unmatched knowledge and insights.
                        </p>
                        <img src="/VM_ware.svg" alt="vmware logo" className="w-[10rem] sm:w-[25rem]" />
                    </div>

                    <div data-animation-id='slideIn' className="sm:flex sm:justify-between sm:mt-[8rem] sm:items-start">
                        <img src="/expert_guide.svg" className='mt-[3rem] w-[45rem] sm:mt-[0]' alt="expert guild" />
                        <img src="/distribution_flow.svg" className='mt-[3rem] sm:mt-[0] sm:w-[80rem]' alt="distribution flow" />
                    </div>
                    <div data-animation-id='slideIn' className="flex justify-between sm:w-[90rem] sm:flex-row-reverse sm:items-center mt-[5rem]">
                        <h2 className="font-[700] text-[2.7rem] sm:text-[5rem] w-[20rem] sm:w-[40rem]">Why <span className="font-[400]">Choose Our </span><span className="text-[#9B86FE]">GemFire Expertise</span></h2>
                        <img src="/home.svg" alt="home" className="w-[14.2rem] sm:w-[60rem] sm:h-[40rem] h-[10rem]" />
                    </div>
                    <div data-animation-id='slideIn' className="responsive-grid mt-[5rem]">
                        {cards.map((card, index) => <Card card={card} key={index} />)}
                    </div>
                    {/* <Image src='/gemfire_reasons.png' width={370} height={663} className='mt-[3rem] sm:hidden' alt='gemfire reasons' /> */}
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;


const Card = ({ card }) => (
    <div className="bg-[#11151A] px-[3rem] py-[2.5rem] max-h-[40rem] sm:w-[38rem] rounded-[2rem] text-white">
        <img src={card.image} alt="card icon" className="w-[7rem] h-[7rem]" />
        {card.header}
        <p className="">{card.text}</p>
    </div>
)