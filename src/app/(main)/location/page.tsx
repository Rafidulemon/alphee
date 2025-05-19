import React from "react";

export default function LocationPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Our Location
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-700 shadow-lg">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Visit Us At:
            </h2>
            <address className="not-italic text-gray-300 text-base md:text-lg leading-relaxed">
              Hajee Amju Miah Tower (4th Floor),<br />
              Holding No. 584,<br />
              Arakan Road, Ward No: 07, Patiya,<br />
              Chittagong-4370,<br />
              Bangladesh
            </address>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-zinc-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.72382665834687!2d91.98129678825846!3d22.293847802776842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad230009b2e35b%3A0x1632e5e805ad9bd!2sAlphee!5e0!3m2!1sen!2sbd!4v1747390765145!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alphee Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
