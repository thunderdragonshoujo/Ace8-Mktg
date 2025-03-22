"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const Index = ({ setOpenService, openService }) => {
  return (
    <div
      className={`${
        openService ? "sm:flex" : "hidden"
      } fixed top-[20rem] sm:top-[10rem] rounded-[.8rem] sm:rounded-[0] sm:px-[10rem] px-[3rem] sm:w-auto w-[32rem] sm:h-auto py-[2rem] sm:py-[5rem] bg-[#161b22] z-[33] gap-[3rem]`}
    >
      <button
        onClick={() => setOpenService(false)}
        className="ml-auto sm:mb-[2rem] block"
      >
        <img src="/close.png" className="sm:hidden" alt="close" />
      </button>
      <div className="pr-[3rem] sm:border-r">
        <p className="font-[700] sm:mb-[2rem] mb-[.2rem] text-accent-100">
          Featured Services
        </p>
        <div className="sm:flex gap-[3rem]">
          <ul className="sm:w-[30rem]">
            <li className="sm:mb-[2rem] mb-[.7rem]">
              <Link
                href="/services/devsecops"
                className="sm:text-[1.5rem] text-[#FF88C3] text-[1.4rem] font-[500] sm:font-[700] hover:text-accent-100 transition-all"
              >
                DevSecOps
              </Link>
              <p className="sm:text-[1.3rem] sm:leading-[1.7rem] hidden sm:block">
                Bridging the gap between Development, security and operations
              </p>
            </li>
            <li className="sm:mb-[2rem] mb-[.7rem]">
              <Link
                href="/services/message-broker"
                className="sm:text-[1.5rem] text-[#FF88C3] text-[1.4rem] font-[500] sm:font-[700] hover:text-accent-100 transition-all"
              >
                Message Brokers
              </Link>
              <p className="sm:text-[1.3rem] sm:leading-[1.7rem] hidden sm:block">
                AceMQ Your Trusted Messaging & Queuing Services Partner
              </p>
            </li>
          </ul>

          <ul className="sm:w-[30rem]">
            <li className="sm:mb-[2rem] mb-[.7rem]">
              <Link
                href="/services/incident-management"
                className="sm:text-[1.5rem] text-[#FF88C3] text-[1.4rem] font-[500] sm:font-[700] hover:text-accent-100 transition-all"
              >
                Incident Management
              </Link>
              <p className="sm:text-[1.3rem] sm:leading-[1.7rem] hidden sm:block">
                Comprehensive Incident Management for Reliable Operations
              </p>
            </li>
            <li className="sm:mb-[2rem] mb-[.7rem]">
              <Link
                href="/services/gemfire"
                className="sm:text-[1.5rem] text-[#FF88C3] text-[1.4rem] font-[500] sm:font-[700] hover:text-accent-100 transition-all"
              >
                Gemfire
              </Link>
              <p className="sm:text-[1.3rem] sm:leading-[1.7rem] hidden sm:block">
                End-to-End GemFire Solutions from the Original GemFire Team
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[2rem] sm:mt-[0]">
        <p className="font-[700] sm:mb-[2rem] mb-[.5rem] text-accent-100">
          Other Service
        </p>
        <ul className="sm:mb-[3rem] mb-[1.7rem]">
          <Link href="/services/AWS">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              AWS Services
            </li>
          </Link>
          <Link href="/services/open-source">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              OpenSource Support
            </li>
          </Link>
          <Link href="/services/micro-service">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              Microservices
            </li>
          </Link>
          <Link href="/services/OBAAS">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              Onboarding as a Service
            </li>
          </Link>
          <Link href="/services/data-integration">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              Data Analytics Integration
            </li>
          </Link>
          <Link href="/services/automated-testing">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              Automated Testing
            </li>
          </Link>
          <Link href="/services/tomcat">
            <li className="font-[500] text-[1.4rem] mb-[.5rem] hover:text-accent-100 text-[#FF88C3] transition-all">
              Tomcat
            </li>
          </Link>
        </ul>

        <Link href="/services">
          <button className="border-none btn text-accent-100 bg-black">
            Other services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
