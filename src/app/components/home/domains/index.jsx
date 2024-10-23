'use client'
import Image from "next/image";
import Link from "next/link";
import milestone, {slideIn} from "@/app/Animations/common";
import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])
    const domains = [
        {
            image: '/advanced_architecture.svg',
            name: 'Advanced Architectures',
            title: '(AceEA)',
            role: 'Our team of experts excels in designing and implementing advanced technology enterprise architectures, ensuring your systems are not just up to date, but ahead of the curve.'
        },
        {
            image: '/messaging_queuing.svg',
            name: 'Messaging Queuing',
            title: '(AceMQ)',
            role: 'Seamless communication is the backbone of any successful enterprise. Ace8 specializes in crafting robust messaging queuing solutions to optimize your data flow and enhance collaboration.'
        },
        {
            image: '/devsecops.svg',
            name: 'DevSecOps',
            title: '(AceEA)',
            role: 'Security is at the core of everything we do. With our DevSecOps practices, we seamlessly integrate security into the development process, providing you with a robust and secure foundation.'
        },
        {
            image: '/cloud_native.svg',
            name: 'Cloud-Native',
            title: '(AceCloud)',
            role: 'Ace8 pioneers Cloud-Native solutions, leveraging the power of the cloud to enhance scalability, flexibility, and efficiency. Transform your business operations with our expert cloud services.'
        },
        {
            image: '/extreme_automation.svg',
            name: 'Extreme Automation',
            title: 'AceAutomate',
            role: 'Efficiency is key. Ace8 excels in Extreme Automation, optimizing your workflows and processes, allowing your business to operate at maximum productivity.'
        },
        {
            image: '/data_management.svg',
            name: 'Data Management and Solutions',
            title: '(AceData)',
            role: 'Unlock the full potential of your data with Ace8\'s comprehensive Data Management and Solutions. From storage to analytics, we ensure your data is a valuable asset, not a challenge.'
        },
        {
            image: '/support_incident.svg',
            name: 'Support and Incident Management',
            title: '(AceFortify)',
            role: 'Our dedicated support and incident management services guarantee that your systems remain operational, minimizing downtime and ensuring a seamless experience for your users.'
        },
        {
            image: '/microservices.svg',
            name: 'Microservices/ Code/Development',
            title: '(AceMS)',
            role: 'Agility with our Microservices/Code/Development expertise. Ace8 empowers you to build and scale applications with ease, fostering innovation and rapid development cycles.'
        },
    ]
    return (
        <>
            <DomiansMobile domains={domains} />
            <DomainsDesktop domains={domains} />
        </>
    );
}

export default Index;

const DomiansMobile = ({ domains }) => (
    <section className="sm:hidden" id="domains">
        <div className="px-[3rem] sm:px-[10rem]">
            <h2 className="text-[3rem] text-center font-[700]"><span className="text-accent-200">Our</span> 8 Domains</h2>
            <div className="flex flex-col mt-[3rem]">
                {domains.map((domain, index) => <DomainMobile domain={domain} id={index} key={index} />)}
            </div>
        </div>
    </section>
)


const DomainsDesktop = ({ domains }) => (
    <section className="hidden scroll-mt-[6rem] sm:flex px-[3rem] sm:px-[10rem] gap-x-[4rem]" id="
    domains">
        
        <img src="/mile_4.png" alt="arrow" className="hidden mt-[1.8rem] sm:w-[3.7rem] sm:block" />
        <div className="flex flex-col">
            <div className="">
                <h2 className="text-[5rem] font-[700]"  data-animation-id='slideIn'><span className="text-accent-200">Our</span> 8 Domains</h2>
                <p className="text-[1.5rem]"  data-animation-id='slideIn'>At Ace8, we empower businesses to thrive in the digital age through cutting-edge technology services spanning eight crucial domains. From Advanced Architectures to Microservices, Code & Development, we're dedicated to delivering unparalleled expertise and innovative solutions tailored to meet your specific needs.</p>
            </div>

            <div className="h-[93rem] sm:mt-[8rem] grid place-content-center relative">
                <Image src='/center_logo.png'  data-animation-id='slideIn' className="w-[45rem]" width={550} height={178} />
                {domains.map((domain, index) => <DomainDesktop domain={domain} key={index} id={index} />)}
            </div>
            <Conntal />
            {/* <p className="text-[3rem] leading-[4rem] font-[700] text-[#FFFFFF] mt-[9rem]">Ace8 is not just a technology services company; we are your strategic partner in navigating the ever-evolving landscape of technology. Elevate your business to new heights with Ace8 - Where innovation meets excellence!</p> */}
        </div>
    </section>
)

const DomainMobile = ({ domain, id }) => (
    <div className={`w-[230px] flex flex-col ${id % 2 ? 'self-end' : 'self-start'}`}>
        <Image src={domain.image} width={115} height={90} className={`${id % 2 ? 'self-end' : 'self-start'}`} alt="icon" />
        <p className={`text-[1.7rem] font-[700] ${id % 2 ? 'text-right' : 'text-left'}`}>{domain.name}</p>
        <p className={`text-[1.6rem] font-[700] text-accent-200 ${id % 2 ? 'text-right' : 'text-left'}`}>{domain.title}</p>
    </div>
)

const DomainDesktop = ({ domain, id }) => {
    const returnAbsoluteValue = (index) => {
        switch (index) {
            case 0:
                return 'top-[10rem] left-[0]'
            case 1:
                return 'top-[0] left-[30rem]'
            case 2:
                return 'top-[0] right-[30rem]'
            case 3:
                return 'top-[10rem] right-[0]'
            case 4:
                return 'top-[47rem] left-[0]'
            case 5:
                return 'top-[57rem] left-[30rem]'
            case 6:
                return 'top-[57rem] right-[30rem]'
            case 7:
                return 'top-[47rem] right-[0]'
            default:
                break;
        }
    }
    return (
        <div className={`w-[25rem] flex flex-col absolute ${returnAbsoluteValue(id)}`}  data-animation-id='slideIn'>
            <Image src={domain.image} width={115} height={90} className='w-[15rem]' alt="icon" />
            <p className={`text-[2rem] font-[700]`}>{domain.name}</p>
            <p className={`text-[2rem] font-[700] text-accent-200`}>{domain.title}</p>
            <p className="mt-[.8rem] text-[1.4rem]">{domain.role}</p>
        </div>
    )
}

const Conntal = () => (
    <Link href='http://conntalent.com'  data-animation-id='slideIn' className="py-[2rem] hover:opacity-[.7] transition-all px-[2rem] sm:mt-[10rem] w-fit bg-conner-gradient rounded-[10rem] self-center mt-[6rem]">
        <div className="flex gap-[1rem]">
            <div className="bg-black rounded-full w-[7rem] h-[7rem] grid place-content-center">
                <img src='/profile.png' width={48} className="w-[3rem] h-[3rem]" alt="profile icon" height={48} />
            </div>
            <div className="">
                <p className="font-[700] text-[1.5rem] mb-[.8rem]">Top-Tier Talent (Conntal)</p>
                <p className="w-[40rem] text-[1.5rem]">Conntal supports all of our divisions of Ace8 and provides our eternal teams and clients with best of breed talent.</p>
            </div>
        </div>
    </Link>
)