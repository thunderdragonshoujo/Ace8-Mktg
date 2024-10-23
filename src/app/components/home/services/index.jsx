"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import milestone, { fadeIn, slideIn } from "@/app/Animations/common";
const Index = () => {
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
            defualtImage: 'featured.png'
        },
        {
            image: '/__devsecops.svg',
            Name: 'DevSecOps',
            active: false,
            role: 'Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.'
        },
        {
            image: '/__environment_as_a_service.svg',
            Name: 'Onboarding as a service',
            active: false,
            role: 'Accelerate software delivery with our streamlined CI/CD solution, including automated onboarding and customizable off-boarding for efficient development cycles. Spin up entire environments in hours not days.'
        },
        {
            image: '/__incident_management.svg',
            Name: 'Incident Management',
            active: false,
            role: 'Top-notch full-stack  incident management services that prioritize preparation, documentation, and proactive measures to minimize downtime and avoid loss of revenue.'
        },
        {
            image: '/__message_broker.svg',
            Name: 'Message Brokers',
            active: false,
            role: 'Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.'
        },
        {
            image: '/__microservices_design.svg',
            Name: 'Microservices Design',
            active: false,
            role: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.'
        },
        {
            image: '/__data_analytics_integration.svg',
            Name: 'Data Analytics Integration',
            active: false,
            role: 'Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.'
        },
        {
            image: '/__automated_testing.svg',
            Name: 'Automated Testing',
            active: false,
            role: 'your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. '
        },
    ]

  const services_mobile = [...services];

    const features = [
        {
            image: '/broker.svg',
            Name: 'Message Brokers ',
            active: false,
            role: 'Your trusted partner for seamless integration of message brokers. With troubleshooting expertise, consulting and assessment services, and comprehensive support, we optimize performance and ensure smooth operations for your technology stack.',
            link: '/Service/message-broker'
        },
        {
            image: '/data__analytic_inte.svg',
            Name: 'Data Analytics Integration ',
            active: false,
            role: 'Differentiating through our unique integration approach. Seamlessly integrate e-commerce data with Databricks/Snowflake. Design consulting, cost optimization, and fault tolerance ensure efficient, uninterrupted access to critical data.',
            link: '/Service/data-integration'
        },
        {
            image: '/automated_testing.svg',
            Name: 'Automated Testing ',
            active: false,
            role: 'your e-commerce application. Our unique approach includes AI-enhanced test code, seamless  CI/CD integration, and crowd-sourced test case development to save time and resources. ',
            link: '/Service/automated-testing'
        },
        {
            image: '/onboarding_service.svg',
            Name: 'Onboarding as a Service',
            active: false,
            role: 'The text will be: Capitalize on GemFire’s unique features with services including configuration audits, architectural reviews, best practices guidance, and load testing tailored to your specific requirements.',
            link: '/Service/OBAAS'
        },
        {
            image: '/incident_management.svg',
            Name: 'GemFire',
            active: false,
            role: 'Accelerate software delivery with our streamlined  CI/CD solution, including automated onboarding and customizable off-boarding for efficient development cycles. Spin up entire environments in hours not days.',
            link: '/Service/incident-management'
        },
        {
            image: '/refactoring.svg',
            Name: 'Microservices Design, Development & Refactoring',
            active: false,
            role: 'AceMQ offers comprehensive microservices design, development, and refactoring services that strictly adhere to industry best practices, including loose coupling and the 12Factor approach.',
            link: '/Service/micro-service'
        },
    ]

    return (
        <section>
            <ServiceMobile services={services_mobile} />
            <ServiceDesktop services={services} />
            <div className=" px-[3rem] sm:px-[10rem] mt-[6rem]">
                <div className="responsive-grid flex flex-col-reverse">
                    {features.map((service, index) => <Card service={service} key={index} />)}
                </div>
                <div className="pl-[8rem] pr-[4rem] sm:items-center sm:pl-[4rem] py-[7rem] sm:py-[3rem] hidden bg-black sm:flex justify-between w-[100%] mt-[4rem]">
                    <div className="w-[450px]" data-animation-id="slideIn">
                        <img src="/_devsecops.svg" className="w-[6rem]" alt="icon" />
                        <h3 className="font-[600] mb-1 text-[2rem] sm:mb-[1rem] sm:mt-[3rem] sm:text-[2.5rem] text-center sm:text-start">DevSecOps</h3>
                        <p className="text-[1.2rem] sm:text-[1.7rem] text-center sm:text-start">Bridging the gap between development,  security, and operations. Achieve efficient and secure software delivery through collaboration, automation, and a security-first approach.</p>
                    </div>
                    <Image width={657} height={361} className="w-[55rem] h-[33rem]" src="/_infinity.png" alt="" />
                </div>
            </div>

        </section>
    );
}

export default Index;

