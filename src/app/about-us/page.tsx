export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">About Alphée</h1>

      <p className="mb-4 text-sm text-gray-300">
        Alphée is a fashion-forward e-commerce brand based in Bangladesh, blending traditional elegance with modern style. We focus on delivering premium quality products that reflect a “Fusion of Class and Style.”
      </p>

      {/* Mission */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-primary mb-2">🎯 Mission</h2>
        <p className="text-sm text-gray-300">
          To redefine fashion retail in Bangladesh by offering stylish, high-quality clothing at accessible prices—delivered with trust, transparency, and top-notch customer service.
        </p>
      </section>

      {/* Vision */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-2">👁️ Vision</h2>
        <p className="text-sm text-gray-300">
          To become the most loved and reliable online fashion destination in Bangladesh, known for setting trends, celebrating local culture, and empowering youth through style.
        </p>
      </section>

      {/* Objective */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-2">📌 Objective</h2>
        <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
          <li>Ensure customer satisfaction through quality and consistency</li>
          <li>Introduce regular product drops aligned with seasonal trends</li>
          <li>Offer seamless shopping experiences via a mobile-optimized platform</li>
          <li>Build a loyal and style-conscious community</li>
        </ul>
      </section>

      {/* Goal */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-2">🏆 Goal</h2>
        <p className="text-sm text-gray-300">
          Our ultimate goal is to scale Alphée into a nationwide brand, representing Bangladeshi youth culture and becoming a household name in fashion e-commerce.
        </p>
      </section>

      {/* Owners */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-primary mb-4">👥 Meet the Founders</h2>

        <div className="space-y-4">
          <div>
            <a href="https://rafidul-portfolio.vercel.app/"
              target="_blank" className="text-sm text-gray-300 font-medium">Md. Rafidul Islam</a>
            <p className="text-sm text-gray-400">Founder</p>
          </div>

          <div>
            <p className="text-sm text-gray-300 font-medium">Md. Jobayed Hossen</p>
            <p className="text-sm text-gray-400">Founder</p>
          </div>
        </div>
      </section>

      <p className="text-xs text-gray-500 mt-10 italic">Alphée — Fusion of Class and Style</p>
    </div>
  );
}
