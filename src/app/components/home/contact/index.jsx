"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formatPageName from "@/app/utili/formatPageName";

const Index = () => {
  return (
    <>
      <ContactDesktop />
      <ContactMobile />
    </>
  );
};

export default Index;

const ContactDesktop = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(formatPageName(pathname));
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot.trim() !== "") {
      console.log("Bot detected - honeypot field filled.");
      return;
    }
    setLoading(true);
    try {
      const json = await fetch("https://formspree.io/f/mwpvdabg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "This is a ContactUS email from ACE8",
          "Full Name": `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Description: formData.description,
          Page: formatPageName(pathname),
        }),
      });
      const response = await json.json();
      if (response) {
        setLoading(false);
        router.push(`/thank-you?source=contact-us`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };

  return (
    <section className="pr-[10rem sm:block hidden">
      <ToastContainer />
      <div className="flex justify-between">
        <div className="">
          <div className="flex gap-[4rem]">
            <div className="pl-[10rem] flex justify-center flex-col">
              <Image
                src="/contact.png"
                width={35}
                className="w-[4rem]  mb-[2rem]"
                height={36}
              />
              <Image
                src="/padlock.png"
                width={35}
                className="w-[3rem]"
                height={36}
              />
            </div>
            <h4 className="text-[3rem] font-[700]">Contact Us</h4>
          </div>
          <Image
            src="/face_blank.png"
            className="mask w-[70rem] bg-blend-screen mix-blend-light h-[70rem]"
            width={815}
            height={815}
          />
        </div>

        <div className="flex flex-col">
          <Image
            src="/_addy.png"
            className="w-[50rem] mb-[3rem]"
            width={762}
            height={123}
          />
          <div className="sm:w-[70rem]">
            <h4 className="text-[3rem] font-[700] mb-[3rem]">
              Send <span className="text-accent-100">Us</span> Message
            </h4>
            <p className="text-[1.5rem] mb-[3rem]">
              Have any questions regarding our services? Send us your message.
            </p>
            <form action="" className="w-[85%]">
              {/* Honeypot field - hidden from real users */}
              <div style={{ position: "absolute", left: "-9999px" }}>
                <label htmlFor="honeypotDesktop">Leave this field empty</label>
                <input
                  type="text"
                  id="honeypotDesktop"
                  tabIndex="-1"
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              <div className="flex gap-x-[1rem]">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor=""
                    className="font-[600] text-[1.5rem] mb-[1rem]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={handleInputChange}
                    placeholder="Enter Your First Name ..."
                    className="h-[3.5rem] text-black text-[1.4rem] focus:outline-none font-[500] py-[1.5rem] pl-[1rem] rounded-[.5rem]"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor=""
                    className="font-[600] text-[1.5rem] mb-[1rem]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={handleInputChange}
                    placeholder="Enter Your Last Name ..."
                    className="h-[3.5rem] text-[1.4rem] focus:outline-none font-[500] py-[1.5rem] pl-[1rem] text-black rounded-[.5rem]"
                  />
                </div>
              </div>
              <div className="flex gap-x-[1rem] my-[2rem]">
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor=""
                    className="font-[600] text-[1.5rem] mb-[1rem]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={handleInputChange}
                    placeholder="Enter Your Email Address ..."
                    className="h-[3.5rem] text-[1.4rem] focus:outline-none font-[500] py-[1.5rem] pl-[1rem] text-black rounded-[.5rem]"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    htmlFor=""
                    className="font-[600] text-[1.5rem] mb-[1rem]"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    onChange={handleInputChange}
                    placeholder="Enter Your Contact Number ..."
                    className="h-[3.5rem] text-[1.4rem] focus:outline-none font-[500] py-[1.5rem] pl-[1rem] text-black rounded-[.5rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-[600] text-[1.5rem] mb-[1rem]"
                >
                  What can we help you with?
                </label>
                <textarea
                  name=""
                  className="h-[17rem] text-black text-[1.4rem] focus:outline-none font-[500] pl-[1.5rem] pt-[1rem] resize-none"
                  onChange={handleInputChange}
                  id="description"
                  placeholder="Describe your problem in at least 250 characters..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="py-[1rem] px-[2.5rem] rounded-[.7rem] text-[1rem] font-[700] border-accent-200 border-[2px] mt-[3rem]"
              >
                {loading ? "loading" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactMobile = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot.trim() !== "") {
      console.log("Bot detected - honeypot field filled.");
      return;
    }
    setLoading(true);
    try {
      const json = await fetch("https://formspree.io/f/mwpvdabg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "This is a ContactUS email from ACE8",
          "Full Name": `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Description: formData.description,
          Page: pathName,
        }),
      });
      const response = await json.json();
      if (response) {
        setLoading(false);
        router.push(`/thank-you?source=contact-us`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };
  return (
    <section className="px-[3rem] sm:hidden pb-[5rem]">
      <h3 className="text-[2.5rem] font-[700] text-center">
        Contact <span className="text-accent-100">Us</span>
      </h3>
      <p className="text-center font-1.2rem mb-[2rem]">
        Contact Us To Speak With One of Our Experts
      </p>
      <form action="" className="w-[100%]">
        {/* Honeypot field - hidden from real users */}
        <div style={{ position: "absolute", left: "-9999px" }}>
          <label htmlFor="honeypotMobile">Leave this field empty</label>
          <input
            type="text"
            id="honeypotMobile"
            tabIndex="-1"
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[1.2rem] gap-x-[1rem]">
          <div className="flex flex-1 flex-col">
            <label htmlFor="" className="font-[600] text-[1.5rem] mb-[1rem]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={handleInputChange}
              placeholder="Enter Your First Name ..."
              className="h-[3.5rem] text-[#000000] pl-[1.2rem] text-[1.3rem] rounded-[.5rem]"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label htmlFor="" className="font-[600] text-[1.5rem] mb-[1rem]">
              Last Name
            </label>
            <input
              id="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter Your Last Name ..."
              className="h-[3.5rem] text-[#000000] pl-[1.2rem] text-[1.3rem] rounded-[.5rem]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[1.2rem] gap-x-[1rem] my-[2rem]">
          <div className="flex flex-1 flex-col">
            <label htmlFor="" className="font-[600] text-[1.5rem] mb-[1rem]">
              Email
            </label>
            <input
              type="text"
              id="email"
              onChange={handleInputChange}
              placeholder="Enter Your Email Address ..."
              className="h-[3.5rem] text-[#000000] pl-[1.2rem] text-[1.3rem] rounded-[.5rem]"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label htmlFor="" className="font-[600] text-[1.5rem] mb-[1rem]">
              Contact Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              onChange={handleInputChange}
              placeholder="Enter Your Contact Number ..."
              className="h-[3.5rem] text-[#000000] pl-[1.2rem] text-[1.3rem] rounded-[.5rem]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="font-[600] text-[1.5rem] mb-[1rem]">
            What can we help you with?
          </label>
          <textarea
            name=""
            className="h-[17rem] pl-[1rem] pt-[.7rem] rounded-[.4rem] text-[1.3rem] text-[#000000] resize-none"
            placeholder="Describe your problem in at least 250 characters..."
            onChange={handleInputChange}
            id="description"
          ></textarea>
        </div>
        {/* <div className="flex mt-[1rem]">
                    <input type="checkbox" className="mr-[.5rem]" />
                    <p className="text-[1.2rem]">By ticking this box, I am consenting to be sent monthly articles and promotions through WaveNet newsletter.</p>
                </div> */}
        <button
          onClick={handleSubmit}
          className="py-[.8rem] px-[2rem] rounded-[.4rem] text-[1rem] font-[700] bg-[#5747A5] mt-[3rem]"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
