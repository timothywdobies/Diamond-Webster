import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { newsItems } from '../data/newsData';

export default function News() {
  const getCategoryColor = (category) => {
    if (category.includes('Agriculture')) return 'bg-green-100 text-green-800';
    if (category.includes('Wind')) return 'bg-navy-100 text-navy-800';
    return 'bg-slate-100 text-slate-800';
  };

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold text-white mb-4">
          News & Sustainability Updates
        </h1>
        <p className="text-lg text-slate-200 mb-12">
          Updates for internal and external stakeholders on recent sustainability efforts across
          Diamond Webster, with a focus on agriculture and clean energy.
        </p>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <p className="text-sm text-slate-500 mb-2">{item.date}</p>
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {item.summary}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-navy-800 rounded-xl p-8 border border-navy-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Stay updated on our sustainability efforts
          </h2>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Learn more about our commitment to sustainable practices across agriculture and clean energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/divisions">Explore our divisions</Button>
            <Button to="/contact" variant="secondary">Contact us</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
