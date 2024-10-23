import MaxContainer from '../../common/maxContainer';
import Image from 'next/image';
const Index = () => {
    return (
        <section className="">
            <MaxContainer>
                <div className="sm:grid sm:place-content-center sm:pt-[12rem] relative sm:pb-[10rem]">
                    <Image src='/open_source_hero.png' alt='open source hero' width={421} height={312} className='sm:hidden' />
                    <img src="/service_rt.png" className='absolute hidden sm:block h-[100%]  w-[30rem] right-0 top-0' alt="" />
                    <img src="/service_lt.png" className='absolute h-[100%] hidden sm:block w-[30rem] left-0 top-0' alt="" />
                    <div className="hidden sm:block">
                        <h1 className="text-[6rem] leading-[7rem] font-[700] sm:w-[80rem] text-center"><span className="font-[400]">Empower</span> Your <br></br><span className="bg-[#9B86FE] p-[1.4rem] rounded-[.5rem]">Business with OpenAce</span></h1>
                        <h2 className="text-center text-[2.5rem] my-[2rem] font-[700]">Making Open Source Technology Enterprise Ready</h2>
                        <p className="text-center">Secure and Reliable Support for Open Source Technologies</p>
                    </div>

                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;