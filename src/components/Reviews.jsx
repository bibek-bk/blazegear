import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'Great products and excellent customer service! Will definitely shop here again.'
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Wide variety of tech products. Shipping was fast and everything arrived in perfect condition.'
  },
  {
    name: 'Mike Johnson',
    rating: 5,
    comment: 'BlazeGear has become my go-to for all things tech. Highly recommended!'
  }
]

export default function Reviews() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

