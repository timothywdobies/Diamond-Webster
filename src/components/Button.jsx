import { Link } from 'react-router-dom';

export default function Button({ to, children, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-medium transition';
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-50'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
