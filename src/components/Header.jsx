import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/divisions', label: 'Divisions' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 bg-navy-900 border-b border-navy-800 border-opacity-50 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Diamond Webster
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-slate-200 hover:text-white transition ${
                location.pathname === link.path ? 'text-white font-semibold underline decoration-2' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu - simplified version */}
        <nav className="md:hidden flex gap-4 text-sm">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-slate-200 hover:text-white transition ${
                location.pathname === link.path ? 'font-semibold text-white' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
