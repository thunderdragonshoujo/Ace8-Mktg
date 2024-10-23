import Image from "next/image";
import Link from "next/link";
const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem] relative sm:flex sm:justify-between">
            <div className="sm:flex gap-[4rem] relative sm:mt-[7rem] sm:w-[65rem]">
                <div className="h-[0] overflow-hidden absolute mt-[1rem] hidden sm:block" data-animation-id='milestone'>
                    <img src="/mile_6.png" className="sm:w-[4.27rem]" alt="line" />
                </div>
                <div className="flex flex-col sm:ml-[7.5rem] items-center sm:items-start" data-animation-id='slideIn'>
                    <h3 className="font-[700] text-[2.8rem] sm:text-[5rem] text-center sm:text-start"><span className="text-[#F778BA]">Our</span> Mission</h3>
                    <p className="text-[1.5rem] sm:text-[1.6rem] mt-[1rem] text-center sm:text-start">Our company’s mission first  and foremost is to ‘EMPOWER PEOPLE’. We look to disrupt the industry. Not only with our technical prowess, but the way we interface with our clients ,build relationship, and deliver results. We build people-focused organizations and that shows forth in all of all interactions. </p>

                    <Link href={'/About'}>
                        <button className="border border-[#F778BA] text-[1rem] sm:text-[1.5rem] font-[700] rounded-[.5rem] px-[2rem] mt-[1.6rem] sm:mt-[3rem] py-[.6rem]">Learn More</button>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <Image
                    src='/earth.png'
                    className="animate-spin-slow z-[1] aspect-square relative mix-blend-lighten w-[50rem] mt-[4rem] sm:mt-[0]"
                    width={670}
                    height={670}
                    alt='earth'
                />
                <Image
                    src='/earth_flare.png'
                    className='absolute inset-0 z-0 aspect-square w-[50rem] backdrop-blur-[200px]'
                    width={720}
                    height={720}
                    alt='globe flare' />
            </div>
        </section>
    );
}

export default Index;