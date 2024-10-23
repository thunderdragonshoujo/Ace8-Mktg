import MaxContainer from '../../../components/common/maxContainer'



const Index = () => {
    return (
        <section className="bg-white">
            <MaxContainer>
                <div className="px-[3rem] flex flex-col pt-[7rem] pb-[4rem] sm:pb-[2rem]">
                    <h3 data-animation-id='slideIn' className="sub-header sm:mb-[5rem] sm:ml-[10rem] sm:w-[50rem] text-black text-center self-center">Our <span className="text-[#5747A5]">Differentiator </span> & <span className="font-[400]">Value</span></h3>
                    <img data-animation-id='slideIn' src="/values_broker.webp" className='hidden sm:block' alt="" />
                    <img data-animation-id='slideIn' src="/troubleshooting_broker.png" className='sm:hidden block mt-[3rem]' alt="" />
                    <img data-animation-id='slideIn' src="/assessment_broker.png" className='sm:hidden block mt-[3rem]' alt="" />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;