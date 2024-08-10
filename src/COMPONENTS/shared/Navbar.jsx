const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-blue-600 hover:shadow-blue-600">
        <a>Home</a>
      </li>
      <li className="hover:text-blue-600 hover:shadow-blue-600">
        <a>Suggestion</a>
      </li>
      <li>
        <details>
          <summary className="hover:text-blue-600 hover:shadow-blue-600">
            <a>Question</a>
          </summary>
          <ul className="p-2 bg-gray-900">
            <li className="hover:text-blue-600 hover:shadow-blue-600">
              <a>SSC</a>
            </li>
            <li className="hover:text-blue-600 hover:shadow-blue-600">
              <a>HSC</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="hover:text-blue-600 hover:shadow-blue-600">
            <a>Books</a>
          </summary>
          <ul className="p-2 bg-gray-900">
            <li className="hover:text-blue-600 hover:shadow-blue-600">
              <a>SSC</a>
            </li>
            <li className="hover:text-blue-600 hover:shadow-blue-600">
              <a>HSC</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Q~ Sites</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
