import Image from "next/image";
import MaxContainer from '../../../components/common/maxContainer'


const Index = () => {
    return (
        <section className="">
            <MaxContainer>
                <div className="py-[5.5rem] sm:pt-[15rem] sm:pb-[17rem] px-[1.5rem] sm:px-[10rem] relative">
                    <Image src='/incident_management_bg_sm.png' className="absolute mix-blend-overlay inset-0 sm:hidden top-0 w-[100%] h-[100%]" width={790} height={387} alt="wheel" />
                    <Image src='/incident_management_bg.png' className="absolute mix-blend-overlay  sm:block hidden inset-0 top-0 w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
                    <div className="flex flex-col items-center relative">
                        <h1 className="header text-center sm:w-[90rem]"><span className="text-[#9B86FE]">Comprehensive</span> <span className="font-[400]">Incident Management</span> for <span className="text-[#9B86FE]">Reliable</span> <span className="font-[400]">Operations</span></h1>
                        <p className="text-center sm:w-[90rem] mt-[3rem] sn:mt-[0]">Trust our Unique Approach for Effective Incident Resolution</p>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;