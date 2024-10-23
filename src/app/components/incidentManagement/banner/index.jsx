import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[5rem] sm:pb-[0] sm:px-[10rem] text-white">
            <div className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Ready to Streamline Your</span> <span className="text-[#FA9531] sm:text-[#8FD5CC]"> Incident Management and Experience</span><span className="font-[400]"> Efficient Workflows for </span><span className="text-[#FA9531] sm:text-[#8FD5CC]">Effective Incident Resolution?</span></h2>
                    <p className="mt-[2rem] text-center">Contact us now and unlock the power of comprehensive incident management with Ace8. Trust our unique approach, powered by Netflix Dispatch, to handle any incident with urgency, precision, and 24/7 support. Don't wait for critical incidents to disrupt your operations—take control and ensure reliable operations today.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Optimize Your Incident Management</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;