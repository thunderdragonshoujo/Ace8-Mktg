'use client';
import milestone, { slideIn } from "../../../Animations/common";
import { useEffect } from "react";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

const Index = ({ data }) => {
    useEffect(() => {
        slideIn()
        milestone()
    }, [])
    return (
        <section className="pt-[10rem] sm:pt-[15rem] sm:bg-blend-lighten pl-[3rem] md:pl-[10rem]  pb-[15rem] sm:pb-[16rem] bg-hero-background-mobile bg-cover sm:bg-none bg-no-repeat bg-bottom relative">
            <Image
                src='/hero_bg.png'
                className="mask hidden sm:block absolute w-[100%] object-cover top-[0] z-[0] left-0 h-[100%]"
                width={1920}
                height={896}
                alt="background-image" />
            <Image
                src='/wave.png'
                width={2222}
                height={409}
                className='absolute left-0 h-[30rem] hidden sm:block bottom-[-10rem] w-[100%]'
                alt={'wave'}

            />

            <div className="flex items-start  relative gap-x-[4rem]">
                <div className="h-[0] overflow-hidden absolute hidden sm:block" data-animation-id='milestone'>
                    <img src="/mile_1.png" className="hidden sm:w-[4rem] sm:mt-[3rem] sm:block" alt="line" />
                </div>
                <div className="sm:ml-[7rem]" data-animation-id="slideIn">
                    <div className="hero_title text-[4rem] leading-[5rem] sm:text-[8rem] sm:w-[80rem] sm:leading-[12rem] font-[700]">
                        <BlockContent
                            blocks={data?.hero_title}
                            projectId="ordduge7"
                            dataset="production"
                        />
                    </div>
                    <p className="text-[1.2rem] sm:leading-[2.8rem] mt-[.5rem] sm:text-[1.8rem] sm:w-[59rem] md:mt-[.5rem]">{data?.hero_short_info}</p>
                    <Link
                        href={data?.hero_button_link}
                        className="inline-block px-[2rem] py-[.6rem] mt-[3rem] text-[.9rem] md:text-[1.3rem] rounded-[.5rem] font-[800] border border-accent-100"
                    >
                        {data?.hero_button_text}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Index;