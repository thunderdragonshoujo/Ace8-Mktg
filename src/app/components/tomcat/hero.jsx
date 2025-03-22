import MaxContainer from "../common/maxContainer";

const Hero = () => {
  return (
    <section className="w-[100vw]">
      <MaxContainer>
        <div className="flex items-center justify-center bg-[#0D1117] bg-blend-soft-light sm:py-[30rem] sm:bg-[length:100%_auto] bg-[length:100%_100%]  bg-no-repeat bg-tomcat-hero-bg">
          <div className="sm:max-w-[70rem] max-w-[32rem] w-[100%]">
            <h1 className="text-center w-[90%] mx-auto sm:w-[100%] sm:mx-0 sm:text-[5rem] text-[2.4rem] font-[700]">Optimize and Support <span className="font-[400]">Your</span> <span className="text-[#9B86FE]">Apache Tomcat</span> <span className="font-[300]">Environment.</span></h1>
            <p className="text-center mx-auto sm:w-[75%] mt-[2rem]">Empowering Java Web Applications with Expert Tomcat Consulting and Support Services</p>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
}

export default Hero;