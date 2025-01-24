const Footer = () => {
  return (
    <div className="w-full bg-[#262626] bg-opacity-80 text-white py-6 px-4 shadow-xl backdrop-blur-md">

      <div className="w-64 h-96 "></div>
      <div className="flex flex-col">
        {/* Media Sosial Links */}
        <div className="flex justify-center">
          <ul className="flex flex-row space-x-6 font-light font-montserrat">
            <li>
              <a 
                href="https://www.instagram.com/dapahardan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF6D70]"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF6D70]"
              >
                FACEBOOK
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF6D70]"
              >
                TWITTER
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/daffa-hardhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF6D70]"
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>

        {/* Deskripsi */}
        <div className="p-4 font-lato font-light text-center">
          <p>
            As someone passionate about technology and innovation, I believe in the power of collaboration and curiosity.<br />
            While respecting the foundations of knowledge, I am committed to continuously learning, creating, and growing.<br />
            Together, let’s build a better future.
          </p>
        </div>

        {/* Hak Cipta */}
        <div className="mt-10 text-center font-mono">
          <p> &copy; 2025 Daffa Hardhan. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
