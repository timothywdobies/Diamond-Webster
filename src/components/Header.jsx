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
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Diamond Webster
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-slate-900 hover:text-navy-700 transition ${
                location.pathname === link.path ? 'underline decoration-2 decoration-navy-700' : ''
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
              className={`text-slate-900 hover:text-navy-700 transition ${
                location.pathname === link.path ? 'font-semibold text-navy-700' : ''
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
