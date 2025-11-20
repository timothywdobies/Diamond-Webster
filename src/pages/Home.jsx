import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { newsItems } from '../data/newsData';

export default function Home() {
  const divisions = [
    {
      title: 'Equities & Securities',
      description: 'Long-term investing across public and private markets with a focus on simplicity, risk management, and compounding over time.'
    },
    {
      title: 'Umpiring',
      description: 'Professional umpiring services for local leagues and tournaments — bringing structure, fairness, and consistency to the game.'
    },
    {
      title: 'Attire',
      description: 'Clean, functional apparel and uniforms designed for people who value minimal design and everyday performance.'
    },
    {
      title: 'Sustainable Agriculture',
      description: 'Projects focused on soil health, local food systems, and regenerative practices that make land more productive over the long term.'
    },
    {
      title: 'Offshore Wind Farms',
      description: 'Exploration and development of offshore wind opportunities that deliver reliable clean energy while respecting local communities and marine environments.'
    }
  ];

  const principles = [
    {
      title: 'Simple',
      description: 'Clear theses, straightforward operations, no unnecessary complexity.'
    },
    {
      title: 'Disciplined',
      description: 'A long-term mindset and process-driven decision making across every division.'
    },
    {
      title: 'Hands-on',
      description: 'We actually operate, experiment, and learn in the field, not just on paper.'
    }
  ];

  // Get the 3 most recent news items
  const recentNews = newsItems.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Section className="py-20">
        <div className="max-w-3xl">
          <p className="text-slate-300 font-semibold mb-4 tracking-wide uppercase text-sm">
            Diamond Webster Equities & Securities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A modern holding company for capital, sport, land, style, and clean energy.
          </h1>
          <p className="text-lg text-slate-200 mb-8">
            We manage a portfolio of projects spanning equities & securities, umpiring, attire,
            sustainable agriculture, and offshore wind farms — all guided by discipline, curiosity,
            and long-term thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/divisions">View our divisions →</Button>
            <Button to="/contact" variant="secondary">Contact us</Button>
          </div>
        </div>
      </Section>

      {/* Divisions Preview */}
      <Section className="bg-navy-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Divisions</h2>
          <p className="text-slate-200">
            Five lanes, one philosophy: build real, durable value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {division.title}
              </h3>
              <p className="text-slate-600">
                {division.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/divisions">Explore all divisions →</Button>
        </div>
      </Section>

      {/* How We Think */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">How We Think</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-slate-200">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-navy-800 rounded-xl p-8 border border-navy-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to learn more?
            </h3>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
              Discover how our principles drive value across finance, sport, style, agriculture, and clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/about">About us</Button>
              <Button to="/team" variant="secondary">Meet the team</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* News Preview */}
      <Section className="bg-navy-800">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            News & Sustainability Updates
          </h2>
          <p className="text-slate-200">
            A snapshot of recent efforts across sustainable agriculture and clean energy at Diamond Webster.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recentNews.map((item) => (
            <Card key={item.id}>
              <p className="text-sm text-slate-500 mb-2">{item.date}</p>
              <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded-full mb-3">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {item.summary}
              </p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button to="/news">View all news →</Button>
        </div>
      </Section>
    </div>
  );
}
