import { Link } from 'react-router-dom';

export default function Button({ to, children, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-medium transition';
  const variantClasses = {
    primary: 'bg-white text-navy-900 hover:bg-slate-100 shadow-lg hover:shadow-xl font-semibold',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-navy-900 shadow-md'
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
