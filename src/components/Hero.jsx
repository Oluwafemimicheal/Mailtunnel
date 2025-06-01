import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "./UseCom";

export const Hero = () => {
  let Food = [];

  return (
    <div>
      {/* Benner section */}
      <section className="bg-gray-50">
        <div className="container mx-auto h-auto py-20 lg:py-20 lg:h-[1100px] flex-col lg:flex-row flex items-start relative">
          <div className="w-full lg:w-6/12">
            <h1 className="lg:text-7xl lg:w-12/12 font-sans  text-[#1E1E1E] font-bold leading-16 mb-5">
              For creators who mean business
            </h1>
            <p className="w-8/12 text-2xl">
              MailTunnel (formerly ConvertKit) is the email-first operating
              system for creators building a valuable business
            </p>

            <div className="flex gap-5 items-center mt-10 mb-3">
              <Button bg="#44b1ff" text={"Start free trial"} opacity={"0.2"} />
            </div>
            <small className="text-[#1e1e1e90] ">No credit card required</small>
          </div>
          <div className="hidden lg:w-6/12 lg:flex lg:flex-col justify-end relative">
            <div className="absolute top-20 right-25 w-[400px] h-[480px] bg-blue-400 rounded-2xl"></div>
            <div className="absolute top-100 -left-87 w-[450px] h-[350px] bg-blue-700 rounded-2xl"></div>
            <div className="absolute top-150 right-0 w-[500px] h-[350px] bg-gray-300 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Other section */}
      <section className="py-30 bg-[#1e1e1e] h-[1050px]">
        <div className="w-full container  mx-auto flex flex-col gap-5 lg:justify-start items-start relative">
          <h1 className="text-9xl text-white font-bold leading-28">
            Build a business <br />
            with <span className="text-[#44b1ff]">purpose</span>
            <span className="text-white">.</span>
          </h1>
          <div className="w-4/12 text-[20px] text-white absolute mt-60 right-0">
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
        <div className="w-full h-[300px] mt-80">
          <div className="">
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
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="my-10  py-10 h-[420px]"
            >
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col justify-center text-center gap-3 w-[200px]">
                  <div className="w-full h-[200px] bg-blue-400 rounded-md"></div>
                  <div>
                    <h1 className="text-2xl">Susan Cain</h1>
                    <p>New York Times bestselling author, traveler</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Market items */}
      <section className=" mx-auto py-10"></section>
      <section className="py-10 lg:py-20 lg:w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-5 "></div>
      </section>
      <section className="py-10">
        <div className="lg:w-[1200px] mx-auto h-auto rounded-2xl bg-amber-900 p-4 py-20 shadow-lg  flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl lg:text-4xl text-center text-white">
            Are You Ready to Reduce Market Walaha and Stress?
          </h1>
          <button className="p-3 bg-white text-amber-700 rounded-2xl cursor-pointer font-bold hover:scale-95 transition shadow">
            Visit Market here
          </button>
        </div>
      </section>
    </div>
  );
};
