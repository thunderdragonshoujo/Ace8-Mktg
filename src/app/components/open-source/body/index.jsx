import MaxContainer from "../../common/maxContainer";
import Image from "next/image";
import Contact from "../../common/contact";
import Link from "next/link";

const Index = () => {
  return (
    <section className="">
      <MaxContainer>
        <div data-animation-id='slideIn' className="px-[3rem] py-[3rem] sm:px-[10rem] sm:flex sm:flex-row-reverse sm:items-center sm:justify-around">
          <div  className="px-[.5rem] sm:px-[2.5rem] sm:w-[50rem] sm:flex-row-reverse py-[1.5rem] sm:py-[3rem]  bg-service-card-gradient rounded-[.8rem]">
            <img
              src="/open_source_ace_logo.svg"
              className="w-[20rem] mx-auto sm:ml-[2.5rem] mb-[2rem]"
              alt="ace logo"
            />
            <p className="text-center sm:text-start">
              As the usage of Open Source software increases, organizations face
              growing risks relying solely on online documentation and Open
              Source communities for technology support. OpenAce steps in to
              provide expert consulting and comprehensive support services,
              ensuring your teams harness the benefits of open-source
              technologies with confidence and meet enterprise requirements,
              including compliance with regulations such as GDPR, HIPAA, FIPS,
              and PCI.
            </p>
          </div>
          <Image
            src="/mobile_app_launch.png"
            width={1000}
            height={700}
            className="w-[35rem] sm:w-[60rem] mt-[3rem]"
            alt="mobile app launch"
          />
        </div>
        <Banner
          header={
            <h3 className="sub-header text-center">
              Who is <span className="text-[#FF88C3]">OpenAce?</span>
            </h3>
          }
          text={
            "OpenAce is powered by Ace8 and is backed by a team of Open Source Architects, Thought leaders, and contributors with extensive Open Source experience. Our passion for Open Source, coupled with extensive experience working on an array of Open Source implementations globally from a business and technological perspective, uniquely equips us to drive true enterprise value with Open Source Technologies."
          }
          btn={"Talk to an Expert"}
          backgroundColor={"bg-black"}
          containerStyles={"mt-[5rem] sm:px-[0]"}
        />
        <Banner
          header={
            <h3 data-animation-id='slideIn' className="sub-header w-[24rem]  sm:w-[100rem] mx-auto text-center">
              Open <span className="font-[400]">Source</span>{" "}
              <span className="text-[#FF88C3]">Support</span>
            </h3>
          }
          text={
            "OpenAce, delivers reliable consulting and technical support services for businesses seeking assistance with Open Source technologies. Our experienced team of Open Source Architects provides 24/7 support and tailored solutions across various industries."
          }
          btn={false}
          backgroundColor={"bg-transparent"}
          containerStyles={"mt-[2rem] sm:hidden"}
        />
        <img
          src="/core_technologies.png"
          alt="core tech"
          className="w-full mb-[5rem] mt-[8rem] hidden sm:block"
        />
        <div className="px-[3rem] sm:px-[10rem]">
          <img
            src="/core_technology.svg"
            alt="core technology"
            className="sm:mx-auto sm:hidden mt-[3rem] mb-[4rem]"
          />
          <h3 data-animation-id='slideIn' className="text-[3rem] sm:text-[6rem] font-[700] w-[20rem] sm:w-[100rem] mx-auto text-center">
            Our <span className="font-[400]">Support</span> Process
          </h3>
          <p data-animation-id='slideIn' className="font-[700] text-[2.5rem] leading-[3.5rem] sm:text-[3rem] sm:leading-[4.5rem] sm:text-center sm:w-[65rem] sm:mx-auto mt-[1rem]">
            <span className="font-[400]">Maximize Your System's</span> Uptime
            with{" "}
            <span className="text-[#FF88C3]">OpenAce Technical Support</span>
          </p>

          <p data-animation-id='slideIn' className="sm:block hidden mx-auto text-center w-[100rem] mt-[1.5rem]">
            OpenAce Technical Support Services provide enterprises with access
            to experienced Open Source Architects and Developers, offering 24/7
            support for a wide range of Open Source technologies. From
            installation and configuration to training, and migration, our
            customized support ensures that your Open Source systems remain
            reliable and optimized for maximum performance and efficiency for
            your specific Use Case.
          </p>

          <img
            src="/process_sm.svg"
            data-animation-id='slideIn'
            alt="supports"
            className="mt-[6rem] sm:block hidden"
          />
          <img
            src="/supports.png"
            data-animation-id='slideIn'
            alt="supports"
            className="mt-[2rem] sm:hidden"
          />

          <div className="mt-[3rem] sm:mt-[10rem]">
            <div className="mx-auto w-[35rem] sm:w-[70rem]">
              <h3 data-animation-id='slideIn' className="sub-header text-center">
                <span className="text-[#9B86FE]">Technical</span> Support{" "}
                <span className="font-[400]">Benefits</span>
              </h3>
              <p data-animation-id='slideIn' className="w-[28rem] hidden sm:block sm:w-[50rem] sm:mt-[1rem] text-center mb-[2rem] mx-auto">
                Make Your Open Source Technologies Enterprise-Ready
              </p>
            </div>
            <img
              src="/support_benefit.svg"
              data-animation-id='slideIn'
              className="sm:hidden"
              alt="benefits"
            />
            <div data-animation-id='slideIn' className="relative hidden sm:grid place-content-center">
              <div className="absolute inset-0 grid place-content-center">
                <img
                  src="/support_logo.svg"
                  className="sm:w-[32rem]"
                  alt="benefits"
                />
              </div>
              <img
                src="/support_benefit_lg.svg"
                className="mt-[5rem]"
                alt="benefits"
              />
            </div>
          </div>

          <div className="sm:mt-[10rem] mt-[4rem]">
            <h3 data-animation-id='slideIn' className="sub-header sm:mb-[2rem] text-center">
              <span className="font-[400]">Case</span> Studies
            </h3>
            <div data-animation-id='slideIn' className="">
              <Banner
                header={
                  <h3 className="sm:text-[5rem] text-[2.8rem] font-[800] text-center">
                    <span className="font-[400]">Explore</span> transformative
                    case studies showcasing the{" "}
                    <span className="font-[400]">impact of</span> our Open
                    Source architects.
                  </h3>
                }
                text={
                  "Delve into success stories of businesses leveraging Open Source technology for optimal workflows, collaboration, efficiency, and cost reduction."
                }
                btn={"learn more"}
                containerStyles={"sm:bg-black mt-[1rem] bg-banner-key bg-contain bg-no-repeat sm:hidden"}
              />
              
              <div className="border sm:block pb-[3.5rem] rounded-[1.5rem] border-[#9B86FE80] hidden w-[90rem] mx-auto">
                <div className="relative">
                  <img
                    src="/key_logo.svg"
                    className="absolute w-[15rem] h-[15rem] left-[5rem] top-[5rem]"
                    alt="ace logo"
                  />
                  <img src="/key.png" alt="key" />
                </div>
                <div className="">
                  <h2 className="text-[2.5rem] sm:text-[3rem] font-[700] sm:w-[90%] text-center mx-auto mt-[3rem]">
                    Explore transformative case studies showcasing the impact of
                    our Open Source architects.
                  </h2>
                  <p className="w-[85%] text-center mx-auto mt-[2rem]">
                    Delve into success stories of businesses leveraging Open
                    Source technology for optimal workflows, collaboration,
                    efficiency, and cost reduction.
                  </p>
                  <Link href={'#contact'}>
                    <button className="btn border mx-auto block mt-[2rem]">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner
          header={
            <h2  className="sub-header text-center sm:w-[90rem] sm:mx-auto">
              <span className="font-[400]">Unlock</span> the Power of{" "}
              <span className="text-[#8FD5CC]">Open Source</span> for Your{" "}
              <span className="font-[400]">Business Today</span>
            </h2>
          }
          text={
            "OpenAce provides businesses with access to experienced Open Source Architects who can help them unlock the power of Open Source technologies. Contact us today to learn how we can assist you in leveraging Open Source to achieve your business objectives."
          }
          btn={"Talk To An Expert"}
          backgroundColor={"sm:bg-black bg-multi-color bg-no-repeat sm:bg-cover bg-contain"}
          containerStyles={"sm:px-[10rem] mt-[5rem] sm:mt-[10rem]"}
          pageBanner={true}
        />
        <Contact route={"open-source"} />
      </MaxContainer>
    </section>
  );
};

export default Index;

const Banner = ({ header, text, btn, containerStyles, backgroundColor, pageBanner = false }) => {
  return (
    <div style={{ backgroundSize: '100% 100%' }} className={`${containerStyles}`}>
      <div data-animation-id='slideIn' className="relative">
        {pageBanner && <img src="/_border.png" alt="border" className="inset-0 w-[100%] hidden sm:block h-[100%] absolute z-[0] top-[-1.5rem] left-[1.5rem]" />}
        <div
          style={{ backgroundSize: '100% 100%' }}
          className={`px-[2rem] relative z-[1] sm:mt-[5rem] py-[2rem] sm:py-[5rem] ${backgroundColor}`}
        >
          {header}
          <p data-animation-id='slideIn' className="text-center mt-[3rem] sm:w-[90rem] sm:mx-auto">{text}</p>
          {btn && (
            <Link data-animation-id='slideIn' href='#contact'>
              <button className="btn mt-[2.5rem] border mx-auto block">
                {btn}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
