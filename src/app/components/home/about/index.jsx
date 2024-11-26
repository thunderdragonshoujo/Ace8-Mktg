"use client"
import Image from "next/image";
import milestone, { slideIn } from "../../../Animations/common";
import React, { useEffect } from "react";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";


const Index = ({ data }) => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])

    const serializers = {
        marks: {
          strong: ({ children }) => (
            <strong className="font-extrabold">
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? (
                  child
                ) : (
                  <span className="sm:hero_gradient_text text-[#EA9EFF] font-[800] !no-underline">{child}</span>
                )
              )}
            </strong>
          ),
        },
      };

    return (
        <section id="about" className="px-[3rem] sm:pb-[4rem] scroll-mt-[8rem] relative sm:px-[10rem] flex gap-x-[4rem]">
            <div className="h-[0] overflow-hidden absolute hidden top-[3rem] sm:block" data-animation-id='milestone'>
                <img src="/mile_3.png" className=" sm:w-[3.7rem]" alt="line" />
            </div>
            <div className="flex flex-col sm:ml-[7rem] gap-y-[3rem] justify-center sm:flex-row-reverse sm:justify-between" data-animation-id='slideIn'>
                <Image src={data?.who_image?.asset?.url} className="w-[100%] h-[30rem] sm:w-[45rem] sm:h-[48rem]" alt="focused_image" width='350' height='400' />
                <div className="flex flex-col">
                    <p className="text-center sm:text-start text-[1.8rem] mb-[.5rem] sm:text-[2rem] sm:mb-[1.5rem] mt-[3rem]">{data?.who_label}</p>
                    {/* <h2 className="text-center sm:text-start text-[2.2rem] leading-[2.5rem] font-[400] sm:text-[5rem] sm:leading-[5.7rem]"> <span className="font-[700]">We are a </span><span className="sm:hero_gradient_text text-[#EA9EFF] font-[800]">People-Focused Organization</span> <span className="font-[700]"> that</span> Solves Business Problem <span className="sm:hero_gradient_text_ii text-[#EA9EFF] font-[700]" > Through Technology.</span></h2> */}
                    <div className="text-center _heading sm:text-start text-[2.2rem] leading-[2.5rem] font-[400] sm:text-[5rem] sm:leading-[5.7rem]">
                        <BlockContent
                            blocks={data?.who_title}
                            projectId="ordduge7"
                            dataset="production"
                            serializers={serializers}
                        />
                    </div>
                    <p className="sm:text-[1.5rem] sm:w-[60rem] sm:mt-[1rem] hidden sm:block">{data?.who_short_info}</p>
                    <Link href={data?.who_button_url} className="border-accent-200 text-[1.2rem] hover:scale-[1.1] transition-all self-center sm:self-start py-[.8rem] px-[1.8rem] sm:py-[1rem] sm:px-[2.2rem] rounded-[.7rem] font-[700] border-[2px] mt-[2.4rem]">{data?.who_button_text}</Link>
                </div>
            </div>
        </section>
    );
}

export default Index;
