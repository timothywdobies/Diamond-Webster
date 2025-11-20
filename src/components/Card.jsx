export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition ${className}`}>
      {children}
    </div>
  );
}
