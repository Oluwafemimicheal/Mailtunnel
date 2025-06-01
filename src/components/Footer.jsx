const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap lg:gap-20 gap-5">
        <div>
          <h1 className="text-white font-semibold">Stress no more...</h1>
        </div>
        <div>
          <ul className="text-white leading-10">
            <li>Home</li>
            <li>Order Item</li>
            <li>Service</li>
            <li>Market</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <ul className="text-white leading-10">
            <li>Ride Deliver</li>
            <li>Deliver</li>
            <li>Ride</li>
            <li>Secure</li>
          </ul>
        </div>
        <div>
          <ul className="text-white leading-10">
            <li>Address</li>
            <li>Sango-Ota, Ogun State, Nigeria.</li>
            <li>+234 9163 657 267, +234 9023 403 761</li>
            <li>easyfood@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul className="text-white leading-10">
            <li>Social Media</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex justify-between">
        <small className="text-gray-400">
          easyfood @Copyright {new Date().getFullYear()}
        </small>
        <small className="text-gray-400">Terms and Condition.</small>
      </div>
    </div>
  );
};

export default Footer;
