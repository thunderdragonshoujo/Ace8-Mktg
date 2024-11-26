import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";

const Index = ({data}) => {
    const serializers = {
        marks: {
          strong: ({ children }) => (
            <strong className="font-extrabold">
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? (
                  child
                ) : (
                  <span className="text-[#9B86FE]">{child}</span>
                )
              )}
            </strong>
          ),
        },
      };

    return (
        <section className="sm:py-[5.5rem] py-[8rem] sm:pt-[17rem] sm:pb-[18rem] px-[1.5rem] sm:px-[10rem] relative">
            <Image src='/MQservice_hero_bg_sm.png' className="absolute inset-0 sm:hidden top-0 w-[100%] h-[100%] mix-blend-multiply" width={790} height={387} alt="wheel" />
            <Image src='/contact_bg.png' className="absolute mix-blend-darken sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
            <div className="flex flex-col items-center relative">
                {/* <h1 className="header"><span className="font-[400]">Get</span> in <span className="text-[#9B86FE]">Touch</span></h1> */}
                <div className="header _heading !font-normal">
                    <BlockContent
                        blocks={data?.title}
                        projectId="ordduge7"
                        dataset="production"
                        serializers={serializers}
                    />
                </div>
                <p className="sm:w-[60rem] text-center">{data?.short_info}</p>
            </div>
        </section>
    );
}

export default Index;

