import { NavLink } from "react-router";

const StructureSection = ({ title, dataStructures }) => {
  return (
    <div className="bg-[#0d1117] text-white md:px-20 pb-10 pt-10">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-orange-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</div>
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dataStructures.map((item, index) => (
          <NavLink
            to={`/dsapage/${
              item.path || item.title.toLowerCase().replace(" ", "")
            }`}
            key={index}
          >
            <div
              className={`p-2 rounded-2xl border-amber-50 group border-1 h-50 ${
                item.color || "border-[#2c2f36]"
              } bg-[#0d1117] text-center hover:border-orange-500 hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.4)] transition hover:scale-[1.02]`}
            >
              <div className="text-4xl mb-4 duration-300 transform group-hover:rotate-20 scale-[1.05]">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="text-sm font-semibold mt-3 border border-yellow-100 rounded-full inline-block px-4 py-1 group-hover:bg-orange-500 group-hover:shadow-[0_0_20px_2px_rgba(251,146,60,0.5)]">
                Lets Visualize !
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default StructureSection;
