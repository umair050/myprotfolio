import { useState } from 'react';

// Formspree form – submissions go to malikumair112233@gmail.com. Override with VITE_FORMSPREE_ID in .env if needed.
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'mzdadvbk'}`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const form = e.target;
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const data = await response.json();
      if (data.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto">
            For enterprise projects, long-term engagements, or technical discussions—reach out and I&apos;ll respond promptly.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-card-bg rounded-2xl p-6 md:p-8 border border-border shadow-card relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-purple-500 rounded-b-2xl" />
            <h3 className="text-xl font-semibold text-accent mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-accent text-xl w-10 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text-primary">Location</strong>
                  <span className="text-meta">Islamabad, Pakistan</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-accent text-xl w-10 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text-primary">Phone</strong>
                  <a href="tel:+923035265817" className="text-meta no-underline hover:text-accent">
                    +92 303 5265817
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-accent text-xl w-10 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text-primary">Email</strong>
                  <a
                    href="mailto:malikumair112233@gmail.com"
                    className="text-meta no-underline hover:text-accent"
                  >
                    malikumair112233@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fab fa-linkedin text-accent text-xl w-10 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text-primary">LinkedIn</strong>
                  <a
                    href="https://linkedin.com/in/malik-umair-webdeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-meta no-underline hover:text-accent"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <a
                href="https://linkedin.com/in/malik-umair-webdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl hover:opacity-90 transition-opacity"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl hover:opacity-90 transition-opacity"
                title="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:malikumair112233@gmail.com"
                className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl hover:opacity-90 transition-opacity"
                title="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          <div className="bg-card-bg rounded-2xl p-6 md:p-8 border border-border shadow-card relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-purple-500 rounded-b-2xl" />
            <h3 className="text-xl font-semibold text-accent mb-6">Send a Message</h3>
            {submitted ? (
              <p className="text-accent font-semibold">
                Thank you for your message! I will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-y min-h-[120px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
