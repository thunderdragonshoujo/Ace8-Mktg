import Link from "next/link";
const Index = () => {
    return (
        <section className="pt-[2rem] sm:pt-[0] sm:pb-[0] sm:px-[10rem] text-white">
            <div data-animation-id='slideIn' className="sm:py-[3rem] sm:rounded-[2rem] sm:pb-[5rem] bg-black px-[3rem] py-[3rem] sm:grid sm:place-content-center">
                <div className="sm:mt-[3rem] flex flex-col">
                    <h2 className="font-[700] text-[3rem] sm:text-[4rem] self-center w-[99%] text-center mt-[1rem] sm:w-[90rem] sm:mt-[0]"><span className="font-[400]">Ready to Optimize
                        Your</span> <span className="text-[#9B86FE] sm:text-[#8FD5CC]">Messaging and Queuing</span> Implementation with <span className="font-[400]">Expert Support and</span>
                        <span className="text-[#9B86FE] sm:text-[#8FD5CC]"> Value-Driven Solutions ?</span></h2>
                    <p className="mt-[2rem] mx-auto sm:w-[80rem] text-center">Partner with AceMQ, your trusted messaging and queuing services provider. Our team of experienced engineers specializes in message brokers, including RabbitMQ, and seamlessly integrates them into your unique technology stack. As an internationally accredited partner of RabbitMQ, we offer comprehensive troubleshooting, consulting, and support services tailored to your specific requirements.</p>

                    <Link href='#contact' className="self-center mt-[1rem]">
                        <button className="border-[1.3px] px-[3rem] py-[1rem] rounded-[1rem] sm:text-[1.4rem] mt-[2rem]">Get Started With AceMQ</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Index;