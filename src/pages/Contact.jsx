import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just simulate success message
    setStatus('Thank you for reaching out! We will get back to you soon.');
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>
      <p className="text-center text-gray-700 mb-12">
        Have any questions or need assistance? We're here to help! Fill out the form below or reach us directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Address</h2>
            <p className="text-gray-700">123 Health St, Wellness City, Country</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Phone</h2>
            <p className="text-gray-700">+1 (234) 567-8901</p>
            <p className="text-gray-700">+1 (234) 567-8902 (Emergency)</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Email</h2>
            <p className="text-gray-700">contact@trustedhospital.com</p>
            <p className="text-gray-700">support@trustedhospital.com</p>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191237557997!2d-122.41941508468116!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a6e9a4b3%3A0x4a1f7a5e970dfb62!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678243037047!5m2!1sen!2sus"
              width="100%"
              height="250"
              className="rounded-lg shadow"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Reason for contacting"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && <p className="text-green-600 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
