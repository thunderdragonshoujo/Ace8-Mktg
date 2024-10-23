import Image from "next/image";
import MaxContainer from '../../../components/common/maxContainer'
const Index = () => {
    return (
        <section className="bg-black">
            <MaxContainer>
                <div className="flex justify-center items-start sm:h-[65rem] relative overflow-hidden">
                    <Image src='/data_integration_hero.webp' className="w-[130rem] hidden sm:block" width={1700} height={800} alt="hero" />
                    <div className="pt-[8rem] sm:hidden w-[35rem] px-[3rem] flex flex-col items-center pb-[15rem]">
                        <h1 className="header text-center">Integration <span className="font-[400]">Service for </span><span className="text-[#9B86FE]">E-Commerce</span> Systems</h1>
                        <p className="font-[700] text-center mt-[1rem] w-[25rem]">Seamlessly Integrate Your E-Commerce Data with Data Analytics</p>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;