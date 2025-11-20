import Section from '../components/Section';
import Button from '../components/Button';

export default function About() {
  const values = [
    {
      title: 'Simple',
      description: 'We keep strategies and structures as clear as possible.'
    },
    {
      title: 'Disciplined',
      description: 'We respect risk, process, and time horizons.'
    },
    {
      title: 'Hands-on',
      description: 'We learn by operating, iterating, and staying close to the work.'
    }
  ];

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold text-slate-900 mb-8">About Diamond Webster</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-slate-600 mb-6">
            Diamond Webster Equities & Securities is a modern holding company operating across five distinct
            domains: finance, sport, style, land, and clean energy. We believe that the same core principles —
            simplicity, discipline, and long-term thinking — can create value in very different arenas.
          </p>

          <p className="text-lg text-slate-600 mb-6">
            Our approach is rooted in curiosity and a willingness to learn by doing. Whether we're building
            an investment portfolio, umpiring a game, designing functional apparel, supporting regenerative
            agriculture, or exploring offshore wind opportunities, we apply the same mindset: start with clear
            theses, respect the fundamentals, and remain patient through cycles.
          </p>

          <p className="text-lg text-slate-600">
            We're not looking to be everything to everyone. Instead, we focus on areas where we can contribute
            meaningfully over the long term, learning and adapting as we go. Each division operates with autonomy
            but shares a commitment to building real, durable value.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center bg-navy-50 rounded-xl p-8 border border-navy-100">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Want to see our values in action?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Explore our divisions to see how we apply simplicity, discipline, and hands-on learning across different industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/divisions">View our divisions</Button>
            <Button to="/team" variant="secondary">Meet the team</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
