import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Team() {
  const teamMembers = [
    {
      name: 'Michael O\'Keef',
      role: 'Chief Executive Officer (CEO)',
      bio: 'Michael leads overall strategy and direction for Diamond Webster across all divisions.'
    },
    {
      name: 'Timothy Dobies',
      role: 'Chief Technology Officer (CTO)',
      bio: 'Timothy oversees technology, data, and digital infrastructure supporting Diamond Webster\'s operations.'
    },
    {
      name: 'JT Giarraputo',
      role: 'Chief Financial Officer (CFO)',
      bio: 'JT manages financial strategy, capital allocation, and performance across the portfolio.'
    }
  ];

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold text-white mb-4">Team</h1>
        <p className="text-lg text-slate-200 mb-12">
          Diamond Webster is led by a small, focused leadership team.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {member.name}
              </h2>
              <p className="text-gold-500 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-slate-600">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-navy-800 rounded-xl p-8 border border-navy-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in working with our team?
          </h2>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            We're always open to conversations about partnerships, opportunities, and collaborations across our divisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact">Get in touch</Button>
            <Button to="/divisions" variant="secondary">Explore our work</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
