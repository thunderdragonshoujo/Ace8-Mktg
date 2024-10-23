import Image from "next/image";
import MaxContainer from '../../common/maxContainer'
const Index = () => {

    const cards = [
        {
            image: '/_assessment.svg',
            name:  <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="font-[400]">Assessments</span> & <span className="text-[#9B86FE]">Advisory</span> Roles</h3>,
            text: 'We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.',
        },
        {
            image: '/consulting.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]">Consulting & Troubleshooting</h3>,
            text: 'Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.',
        },
        {
            image: '/support.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]">Support</h3>,
            text: 'Customized Operation and Support Models including Service Level Agreements (SLAs), and dedicated Support Specialists.',
        },
        {
            image: '/training.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]">Training & Mentorship</h3>,
            text: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
        },
    ]

    const cardsLG = [
        {
            image: '/_consulting.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#9B86FE]">Consulting</span> & <span className="font-[400]">Troubleshooting</span></h3>,
            text: 'Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.',
        },
        {
            image: '/_support.png',
            name: <h3 className="text-[1.8rem] sm:w-[32rem] text-[#9B86FE] sm:text-[3.5rem] mb-[1rem] font-[700]">Support</h3>,
            text: 'Operation and Sustainment of your environment. We provide customized solutions to supply you with the support you need. Including Service Level Agreements, Response and Resolution Times, and dedicated support specialists.',
        },
        {
            image: '/_training.png',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#9B86FE]">Training</span> & <span className="font-[400]">Mentorship</span></h3>,
            text: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
        },
    ]
    return (
        <section className="sm:py-[8rem] py-[5rem] bg-white">
            <MaxContainer>
                <div className="px-[3rem] sm:px-[10rem]">
                    <div className="relative sm:flex">
                        <img src="/mille_2.svg" className="w-[4rem] hidden absolute sm:block mt-[9rem]" alt="" />
                        <div className="sm:flex sm:ml-[7rem] sm:justify-between sm:w-[100%]">
                            <div className="text-black" data-animation-id='slideIn'>
                                <h2 className="text-center text-[2.5rem] sm:text-[6.5rem] mb-[1rem] sm:text-left font-[700]"><span className="font-[400]">Our</span> <span className="text-[#5747A5]">Services</span></h2>
                                <p className="hidden sm:block w-[54rem]">We offer a range of services to address all your messaging and queuing requirements.Our team of seasoned professionals excels in delivering top-notch solutions to enhance the reliability, scalability, and performance of your MQ systems” </p>
                            </div>
                            <div className="sm:block hidden">
                                <Cards card={{ image: '/_assessment.svg', name:  <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="font-[400]">Assessments</span> & <span className="text-[#9B86FE]">Advisory</span> Roles</h3>, text: 'Assessments of existing and planned environments based on tool best practices and years of industry expertise. We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.' }} width={'sm:w-[48rem]'} />
                            </div>
                        </div>
                    </div>

                    <div className="sm:ml-[7rem] sm:flex hidden mt-[2.3rem] justify-between">
                        {cardsLG.map((card, index) => <Cards card={card} key={index} width={'sm:w-[32rem]'} />)}
                    </div>

                    <div className="flex flex-col gap-y-[1.2rem] sm:hidden">
                        {cards.map((card, index) => (<Cards card={card} key={index} />))}
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;


const Cards = ({ card, width }) => (
    <div className="flex sm:flex-col items-start border sm:py-[3rem] sm:px-[3rem] gap-x-[1.2rem] px-[.8rem] rounded-[1.5rem] border-[#444444] bg-[#11151A] py-[1.3rem]">
        <img src={card.image} className="sm:w-[8rem] mb-[1.5rem]" alt="card icon" />
        <div className="">
            {/* <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]">{card.name}</h3> */}
            {card.name}
            <p className={`${width}  text-[1.4rem]`}>{card.text}</p>
        </div>
    </div>
)