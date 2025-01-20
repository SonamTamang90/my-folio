const Card = () => {
  return (
    <div className="rounded-md overflow-hidden bg-dark-800 border border-dark-500">
      <img src="/test-2.png" alt="project one" className="w-full" />

      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bebas tracking-wider">Burger Colleted</h3>
          {/* <div className="bg-[#f5c311]/80 p-1 rounded-md">
            <span className="text-[10px] font-semibold uppercase leading-3">
              React
            </span>
          </div> */}
        </div>
        <p className="text-sm text-dark-100">
          A digital invoice template for designers.
        </p>
      </div>
    </div>
  );
};

export default Card;
