import Header from "./Header";
import ContactForm from "./ContactForm";
import ContactInfoList from "./ContactInfoList";
import SocialMediaBar from "./SocialMediaBar";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 w-full md:w-3/5">
          <Header sectionName="contact" />
          <div className="p-2 my-2 flex flex-col md:flex-row justify-between">
            <div className="my-4 md:my-0 w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h3 className="contactTitle my-2 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <ContactInfoList />
            </div>
            <div className="w-full md:w-1/2 my-4 md:my-0 mx-4 flex flex-col items-center md:items-start">
              <div className="w-full sm:w-2/3 my-4">
                <SocialMediaBar />
              </div>
              <h3 className="contactTitle">Lorem ipsum dolor sit amet.</h3>
              <p className="font-nunito text-darkBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores expedita numquam at quia illum ipsam provident dolor
                quam aut assumenda?
              </p>
              <h5 className="contactTitle">Lorem ipsum dolor sit.</h5>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="w-full md:w-2/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.143349805363!2d-99.15216007511769!3d19.43090412941134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses!2sar!4v1622321134203!5m2!1ses!2sar"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-screen sm:min-h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
