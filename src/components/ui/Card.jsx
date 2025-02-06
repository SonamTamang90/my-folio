const Card = ({ title, subtitle, description, graphic, status }) => {
  return (
    <div className="relative bg-dashed ring-1 dark:ring-dark-300 rounded-md shadow">
      <div className="relative h-64 p-6 overflow-hidden rounded-md shrink-0">
        <img
          src={graphic}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg dark:text-white tracking-wider font-semibold font-bebas">
            {title}
          </h3>
          <div
            className={`text-xs rounded-full capitalize py-1 px-3 border ${
              status === "active"
                ? "border-green-300 text-green-300"
                : "border-orange-300 text-orange-300"
            } `}
          >
            <span>{status}</span>
          </div>
        </div>

        <p className="dark:text-dark-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
