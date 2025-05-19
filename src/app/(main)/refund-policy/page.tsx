export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">Refund Policy</h1>

      <p className="mb-4 text-sm text-gray-300">
        At <strong>Alphée</strong>, your satisfaction is our top priority. We strive to ensure that every product meets our quality standards. However, if you are not completely satisfied with your purchase, we’re here to help.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-6 mb-2">Eligibility for Refund</h2>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
        <li>The product must be unused, unwashed, and in its original condition with all tags attached.</li>
        <li>You must notify us within <strong>48 hours</strong> of receiving the product.</li>
        <li>Refunds are not applicable for products bought on discount or during flash sales.</li>
        <li>Return shipping cost must be borne by the customer unless the product is defective or incorrect.</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-6 mb-2">How to Request a Refund</h2>
      <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
        <li>Contact us via phone, email, or Facebook with your order ID and issue description.</li>
        <li>Attach clear photos of the product, if applicable (e.g. damage, wrong item).</li>
        <li>Our team will review your request and respond within 1–2 business days.</li>
      </ol>

      <h2 className="text-xl font-semibold text-primary mt-6 mb-2">Refund Process</h2>
      <p className="text-sm text-gray-300 mb-4">
        Once approved, your refund will be processed via the original payment method within 5–7 business days. If the payment was made via Cash on Delivery, we will request your preferred mobile banking account (Bkash/Nagad).
      </p>

      <h2 className="text-xl font-semibold text-primary mt-6 mb-2">Need Help?</h2>
      <p className="text-sm text-gray-300">
        We&apos;re here to assist you. Reach out to us at:
      </p>
      <ul className="text-sm text-gray-300 mt-2 space-y-1">
        <li>
          📞 <strong>Phone:</strong>{" "}
          <a href="tel:+8801973547022" className="text-primary underline">
            +880 1973-547022
          </a>
        </li>
        <li>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:alphee.bd@gmail.com" className="text-primary underline">
            alphee.bd@gmail.com
          </a>
        </li>
        <li>
          💬 <strong>Facebook:</strong>{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61572945527439" // Replace with your real page
            target="_blank"
            className="text-primary underline"
          >
            facebook.com/alphée
          </a>
        </li>
      </ul>
    </div>
  );
}
