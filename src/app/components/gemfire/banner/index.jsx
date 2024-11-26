import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[5rem] sm:pb-[0] sm:px-[10rem] text-white">
            <div data-animation-id='slideIn' className="relative">
                <img src="/_border.png" alt="border" className="absolute z-[0] w-[100%] h-[100%]  inset-0 top-[-1.5rem] left-[1.5rem]" />
                <div className="sm:py-[3rem] sm:rounded-[2rem] relative z-[1] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                    <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                        <h2 className="text-[3rem] sm:text-[4.4rem] font-[700] self-center text-center mt-[1rem] sm:w-[110rem] sm:mt-[0]"><span className="font-[400]">Unlock the</span> <span className="text-[#8FD5CC]">Full Potential</span> <span className="font-[400]">of</span> <span className="font-[400] text-[#8FD5CC]">GemFire</span> Technology</h2>

                        <p className="mt-[2rem] text-center">Accelerate your GemFire journey and capitalize on GemFire's unique features with guidance from our team of GemFire experts. Benefit from comprehensive services including configuration audits, architectural reviews, best practices guidance, DR setup, and load testing tailored to your specific requirements. As VMware Qualified GemFire Partners with original GemFire developers on our team, we offer unparalleled insights and proven success.</p>

                        <Link href='#contact' className="self-center mt-[1rem]">
                            <button className="text-[1.2rem] px-[3.5rem] py-[1rem] rounded-[1rem] border-[1.2px] font-[800] mt-[2rem]">Talk to an Expert</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;