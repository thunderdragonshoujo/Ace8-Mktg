'use client'
import Image from "next/image";
import MaxContainer from '../../../components/common/maxContainer'
import { useEffect } from "react";
import { fadeIn, slideIn } from "../../../Animations/common";
const Index = () => {
    useEffect(() => {
        slideIn()
        fadeIn()
    }, [])
    return (
        <section className="bg-black sm:pt-[11rem] pb-[3rem] sm:pb-[0] pt-[5rem]">
            <MaxContainer>
                <div className="flex bg-no-repeat bg-integration_bg sm:bg-none bg-contain justify-center items-start sm:h-[65rem] relative overflow-hidden">
                    <Image data-animation-Id='fadeIn' src='/data_integration_hero.webp' className="w-[130rem] hidden sm:block" width={1700} height={800} alt="hero" />
                    <div className="pt-[8rem] sm:hidden w-[45rem] px-[3rem] flex flex-col items-center pb-[15rem]">
                        <h1 className="header text-center">Integration <span className="font-[400]">Service for </span><span className="text-[#9B86FE]">E-Commerce</span> Systems</h1>
                        <p className="font-[700] text-center mt-[1rem] w-[25rem]">Seamlessly Integrate Your E-Commerce Data with Data Analytics</p>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;