import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({
  title,
  subtitle,
  description,
  graphic,
  status,
  slug,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
    >
      <Link to={`/projects/${slug}`}>
        <div className="relative bg-dashed ring-1 ring-dark-300 rounded-md shadow group">
          <div className="relative p-6 overflow-hidden rounded-md shrink-0">
            <img
              src={graphic}
              alt={title}
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-white tracking-wider font-semibold font-bebas">
                {title}
              </h3>
              <div
                className={`text-xs rounded-full capitalize py-1 px-3 border ${
                  status === "Active"
                    ? "border-green-300 text-green-300"
                    : "border-orange-300 text-orange-300"
                } `}
              >
                <span>{status}</span>
              </div>
            </div>

            <p className="text-dark-400">{description}</p>
          </div>
          <div className="absolute top-10 right-11 bg-dark-700 border border-dark-300 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <HiArrowUpRight />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
