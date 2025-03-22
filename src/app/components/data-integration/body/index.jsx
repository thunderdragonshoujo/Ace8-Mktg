import MaxContainer from '../../common/maxContainer';
import Image from 'next/image';
const Index = () => {
    return (
        <section className="bg-white text-black px-[3rem] sm:px-[10rem] py-[5rem] sm:py-[10rem]">
            <MaxContainer>
                <div className="flex flex-col sm:mb-[0]">
                    <h2 data-animation-Id='slideIn' className="sub-header  w-[100%] mx-auto font-[800] text-center mb-[.5rem] sm:mb-[2rem] sm:w-[75rem] sm:self-center"><span className="font-[400]">Struggling With</span> <br className='sm:hidden'></br> <span className="text-[#E485FD] sm:text-[#FF88C3]">E-Commerce</span> System Integration?</h2>
                    <p data-animation-Id='slideIn' className="px-[1.2rem] sm:px-[1.7rem] sm:text-black py-[.5rem] sm:self-center text-center mb-[2rem] text-[1.2rem] sm:bg-conner-gradient-iii bg-[#E485FD] sm:bg-opacity-[.6] text-white font-[700] rounded-[1rem]">Are you struggling to integrate your e-commerce system with your data analytics platform?</p>
                    <p data-animation-Id='slideIn' className="text-center sm:w-[50rem] self-center">Look no further than our integration service, which offers a unique approach that sets us apart from the competition.</p>
                </div>
                <div className="mt-[3rem] relative">
                    <div data-animation-Id='slideIn' className="sm:flex justify-around sm:mt-[6rem]">
                        <div className="flex flex-col">
                            <div className="sm:flex sm:justify-between">
                                <h2 className="sm:text-[4rem] text-[3rem] font-[800] sm:text-center w-[25rem] sm:w-[60rem]">Seamless <span className="text-[#5747A5]">Integration</span> with <span className="font-[400]">Databricks or</span> Snowflake</h2>
                            </div>
                            <div className="self-center hidden sm:block sm:mt-[7rem]">
                                <img src="/snowflake.png" className='w-[20rem] h-[20rem]' alt="snowflake" />
                                <p className="text-center font-[700] text-[3.2rem] sm:text-[4rem] mt-[2rem]">Snowflake</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="mt-[1rem] sm:w-[50rem]">Our integration service provides seamless integration with either Databricks or Snowflake, ensuring that your e-commerce data is seamlessly integrated with your data analytics platform.</p>
                            <div className="self-center hidden sm:block mt-auto">
                                <img src="/databricks.png" className='w-[20rem] h-[20rem]' alt="snowflake" />
                                <p className="text-center font-[700] text-[3.2rem] sm:text-[4rem] mt-[2rem]">Databricks</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[1rem] flex flex-col sm:hidden">
                        <img src="/people.png" alt="people sitting down" />
                        <img src="/design_card.png" className='w-[28rem] self-center relative top-[-3rem]' alt="design card" />
                        <img src="/design_arrow.svg" className='w-[4rem] mt-[-3rem] ml-[4rem]' alt="design card" />
                        <img src="/optimization_card.png" className='w-[34rem]' alt="design card" />
                        <img src="/optimization_arrow.svg" className='w-[4rem] ml-auto mr-[3rem]' alt="design card" />
                        <img src="/experience_card.png" className='w-[34rem]' alt="design card" />
                    </div>
                </div>
            </MaxContainer>
            <div data-animation-Id='slideIn' className="relative mt-[-17rem] z-[3] top-[30rem]  sm:block hidden">
                <Image src='/_archi.png' className='mx-auto w-[100rem]' alt='architecture consulting' width={1000} height={1500} />
            </div>
        </section>
    );
}

export default Index;