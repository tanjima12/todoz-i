import NavBar from "./NavBar";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col lg:flex-row items-center justify-center ml-2 lg:ml-20">
        <h1 className="text-2xl font-poppins">
          Have questions, suggestions, or need assistance? Feel free <br></br>to
          reach out to our dedicated support team. We are here to help! Your
          feedback is valuable to us as we strive to enhance your <br></br>task
          management experience.
        </h1>
        <img
          className="lg:h-[700px] lg:w-[1400px]"
          src="https://i.ibb.co/D1ScRr6/12084824-20943984.jpg"
        ></img>
      </div>
      <div className="mb-20 ml-5 flex flex-col lg:flex-row justify-around">
        <div>
          <h1 className="text-3xl font-poppins font-bold mb-3">
            For Live contact
          </h1>
          <p className="flex items-center gap-2 mb-3 ">
            <FaPhoneAlt className="text-2xl"></FaPhoneAlt>012458.....
          </p>
          <p className="flex items-center gap-2 ">
            <FaWhatsapp className="text-2xl"></FaWhatsapp>045789.....
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold mb-3">
            Social Contact
          </h1>
          <p>
            <a
              href="https://www.linkedin.com/feed/"
              className="flex items-center gap-2 mb-3 "
            >
              <FaLinkedinIn className="text-2xl"></FaLinkedinIn>Linkedin
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/"
              className="flex items-center gap-2 mb-3 "
            >
              <FaFacebook className="text-2xl"></FaFacebook>Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/?hl=en"
              className="flex items-center gap-2 mb-3 "
            >
              <FaInstagram className="text-2xl"></FaInstagram>Instagram
            </a>
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold mb-3">Gmail</h1>
          <p className="flex items-center gap-2 mb-3 ">
            <MdOutgoingMail className="text-2xl"></MdOutgoingMail>
            tanjimatanju45@gmail.com
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
