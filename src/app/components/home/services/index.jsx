"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import milestone, { fadeIn, slideIn } from "../../../Animations/common";
import BlockContent from "@sanity/block-content-to-react";

const Index = ({ data }) => {
  console.log("🚀 ~ Index ~ data:", data)
  useEffect(() => {
    milestone()
    slideIn()
    fadeIn()
  }, [])
  const services = [
    {
      image: '/__featured_services.svg',
      Name: 'Featured Services',
      active: true,
      default: true,
      defualtImage: 'featured.png',
      mobileImage: ''
    },
    {
      image: '/__devsecops.svg',
      Name: 'DevSecOps',
      active: false,
      role: 'Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.',
      mobileImage: '/devsec.svg',
      link: '/services/devsecops'
    },
    {
      image: '/__environment_as_a_service.svg',
      Name: 'Onboarding as a service',
      active: false,
      role: 'Accelerate software delivery with our streamlined CI/CD solution, including automated onboarding and customizable off-boarding for efficient development cycles. Spin up entire environments in hours not days.',
      mobileImage: '/environment_has_a_service.svg',
      link: '/services/OBAAS'
    },
    {
      image: '/__incident_management.svg',
      Name: 'Incident Management',
      active: false,
      role: 'Top-notch full-stack  incident management services that prioritize preparation, documentation, and proactive measures to minimize downtime and avoid loss of revenue.',
      mobileImage: '/incident_management_mobile.svg',
      link: '/services/incident-management'
    },
    {
      image: '/__message_broker.svg',
      Name: 'Message Brokers',
      active: false,
      role: 'Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.',
      mobileImage: '/message_broker_mobile.svg',
      link: '/services/message-broker'
    },
    {
      image: '/__microservices_design.svg',
      Name: 'Microservices Design',
      active: false,
      role: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.',
      mobileImage: '/microservice_design_mobile.svg',
      link: '/services/micro-service'
    },
    {
      image: '/__data_analytics_integration.svg',
      Name: 'Data Analytics Integration',
      active: false,
      role: 'Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.',
      mobileImage: '/data_analytics_integration_mobile.svg',
      link: '/services/data-integration'
    },
    {
      image: '/__automated_testing.svg',
      Name: 'Automated Testing',
      active: false,
      role: 'your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. ',
      mobileImage: '/automated_testing_mobile.svg',
      link: '/services/automated-testing'
    },
  ]

  const services_mobile = [...services];

  const features = [
    {
      image: '/broker.svg',
      Name: 'Message Brokers ',
      active: false,
      role: 'Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.',
      link: '/services/message-broker'
    },
    {
      image: '/data__analytic_inte.svg',
      Name: 'Data Analytics Integration ',
      active: false,
      role: 'Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.',
      link: '/services/data-integration'
    },
    {
      image: '/automated_testing.svg',
      Name: 'Automated Testing ',
      active: false,
      role: 'your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. ',
      link: '/services/automated-testing'
    },
    {
      image: '/onboarding_service.svg',
      Name: 'Onboarding as a Service',
      active: false,
      role: 'The text will be: Capitalize on GemFire’s unique features with services including configuration audits, architectural reviews, best practices guidance, and load testing tailored to your specific requirements.',
      link: '/services/OBAAS'
    },
    {
      image: '/incident_management.svg',
      Name: 'GemFire',
      active: false,
      role: 'Accelerate software delivery with our streamlined  CI/CD solution, including automated onboarding and customizable off-boarding for efficient development cycles. Spin up entire environments in hours not days.',
      link: '/services/incident-management'
    },
    {
      image: '/refactoring.svg',
      Name: 'Microservices Design, Development & Refactoring',
      active: false,
      role: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.',
      link: '/services/micro-service'
    },
  ]

  return (
    <section>
      <ServiceMobile services={data} />
      <ServiceDesktop services={data} />
      <div className=" px-[3rem] sm:px-[10rem] mt-[6rem]">
        <div className="responsive-grid flex flex-col-reverse">
          {data?.fs_list?.slice(0, 6)?.map((service, index) => <Card service={service} key={index} />)}
        </div>
        <div className="pl-[8rem] pr-[4rem] sm:items-center sm:pl-[4rem] py-[7rem] sm:py-[3rem] hidden bg-black sm:flex justify-between w-[100%] mt-[4rem]">
          <Link href='/services/devsecops' data-animation-id="slideIn" className="block w-[450px]">
            <div className="w-[450px]">
              <img src="/_devsecops.svg" className="w-[6rem]" alt="icon" />
              <h3 className="font-[600] mb-1 text-[2rem] sm:mb-[1rem] sm:mt-[3rem] sm:text-[2.5rem] text-center sm:text-start">DevSecOps</h3>
              <p className="text-[1.2rem] sm:text-[1.7rem] text-center sm:text-start">Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.</p>
              <img src="/Arrow.svg" alt="" className="w-[3rem] ml-auto mt-[2rem]" />
            </div>
          </Link>
          <Image width={657} height={361} className="w-[55rem] h-[33rem]" src="/_infinity.png" alt="" />
        </div>
      </div>

    </section>
  );
}

