'use client'
import { slideIn } from "../../../Animations/common";
import Image from "next/image";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="py-[5.5rem] pt-[10rem] sm:pt-[12rem] flex flex-col  sm:pb-[10rem] px-[2rem] sm:px-[10rem] relative">
            <Image src='/about_bg.png' className="absolute mix-blend-overlay inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply" width={790} height={387} alt="wheel" />
            <Image src='/about_bg_sm.png' className="absolute mix-blend-overlay sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <img src="/devsecops_code.png"  data-animation-id='slideIn' className="absolute self-center bottom-[-79rem] hidden sm:block z-[10] w-[115rem]" alt="" />
            <div className="flex flex-col items-center relative">
                <img src="/dev_ops_hero.png" className="sm:w-[90rem]" data-animation-id='slideIn' alt="" />
                <h1  data-animation-id='slideIn' className="text-[2.5rem] font-[700]  text-center sm:text-[3.5rem] sm:w-[80rem] mt-[4rem]"><span className="text-[#9B86FE]">Bridging the</span> <span className="font-[400] text-[#9B86FE]">Gap</span> <span className="font-[400]">between</span> <span className="">Development,</span> <span className="font-[400]">Security,</span> and <span className="text-[#9B86FE]">Operations</span></h1>
                <p  data-animation-id='slideIn' className="mt-[2rem] hidden sm:block">Combine Strength, Deliver Securely, and Thrive</p>
            </div>
        </section>
    );
}

export default Index;