export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl bg-white border border-slate-200 p-6 shadow-lg hover:shadow-xl transition ${className}`}>
      {children}
    </div>
  );
}
