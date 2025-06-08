import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { AppCard, Button, PriceCard, SwiperCard, UserView } from "./UseCom";
import { LiaAccessibleIcon } from "react-icons/lia";
import { FaAccusoft, FaChartArea, FaDashcube } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

export const Hero = () => {
  ScrollReveal().reveal(".home", {
    distance: "150%",
    origin: "left",
    delay: 5,
    opacity: 1,
  });
  ScrollReveal().reveal(".sec", {
    distance: "150%",
    origin: "right",
    delay: 5,
    opacity: 1,
  });
  return (
    <div>
      {/* Benner section */}
      <section className="home bg-gray-50">
        <div className="w-[1300px] mx-auto  h-auto py-20 gap-10 lg:py-20 lg:h-auto flex-col lg:flex-row flex items-start relative">
          <div className="w-full lg:w-5/12">
            <h1 className="lg:text-[4rem] text-5xl font-sans  text-[#1E1E1E] font-bold leading-16 mb-5">
              For creators who mean business
            </h1>
            <p className="w-10/12 text-[1.5rem]">
              MailTunnel (formerly ConvertKit) is the email-first operating
              system for creators building a valuable business
            </p>

            <div className="flex gap-5 items-center mt-10 mb-3">
              <Button bg="#44b1ff" text={"Start free trial"} opacity={"0.2"} />
            </div>
            <small className="text-[#1e1e1e90] ">No credit card required</small>
          </div>
          <div className="grid grid-cols-2 grid-row-2 items-end gap-10 lg:w-7/12  relative">
            <div className="h-[300px] items-end  bg-blue-700 rounded-2xl"></div>
            <div className="h-[450px] bg-blue-400 rounded-2xl"></div>
            <div className=" col-span-2 w-[400px] justify-self-center h-[300px] bg-gray-300 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Other section */}
      <section className="sec py-30 bg-[#1e1e1e] h-auto">
        <div className="w-[1300px] mx-auto grid grid-rows-2 gap-5 pb-10">
          <h1 className="text-[8rem] text-white font-bold leading-28">
            Build a business <br />
            with <span className="text-[#44b1ff]">purpose</span>
            <span className="text-white">.</span>
          </h1>
          <div className="w-5/12 text-[20px] text-white justify-self-end">
            <p>
              You're in the business of so much more than just the money you
              make. You value your time, your freedom, your energy, the
              relationship with your audience, and the impact you have on their
              lives. We do too.
            </p>
            <p className="mt-5  ">
              Kit helps you foster deeper connections to build a business with
              purpose that's profitable and sustainable—a valuable business.
            </p>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1004: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 7,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="my-10  py-10 w-[1500px] mx-auto"
          >
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Market items */}
      <section className="py-10 bg-zinc-100">
        <UserView
          bg="#b9a741"
          description="I love it here with Mailtunnel, and how it work out with Mails and organize them"
        />
        <UserView bg="#737bd2" />
        <UserView bg="#641967" />
      </section>

      <section className="py-20 bg-zinc-100">
        <div className="w-[1300px] mx-auto  text-[#1e1e1e]">
          <div className="flex items-center gap-15">
            <div>
              <FaAccusoft size={150} />
            </div>
            <div>
              <h1 className="text-6xl font-bold  text-left">
                Kit is the email-first operating system for creators who mean
                business
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20">
            <PriceCard icon={<FaChartArea size={80} />} />
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
          <div className=" mt-20">
            <div className="flex justify-between items-center ">
              <h1 className="font-semibold text-2xl">
                Personalize your operating system to match your needs with smart
                apps
              </h1>
              <a href="#" className="underline">
                Go to Mailtunnel App Store
              </a>
            </div>
            <div className="grid grid-cols-4 gap-10 mt-10">
              <AppCard />
              <AppCard />
              <AppCard />
              <AppCard />
              <AppCard />
              <AppCard />
              <AppCard />
              <AppCard />
            </div>
            <div className="flex flex-col items-center text-center mt-30">
              <h1 className="font-bold text-4xl">Try it free for 14 days</h1>
              <div className="w-[max-content] mt-8 mb-3">
                <Button
                  bg="#44b1ff"
                  text={"Start free trial"}
                  opacity={"0.2"}
                />
              </div>
              <small className="text-[#1e1e1e90] ">
                i4-days free trial. No credit card required. Cancel anytime
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-zinc-100">
        <div className="container mx-auto grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className=" col-span-2 mt-20 h-auto rounded-2xl p-4 py-20 shadow-lg  flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-bold  text-center text-black"></h1>
            <div className="flex items-center gap-5 mt-5 ">
              <div className="image mb-5 size-20  bg-gray-300 rounded-md"></div>
              <div>
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="w-[1300px] mx-auto grid  grid-cols-2 mt-20 h-auto rounded-2xl item-center  bg-blue-400 text-black p-16  shadow-lg gap-5">
          <div>
            <h1 className="text-6xl font-bold  text-left">Ready. Set. Send.</h1>
            <p>
              Kit flexes with you as you grow. Manage up to 10,000 subscribers
              for free, or upgrade to grow an unlimited list and access all
              functionality.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button bg="#44b1ff" text={"See all plans"} />
            </div>
          </div>
          <div className="justify-self-end opacity-55">
            <FaDashcube size={250} />
          </div>
        </div>
      </section>
      <section className="py-30 h-auto">
        <div className="w-[1300px] mx-auto grid  gap-5">
          <h1 className="text-[7rem] text-[#1e1e1e] font-bold leading-32">
            <LiaAccessibleIcon size={200} />
            Moving to Mail <br />
            Tunnel couldn't <br />
            be <span className="text-[#44b1ff]">easier</span>
          </h1>
          <div className="w-5/12 text-[20px] text-[#1e1e1e] justify-self-end">
            <p>
              Moving to a new email marketing platform can be daunting. That's
              why Mail Tunnel offers a free migration service for creators with
              over 5,000 subscribers on our paid plans. Our team handles
              everything from subscriber lists to automation, so you have a
              stress-free move.
            </p>
            <div className="flex gap-5 items-center mt-5">
              <Button
                bg="#1e1e1e"
                textColor="#ffffff"
                text={"Request migration"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-40">
        <div className="w-[1300px] mx-auto mt-20 h-auto rounded-2xl bg-[#1e1e1e] text-white p-16  shadow-lg  flex flex-col justify-center items-center gap-5">
          <h1 className="text-6xl font-bold  text-center">
            Every email is impactful
          </h1>
          <p>Creators who mean business are powerful Mail Tunnel</p>
          <div className="flex gap-5 items-center mt-5">
            <Button bg="#44b1ff" text={"Start free trial"} />
          </div>
          <small>No credit card required</small>
        </div>
      </section>
    </div>
  );
};
