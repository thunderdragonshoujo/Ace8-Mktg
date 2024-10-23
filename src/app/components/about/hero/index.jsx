'use client';
import { useEffect } from "react";
import { slideIn } from "@/app/Animations/common";
import Image from "next/image";
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="py-[5.5rem] sm:pt-[15rem] sm:pb-[17rem] px-[1.5rem] sm:px-[10rem] relative">
            <Image src='/about_bg.png' className="absolute mix-blend-overlay inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply" width={790} height={387} alt="wheel" />
            <Image src='/about_bg_sm.png' className="absolute mix-blend-overlay sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <div className="flex flex-col items-center relative" data-animation-id='slideIn'>
                <h1 className="header sm:w-[80rem]  w-[25rem] text-center">Passionate <span className="font-[400]">About Providing</span> <span className="text-[#9B86FE]">Extreme Value</span></h1>
                <p className="text-center sm:w-[90rem] mt-[3rem] sn:mt-[0]">Ace8 is people focused organization that is dedicated to underpromising and overdeliverying. We have a strong belief system and set of values that we lead with in all of our client interactions.</p>
            </div>
        </section>
    );
}

export default Index;