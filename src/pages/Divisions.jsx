import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Divisions() {
  const divisions = [
    {
      title: 'Equities & Securities',
      subheading: 'Long-term capital with a simple, rules-based approach.',
      body: 'Diamond Webster Equities & Securities focuses on building a disciplined portfolio across equities and other securities. We favor simple strategies, clear risk controls, and a long-term mindset over short-term noise. Our goal is to grow capital steadily while avoiding permanent loss.'
    },
    {
      title: 'Umpiring',
      subheading: 'Bringing structure and fairness to every game.',
      body: 'We provide professional umpiring services for local leagues, tournaments, and events. From youth games to adult leagues, Diamond Webster umpires bring consistency, clear communication, and respect for the sport.'
    },
    {
      title: 'Attire',
      subheading: 'Clean, minimal pieces that actually get worn.',
      body: 'Diamond Webster Attire focuses on simple, functional clothing and uniforms. We keep the designs clean and the details thoughtful, so everything we make works in real life — on the field, at work, or on the weekend.'
    },
    {
      title: 'Sustainable Agriculture',
      subheading: 'Making land more productive and resilient over time.',
      body: 'We explore and support small-scale, sustainable agriculture initiatives. Our focus is on practical, repeatable practices that improve soil health, strengthen local food systems, and create long-term value from the ground up.'
    },
    {
      title: 'Offshore Wind Farms',
      subheading: 'Long-term, sustainable energy from offshore wind.',
      body: 'Diamond Webster explores and supports offshore wind projects that can deliver reliable, large-scale clean energy. We focus on site selection, partnerships, and operating models that balance long-term returns, technological reliability, and respect for local communities and marine environments.'
    }
  ];

  return (
    <div>
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Divisions</h1>
          <p className="text-lg text-slate-200">
            A portfolio spanning finance, sport, style, land, and clean energy.
          </p>
        </div>

        <div className="space-y-8">
          {divisions.map((division, index) => (
            <Card key={index}>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {division.title}
              </h2>
              <h3 className="text-lg font-semibold text-navy-700 mb-4">
                {division.subheading}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {division.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-navy-800 rounded-xl p-8 border border-navy-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in a specific division?
          </h2>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Whether you're looking to partner, invest, or learn more about our approach, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact">Get in touch →</Button>
            <Button to="/about" variant="secondary">Learn about our approach</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