const ServiceMobile = ({ services }) => {
  const [_services, setServices] = useState(services);

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
        {" "}
        Ace8 offers a suite of cutting-edge services, from Message Brokersto
        DevSecOps, empowering enterprises with services to thrive in today's
        digital economy. With streamlined data flow and robust development
        practices, Ace8 ensures unparalleled efficiency and resilience, driving
        extreme value for modern businesses.
      </p>
      <div className="bg-[#161B22] rounded-[.8rem] w-[100%] px-[1.8rem] py-[1rem]">
        <div className="bg-[#11161E] py-[2.5rem]">
          <div className="flex px-[2.8rem] gap-[1rem] font-[600] text-[2rem]">
            <Image src="/settings.svg" width={17} height={17} alt="" />
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
                      {" "}
                      <div className="flex gap-[1rem]">
                        <Image src={service.image} width={17} height={17} />{" "}
                        <p className="text-[1.3rem]">{service.Name}</p>
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
  const [_services, setServices] = useState(services);

    const toggleActive = (id) => {
        setServices(prevServices => prevServices.map((item, i) => id == i ? { ...item, active: true } : { ...item, active: false }))
    }
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
                        <p className="text-[1.2rem]">Featured Services</p>
                    </div>
                    <div className="w-[40rem]">
                        <h2 className="font-[700] text-[5rem] mb-[2rem]">What We Can Do <span className="font-[400]">For You:</span></h2>
                        <p className="">Ace8 offers a suite of cutting-edge services, from Message Brokersto DevSecOps, empowering enterprises with services to thrive in today's digital economy. With streamlined data flow and robust development practices, Ace8 ensures unparalleled efficiency and resilience, driving extreme value for modern businesses.</p>
                    </div>
                </div>
                <div className="flex bg-[#161B22] p-[1.5rem] rounded-[1.5rem]  gap-x-[2rem]">
                    <div className="bg-[#0D1117] rounded-[1rem] py-[2.5rem]">
                        {/* <div className="flex px-[2.8rem] gap-[1rem] pt-[3rem]">
                            <Image src="/settings.svg" className="w-[2.5rem] h-[2.5rem]" width={17} height={17} alt="" />
                            <h4 className="font-[600] text-[1.5rem]">Featured Services</h4>
                        </div> */}
                        <ul className="mt-[1.5rem] flex flex-col justify-center gap-[1.5rem] sm:gap-[.5rem]">
                            {_services.map((service, index) => <li onClick={() => toggleActive(index)} className={`flex px-[2.2rem] py-[.8rem] items-center hover:cursor-pointer hover:bg-purple_gradient rounded-[.5rem] gap-[1rem] ${service.active && index != 0 ? "bg_gradient font-[500]" : ''}`} key={index}><Image src={service.image} className={`${index == 0 ? 'w-[2.5rem] ml-[.5rem]' : 'w-[4rem] aspect-square'}`} alt="icon" width={17} height={17} /> <p className={`${index == 0 ? 'font-[600]' : ''}`}>{service.Name}</p></li>)}
                        </ul>
                    </div>
                    <div className="bg-[#0D1117] p-[1.5rem] rounded-[1rem]" >
                        {_services.map((item, i) => item.active && (
                            <div className="bg-[#161B22] pb-[1.5rem] px-[2rem] h-[100%] rounded-[.8rem]" key={item.Name}>
                                {
                                    item.default ? (
                                        <div className="pt-[3rem]  w-[27rem] flex flex-col">
                                            <h2 className="font-[700] text-[2.5rem]">{item.Name}</h2>
                                            <img src={item.defualtImage} className="w-[20rem] self-center mt-[8rem]" alt="featured_icon" />
                                        </div>
                                    ) : (
                                        <React.Fragment>
                                            <div className="mb-[3rem] pt-[3rem]">
                                                <Image src={item.image} alt="icon" className="w-[8rem]  h-[8rem]" width={84} height={84} />
                                                <h2 className="font-[700] text-[2.5rem] w-[20rem]">{item.Name}</h2>
                                            </div>
                                            {/* <Image src='/automated-testing.png' alt="icon" className="w-[25rem] h-[20rem]" width={396} height={367} /> */}
                                            <p className="w-[27rem]">{item.role}</p>
                                        </React.Fragment>
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
    <Link href={service.link} className="hover:scale-[1.07] transition-all" data-animation-id="fadeIn">
        <div className="bg-black py-[1.8rem] sm:py-[3rem] rounded-[1rem] px-[1.2rem] sm:px-[1.6rem] w-[100%] sm:w-[38rem] flex flex-col items-center sm:items-start">
            <img src={service.image} className="w-[4rem] h-[6rem]" alt="icon" />
            <h4 className="font-[600] mb-1 text-[2rem] sm:mb-[2rem] text-center sm:text-start">{service.Name}</h4>
            <p className="text-[1.2rem] sm:text-[1.7rem] text-center sm:text-start">{service.role}</p>
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
        <h2 className="text-[1.8rem] mb-[1rem] font-[700]">{service.Name}</h2>
        <p className="text-[1.2rem]">{service.role}</p>
        <button
          className="self-end text-[1.2rem] mt-[2rem] py-[.6rem] px-[1rem] bg-red-500 rounded-[.3rem]"
          onClick={() => toggleModal(id)}
        >
          close
        </button>
      </div>
    </motion.div>
  );
};
