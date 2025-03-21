import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import PropTypes from "prop-types";

// Animation variants for timeline elements
const growLine = {
  hidden: { height: 0, opacity: 0 },
  visible: (delay = 0) => ({
    height: "100%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay },
  }),
};

const TimelineItem = ({ experience, isLast, index }) => {
  const { company, position, location, period, url } = experience;

  return (
    <li className="relative flex gap-x-4 pb-11">
      {!isLast && (
        <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={growLine}
            custom={0.7 + index * 0.1}
            className="w-px bg-dark-400"
          />
        </div>
      )}

      <div className="relative flex size-6 flex-none items-center justify-center bg-dark-700">
        <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
      </div>

      <div className="flex-auto py-0.5 text-sm">
        <div className="space-y-1">
          <Link
            to={url}
            target="_blank"
            className="flex items-start gap-1 group"
          >
            <span className="block text-nowrap">{company}</span>
            <HiArrowUpRight
              size={12}
              className="transition-opacity duration-300 group-hover:opacity-100 opacity-0"
            />
          </Link>

          <p className="space-y-1 text-nowrap pb-2 md:pb-0 text-dark-400">
            <span className="block">{position}</span>
            <span>{location}</span>
          </p>

          <time className="md:hidden flex-none py-0.5 text-sm text-dark-400">
            {period}
          </time>
        </div>
      </div>

      <time className="hidden md:block flex-none py-0.5 text-sm text-dark-400">
        {period}
      </time>
    </li>
  );
};

TimelineItem.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="bg-dashed py-6 px-3 md:p-6 border border-dark-300">
      <ul className="max-w-lg space-y-6">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.company}
            experience={experience}
            isLast={index === experiences.length - 1}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

ExperienceTimeline.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
