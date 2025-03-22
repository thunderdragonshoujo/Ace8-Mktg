const UseCase = () => {
    return (
        <section className="sm:px-[10rem] px-[2.5rem] sm:pt-[9rem] pt-[7rem] pb-[5rem]">
            <div className="sm:px-[6rem] max-w-[1400px] mx-auto px-[2rem] relative rounded-[1.5rem] sm:pt-[9rem] pt-[3.5rem] pb-[5rem] border border-[#9B86FE]">

                <img
                    src="/tomcat/apostle1.svg"
                    alt="apostle"
                    className="absolute w-[17rem] hidden sm:block left-[7rem] top-[-6rem]"
                />
                <img
                    src="/tomcat/apostle2.svg"
                    alt="apostle"
                    className="absolute w-[17rem] hidden sm:block right-[7rem] bottom-[-6.5rem]"
                />


                <h2 className="sm:text-[3.5rem] text-[2rem] font-[700] text-center mx-auto sm:max-w-[83rem]">
                    <span className="font-[400]">Optimizing</span> Tomcat <span className="font-[400]">for</span> High-Scale E-Commerce:
                    <span className="text-[#FF88C3]"> A Performance Breakthrough</span>
                </h2>

                <div className="sm:mt-[4rem] mt-[2.5rem] flex flex-col sm:gap-[2rem] gap-[1rem]">
                    <p className="">
                        A leading global e-commerce platform was struggling with severe scalability bottlenecks during peak shopping events, threatening both revenue and customer experience. Their existing Tomcat-based infrastructure was unable to efficiently handle the surge in concurrent users, leading to increased response times and potential service disruptions.
                    </p>

                    <p className="">
                        Ace8 stepped in with deep Apache Tomcat expertise, performing an in-depth analysis of thread management, connection pooling, and JVM tuning. By implementing optimized resource allocation, fine-tuned garbage collection strategies, and custom Tomcat configurations, we significantly increased the platform's concurrent processing capacity while reducing server response times to sub-millisecond levels.
                    </p>

                    <p className="">
                        As a result, the platform seamlessly handled record-breaking transaction volumes during its annual sales event—without requiring costly infrastructure overprovisioning. This targeted optimization not only safeguarded revenue but also delivered a smoother customer experience, reinforcing the company's position as a market leader.
                    </p>

                    <p className="">
                        Looking to optimize your Tomcat infrastructure for peak performance? Ace8 delivers strategic tuning and high-scale optimizations that drive measurable results.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default UseCase;