export const Button = ({
  bg = "#1E1E1E0F",
  text = "No text",
  textColor = "#1E1E1E",
}) => {
  const styleBg = {
    backgroundColor: bg,
    cursor: "pointer",
    color: textColor,
  };
  return (
    <div
      className={`px-[15px] py-[8px] rounded-lg hover:opacity-85`}
      style={styleBg}
    >
      <h1>{text}</h1>
    </div>
  );
};

export const SwiperCard = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
      <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
      <div className="text-white">
        <h1 className="text-2xl">Susan Cain</h1>
        <p>New York Times bestselling author, traveler</p>
      </div>
    </div>
  );
};

import { FaCheck, FaQuoteLeft } from "react-icons/fa";
export const UserView = ({
  heading = "Lauren used social media and Kit to grow her email list from 500 to 25000",
  description = ` Lauren turned her large social following into a sustainable
              business by offering high-quality, free content and turning casual
              followers into loyal fans.`,
  name = "Your name",
  work = ""
}) => {
  return (
    <div className="py-10">
      <div className="w-[1300px] mx-auto ">
        <span className="uppercase p-2 bg-gray-300  font-bold rounded-sm">
          GROW WITH MAILTUNNEL
        </span>
        <div className="grid grid-cols-7 gap-10 mt-5">
          <div className="col-span-3">
            <h1 className="text-[3rem] font-bold leading-14">{heading}</h1>
          </div>
          <div></div>
          <div className="col-span-3">
            <p className="mb-3">{description}</p>

            <div className="flex gap-5 items-center mt-5 mb-3">
              <Button bg="#44b1ff" text={"Start free trial"} opacity={"0.2"} />
            </div>
            <small className="text-[#1e1e1e90] ">No credit card required</small>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-10 my-20">
          <div className="flex flex-col justify-between col-span-3">
            <div>
              <div className="w-[220px] h-[220px] bg-red-400 rounded-md mb-5"></div>
              <h3 className="font-bold">{name}</h3>
              <p>{work}</p>
            </div>
            <p>
              “I'm constantly telling people about Kit. Even if it's a small
              list. You can have an entire business with 100 email subscribers
              if they're the right ones.”
            </p>
          </div>
          <div></div>
          <div className="bg-gray-400 rounded-lg h-[610px] col-span-3"></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[500px] mt-10 ">
          <div className="row-span-2  rounded-lg bg-white p-8">
            <h1 className="text-6xl font-bold">What's in MailTunnel?</h1>
            <ul className="mt-10">
              <li className="flex items-center gap-5 mb-8">
                <span className="size-8 flex justify-center items-center bg-orange-400 rounded-full">
                  <FaCheck color="white" />
                </span>
                Creator Profile
              </li>
              <li className="flex items-center gap-5 mb-8">
                <span className="size-8 flex justify-center items-center bg-orange-400 rounded-full">
                  <FaCheck color="white" />
                </span>
                Forms
              </li>
              <li className="flex items-center gap-5 mb-8">
                <span className="size-8 flex justify-center items-center bg-orange-400 rounded-full">
                  <FaCheck color="white" />
                </span>
                Automation
              </li>
              <li className="flex items-center gap-5">
                <span className="size-8 flex justify-center items-center bg-orange-400 rounded-full">
                  <FaCheck color="white" />
                </span>
                Newsletters{" "}
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-14 text-center">
            <h1 className="text-6xl font-bold mb-5">25,000+</h1>
            <p>subscribers learning about becoming published authors</p>
          </div>
          <div className="row-span-2  rounded-lg bg-white p-8">
            <h1 className="text-6xl font-bold">Revenue breakdown</h1>
            <ul className="mt-10">
              <li className="flex items-center gap-2 mb-3">
                <div className="size-5 rounded-full bg-orange-400"></div>
                <div>
                  <span className="font-bold">75%</span>{" "}
                  <span>Editing agency</span>
                </div>
              </li>
              <li className="flex items-center gap-2 mb-5">
                <div className="size-5 rounded-full bg-blue-400"></div>
                <div>
                  <span className="font-bold">25%</span>{" "}
                  <span>Online Course</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg  bg-white text-center p-14">
            <h1 className="text-6xl font-bold mb-5">7 years</h1>
            <p>sharing insider secrets of the book industry</p>
          </div>
        </div>
        <div className="mt-20 h-auto rounded-2xl bg-blue-300 p-4 py-20 shadow-lg  flex flex-col justify-center items-center gap-5">
          <FaQuoteLeft size={35} color="brown" />
          <h1 className="text-5xl font-bold  text-center text-black">
            I wouldn't have a business without Kit.
          </h1>
          <div className="flex items-center gap-5 mt-5 ">
            <div className="image mb-5 size-20  bg-gray-300 rounded-md"></div>
            <div>
              <h3>Lauren Kay</h3>
              <p>Author & writing guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