export default Index;

const ServiceMobile = ({ services }) => {
  const [_services, setServices] = useState(services?.fs_list);

  const toggleModal = (id) => {
    setServices((prevServices) =>
      prevServices.map((item, i) =>
        id == i ? { ...item, active: !item.active } : { ...item, active: false }
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-[5rem] px-[3rem] sm:px-[10rem] sm:hidden">
      <div className="border border-accent-300 px-[2.4rem] rounded-[2rem] py-[.8rem]">
        <p className="text-[1rem]">Services We Provide</p>
      </div>

      <h2 className="text-[2.5rem] font-[700] w-[220px] text-center mt-[1rem]">
        What We Can <span className="text-accent-300">Do</span>{" "}
        <span className="font-[500]">For You:</span>
      </h2>
      <p className="text-center text-[1.3rem] mb-[2rem]">
        Ace8 offers a suite of cutting-edge services, from Message Brokersto
        DevSecOps, empowering enterprises with services to thrive in today's
        digital economy. With streamlined data flow and robust development
        practices, Ace8 ensures unparalleled efficiency and resilience, driving
        extreme value for modern businesses.
      </p>
      <div className="bg-[#161B22] rounded-[.8rem] w-[100%] px-[1.8rem] py-[1rem]">
        <div className="bg-[#11161E] py-[2.5rem]">
          <div className="flex px-[2.8rem] gap-[1rem] items-center font-[600] text-[2rem]">
            <Image src="/settings.svg" width={17} className="w-[2rem] h-[2rem]" height={17} alt="settings icon" />
            <h4>Our Services</h4>
          </div>
          <ul className="mt-[3rem] flex flex-col gap-[1.5rem]">
            {_services.map((service, index) => {
              return (
                <React.Fragment key={index}>
                  {!service.default && (
                    <li
                      onClick={() => toggleModal(index)}
                      className={`flex px-[2.8rem] py-[.8rem] justify-between w-[100%] items-center`}
                    >
                      <div className="flex gap-[1rem]">
                        <Image src={service.icon?.asset?.url} className="hidden sm:block" width={17} height={17} />
                        <Image src={service.icon?.asset?.url} className="sm:hidden w-[2.5rem] h-[2.5rem]" width={17} height={17} />
                        <p className="text-[1.3rem]">{service.title}</p>
                      </div>
                      <img
                        src="/angle-right.svg"
                        className="w-[2.5rem]"
                        alt="right angle"
                      />
                    </li>
                  )}
                  <AnimatePresence>
                    {service.active && !service.default && (
                      <Modal
                        service={service}
                        toggleModal={toggleModal}
                        id={index}
                      />
                    )}
                  </AnimatePresence>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServiceDesktop = ({ services }) => {
  const [_services, setServices] = useState(services?.fs_list);
  const [active, setActive] = useState(0)

  const toggleActive = (id) => {
    setActive(id+1);
    setServices(prevServices => prevServices.map((item, i) => id == i ? { ...item, active: true } : { ...item, active: false }))

  }

  const serializers = {
    marks: {
      strong: ({ children }) => (
        <strong className="font-extrabold">
          {React.Children.map(children, (child) =>
            typeof child === 'string' ? (
              child
            ) : (
              <strong className="sm:hero_gradient_text text-[#EA9EFF]">{child}</strong>
            )
          )}
        </strong>
      ),
    },
  };

  return (
    <div className="px-[3rem] sm:px-[10rem] relative sm:flex gap-x-[4rem] hidden">
      {/* <div className="overflow-hidden sm:w-[4.555rem] z-[-1]  absolute sm:block">
                <img src="/mile_5.png" className="w-[100%]" alt="icon" />
            </div> */}
      <div className="h-[0] overflow-hidden absolute mt-[1rem] z-[-1] hidden sm:block" data-animation-id='milestone'>
        <img src="/mile_5.png" className="sm:w-[4.555rem]" alt="icon" />
      </div>
      <div className="flex justify-between sm:ml-[7rem] w-[100%]" data-animation-id='slideIn'>
        <div className="flex flex-col">
          <div className="border border-white px-[2.4rem] rounded-[2rem] mb-[2rem] py-[.8rem] self-start">
            <p className="text-[1.2rem]">{services?.fs_label}</p>
          </div>
          <div className="w-[40rem]">
            <div className=" text-[5rem] mb-[2rem]">
              <BlockContent
                blocks={services?.fs_title}
                projectId="ordduge7"
                dataset="production"
                serializers={serializers}
              />
            </div>
            <p className="">{services?.fs_short_info}</p>
          </div>
        </div>
        <div className="flex bg-[#161B22] p-[1.5rem] rounded-[1.5rem]  gap-x-[2rem]">
          <div className="bg-[#0D1117] rounded-[1rem] py-[2.5rem]">
            {/* <div className="flex px-[2.8rem] gap-[1rem] pt-[3rem] cursor-pointer" onClick={() => {setActive(0);toggleActive(-1)}}>
              <Image src="__featured_services.svg" className="w-[2.5rem] h-[2.5rem]" width={17} height={17} alt="" />
              <h4 className="font-[600] text-[1.5rem]">Featured Services</h4>
            </div> */}
            <ul className="mt-[1.5rem] flex flex-col justify-center gap-[1.5rem] sm:gap-[.5rem]">
              {_services.map((service, index) => <li onClick={() => toggleActive(index)} className={`flex px-[2.2rem] py-[.8rem] items-center hover:cursor-pointer hover:bg-purple_gradient rounded-[.5rem] gap-[1rem] ${service.active && index != 0 ? "bg_gradient font-[500]" : ''}`} key={index}><Image src={service.icon?.asset?.url} className={`${index == 0 ? 'w-[2.5rem] ml-[.5rem]' : 'w-[4rem] aspect-square'}`} alt="icon" width={17} height={17} /> <p className={`${index == 0 ? 'font-[600]' : ''}`}>{service.title}</p></li>)}
            </ul>
          </div>

          <div className="bg-[#0D1117] p-[1.5rem] rounded-[1rem]" >
            {
              active === 0 && <>
                <div className="mb-[3rem] pt-[3rem] max-w-[326px]">
                  <h2 className="font-[700] text-[2.5rem]  mt-2 md:w-[402px]">{`Featured Services`}</h2>
                  <Image src='/featured.png' alt="icon" className="w-[15rem] mt-6" width={396} height={367} />
                </div>
              </>
            }

            {_services.map((item, i) => item.active && (
              <div className="bg-[#161B22] pb-[1.5rem] px-[2rem] h-[100%] rounded-[.8rem]" key={item.Name}>
                {
                  item.default ? (
                    <div className="pt-[3rem]  w-[27rem] flex flex-col">
                      <h2 className="font-[700] text-[2.5rem]">{item.Name}</h2>
                      <img src={item.defualtImage} className="w-[20rem] self-center mt-[8rem]" alt="featured_icon" />
                    </div>
                  ) : (
                    <>
                      <div className="mb-[3rem] pt-[3rem]">
                        <Image src={item.icon?.asset?.url} alt="icon" className="w-[8rem]  h-[8rem]" width={84} height={84} />
                        <h2 className="font-[700] text-[2.5rem] mt-2 w-[20rem]">{item.title}</h2>
                      </div>
                      {/* <Image src='/automated-testing.png' alt="icon" className="w-[25rem] h-[20rem]" width={396} height={367} /> */}
                      <p className="w-[27rem]">{item.short_info}</p>
                    </>
                  )
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const Card = ({ service }) => (
  <Link href={`/sevices/${service.link}`} className="hover:scale-[1.07] transition-all" data-animation-id="fadeIn">
    <div className="bg-black py-[1.8rem] sm:py-[3rem] rounded-[1rem] px-[1.2rem] sm:px-[1.6rem] w-[100%] sm:w-[38rem] flex flex-col items-center sm:items-start">
      <img src={service.icon?.asset?.url} className="w-[6rem] h-[6rem]" alt="icon" />
      <h4 className="font-[600] mb-1 text-[2rem] sm:mb-[2rem] text-center sm:text-start">{service.title}</h4>
      <p className="text-[1.2rem] sm:text-[1.7rem] text-center sm:text-start">{service.short_info}</p>
      <img src="/Arrow.svg" alt="" className="w-[3rem] ml-auto mt-[2rem]" />
    </div>
  </Link>
)

const Modal = ({ service, toggleModal, id }) => {
  useEffect(() => {
    if (service.active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [service.active]);
  const useAnime = (variants) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
    };
  };
  const modal = {
    initial: {
      scale: 0.7,
      opacity: 0,
    },
    animate: {
      scale: 1,
      duration: 0.7,
      opacity: 1,
    },
    exit: {
      duration: 0.7,
      opacity: 0,
    },
  };
  const backdrop = {
    initial: {
      opacity: 0,
    },
    animate: {
      duration: 0.7,
      opacity: 1,
      transition: "ease-in",
    },
    exit: {
      duration: 0.7,
      opacity: 0,
    },
  };
  return (
    <motion.div
      {...useAnime(modal)}
      className="fixed w-[100vw] h-[100svh] inset-0 z-30"
    >
      <motion.div
        {...useAnime(backdrop)}
        className="bg-[#0009] w-[100vw] h-[100svh] fixed inset-0"
      ></motion.div>
      <div className="fixed flex flex-col z-40 top-1/2 left-1/2 rounded-[2rem] -translate-x-1/2 -translate-y-1/2 w-[30rem] bg-[#161B22] py-[3rem] px-[2rem]">
        <h2 className="text-[1.8rem] mb-[1rem] font-[700] text-[#66E8E3]">{`(${service.title})`}</h2>
        <p className="text-[1.2rem]">{service.role} <Link className="text-[#66E8E3]" href={`/services/${service?.link}`}>Read More...</Link></p>
        <button
          className="self-end text-[1.2rem] mt-[2rem] py-[.6rem] px-[1rem] text-black font-[500] bg-[#66E8E3] rounded-[.3rem]"
          onClick={() => toggleModal(id)}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};
