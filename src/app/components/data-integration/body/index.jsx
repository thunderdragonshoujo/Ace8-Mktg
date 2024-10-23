import MaxContainer from '../../common/maxContainer';
import Image from 'next/image';
const Index = () => {
    return (
        <section className="bg-white text-black px-[3rem] sm:px-[10rem] py-[10rem]">
            <MaxContainer>
                <div className="flex flex-col">
                    <h2 className="sub-header text-center mb-[2rem] sm:w-[60rem] sm:self-center"><span className="font-[400]">Struggling With</span> <span className="text-[#E485FD]">E-Commerce</span> System Integration?</h2>
                    <p className="px-[1.2rem] py-[.5rem] sm:self-center text-center mb-[2rem] text-[1.2rem] bg-[#E485FD] text-white font-[700] rounded-[1rem]">Are you struggling to integrate your e-commerce system with your data analytics platform?</p>
                    <p className="text-center sm:w-[50rem] self-center">Look no further than our integration service, which offers a unique approach that sets us apart from the competition.</p>
                </div>
                <div className="mt-[3rem] relative">
                    <div className="sm:flex hidden justify-around mt-[6rem]">
                        <div className="flex flex-col">
                            <div className="sm:flex sm:justify-between">
                                <h2 className="sub-header sm:text-center w-[25rem] sm:w-[60rem]">Seamless <span className="text-[#5747A5]">Integration</span> with <span className="font-[400]">Databricks or</span> Snowflake</h2>
                            </div>
                            <div className="self-center sm:mt-[7rem]">
                                <img src="/snowflake.png" className='w-[20rem]' alt="snowflake" />
                                <p className="text-center font-[700] text-[3.2rem] mt-[2rem]">Snowflake</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="mt-[1rem] sm:w-[50rem]">Our integration service provides seamless integration with either Databricks or Snowflake, ensuring that your e-commerce data is seamlessly integrated with your data analytics platform.</p>
                            <div className="self-center sm:mt-[7rem]">
                                <img src="/databricks.png" className='w-[20rem]' alt="snowflake" />
                                <p className="text-center font-[700] text-[3.2rem] mt-[2rem]">Databricks</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-[-14rem] top-[20rem] sm:block hidden">
                        <Image src='/architecture_consulting.png' className='mx-auto w-[100rem]' alt='architecture consulting' width={1000} height={1500} />
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
        </section>
    );
}

export default Index;