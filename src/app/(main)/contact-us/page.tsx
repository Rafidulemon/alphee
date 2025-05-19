import ContactForm from "../../components/form/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white space-y-10">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Contact Us
      </h1>
      {/* Contact Info */}
      <div className="bg-[#131313] p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">
            📞 Get in Touch
          </h2>
          <p className="text-sm text-gray-300">
            Whether you have a question about products, pricing, or anything
            else — our team is ready to help.
          </p>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+8801973547022"
                className="text-blue-400 hover:underline"
              >
                +880 1973-547022
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:alphee.bd@gmail.com"
                className="text-blue-400 hover:underline"
              >
                alphee.bd@gmail.com
              </a>
            </p>
            <p>
              <strong>Location:</strong> Patiya, Chattogram, Bangladesh
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-72 md:h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.72382665834687!2d91.98129678825846!3d22.293847802776842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad230009b2e35b%3A0x1632e5e805ad9bd!2sAlphee!5e0!3m2!1sen!2sbd!4v1747390765145!5m2!1sen!2sbd"
                loading="lazy"
                title="Alphee Store Location"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
