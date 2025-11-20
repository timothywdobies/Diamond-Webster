import { Link } from 'react-router-dom';

export default function Button({ to, children, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-medium transition';
  const variantClasses = {
    primary: 'bg-navy-700 text-white hover:bg-navy-800 shadow-md hover:shadow-lg',
    secondary: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-50'
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
