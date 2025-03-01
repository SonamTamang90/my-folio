import {
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineMap,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-11">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font-bebas text-6xl tracking-wide mb-5"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="max-w-lg lg:text-lg text-dark-400"
        >
          Get in touch with me throught the following details. I'm always open
          to discussing new opportunities and collaborations.
        </motion.p>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col gap-3 group ">
            <div className="font-bebas text-lg tracking-wider flex items-center gap-2">
              <HiOutlineEnvelope size={24} />
              <p>Email</p>
            </div>
            <Link
              to="mailto:stamang.mrbhutan90@gmail.com"
              className="text-base text-dark-400 group-hover:underline"
            >
              stamang.mrbhutan90@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-bebas text-lg tracking-wider flex items-center gap-2">
              <HiOutlineDevicePhoneMobile size={24} />
              <p>Mobile</p>
            </div>
            <p className="text-base text-dark-400">+61-0432572176</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bebas text-lg tracking-wider flex items-center gap-2">
              <HiOutlineMap size={24} />
              <p>Address</p>
            </div>
            <p className="text-base text-dark-400">
              <p>409 Cambridge Street, Wembley</p>
              <p>Perth, Western Australia</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
