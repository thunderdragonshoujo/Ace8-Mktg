'use client'
import { useEffect } from "react";
import Image from "next/image";
import MaxContainer from '../../common/maxContainer'
import { slideIn } from "@/app/Animations/common";
const Index = () => {
    useEffect(() => {
        slideIn()
    })
    return (
        <section className="py-[5.5rem] sm:pt-[20rem] sm:pb-[17rem] px-[1.5rem] sm:px-[10rem] relative">
            <Image src='/service_bg.png' className="absolute mix-blend-soft-light inset-0 sm:hidden top-0 w-[100%] h-[100%]" width={790} height={387} alt="wheel" />
            <Image src='/service_bg_sm.png' className="absolute mix-blend-soft-light sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <MaxContainer>
                <div className="flex flex-col items-center relative">
                    <h1 data-animation-id='slideIn' className="header text-center sm:w-[100rem]"><span className="font-[400]">We Make You</span><span className="text-[#9B86FE]"> Move Faster,</span> <span className="">Reliably.</span> <span className="font-[400]">Increase Your Velocity</span> & Resilience With <span className="text-[#9B86FE]">Ace8.</span></h1>

                    <p data-animation-id='slideIn' className="hidden sm:block sm:w-[80rem] text-center">We believe we should never stop innovating and neither should you.  We can provide many types of engagements from architectural and implementation assessments to full delivery of Environments as a Service (EaaS).</p>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;