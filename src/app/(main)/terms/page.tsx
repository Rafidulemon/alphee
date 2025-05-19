import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Terms & Conditions
        </h1>

        <section className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
          {/* General Terms */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">1. General</h2>
            <p>
              Welcome to Alphée. By accessing and using our website, social media platforms, or making purchases from us, you agree to comply with and be bound by the following terms and conditions. These terms may be updated from time to time without prior notice, and your continued use of our services signifies acceptance of any modifications.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age or using the site under the supervision of a parent or guardian to make purchases. Alphée reserves the right to cancel any order placed by users who do not meet this criterion.
            </p>
          </div>

          {/* Product Information */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Product Descriptions</h2>
            <p>
              We make every effort to ensure product descriptions and images are accurate and up to date. However, slight variations in color or design may occur due to digital display differences. Alphée reserves the right to correct any errors or inaccuracies without prior notice.
            </p>
          </div>

          {/* Pricing and Payment */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Pricing & Payments</h2>
            <p>
              All prices listed are in Bangladeshi Taka (৳) and are inclusive of applicable VAT where required. Payment can be made via cash on delivery, mobile banking (bKash/Nagad), or other payment gateways as made available. Alphée reserves the right to change prices at any time without prior notice.
            </p>
          </div>

          {/* Shipping & Delivery */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Shipping & Delivery</h2>
            <p>
              Orders are processed within 1–2 business days. Standard delivery times range from 2 to 5 days, depending on your location. Delivery charges apply based on shipping destination (e.g., Inside Chattogram: ৳50, Outside: ৳100). Alphée is not liable for delays caused by third-party delivery partners.
            </p>
          </div>

          {/* Returns & Exchange */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Return & Exchange</h2>
            <p>
              We accept exchanges within 3 days of delivery for items that are unused, unwashed, and in original packaging. Return shipping costs are borne by the customer unless the product was defective or incorrect. We do not offer cash refunds.
            </p>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">7. Order Cancellation</h2>
            <p>
              Orders can be canceled within 2 hours of placement by contacting our support team. Alphée reserves the right to cancel any order due to stock unavailability, suspicious activity, or system errors.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">8. Intellectual Property</h2>
            <p>
              All content on Alphée’s platforms, including images, logos, product names, graphics, and text, are the intellectual property of Alphée and may not be used or reproduced without prior written permission.
            </p>
          </div>

          {/* User Conduct */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">9. User Conduct</h2>
            <p>
              Users are prohibited from using our website for unlawful activities, including but not limited to fraud, spreading harmful content, or violating intellectual property rights. Alphée reserves the right to restrict or terminate access to users engaging in misconduct.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">10. Limitation of Liability</h2>
            <p>
              Alphée shall not be held liable for any direct, indirect, or incidental damages resulting from your use of our website or products. All services are provided &quot;as is&quot; without warranties of any kind.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">11. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of the People&apos;s Republic of Bangladesh. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Chattogram.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">12. Contact Us</h2>
            <p>
              For any queries, concerns, or feedback related to these terms, you may contact us via our Facebook page or email us at: <span className="text-white">support@alphee.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
