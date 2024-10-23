import MaxContainer from '../../common/maxContainer'
import Image from 'next/image';


const Index = () => {
    return (
        <section className="bg-white">
            <MaxContainer>
                <div className="relative w-[100%] sm:pt-[15rem] pt-[6rem] sm:grid place  sm:pb-[20rem] pb-[7rem]">
                    <Image src='/micro_service.gif' width={1500} className='w-[100%] hidden sm:block z-[0] h-[100%] absolute inset-0' height={1000} alt='background' />
                    <Image src='/html_css.png' width={250} className='sm:hidden w-[11rem] h-[30rem] z-[0] left-0 top-0 absolute' height={700} alt='background' />


                    <Image src='/js_python.png' width={250} className='sm:hidden w-[11rem] h-[30rem] z-[0] right-0 top-0 absolute' height={700} alt='background' />

                    <Image src='/micro_service.gif' width={1000} className='w-[100%] hidden sm:block z-[0] h-[100%] absolute inset-0' height={1000} alt='background' />
                    <div className="w-[100%] sm:grid hidden text-black relative z-[1] h-[100%] place-content-center">
                        <img src="/micro_service_design.webp" className='sm:w-[60rem] w-[12rem] mb-[1rem] self-center' alt="logo" />
                    </div>
                    <div className="w-[100%] sm:hidden grid text-black relative z-[1] h-[100%] place-content-center">
                        <div className="flex flex-col">
                            <img src="/micro_logo.png" className='sm:w-[22rem] mt-[2rem] w-[12rem] mb-[1rem] self-center' alt="logo" />
                            <h1 className="text-[2rem] font-[700] sm:w-[70rem] w-[22rem] text-center">Microservices Design and <span className="font-[400]">Development</span></h1>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;