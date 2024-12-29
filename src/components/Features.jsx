import React from 'react'
import { Zap, ShieldCheck, CreditCard } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: 'Wide Variety of Products',
      description: 'Explore our vast selection of the latest tech gadgets and accessories.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
      title: 'Secure Payment Options',
      description: 'Shop with confidence using our encrypted and secure payment gateways.'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-400" />,
      title: 'Easy Checkout',
      description: 'Experience a smooth and hassle-free checkout process.'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose BlazeGear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

