import MaxContainer from "../../common/maxContainer";
import Contact from "../../common/contact";
import Image from "next/image";

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
          />
          <h2 className="sub-header text-center sm:mt-[7rem] w-[23rem] sm:w-[90rem] mx-auto">
            Are You <span className="font-[400]">Tired of</span>{" "}
            <span className="text-[#EB9FFF]">Manual Testing</span>
          </h2>
          <p className="text-center mt-[1.5rem] sm:w-[90rem] sm:mx-auto">
             Are you tired of manually testing your e-commerce application,
            wasting valuable time and resources on tedious and repetitive tasks?
            Our automated testing service offers a unique approach that sets us
            apart from the competition.
          </p>

          <div className="mt-[1.5rem] sm:flex items-center sm:w-[100rem] sm:mt-[5rem] justify-between mx-auto">
            <div className="">
              <h2 className="text-[2.4rem] sm:text-[3.5rem] text-center font-[700]">
                <span className="font-[400]">Our</span>{" "}
                <span className="text-[#00ACCF]">Offerings</span>
              </h2>
              <p className="hidden sm:block">Our offerings include:</p>
            </div>
            <img
              src="/ace_auto.png"
              alt="flow chat"
              className="mt-[.5rem] sm:w-[50rem]"
            />
          </div>

          <img
            src="/critical_components.svg"
            alt="critical componets"
            className="mt-[5rem] sm:hidden"
          />
        </div>

        <div className="sm:pl-[10rem] mt-[8rem] sm:block">
          <Image
            src="/critical_components_sm.svg"
            width={1000}
            className="w-full mr-0 hidden sm:block"
            height={750}
            alt="critical components"
          />
        </div>

        <div className="mt-[5rem] px-[3rem] sm:px-[10rem] sm:items-center sm:mt-[10rem] sm:flex sm:flex-row-reverse justify-between">
          <div className="sm:w-[58rem]">
            <h2 className="sub-header sm:w-[40rem] sm:text-start text-center">
              <span className="font-[400]">Seamless</span>{" "}
              <span className="text-[#F8D449]">Integration</span> and Support
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
            <h2 className="sub-header text-center w-[28rem] sm:w-[90rem] mx-auto">
              <span className="font-[400]">Experience the</span> Benefits{" "}
              <span className="font-[400]">of</span>{" "}
              <span className="text-[#8AD1EA]">Automated Testing</span>
            </h2>
          }
          text={
            "Don't settle for manual testing that slows down your development process and increases the risk of errors. Trust our unique approach to automated testing and experience the benefits of a thoroughly tested e-commerce application. Contact us today to learn more about how we can support your automated testing needs."
          }
          btn={"Contact Us For Automated Testing"}
          backgroundColor={"bg-black"}
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
    <div className={`${containerStyles}`}>
      <div
        className={`px-[3rem] mt-[5rem] py-[2rem] sm:py-[5rem] ${backgroundColor}`}
      >
        {header}
        <p className="text-center mt-[3rem] sm:w-[90rem] sm:mx-auto">{text}</p>
        {btn && (
          <button className="btn mt-[2.5rem] border mx-auto block">
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};
