import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div data-animation-id='slideIn' className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:w-[80rem] sm:mt-[3rem] flex flex-col">
                    <h2 className="sub-header self-center text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Unlock the</span> <span className="text-[#8FD5CC]">Full Potential</span> <span className="font-[400]">of</span> <span className="font-[400] text-[#8FD5CC]">GemFire</span> Technology</h2>

                    <p className="mt-[2rem] text-center">Accelerate your GemFire journey and capitalize on GemFire's unique features with guidance from our team of GemFire experts. Benefit from comprehensive services including configuration audits, architectural reviews, best practices guidance, DR setup, and load testing tailored to your specific requirements. As VMware Qualified GemFire Partners with original GemFire developers on our team, we offer unparalleled insights and proven success.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="btn border mt-[2rem]">Talk to an Expert</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;