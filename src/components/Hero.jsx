import { NavLink } from "react-router";
function Hero() {
  return (
    <>
      <div className="bg-[#FAF7F2] border-2 border-indigo-100/50">
        <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Where great ideas find their people.
          </h1>
          <p text-lg text-gray-500 max-w-xl>
            Submit a startup idea, vote on others, and see what the community
            believes in.
          </p>
        </div>
        <div className="flex  justify-center items-center gap-4 mb-4">
          <NavLink
            to="/submit"
            className="text-lg font-semibold bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
          >
            + Submit an idea
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Hero;
