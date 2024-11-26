import MaxContainer from "../../common/maxContainer";
import Contact from "../../common/contact";
import Image from "next/image";
import PlaceTextBesideImage from "../../common/placeTextBesideImage";
import Link from "next/link";

const Index = () => {
  return (
    <section className="">
      <MaxContainer>
        <div className="px-[3rem] sm:px-[10rem]">
          <Image
            src="/automated_testing_code.png"
            width={1000}
            height={800}
            className="mx-auto w-[100rem] hidden sm:block"
            alt="code snippet"
            data-animation-id='slideIn'
          />
          <h2 data-animation-id='slideIn' className="sub-header text-center sm:mt-[7rem] w-[23rem] sm:w-[90rem] mx-auto">
            Are You <span className="font-[400]">Tired of</span>{" "}
            <span className="text-[#EB9FFF] sm:text-[#FF88C3]">Manual Testing</span>
          </h2>
          <p data-animation-id='slideIn' className="text-center mt-[1.5rem] sm:w-[90rem] sm:mx-auto">
            Are you tired of manually testing your e-commerce application,
            wasting valuable time and resources on tedious and repetitive tasks?
            Our automated testing service offers a unique approach that sets us
            apart from the competition.
          </p>

          <div data-animation-id='slideIn' className="mt-[3rem] sm:flex items-center sm:w-[100rem] sm:mt-[5rem] justify-between mx-auto">
            <div className="">
              <h2 className="text-[2.4rem] sm:text-[5rem] text-center font-[700]">
                <span className="font-[400] sm:text-[#FF88C3]">Our</span>{" "}
                <span className="text-[#00ACCF] sm:text-white">Offerings</span>
              </h2>
              {/* <p className="hidden sm:block">Our offerings include:</p> */}
            </div>
            <img
              src="/ace_auto.png"
              alt="flow chat"
              data-animation-id='slideIn'
              className="mt-[.5rem] sm:hidden sm:w-[50rem]"
            />
            <Image
              width={680}
              height={460}
              src={'/aceauto.png'}
              alt="offering"
              className="w-[50rem] hidden sm:block"
              data-animation-id='slideIn'
            />

          </div>

          <img
            src="/critical_components.svg"
            alt="critical componets"
            data-animation-id='slideIn'
            className="mt-[5rem] sm:hidden"
          />
        </div>

        {/* <div className="sm:pl-[10rem] mt-[8rem] sm:block">
          <Image
            src="/critical_components_sm.svg"
            width={1000}
            className="w-full mr-0 border hidden sm:block"
            height={750}
            alt="critical components"
            data-animation-id='slideIn'
          />
        </div> */}

        <div className="sm:flex sm:justify-between hidden mt-[8rem] w-[100%] pl-[10rem]">
          <div className="w-[50rem]">
            <h2 className="text-[3rem] sm:text-[5rem] w-[45rem] font-[400]">Thorough <span className="font-[700] text-[#8FD5CC]">Testing</span> with <span className="font-[700]">Three Critical</span> <span className="text-[#8FD5CC] font-[700]">Components</span></h2>
            <p className="">Our approach includes three critical components that ensure your e-commerce application is thoroughly tested: </p>
            <div className="flex flex-col gap-[.3rem] mt-[1.5rem] mb-[3rem]">
              <div className="flex gap-[1rem]">
                <div className="flex flex-col items-center gap-[.5rem]">
                  <div style={{ border: `2px solid #ffffff` }} className={`rounded-full ${'w-[2rem] aspect-square'}`}></div>
                  <div className={`w-[2px] bg-[#8FD5CC] min-h-[2rem] h-[100%]`}></div>
                </div>
                <p className="w-[90%]">Crowd-sourced development of test cases</p>
              </div>
              <div className="flex gap-[1rem]">
                <div className="flex flex-col items-center gap-[.5rem]">
                  <div style={{ border: `2px solid #ffffff` }} className={`rounded-full ${'w-[2rem] aspect-square'}`}></div>
                  <div className={`w-[2px] bg-[#8FD5CC] min-h-[2rem] h-[100%]`}></div>
                </div>
                <p className="w-[90%]">AI-enhanced test code</p>
              </div>
              <div className="flex gap-[1rem]">
                <div className="flex flex-col items-center gap-[.5rem]">
                  <div style={{ border: `2px solid #ffffff` }} className={`rounded-full ${'w-[2rem] aspect-square'}`}></div>
                </div>
                <p className="w-[90%]">Execution of test cases integrated into your CI/CD pipeline.</p>
              </div>
            </div>
            <p className="">Through crowd-sourced development of test cases, we bring together a community of testers to create comprehensive and diverse test cases for your application. Our AI-enhanced test code then ensures that these test cases are efficient and effective, saving you time and resources.</p>
          </div>
          <img src="/_critical_component.png" alt="critical component" className="w-[78rem] h-[50rem] hidden sm:block" />
        </div>

        <div data-animation-id='slideIn' className="mt-[5rem] px-[3rem] sm:px-[10rem] sm:items-center sm:mt-[10rem] sm:flex sm:flex-row-reverse justify-between">
          <div className="sm:w-[58rem]">
            <h2 className="sub-header sm:w-[40rem] sm:text-start text-center">
              <span className="font-[400]">Seamless</span>{" "}
              <span className="text-[#F8D449] sm:text-[#FF88C3]">Integration</span> and Support
            </h2>
            <p className="text-center sm:text-start my-[3rem]">
              Finally, we seamlessly integrate the execution of these automated
              tests into your existing CI/CD pipeline, ensuring that your
              application is thoroughly tested with every update. And if you
              don't have a CI/CD pipeline, we can help you get started on the
              path to more efficient and reliable software delivery.
            </p>
          </div>
          <img src="/Plan_code_deploy.svg" className="w-[55rem]" alt="plan" />
        </div>

        <Banner
          header={
            <h2 className="text-[3rem] sm:text-[4.5rem] font-[700] text-center w-[28rem] sm:w-[100rem] mx-auto">
              <span className="font-[400]">Experience the</span> Benefits{" "}
              <span className="font-[400]">of</span>{" "}
              <span className="text-[#8AD1EA] sm:text-[#8FD5CC]">Automated Testing</span>
            </h2>
          }
          text={
            "Don't settle for manual testing that slows down your development process and increases the risk of errors. Trust our unique approach to automated testing and experience the benefits of a thoroughly tested e-commerce application. Contact us today to learn more about how we can support your automated testing needs."
          }
          btn={"Contact Us For Automated Testing"}
          backgroundColor={"sm:bg-secure_banner"}
          containerStyles={"sm:px-[10rem] sm:mt-[10rem]"}
        />
        <Contact route={"automated-testing"} />
      </MaxContainer>
    </section>
  );
};

export default Index;

const Banner = ({ header, text, btn, containerStyles, backgroundColor }) => {
  return (
    <div className={`${containerStyles} relative`} >

      <div data-animation-id='slideIn' className="relative">
        <img src="/_border.png" alt="border" className="absolute inset-0 left-[2rem] top-[-2rem] z-[0]" />
        <div
          style={{ backgroundSize: '100% 100%, 100% 100%' }}
          className={`px-[3rem] z-[1] mt-[5rem] py-[2rem] sm:pt-[7rem] sm:pb-[10rem] relative ${backgroundColor}`}
        >
          {header}
          <p className="text-center mt-[3rem] sm:mt-[1rem] sm:w-[95rem] sm:mx-auto">{text}</p>
          {btn && (

            <button className="border-[1.2px] sm:px-[3rem] sm:py-[1.2rem] sm:rounded-[1rem] font-[800] sm:text-[1.2rem] mt-[2.5rem] mx-auto block">
              <Link href='#contact'>
                {btn}
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
