import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';
import logo from "../assets/icon.png";

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/available-foods', label: 'Available Foods' },
  { to: '/blogs', label: 'Blog' },
  { to: '/about', label: 'About' },
];

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const userLinks = user
    ? [
        { to: '/addfood', label: 'Add Food' },
        { to: `/manage-my-food/${user.email}`, label: 'Manage My Foods' },
        { to: '/my-requested-foods', label: 'My Food Request' },
      ]
    : [];

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-semibold text-[#2F855A]">ShareBite</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center">
          {[...navLinks, ...userLinks].map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-lg font-medium transition hover:text-[#2F855A] ${
                  isActive(link.to) ? 'text-[#2F855A] underline underline-offset-4' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border"
                />
              )}
              <button
                onClick={logOut}
                className="px-4 py-2 rounded-md text-[#2F855A] border border-[#2F855A] hover:bg-[#E6F4EA] transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="px-4 py-2 rounded-md text-[#2F855A] border border-[#2F855A] hover:bg-[#E6F4EA] transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-[#2F855A] text-white hover:bg-[#276749] transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 text-[#2F855A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-10 h-10" />
                <span className="text-2xl font-semibold text-[#2F855A]">ShareBite</span>
              </Link>
              <button onClick={() => setMenuOpen(false)}>
                <svg
                  className="w-8 h-8 text-[#2F855A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {[...navLinks, ...userLinks].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg font-medium block px-4 py-2 rounded-md hover:bg-[#E6F4EA] transition ${
                      isActive(link.to) ? 'text-[#2F855A] underline' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-4">
              {user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    logOut();
                  }}
                  className="w-full px-4 py-2 rounded-md text-[#2F855A] border border-[#2F855A] hover:bg-[#E6F4EA] transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/signin"
                    onClick={() => setMenuOpen(false)}
                    className="w-full px-4 py-2 rounded-md text-[#2F855A] border border-[#2F855A] hover:bg-[#E6F4EA] transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="w-full px-4 py-2 rounded-md bg-[#2F855A] text-white hover:bg-[#276749] transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
