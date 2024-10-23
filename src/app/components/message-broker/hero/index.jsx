'use client'
import { useEffect } from 'react';
import MaxContainer from '../../common/maxContainer'
import { fadeIn, slideIn } from '@/app/Animations/common';
const Index = () => {
    useEffect(() => {
        slideIn()
        fadeIn()
    }, [])
    return (
        <section className="bg-white text-black pt-[7rem] sm:pt-[9rem] pb-[5rem]">
            <MaxContainer>
                <div className="">
                    <div  className="sm:bg-patterns bg-patterns_mobile bg-contain bg-no-repeat grid place-content-center sm:px-[5rem] sm:h-[65rem] h-[35rem] ">
                        <div data-animation-id='slideIn' className="flex px-[3rem] w-[35rem] sm:w-full flex-col relative">
                            <h1 className="header sm:w-[90rem] sm:self-center text-center mb-[1rem]"> <span className="text-[#5747A5]">AceMQ</span><span className="font-[400]"> Your Trusted</span> Messaging & Queuing <span className="text-[#5747A5]">Services</span> Partner</h1>
                            <p className="text-center text-[1rem] sm:text-[1.7rem] sm:w-[50rem] w-[20rem] self-center mb-[5rem]"> Expertise, Support, and Value for Your Messaging & Queuing Implementation</p>
                        </div>
                    </div>
                    <div data-animation-id='slideIn' className="sm:mt-[6rem] mt-[3.5rem] px-[3rem]">
                        <p className="text-center text-[1.2rem] sm:text-[1.7rem] sm:w-[100rem] sm:mx-auto sm:self-center"> At AceMQ, we have developed a comprehensive practice around message brokers. Our engineers possess extensive experience working closely with message broker products, including RabbitMQ. Their in-depth knowledge and architectural understanding of RabbitMQ allow us to seamlessly integrate it into your unique technology stack. <span className="font-[700]">As an internationally accredited partner</span> of RabbitMQ, we are the go-to choice for all your message broker service needs.</p>
                        <button className="btn hidden border mx-auto sm:block border-[#5545A0] self-center mt-[3rem]">Learn More</button>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;