import { Layout } from "../components/layout"
import { ContactForm } from "../components/contactForm";

const Contact = () => {
  return (
    <Layout title="contact leggen met Dennis">
      <div className="relative mt-8">

        <div className="relative pb-16 px-8 mx-auto md:flex md:justify-center">

          <div className="relative">
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0  scale-125 md:scale-150" src="./images/backgroundForm.svg" alt="" />
            <ContactForm />
          </div>

          <img className="hidden md:block" src="./imageForm.svg" alt="" />

        </div>
      </div>
    </Layout >
  );
};

export default Contact;
