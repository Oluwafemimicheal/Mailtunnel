import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../App.css";

const AboutPage = () => {
  return (
    <div className="">
      <section className="about-hero w-full h-[400px] overflow-hidden">
        <div className="flex justify-center items-center flex-col bg-black/90 w-full h-[400px]">
          <h1 className="text-4xl font-semibold text-white mb-2 ">
            About Esayfood Market
          </h1>
          <p className="text-[18px] text-black font-medium py-2 px-5 bg-white rounded">
            Export more about us here
          </p>
        </div>
      </section>
      <section className="py-10 mx-20 bg-white">
        <div className="flex justify-between items-start gap-5">
          <div className="w-8/12">
            <div className="mb-10">
              <h1 className="text-2xl font-medium mb-3">
                About Easyfood Service
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem, tempore pariatur? Dolores.
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem..
              </p>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, atque aut tempore amet eius vitae nam maxime fugiat
                perferendis laborum facere architecto praesentium dignissimos
                aliquid. Vitae officia tempora beatae unde alias blanditiis
                consequatur numquam, recusandae accusamus aspernatur architecto,
                et ad.
              </p>
            </div>
            <div className="bg-gray-100 p-4 mb-10">
              <h1 className="text-2xl font-medium mb-3">Our Mission</h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem, tempore pariatur? Dolores.
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem..
              </p>
            </div>
            <div className="">
              <h1 className="text-2xl font-medium mb-3">
                Local Marketers Opportunity
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem, tempore pariatur? Dolores.
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                numquam eveniet reiciendis molestias eum reprehenderit
                distinctio iste atque nulla assumenda esse saepe magnam aperiam
                voluptatum autem voluptatem..
              </p>
            </div>
          </div>
          <div className="w-3/12 bg-amber-600 p-8">
            <h3 className="text-[20px] text-white underline">Join us here</h3>
            <ul className="flex flex-col gap-5 mt-5 text-white">
              <li>
                <a href="#">
                  <FaFacebook size={30} color="white" />
                  Easyfood on Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram size={30} color="white" />
                  Easyfood on Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp size={30} color="white" />
                  Easyfood on WhatsApp
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin size={30} color="white" />
                  Easyfood on LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter size={30} color="white" />
                  Easyfood on Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
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
      </section>
    </div>
  );
};

export default AboutPage;
