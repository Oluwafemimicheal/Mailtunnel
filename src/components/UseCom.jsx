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

import { FaCheck, FaIcons, FaQuoteLeft } from "react-icons/fa";
import { MdStackedBarChart } from "react-icons/md";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
export const UserView = ({
  heading = "Lauren used social media and Kit to grow her email list from 500 to 25000",
  description = ` Lauren turned her large social following into a sustainable
              business by offering high-quality, free content and turning casual
              followers into loyal fans.`,
  name = "Your name",
  work = "Am a developer",
  whatYouDo = "my work description",
  whatToSay = "I couldnt have done it without mailtunnel",
  bg = "#1065eb",
}) => {
  const bgStyle = {
    backgroundColor: bg,
  };
  return (
    <div className="py-10">
      <div className="w-[1300px] mx-auto ">
        <span className="uppercase p-2  font-bold rounded-sm" style={bgStyle}>
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
              <Button bg="#44b1ff" text={"Start free trial"} />
            </div>
            <small className="text-[#1e1e1e90] ">No credit card required</small>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-10 my-20">
          <div className="flex flex-col justify-between col-span-3">
            <div>
              <div
                className="w-[220px] h-[220px] rounded-md mb-5"
                style={bgStyle}
              ></div>
              <h3 className="font-bold">{name}</h3>
              <p>{work}</p>
            </div>
            <p>{whatYouDo}</p>
          </div>
          <div></div>
          <div
            className="rounded-lg h-[610px] col-span-3"
            style={bgStyle}
          ></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[500px] mt-10 ">
          <div className="row-span-2  rounded-lg bg-white p-8">
            <h1 className="text-6xl font-bold">What's in MailTunnel?</h1>
            <ul className="mt-10">
              <li className="flex items-center gap-5 mb-8">
                <span
                  className="size-8 flex justify-center items-center rounded-full"
                  style={bgStyle}
                >
                  <FaCheck color="white" />
                </span>
                Creator Profile
              </li>
              <li className="flex items-center gap-5 mb-8">
                <span
                  className="size-8 flex justify-center items-center rounded-full"
                  style={bgStyle}
                >
                  <FaCheck color="white" />
                </span>
                Forms
              </li>
              <li className="flex items-center gap-5 mb-8">
                <span
                  className="size-8 flex justify-center items-center rounded-full"
                  style={bgStyle}
                >
                  <FaCheck color="white" />
                </span>
                Automation
              </li>
              <li className="flex items-center gap-5">
                <span
                  className="size-8 flex justify-center items-center rounded-full"
                  style={bgStyle}
                >
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
          <div className="row-span-2  rounded-lg bg-white p-8 overflow-hidden">
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
            <div className="w-[150px] h-[150px]">
              <Doughnut
                data={{
                  datasets: [
                    {
                      label: "Count",
                      data: [25, 75],
                      backgroundColor: ["rgba(85, 92, 151, 0.8)", `${bg}`],
                      borderWidth: 5,
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="rounded-lg  bg-white text-center p-14">
            <h1 className="text-6xl font-bold mb-5">7 years</h1>
            <p>sharing insider secrets of the book industry</p>
          </div>
        </div>
        <div
          className="mt-20 h-auto rounded-2xl p-4 py-20 shadow-lg  flex flex-col justify-center items-center gap-5"
          style={bgStyle}
        >
          <FaQuoteLeft size={35} color="brown" />
          <h1 className="text-5xl font-bold  text-center text-black">
            {whatToSay}
          </h1>
          <div className="flex items-center gap-5 mt-5 ">
            <div className="image mb-5 size-20  bg-gray-300 rounded-md"></div>
            <div>
              <h3>{name}</h3>
              <p>{work}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PriceCard = ({
  heading = "Grow",
  description = "Reach your audience and turn subscribers into customers",
  list,
  icon,
}) => {
  return (
    <div className="p-5 rounded-sm bg-white shadow-sm">
      <div className="py-4 border-b-2 border-gray-500">
        {icon ? icon : <FaIcons size={80} />}

        <h1 className="font-bold  text-3xl mb-3">{heading}</h1>
        <p>{description}</p>
      </div>
      <ul className="mt-10">
        {!list === "" ? (
          <li className="flex justify-start items-center gap-5 mb-8">
            <FaCheck color="black" />
            <p>{list}</p>
          </li>
        ) : null}

        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="#a796e3" />
          <p>Unlimited opt-in forms</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>Landing page & form templates</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>Newsletter feed & website</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>Custom domain</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>List growth reporting</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>Creator Network</p>
        </li>
        <li className="flex justify-start items-center gap-5 mb-8">
          <FaCheck color="white" />
          <p>Recommendations</p>
        </li>
      </ul>
    </div>
  );
};

export const AppCard = () => {
  return (
    <div>
      <div>canva</div>
      <h1>Canva</h1>
      <p>
        Get access to your Canva library natively within the Kit media gallery
      </p>
      <a href="#" className="underline">
        See details
      </a>
    </div>
  );
};
