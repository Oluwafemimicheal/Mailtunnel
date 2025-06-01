import { Hero } from "../components/Hero";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home | Mail Tunnel"
        description="Welcome to Mail tunnel, a place to keep all your mails in order."
        keywords="home, mail, content"
        author="Oluwafemi Michael"
        url="https://www.mailtunnel.com"
        image="https://www.mybrand.com/images/og-home.jpg"
        twitterHandle="@femimicheal"
        siteName="Mail Tunnel"
      />
      <Hero />
    </>
  );
};

export default HomePage;
