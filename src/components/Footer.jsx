import { Link } from 'react-router-dom';

export default function Footer() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/divisions', label: 'Divisions' },
    { path: '/about', label: 'About' },
    { path: '/team', label: 'Team' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Diamond Webster Equities & Securities
          </p>
          <nav className="flex gap-4 text-sm">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-600 hover:text-slate-900 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-4 text-center md:text-left">
          <a
            href="mailto:info@diamondwebster.com"
            className="text-sm text-slate-600 hover:text-emerald-700 transition"
          >
            info@diamondwebster.com
          </a>
        </div>
      </div>
    </footer>
  );
}
