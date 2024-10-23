import Image from "next/image";
import Link from "next/link";
const Index = () => {
    return (
        <section className="bg-black py-[4rem] relative px-[3rem] sm:px-[10rem] sm:mb-[15rem] sm:bg-transparent">
            <div className="sm:bg-management-bg sm:pr-[5rem] sm:justify-between relative bg-contain bg-no-repeat w-[100%] flex flex-col sm:flex-row-reverse sm:pt-[0rem] sm:pl-[2rem]" data-animation-id='slideIn'>
                <div className="absolute inset-0  opacity-[.7] z-[0] bg-black"></div>
                <div className="flex flex-col sm:w-[52rem] relative z-[1] sm:pt-[6rem]">
                    <div className="border border-[#FF88C3] px-[1.7rem] py-[.5rem] self-start rounded-[2rem] mb-[1.5rem]">
                        <p className="">Incident Management</p>
                    </div>
                    <h3 className="font-[700] text-[2.8rem] sm:text-[5rem] sm:leading-[5.7rem] sm:mb-[.5rem] mb-[2rem]">How to <span className="font-[400]">Proactively</span> Mitigate <span className="text-[#9B86FE]">Incidents</span></h3>
                    <p className="text-[1.4rem] sm:w-[52rem] mb-[3rem] font-[400]">Learn how Ace8 leverages Netflix Dispatch and other Industry-leading technologies and practices to offer the ONLY proactive incident management.</p>

                    <Link href="/Service/incident-management" className="btn self-center">Learn More</Link>
                </div>
                <Image src='/_dashboard.png' className="w-[100%] sm:w-[60rem] sm:relative sm:bottom-[-3.8rem] h-auto" width={370} height={300} />
            </div>
        </section>
    );
}

export default Index;
