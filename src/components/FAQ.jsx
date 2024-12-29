import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay for secure and convenient transactions.'
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you\'ll receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s site.'
  },
  {
    question: 'How do I return or exchange products?',
    answer: 'We offer a 30-day return policy. To initiate a return or exchange, please log into your account and follow the instructions in the "Orders" section.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-900" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-700 pb-4">
              <button
                className="flex justify-between items-center w-full text-left text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300 transition-all duration-300 ease-in-out">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

