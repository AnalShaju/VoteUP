import { NavLink } from "react-router";
function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between px-16 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="left">
          <NavLink className="text-2xl font-bold text-purple-600" to="/" end>
            VoteUp
          </NavLink>
        </div>
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-medium text-purple-600"
                : "text-lg font-medium text-gray-600 hover:text-gray-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-medium text-purple-600"
                : "text-lg font-medium text-gray-600 hover:text-gray-900"
            }
          >
            Trending
          </NavLink>
          <NavLink
            to="/submit"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-medium bg-purple-700 text-white px-4 py-2 rounded-lg"
                : "text-lg font-medium bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            }
          >
            Submit
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
