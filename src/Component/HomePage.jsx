import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "src/assets/Wingman.jpg",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "src/assets/Unity.jpeg",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "src/assets/Shotgun.webp",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "src/assets/Valo.png",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);
  const footerTriggerRef = useRef(null);

  useEffect(() => {
    const footerTrigger = footerTriggerRef.current; // Simpan nilai ref ke variabel lokal

    if (!footerTrigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setShowFooter(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerTrigger);

    return () => {
      observer.unobserve(footerTrigger);
    };
  }, []);

  return (
    <div className="relative font-inter snap-y snap-mandatory">
      {/* Display Project */}
      <div className="w-full min-h-screen bg-[#FFFFF1] flex items-center justify-center snap-start relative z-10 px-5 md:px-10">
      <div className="w-full h-auto grid lg:grid-cols-2 lg:grid-rows-3 gap-1">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`bg-black group relative overflow-hidden rounded-sm shadow-lg ${
                project.rowSpan || ""
              }`}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition duration-500 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
                <h3 className="text-lg font-semibold font-montserrat">
                  {project.title}
                </h3>
                <p className="text-sm font-lato font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Section */}
        <motion.div
          className="w-full max-w-5xl flex flex-col justify-center items-center text-center p-5 z-[30]"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="font-roboto font-light text-5xl md:text-2xl lg:text-6xl">
            I'M FULL STACK ENGINEER
          </h1>
          <h2 className="font-lato font-light max-w-lg mt-5 text-lg md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#FF6D70] text-white font-light  rounded-sm shadow-md hover:bg-[#ff4d59] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              CONTACT ME
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trigger untuk Footer */}
      <div ref={footerTriggerRef} className="h-20 w-full"></div>

      {/* Animated Footer */}
      <motion.div
        initial={{ y: 200 }}
        animate={showFooter ? { y: 0 } : { y: 600 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full z-50"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
