'use client';
import { useEffect } from "react";
import { slideIn } from "@/app/Animations/common";
import Image from "next/image";
import MaxContainer from '../../common/maxContainer/index';

const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="bg-white py-[3rem] sm:pb-[7rem] sm:px-[10rem] px-[3rem]">
            <MaxContainer>
                <div className="text-[#232323] flex flex-col">
                    <h2 data-animation-id='slideIn' className="sub-header text-center mb-[2.5rem]"><span className="text-[#37ACA8]">Our</span> Story</h2>
                    <p data-animation-id='slideIn' className="text-center sm:w-[90rem] sm:self-center">Ace8 is a globally recognized full-stack specialist at the forefront of DevOps, Cloud, Data, and Messaging and Queueing solutions. Our core competencies lie in delivering cutting-edge technologies and services for API management, Integration technology, and Identity Management. With a firm commitment to both cloud-based and on-premise iPaaS solutions, Ace8 has established itself as the leading multi-vendor Integration Partner since its inception in 2007.</p>

                    <div className="hidden sm:flex flex-col sm:mt-[3rem]">
                        <p className="w-[100rem] text-center self-center" data-animation-id='slideIn'>Our best-of-breed approach sets us apart, empowering organizations worldwide to select tailor-made services and strategies that align with their unique requirements, regardless of their size or industry. Over the years, Ace8 has successfully migrated and guided over 50+ organizations on their digital transformation journey.</p>
                        <div className="mt-[3.5rem] flex justify-between gap-[7rem]" data-animation-id='slideIn'>
                            <Image width={300} className="self-center sm:w-[60rem]" height={350} alt="story" src='/story.png' />
                            <div className="flex-1">
                                <p className="">Ace8's comprehensive solutions offer unparalleled flexibility to organizations, transforming them into digital agencies capable of enhancing customer relationships and introducing innovative services, products, and business models. We firmly believe that embracing an API-first and Cloud-first strategy is the key to unlocking this flexibility in technology, knowledge, and financial success.</p>
                                <p className="mt-[3.5rem]">To enable organizations to embrace this vision, Ace8 provides a wide range of services, including Advanced Architectures, Messaging and Queuing, DevSecOps, Cloud-Native, Extreme Automation, Data Management and Solutions, Support and Incident Management and Micorservices, Code, and Development. With a dedicated team of over 50+ experts specializing in our 8 domains, Ace8 stands tall as one of the most esteemed Digital Transformation specialists worldwide.</p>
                            </div>
                        </div>
                    </div>

                    <Image width={300} className="self-center mt-[1.5rem] sm:hidden" height={350} alt="story" src='/about_story_1.png' />

                    <div className="mt-[3rem]" data-animation-id='slideIn'>
                        <h2 className="sub-header sm:mb-[1rem] text-center">The Ace 8 <span className="text-[#624C83]">Domains</span></h2>
                        <p className="text-center hidden sm:block">At Ace8, we empower businesses to thrive in the digital age through cutting-edge technology services spanning eight crucial domains. From Advanced Architectures to Microservices, Code & Development, we're dedicated to delivering unparalleled expertise and innovative solutions tailored to meet your specific needs.</p>
                        <img src="/about_8_domains.svg" className="mt-[3rem] sm:hidden" alt="domains" />
                        <img src="/ace_8_domains_sm.svg" className="mt-[3rem] hidden sm:block" alt="domains" />
                    </div>

                    <div className="mt-[5rem] sm:hidden" data-animation-id='slideIn'>
                        <h2 className="sub-header text-center mb-[2rem]">Our <span className="text-[#6EE3FF]">Industries</span></h2>
                        <img src="/about_industries.svg" alt="industy icon" />
                    </div>
                    <img src="/industries_sm.svg" className="hidden sm:block mt-[10rem]" alt="industries" />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;