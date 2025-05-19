"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery (COD), mobile banking options like bKash and Nagad, and online payment gateways for a secure checkout experience.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery within Chattogram city takes 1–2 business days. Outside Chattogram, delivery typically takes 3–4 days.",
  },
  {
    question: "What are the delivery charges?",
    answer:
      "Delivery charge is ৳50 within Chattogram city and ৳100 for outside Chattogram locations.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes, you can request an exchange within 3 days of delivery if the product is unused, unwashed, and in original packaging. Returns for refunds are not accepted.",
  },
  {
    question: "Do you deliver nationwide?",
    answer: "Yes, we deliver all across Bangladesh with transparent delivery charges.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You will receive SMS or email notifications with tracking information once your order is shipped.",
  },
  {
    question: "What should I do if I receive a defective or wrong item?",
    answer:
      "Contact our customer support immediately via Facebook or email at support@alphee.com. We will arrange for a replacement or exchange.",
  },
  {
    question: "Are your products authentic and of good quality?",
    answer:
      "Absolutely. We maintain strict quality control to ensure every product meets our premium standards.",
  },
  {
    question: "How can I be sure about the size?",
    answer:
      "We provide detailed size charts on every product page to help you choose the perfect fit.",
  },
  {
    question: "Can I order in bulk for events or corporate use?",
    answer:
      "Yes, we accept bulk orders and corporate orders. Please contact us directly to discuss your requirements.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "We regularly offer special promotions and discounts via our social media channels and newsletters. Stay tuned!",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via our Facebook page, email at support@alphee.com, or through the contact form on our website.",
  },
  {
    question: "Is it safe to shop on your website?",
    answer:
      "Yes, our website uses secure payment gateways and protects your data with industry-standard security measures.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We do not accept returns for refunds, but we provide easy exchanges for faulty or incorrect products within 3 days.",
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Orders can be cancelled only before they are shipped. Please contact customer support as soon as possible to cancel.",
  },
  {
    question: "Do you have physical stores?",
    answer:
      "Currently, Alphée is an online brand, but we do organize pop-up events occasionally. Follow us on social media for updates.",
  },
  {
    question: "Can I change my delivery address after placing an order?",
    answer:
      "Address changes can be made only before the order is shipped. Contact our support team immediately for assistance.",
  },
  {
    question: "What if my order gets lost or delayed?",
    answer:
      "We track all shipments closely. If your order is delayed or lost, please contact us, and we will resolve the issue promptly.",
  },
  {
    question: "Do you provide gift wrapping services?",
    answer:
      "Gift wrapping is currently not available, but we plan to add this service in the future.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "All products undergo strict quality checks during and after production to ensure you receive only the best.",
  },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
              }}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h2 className="flex justify-between items-center text-lg font-semibold text-primary">
                {faq.question}
                <span className="ml-2 text-xl select-none">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h2>
              {activeIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
