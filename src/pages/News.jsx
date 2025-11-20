import Section from '../components/Section';
import Card from '../components/Card';
import { newsItems } from '../data/newsData';

export default function News() {
  const getCategoryColor = (category) => {
    if (category.includes('Agriculture')) return 'bg-green-100 text-green-700';
    if (category.includes('Wind')) return 'bg-blue-100 text-blue-700';
    return 'bg-slate-100 text-slate-700';
  };

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          News & Sustainability Updates
        </h1>
        <p className="text-lg text-slate-600 mb-12">
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
      </Section>
    </div>
  );
}
