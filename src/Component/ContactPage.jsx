
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFF4] px-4">
      <div className="w-full h-full bg-white shadow-md overflow-hidden ">
        <div className="bg-[#EAE7DC] text-white text-center py-8 px-6">
          <h1 className="text-4xl text-black font-light font-lato mb-2">Get In Touch</h1>
          <p className="text-lg text-black">Wed love to hear from you!</p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 font-light font-lato  mb-6">
              Feel free to reach out using any of the methods below.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-110">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a
                  href="mailto:example@example.com"
                  className="text-gray-700 hover:text-blue-500 text-lg"
                >
                  dapahardan@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-110">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-green-500 text-lg"
                >
                  +62 852 1604 2495
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 transition-transform transform hover:scale-110">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span className="text-gray-700 text-lg">
                Serang, Banten, Indonesia
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full border-2 border-gray-300  p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full border-2 border-gray-300  p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  className="w-full border-2 border-gray-300  p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-stone-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#262626] text-white py-3  shadow-md hover:bg-[#A67F55] transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
