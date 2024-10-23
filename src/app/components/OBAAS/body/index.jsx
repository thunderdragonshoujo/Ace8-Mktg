import MaxContainer from "../../common/maxContainer";
import Form from "../../common/contact";

const Index = () => {
  return (
    <>
      <Intro />
      <SubIntro />
    </>
  );
};

export default Index;

const Intro = () => (
  <section className="bg-white sm:pb-[10rem] py-[3rem]">
    <MaxContainer>
      <div className="px-[3rem] sm:px-[10rem]">
        <img
          src="/OBAAS_code_snippet2.png"
          alt="code snippet"
          className="relative sm:mx-auto sm:w-[100rem] top-[-12rem] sm:block hidden"
        />
        <div className="text-black sm:justify-between sm:mt-[-6rem] text-center sm:flex">
          <p className="sm:w-[50rem] sm:text-left">
            At Ace8, we acknowledge a critical industry challenge—delayed
            developer productivity due to lengthy onboarding processes, leading
            to significant financial losses. Developers often remain idle,
            costing businesses millions annually.
          </p>
          <img
            src="/critical_industry.svg"
            alt="icons"
            className="sm:w-[60rem]"
          />
        </div>
      </div>
    </MaxContainer>
  </section>
);

const SubIntro = () => (
  <section className="">
    <MaxContainer>
      <div className="py-[5rem] sm:pt-[10rem]">
        <div className="sm:flex px-[3rem] sm:pr-[0] justify-between sm:pl-[10rem]">
          <div className="sm:w-[57rem]">
            <h2 className="text-[3rem] font-[700] mb-[1rem]">
              <span className="font-[400]">Our</span> Solution:
            </h2>
            <h3 className="sub-header">
              <span className="text-[#FF88C3]">Dev Containers</span>{" "}
              <span className="font-[400]"> for Swift, Customized</span>{" "}
              Onboarding
            </h3>
            <p className="py-[2.5rem]">
              Enter a solution-oriented approach! We advocate for "dev
              containers" to seamlessly connect developers to cloud environments
              within hours, not weeks. This revolutionary method customizes
              dev-containers to fit the specific roles of your developers,
              ensuring rapid onboarding and substantial cost savings.
            </p>
            <div className="flex justify-between mb-[3rem]">
              <div className="w-[14rem]  hidden sm:block sm:w-[25rem]">
                <h4 className="text-[1.5rem] sm:text-[2.3rem] mb-[1rem] font-[700]">
                  <span className="font-[400]">Customized</span>{" "}
                  <span className="text-[#DC71AD]">Dev-Containers:</span>
                </h4>
                <p className="text-[1.2rem]">
                  Tailored to fit the unique roles of your developers, our
                  solution ensures they get to meaningful work swiftly, saving
                  both time and resources.
                </p>
              </div>
              <div className="w-[14rem] sm:w-[25rem] hidden sm:block text-start">
                <h4 className="text-[1.5rem] sm:text-[2.3rem] mb-[1rem] font-[700]">
                  <span className="font-[700] text-[#DC71AD]">Fast and</span>
                  <span className="font-[400]"> Painless</span>{" "}
                  <span className="text-[#DC71AD]">Onboarding</span>
                </h4>
                <p className="text-[1.2rem]">
                  A streamlined process that equips developers with all
                  necessary tools, eliminating idle time and expediting their
                  journey to productivity.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/OBAAS_code_snippet.png"
            alt=""
            className="mb-[2rem] sm:w-[68rem]"
          />
        </div>

        <div className="sm:flex px-[3rem] mb-[1rem] mt-[5rem] hidden gap-[6.5rem] sm:pl-[10rem]">
          <div className="w-[25rem]">
            <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
              <span className="font-[400]">SecOps-</span>
              <span className="text-[#DC71AD]">Vetted Tooling</span>
            </h4>
            <p className="text-[1.2rem]">
              Trust in a mix of tools vetted by your Security Operations
              (SecOps) team, ensuring a secure and compliant onboarding
              experience.
            </p>
          </div>

          <div className="w-[25rem] text-start">
            <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
              <span className="text-[#DC71AD]">Integration with</span>{" "}
              <span className="font-[400]">Enterprise</span>{" "}
              <span className="text-[#DC71AD]">Systems</span>
            </h4>
            <p className="text-[1.2rem]">
              Seamlessly integrate with your existing enterprise systems,
              including AWS Cloud, Jira, Bitbucket, GitHub, and more.
            </p>
          </div>

          <div className="w-[25rem] text-start">
            <h4 className="text-[1.5rem] mb-[1rem] font-[700] text-[#DC71AD]">
              Fully <span className=""> Managed</span> Service
            </h4>
            <p className="text-[1.2rem]">
              Enjoy the benefits of a fully managed service running on your
              infrastructure, minimizing the burden on your team.
            </p>
          </div>
        </div>

        <div className="px-[3rem] sm:hidden">
          <div className="flex justify-between mb-[3rem] sm:hidden">
            <div className="w-[14rem]">
              <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
                <span className="font-[400]">Customized</span>{" "}
                <span className="text-[#DC71AD]">Dev-Containers:</span>
              </h4>
              <p className="text-[1.2rem]">
                Tailored to fit the unique roles of your developers, our
                solution ensures they get to meaningful work swiftly, saving
                both time and resources.
              </p>
            </div>
            <div className="w-[14rem] text-end">
              <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
                <span className="font-[700] text-[#DC71AD]">Fast and</span>
                <span className="font-[400]"> Painless</span>{" "}
                <span className="text-[#DC71AD]">Onboarding</span>
              </h4>
              <p className="text-[1.2rem]">
                A streamlined process that equips developers with all necessary
                tools, eliminating idle time and expediting their journey to
                productivity.
              </p>
            </div>
          </div>

          <div className="flex justify-between mb-[1rem] sm:hidden">
            <div className="w-[14rem]">
              <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
                <span className="font-[400]">SecOps-</span>
                <span className="text-[#DC71AD]">Vetted Tooling</span>
              </h4>
              <p className="text-[1.2rem]">
                Trust in a mix of tools vetted by your Security Operations
                (SecOps) team, ensuring a secure and compliant onboarding
                experience.
              </p>
            </div>
            <div className="w-[14rem] text-end">
              <h4 className="text-[1.5rem] mb-[1rem] font-[700]">
                <span className="text-[#DC71AD]">Integration with</span>{" "}
                <span className="font-[400]">Enterprise</span>{" "}
                <span className="text-[#DC71AD]">Systems</span>
              </h4>
              <p className="text-[1.2rem]">
                Seamlessly integrate with your existing enterprise systems,
                including AWS Cloud, Jira, Bitbucket, GitHub, and more.
              </p>
            </div>
          </div>

          <div className="w-[14rem] px-[3rwm] mt-[2rem] mb-[5rem] text-center mx-auto sm:hidden">
            <h4 className="text-[1.5rem] mb-[1rem] font-[700] text-[#DC71AD]">
              Fully <span className=""> Managed</span> Service
            </h4>
            <p className="text-[1.2rem]">
              Enjoy the benefits of a fully managed service running on your
              infrastructure, minimizing the burden on your team.
            </p>
          </div>
        </div>

        <div className="sm:px-[10rem] px-[3rem]">
          <div className="sm:mt-[7rem]">
            <h2 className="sub-header text-center mb-[2rem] sm:w-[80rem] sm:mx-auto">
              Why <span className="font-[400]">Choose </span>
              <span className="text-[#9B86FE]">OBaaS</span> for{" "}
              <span className="text-[#9B86FE]"> Developer</span> Onboarding?
            </h2>
          </div>
          <img
            src="/heroku.png"
            alt="heroku icon"
            className="mb-[2rem] sm:w-[100rem] sm:mx-auto"
          />
          <img src="/properties.png" alt="properties" className="sm:hidden" />
          <div className="hidden sm:block mt-[5rem]">
            <div className="flex justify-between">
              <div className="">
                <div className="flex gap-[3rem] mb-[1rem]">
                  <h1 className="font-[700] text-[4.5rem] text-[#7972BD] opacity-[.3]">
                    1
                  </h1>
                  <p className="w-[50rem]">
                    <span className="font-[500]">Rapid ROI:</span> OBaaS not
                    only accelerates onboarding but also pays for itself with
                    the time saved waiting for provisioning.
                  </p>
                </div>
                <div className="flex gap-[3rem] mb-[1rem]">
                  <h1 className="font-[700] text-[4.5rem] text-[#7972BD] opacity-[.3]">
                    2
                  </h1>
                  <p className="w-[50rem]">
                    <span className="font-[500]">
                      Swift Onboarding into Any Cloud:
                    </span>{" "}
                    Our solution provides a fast and painless onboarding
                    experience into any cloud environment, ensuring developers
                    can dive into meaningful work promptly.
                  </p>
                </div>
                <div className="flex gap-[3rem] mb-[1rem]">
                  <h1 className="font-[700] text-[4.5rem] text-[#7972BD] opacity-[.3]">
                    3
                  </h1>
                  <p className="w-[50rem]">
                    <span className="font-[500]">
                      Comprehensive Developer Toolkit:
                    </span>{" "}
                    Equip your developers with the full suite of tools needed
                    for their tasks, enhancing their efficiency from day one.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="flex gap-[3rem] mb-[1rem]">
                  <h1 className="font-[700] text-[4.5rem] text-[#7972BD] opacity-[.3]">
                    4
                  </h1>
                  <p className="w-[50rem]">
                    <span className="font-[500]">
                      Integrated with Enterprise Systems:
                    </span>{" "}
                    Seamlessly connect with your other enterprise systems,
                    creating a cohesive development environment.
                  </p>
                </div>
                <div className="flex gap-[3rem] mb-[1rem]">
                  <h1 className="font-[700] text-[4.5rem] text-[#7972BD] opacity-[.3]">
                    5
                  </h1>
                  <p className="w-[50rem]">
                    <span className="font-[500]">
                      Fully Managed and Running on Your Infrastructure:
                    </span>{" "}
                    Enjoy the advantages of a fully managed service while
                    running on your infrastructure, providing flexibility and
                    control
                  </p>
                </div>
              </div>
            </div>
            <button className="btn border block mx-auto mt-[3rem]">
               Propel Your Developers to Productivity with OBaaS
            </button>
          </div>
        </div>
      </div>
    </MaxContainer>
    <div className="sm:h-[115rem] sm:mt-[8rem]">
      <div className="sm:bg-white sm:pt-[5rem] sm:h-[85rem]">
        <MaxContainer>
          <Banner
            header={
              <h3 className="sub-header text-center sm:opacity-[.8] sm:mx-auto sm:w-[60%]">
                <span className="text-[#FF88C3]">Accelerate onboarding,</span>
                <span className="font-[400]"> reduce</span> idle time, and{" "}
                <span className="font-[400]"> witness immediate</span>{" "}
                productivity gains. <span className="font-[400]]"> Choose</span>{" "}
                <span className="text-[#FF88C3]"> OBaaS</span> for a customized,
                fully managed, <span className="font-[400]"> and</span> swift
                onboarding experience.
              </h3>
            }
            text={
              "Choose Ace8's OBaaS for swift, customized onboarding that delivers immediate impact. Accelerate your developers' journey to meaningful work, eliminate idle time, and enjoy the benefits of a fully managed service running on your infrastructure. Don't let delayed onboarding hinder your productivity and cost your business millions. Contact us today to explore how \"Dev Containers\" can fast-track your onboarding process and maximize your ROI."
            }
            btn={"Transform Developer Onboarding with OBaaS"}
            backgroundColor={"bg-black"}
            containerStyles={"sm:px-[10rem]"}
          />
          <div className="mb-[8rem]">
            <Form route={"OBAAS"} />
          </div>
        </MaxContainer>
      </div>
    </div>
  </section>
);

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
