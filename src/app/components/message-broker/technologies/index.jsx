'use client';
import milestone, { slideIn } from "@/app/Animations/common";
import { useEffect } from "react";
import Image from "next/image";
import MaxContainer from '../../common/maxContainer';
import { useState } from "react";


const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    })

    const technologies = [
        {
            icon: '/tech_0.png',
            text: 'RabbitMQ',
            style: '',
        },
        {
            icon: '/tech_4.svg',
            text: 'Kafka',
            style: 'self-center',
        },

        {
            icon: '/redis.png',
            text: 'Redis',
            style: '',
        },
        {
            icon: '/tech_2.svg',
            text: 'Google PubSub',
            style: 'self-center',
        },
        {
            icon: '/tech_3.svg',
            text: 'Apache Pulsar',
            style: 'self-end',
        },
        {
            icon: '/tech_1.svg',
            text: 'AWS SQS',
            style: 'self-center',
        },

        {
            icon: '/tech_5.svg',
            text: 'IBM ActiveMQ',
            style: 'self-end',
        },
        {
            icon: '/tech_6.svg',
            text: 'AWS',
            style: 'self-center',
        },
        {
            icon: '/tech_7.svg',
            text: 'Others',
            style: '',
        },
    ]

    return (
        <section className="sm:flex bg-white sm:px-[10rem] px-[3rem]">
            <MaxContainer>
                <div className="relative" data-animation-id='slideIn'>
                    <div className="flex">
                        <div className="sm:ml-[7rem] w-full sm:mt-[4rem]">
                            <div className="sm:flex h-[30rem] justify-between w-[100%] hidden">
                                {technologies.map(tech => <Technology key={tech.text} tech={tech} />)}
                            </div>
                            <Image
                                src='/brands_sm.png'
                                alt="tech icons"
                                className="w-[100%] sm:hidden"
                                width={358}
                                height={409}
                            />
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;


const Technology = ({ tech }) => {
    const [isHovered, setIshovered] = useState(false)
    return (
        <div className={`${tech.style}`}>
            <img
                src={tech.icon}
                width={150}
                onMouseEnter={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                height={150}
                className={`cursor-pointer border bg-[#0D1117] w-[10rem] h-[10rem] service_card_shadow rounded-[2rem] hover:translate-y-[10px] transition-all duration-700`}
                alt="tech icon"
            />
            <p className={`text-center mt-[2rem] max-w-[7.5rem] text-black mx-auto font-[700] transition-all duration-500 ${isHovered ? 'opacity-1' : 'opacity-0'}`}>{tech.text}</p>
        </div>
    )
}
