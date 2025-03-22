"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MaxContainer from "../maxContainer/index";
import { usePathname } from "next/navigation";
import Service from "../../service/serviceNav";

const Index = () => {
  const pathName = usePathname();
  const IsMessageBroker = pathName == "/services/message-broker";
  const IsMicroService = pathName == "/services/micro-service";
  const [open, setOpen] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (open || openService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, openService]);

  useEffect(() => {
    setOpen(false);
    setOpenService(false);
  }, [pathName]);

  // Scroll effect to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // You can adjust the scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about" },
    { label: "Services", link: "/service" },
    { label: "Blog", link: "/blogs" },
    { label: "Customer Stories", link: "/stories" },
  ];

<<<<<<< HEAD
    // Scroll effect to change background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {  // You can adjust the scroll threshold
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'Home', link: '/' },
        { label: 'About us', link: '/about' },
        { label: 'Services', link: '/service' },
        { label: 'Blog', link: '#' },
        { label: 'Customer Stories', link: '/stories' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled || IsMessageBroker || IsMicroService ? 'bg-black' : 'bg-transparent'}`}> {/* Dynamic class */}
            <MaxContainer>
                <div className="flex items-center px-[3rem] sm:px-[4rem] py-[1.5rem] sm:py-[2.5rem] justify-between">
                    <div className="sm:flex sm:items-center">
                        <Link href='/'>
                            <img src="/ace_logo.png" className="w-[7.6rem] relative z-50 sm:w-[10rem] sm:mr-[10rem]" alt="logo" />
                        </Link>
                        <div className={`fixed sm:static z-20 w-[100vw] sm:w-auto h-[100vh] sm:h-auto  sm:bg-transparent bg-black inset-0 sm:inset-auto px-[2rem] sm:px-0 transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${open ? 'translate-x-0' : 'translate-x-[100%] sm:translate-x-0'}`}>
                            <ul className="mt-[7rem] sm:mt-0 sm:flex">
                                {navItems.map((item, i) => (
                                    <NavItem
                                        item={item}
                                        setOpen={setOpen}
                                        openService={openService}
                                        setOpenService={setOpenService}
                                        id={i}
                                        key={i}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {openService && <Service setOpenService={setOpenService} />}
                    <div className="flex items-center gap-x-[3rem]">
                        <Link href='/contact-us'>
                            <button className="font-bold rounded-[.5rem] text-[1rem] sm:text-[1.3rem] sm:border text-text-100 sm:text-white bg-white sm:bg-transparent px-[1.2rem] sm:px-[2.3rem] py-[.7rem]">
                                Contact us
                            </button>
                        </Link>
                        <div className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 sm:hidden ${open ? 'w-[3rem]' : 'w-[2.5rem]'}`} onClick={toggleNav}>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? '-rotate-45 w-[2.7rem]' : ''}`}></div>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? 'translate-x-[8rem] translate-y-[8rem]' : ''}`}></div>
                            <div className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? 'rotate-45 w-[2.7rem]' : ''}`}></div>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </nav>
    );
=======
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || IsMessageBroker || IsMicroService
          ? "bg-black"
          : "bg-transparent"
      }`}
    >
      {" "}
      {/* Dynamic class */}
      <MaxContainer>
        <div className="flex items-center px-[3rem] sm:px-[4rem] py-[1.5rem] sm:py-[2.5rem] justify-between">
          <div className="sm:flex sm:items-center">
            <Link href="/">
              <img
                src="/ace_logo.png"
                className="w-[7.6rem] relative z-50 sm:w-[10rem] sm:mr-[10rem]"
                alt="logo"
              />
            </Link>
            <div
              className={`fixed sm:static z-20 w-[100vw] sm:w-auto h-[100vh] sm:h-auto  sm:bg-transparent bg-black inset-0 sm:inset-auto px-[2rem] sm:px-0 transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${
                open ? "translate-x-0" : "translate-x-[100%] sm:translate-x-0"
              }`}
            >
              <ul className="mt-[7rem] sm:mt-0 sm:flex">
                {navItems.map((item, i) => (
                  <NavItem
                    item={item}
                    setOpen={setOpen}
                    openService={openService}
                    setOpenService={setOpenService}
                    id={i}
                    key={i}
                  />
                ))}
              </ul>
            </div>
          </div>
          <Service setOpenService={setOpenService} openService={openService} />
          <div className="flex items-center gap-x-[3rem]">
            <Link href="/contact-us">
              <button className="font-bold rounded-[.5rem] text-[1rem] sm:text-[1.3rem] sm:border text-text-100 sm:text-white bg-white sm:bg-transparent px-[1.2rem] sm:px-[2.3rem] py-[.7rem]">
                Contact us
              </button>
            </Link>
            <div
              className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 sm:hidden ${
                open ? "w-[3rem]" : "w-[2.5rem]"
              }`}
              onClick={toggleNav}
            >
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                  open ? "-rotate-45 w-[2.7rem]" : ""
                }`}
              ></div>
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                  open ? "translate-x-[8rem] translate-y-[8rem]" : ""
                }`}
              ></div>
              <div
                className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${
                  open ? "rotate-45 w-[2.7rem]" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </nav>
  );
>>>>>>> 350b71609a302b709046faf04647d0fdaed98838
};

export default Index;

const NavItem = ({ item, id, setOpenService, setOpen, openService }) => {
  const pathName = usePathname();

  const toggleOpenService = () => {
    setOpenService((prevService) => !prevService);
  };

  return (
    <>
      {id == 2 ? (
        <button
          onClick={toggleOpenService}
          className="py-[1rem] sm:px-[1rem] sm:ml-[2rem] block"
        >
          <li
            className={`text-[1.5rem] w-fit capitalize ${
              pathName === `${item.link}/`
                ? "text-accent-100 border-b border-accent-100"
                : ""
            } sm:text-[1.3rem] sm:font-normal ${
              openService ? "text-accent-100" : ""
            } font-medium`}
          >
            {item.label}
          </li>
        </button>
      ) : (
        <Link
          href={item.link}
          className="py-[1rem] sm:px-[1rem] sm:ml-[2rem] block"
        >
          <li
            className={`text-[1.5rem] w-fit capitalize ${
              pathName === item.link
                ? "text-accent-100 border-b border-accent-100"
                : ""
            } sm:text-[1.3] sm:font-normal font-medium`}
          >
            {item.label}
          </li>
        </Link>
      )}
    </>
  );
};
