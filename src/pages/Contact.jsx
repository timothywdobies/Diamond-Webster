import { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    division: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        division: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <Section>
        <h1 className="text-4xl font-bold text-white mb-4">Get in touch</h1>
        <p className="text-lg text-slate-200 mb-12">
          Interested in working with Diamond Webster or learning more about one of our divisions? Reach out below.
        </p>

        <div className="max-w-2xl mx-auto">
          <Card>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-gold-600 text-xl font-semibold mb-2">
                  Thanks for reaching out!
                </div>
                <p className="text-slate-900">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block text-sm font-medium text-slate-900 mb-2">
                    Division
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white"
                  >
                    <option value="">Select a division</option>
                    <option value="equities">Equities & Securities</option>
                    <option value="umpiring">Umpiring</option>
                    <option value="attire">Attire</option>
                    <option value="agriculture">Sustainable Agriculture</option>
                    <option value="wind">Offshore Wind Farms</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 shadow-lg hover:shadow-xl transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </div>
  );
}
