import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Fusion of Class and Style
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Alphée is more than a clothing brand — it&apos;s a movement. We
            craft experiences that fuse timeless tradition with today’s trends
            for the bold and style-conscious generation of Bangladesh.
          </p>
        </section>

        {/* Mission, Vision, Goal */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h2 className="text-xl font-semibold text-primary mb-2">
              🎯 Mission
            </h2>
            <p className="text-sm text-gray-300">
              To redefine fashion retail in Bangladesh by delivering
              trendsetting, premium-quality clothing with trust, transparency,
              and top-tier customer service.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h2 className="text-xl font-semibold text-primary mb-2">
              👁️ Vision
            </h2>
            <p className="text-sm text-gray-300">
              To become Bangladesh&apos;s most loved fashion brand — known for
              setting trends, celebrating local culture, and empowering youth
              through style.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h2 className="text-xl font-semibold text-primary mb-2">🏆 Goal</h2>
            <p className="text-sm text-gray-300">
              Scale Alphée into a nationwide lifestyle brand representing the
              voice, vibe, and vision of modern Bangladesh.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            📌 Our Core Objectives
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li>Ensure consistent product quality and customer satisfaction</li>
            <li>Introduce regular seasonal and trend-based drops</li>
            <li>Offer seamless mobile-first shopping experiences</li>
            <li>Build and empower a fashion-forward community</li>
          </ul>
        </section>

        {/* Founders */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            👥 Meet the Founders
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Rafid */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-700 p-4 flex flex-col items-center text-center">
              <Image
                src="/images/rafid.png"
                alt="Md. Rafidul Islam"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <a
                href="https://rafidul-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-white hover:text-primary transition"
              >
                Md. Rafidul Islam
              </a>
              <p className="text-gray-400 text-sm">Founder & Lead Developer</p>
            </div>

            {/* Jubayed */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-700 p-4 flex flex-col items-center text-center">
              <Image
                src="/images/jubayed.png"
                alt="Md. Jobayed Hossen"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <p className="text-lg font-semibold text-white">
                Md. Jobayed Hossen
              </p>
              <p className="text-gray-400 text-sm">
                Founder & Operations Manager
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-justify">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            🏢 Alphée
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            In the dynamic world of fashion retail, Alphée emerges as a
            next-generation clothing brand from Bangladesh, redefining how
            modern consumers connect with style. Blending digital innovation
            with a strong cultural foundation, Alphée offers a seamless shopping
            experience through its online store, community-driven content, and
            customer-first approach. Built by a passionate team, Alphée is more
            than a brand — it&apos;s a lifestyle movement.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            💻 E-Commerce Excellence
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            At the heart of Alphée’s journey is its user-friendly e-commerce
            platform, optimized for both mobile and desktop. The website serves
            as a sleek storefront where customers can explore curated
            collections — from traditional wear like panjabis to trendy
            essentials like graphic tees and polos. Thoughtfully organized
            categories, size filtering, and secure checkout processes ensure
            that every customer enjoys a smooth, intuitive, and hassle-free
            shopping experience.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            🏬 Brand Identity
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Alphée is built for the bold and style-conscious generation of
            Bangladesh. With every drop, the brand sets out to merge global
            fashion trends with local cultural aesthetics. Through fashion
            storytelling and interactive campaigns on platforms like Facebook
            and Instagram, Alphée cultivates a loyal, fashion-forward community
            that doesn’t just wear the brand — they represent it.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            🏭 In-House Brand Management
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Unlike traditional resellers, Alphée takes ownership of its brand
            experience end-to-end — from design and production partnerships to
            product storytelling and customer communication. This
            direct-to-consumer approach ensures brand authenticity, quality
            control, and transparency. By managing operations internally, Alphée
            maintains high standards and consistently delivers value.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            📦 Versatile Order Fulfillment
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Whether it’s individual pieces from the latest seasonal collection
            or bulk orders for events and collaborations, Alphée handles a wide
            range of customer needs. The streamlined order system includes
            flexible delivery options and real-time support, reinforcing the
            brand’s commitment to service excellence. Special attention is given
            to areas like Chattogram, where Alphée originated, offering
            prioritized logistics and support.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            💬 Customer-Centric Philosophy
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Alphée isn’t just about selling clothes — it’s about delivering
            trust. From responsive support to fair return policies, the brand
            operates with integrity and transparency. Regular customer feedback
            loops help inform new designs, ensuring that every product reflects
            real customer needs and preferences.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            🌱 Social Responsibility & Sustainability
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Alphée believes in responsible fashion. With an eye on environmental
            impact, the brand supports sustainable production practices, ethical
            sourcing, and eco-conscious packaging initiatives. Alphée also
            collaborates with local artisans and small vendors, helping foster
            inclusive economic growth.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            🚀 Digital-First Marketing Strategy
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Leveraging the power of storytelling, Alphée’s marketing strategy
            combines influencer collaborations, trend-driven content, and
            seasonal campaigns. Limited drops, exclusive discounts, and flash
            sales drive engagement while building hype around the brand. Through
            a bold digital voice and aesthetic consistency, Alphée stays
            relevant and aspirational.
          </p>

          <h3 className="text-lg font-semibold text-primary mt-6 mb-2">
            📈 Future Outlook
          </h3>
          <p className="text-sm text-gray-300">
            Looking ahead, Alphée aims to evolve into a nationwide fashion and
            lifestyle brand. With plans to introduce a mobile app, expand
            product categories, and establish physical experience points, the
            brand envisions a future where style is accessible, expressive, and
            proudly local. As Alphée grows, its mission remains clear: to be the
            Fusion of Class and Style for every generation of Bangladesh.
          </p>
        </section>

        {/* Closing Statement */}
        <p className="text-center text-xs text-gray-500 mt-10 italic">
          Alphée — Driven by Passion. Styled for You.
        </p>
      </div>
    </div>
  );
}
