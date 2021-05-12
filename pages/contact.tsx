import Nav from "../components/nav";
import { Title } from "../components/title";
import { Layout } from "../components/layout"
import { ContactForm } from "../components/contactForm";

const Contact = () => {
  return (
    <Layout title="contact leggen met Dennis">
      <div className="relative">
        <div className="overlay-background-image bg-blue-100 opacity-25" />
        <Nav />

        <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md">
          <Title
            color="#013f5d"
            title="Contact"
            subtitle="Geïntereseerd in een training of heb je een vraag? Vul gerust het formulier in en ik zal zo snel mogelijk reageren"
          />
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
