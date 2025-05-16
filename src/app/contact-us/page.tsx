"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate with EmailJS, Formspree, etc.
    alert("Message submitted! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white space-y-10">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h1>

      {/* Google Map */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-72 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.6214005444583!2d91.98224361459809!3d22.293984077664046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2336e5f26bdb%3A0x922464e7958ba774!2s7XVJ%2BGGG%2C%20Patia!5e0!3m2!1sen!2sbd!4v1747389836269!5m2!1sen!2sbd"
          loading="lazy"
          title="Alphee Store Location"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="bg-[#131313] p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">📞 Get in Touch</h2>
          <p className="text-sm text-gray-300">
            Whether you have a question about products, pricing, or anything else — our team is ready to help.
          </p>
          <div className="text-sm text-gray-400 space-y-2">
            <p><strong>Phone:</strong> <a href="tel:+8801973547022" className="text-blue-400 hover:underline">+880 1973-547022</a></p>
            <p><strong>Email:</strong> <a href="mailto:alphee.bd@gmail.com" className="text-blue-400 hover:underline">alphee.bd@gmail.com</a></p>
            <p><strong>Location:</strong> Patiya, Chattogram, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-gray-600 text-white text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-gray-600 text-white text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-gray-600 text-white text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
