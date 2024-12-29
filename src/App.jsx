import { ShoppingCart, Search, User } from 'lucide-react'
import Features from './components/Features'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black">
        <div className="flex items-center gap-4">
          <img src="https://placehold.co/40x40" alt="Blaze Gear Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Blaze Gear</h1>
        </div>
        
        <div className="flex-1 max-w-xl mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search product..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-purple-400">Shop</a>
          <a href="#" className="hover:text-purple-400">Offers</a>
          <a href="#" className="hover:text-purple-400">Blogs</a>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart (0)</span>
          </div>
          <button className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
            Sign in
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gradient-to-br from-[#2a2a2a] to-black rounded-lg mx-4 my-6">
        <div className="lg:col-span-2 relative overflow-hidden rounded-lg bg-black p-8">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">Luxury Finds a<br />New Address</h2>
            <button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          <img
            src="https://placehold.co/800x400"
            alt="Luxury Headphones"
            className="absolute right-0 bottom-0 w-2/3 object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div className="bg-purple-600 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Top Offer</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">iPad Pro</p>
                <p>128GB</p>
                <p className="text-xl font-bold mt-2">20% Discount</p>
              </div>
              <img
                src="https://placehold.co/150x150"
                alt="iPad Pro"
                className="w-32 h-32 object-cover"
              />
            </div>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">OUR BEST<br />COLLECTION</h3>
            <div className="flex justify-between items-center">
              <p className="text-lg">MEN'S WATCH</p>
              <img
                src="https://placehold.co/150x150"
                alt="Men's Watch"
                className="w-32 h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our products</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-purple-600 rounded-full">Best-sellers</button>
            <button className="px-4 py-2 bg-gray-800 rounded-full">New products</button>
            <button className="px-4 py-2 bg-gray-800 rounded-full">See all</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Mic",
              description: "Best professional mic for recording",
              price: "Rs.9999",
              image: "https://placehold.co/300x300"
            },
            {
              name: "Alexa speaker",
              description: "Best quality speaker for listening music",
              price: "Rs.5030",
              image: "https://placehold.co/300x300"
            },
            {
              name: "AirPods",
              description: "Best quality AirPods",
              price: "Rs.3999",
              image: "https://placehold.co/300x300"
            },
            {
              name: "65w Fast charger",
              description: "Best fast charger made in Japan",
              price: "Rs.480",
              image: "https://placehold.co/300x300"
            },
            {
              name: "Epson projector",
              description: "Best projector for streaming videos",
              price: "Rs.12000",
              image: "https://placehold.co/300x300"
            },
            {
              name: "Canon camera",
              description: "Best camera for capturing your moments",
              price: "Rs.150000",
              image: "https://placehold.co/300x300"
            },
            {
              name: "JBL Headphone",
              description: "Professional headsets for gaming",
              price: "Rs.32000",
              image: "https://placehold.co/300x300"
            },
            {
              name: "Gaming Controller",
              description: "Best controller for playing games",
              price: "Rs.22200",
              image: "https://placehold.co/300x300"
            }
          ].map((product, index) => (
            <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4 relative group">
              <span className="absolute top-2 right-2 bg-gray-700 px-2 py-1 rounded text-xs">
                Best-seller
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">{product.price}</span>
                <button className="p-2 bg-transparent border border-gray-600 rounded-md hover:bg-gray-800">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Features/>
      <Reviews/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

