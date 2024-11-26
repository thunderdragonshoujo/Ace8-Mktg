"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const Index = ({ route }) => {
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState("");
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const router = useRouter();

  useEffect(() => {
    setEmailError(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!emailError) {
      toast.error("Enter a valid Email Address");
      setLoading(false);
      return;
    }
    try {
      const json = await fetch(
        "https://76h86gyo24.execute-api.us-west-2.amazonaws.com/prod/contactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: "This is a ContactUS email from ACEMQ",
            message: { fullName: name, email, description: message },
            toaddress: "randall.mcclure@acemq.com",
            toaddress2: "info@acemq.com",
          }),
        }
      );

      const response = await json.json();
      if (response) {
        setLoading(false);
        router.push(`/thank-you?source=${route}`);
        setName("");
        setMessage("");
        setEmail("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <section
      className="sm:px-[10rem] sm:mt-[7rem] pb-[5rem] scroll-mt-[5rem]"
      id="contact"
    >
      <ToastContainer />
      <div data-animation-id='slideIn' className="pt-[2rem] px-[3rem] pb-[1rem] sm:mt-[12rem] sm:px-[7rem] sm:py-[4rem] sm:bg-black sm:flex sm:justify-between rounded-[3rem]">
        <div className="sm:flex-1 sm:relative sm:pt-[3rem]">
          <h4 className="text-center text-[3rem] sm:text-[4.5rem] sm:text-left  sm:text-white">
            Contact{" "}
            <span className="font-[700] text-[#9B86FE]">
              Us
            </span>
          </h4>
          <p className="text-center sm:text-left">
            Contact Us To Speak With One of Our Experts
          </p>
          <ul className="mt-[4rem] flex flex-col gap-y-[2rem]">
            <Link href="">
              <li className="flex gap-x-[2rem]">
                <img
                  src="/white_mail.svg"
                  className="w-[1.4rem]"
                  alt="mail"
                />{" "}
                <p className="w-[2px]">info@acemq.com</p>{" "}
              </li>
            </Link>

            <li className="flex gap-x-[2rem]">
              <img src="/white_tel.svg" className="w-[1.4rem]" alt="phone" />{" "}
              <p className="">+1 305-204-2607</p>
            </li>
            <li className="flex gap-x-[2rem]">
              <img
                src="/white_loc.svg"
                className="w-[1.4rem]"
                alt="location"
              />{" "}
              <p className="">66 W. Flagler St. 9th Floor Miami, FL 33130</p>
            </li>
          </ul>
        </div>
        <div className="sm:flex-[.8] sm:relative sm:top-[-10rem]">
          <div className="relative rounded-[1rem] p-[1px] bg-gradient-to-b from-[#FF88C3] to-[#9B86FE]">
            <form
              action=""
              className="bg-white px-[2.3rem] py-[1.5rem] sm:py-[4rem] flex flex-col rounded-[1rem] mt-[0] sm:mt-[0]"
            >
              <div className="sm:flex justify-between gap-[2rem]">
                <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                  <img src="/profile_purple.png" className="w-[1.5rem]" alt="name" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-black focus:outline-none text-[1.2rem]"
                    placeholder="Name"
                  />
                </div>
                <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                  <img src="/email.svg" className="w-[1.5rem]" alt="email" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-black focus:outline-none text-[1.2rem]"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="flex items-start  py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem]">
                <img
                  src="/_message.svg"
                  required
                  className="mt-[.4rem]"
                  alt="message"
                />
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-black focus:outline-none text-[1.2rem] h-[8rem] sm:h-[14rem] resize-none"
                  placeholder="Message"
                />
              </div>

              <button
                disabled={name == "" || email == "" || message == ""}
                className="text-white px-[2.5rem] py-[1rem] rounded-[.5rem] font-[600] text-[1.2rem] disabled:opacity-[.5] self-end"
                style={{ background: 'linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)' }}
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
