const ContactPage = () => {
  return (
    <div>
      <section className="contact-hero w-full h-[400px] overflow-hidden">
        <div className="flex justify-center items-center flex-col bg-black/90 w-full h-[400px]">
          <h1 className="text-4xl font-semibold text-white mb-2 ">
            Contact Mailtunnel
          </h1>
          <p className="text-[18px] text-black font-medium py-2 px-5 bg-white rounded">
            Connect with us at Esayfood today!
          </p>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
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

export default ContactPage;
