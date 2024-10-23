'use client';
import { useEffect } from 'react';
import { slideIn } from '@/app/Animations/common';
import MaxContainer from '../../common/maxContainer'
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="bg-black">
            <MaxContainer>
                <div className="flex flex-col items-center pt-[5rem] sm:pt-[20rem] sm:pb-[30rem] pb-[7rem] px-[3rem] sm:px-[10rem]" >
                    <h1 data-animation-id='slideIn' className="header text-center w-[28rem] sm:w-[100rem] sm:mb-[2rem]"><span className="text-[#5747A5]">Accelerate Your</span> <span className="font-[400]">GemFire Journey with</span> Our <span className="text-[#5747A5]">Expertise</span></h1>
                    <p data-animation-id='slideIn' className="text-center">Capitalizing on the Strengths of GemFire's unique combination of features.</p>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;