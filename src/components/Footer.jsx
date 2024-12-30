import { useState } from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-l to-blue-950 from-black px-6 py-12 ">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">About</h2>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Our story', 'Blogs'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-violet-700 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">Help</h2>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Track Order', 'FAQs'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-violet-700 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">Contact</h2>
            <ul className="space-y-2">
              <li>Phone:</li>
              <li className="font-medium">+97798</li>
              <li>Email:</li>
              <li className="font-medium">name@email.com</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-600">Receive new promotions</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 rounded-lg border border-violet-400 bg-white/90 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { Icon: FaTwitter, label: 'Twitter' },
                { Icon: FaFacebook, label: 'Facebook' },
                { Icon: FaLinkedin, label: 'LinkedIn' },
                { Icon: FaYoutube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-600 hover:text-violet-700 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-start justify-center space-y-4 border-t border-violet-400 pt-8 lg:flex-row lg:items-center lg:space-y-0">
  

          <div className="text-sm">
            <span>© 2024 Brand, Inc.</span>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-violet-700">
              Privacy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-violet-700">
              Terms
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-violet-700">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

