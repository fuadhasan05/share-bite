import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { AuthContext } from '../contexts/AuthProvider'
import logo from "../assets/icon.png";

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/available-foods', label: 'Available Foods' },
];

const userLinks = [
  { to: '/addfood', label: 'Add Food' },
  { to: '/manage-my-food', label: 'Manage My Foods' },
  { to: '/my-food-request', label: 'My Food Request' },
];

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold tracking-tight text-[#3CB371]">Share Bite</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-medium transition-colors duration-200 hover:text-[#3CB371] ${isActive(link.to) ? 'text-[#3CB371] underline underline-offset-4' : 'text-[#222]'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {user && userLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-medium transition-colors duration-200 hover:text-[#3CB371] ${isActive(link.to) ? 'text-[#3CB371] underline underline-offset-4' : 'text-[#222]'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth/User */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt="avatar"
                  className="w-9 h-9 rounded-full border"
                />
              )}
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#FFD600", color: "#222", border: "none" }}
                onClick={logOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="btn btn-outline btn-sm"
                style={{ borderColor: "#3CB371", color: "#3CB371" }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-sm"
                style={{ backgroundColor: "#3CB371", color: "#fff", border: "none" }}
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden btn btn-ghost"
          aria-label="Open Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-7 w-7" fill="none" stroke="#3CB371" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#E6F4EA] shadow-lg transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } lg:hidden`}
      >
        <div className="container mx-auto px-4 pt-4 pb-6 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold tracking-tight text-[#3CB371]">Share Bite</span>
            </Link>
            <button
              className="btn btn-ghost"
              aria-label="Close Menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="h-7 w-7" fill="none" stroke="#3CB371" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`btn btn-ghost btn-block text-left ${isActive(link.to) ? 'text-[#3CB371] underline underline-offset-4' : 'text-[#222]'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {user && userLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`btn btn-ghost btn-block text-left ${isActive(link.to) ? 'text-[#3CB371] underline underline-offset-4' : 'text-[#222]'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            {user ? (
              <div className="flex items-center gap-3">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="avatar"
                    className="w-9 h-9 rounded-full border"
                  />
                )}
                <button
                  className="btn btn-sm flex-1"
                  style={{ backgroundColor: "#FFD600", color: "#222", border: "none" }}
                  onClick={() => { setMenuOpen(false); logOut(); }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="btn btn-outline btn-block"
                  style={{ borderColor: "#3CB371", color: "#3CB371" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-block"
                  style={{ backgroundColor: "#3CB371", color: "#fff", border: "none" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
