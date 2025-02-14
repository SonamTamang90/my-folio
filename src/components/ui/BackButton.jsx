import { useNavigate } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 mb-6 group"
    >
      <span className="bg-dark-200 p-1 rounded-full border border-dark-100 ">
        <HiArrowSmallLeft />
      </span>
      <span className="text-dark-400 transition-colors duration-300 group-hover:text-white">
        Back
      </span>
    </button>
  );
};

export default BackButton;
