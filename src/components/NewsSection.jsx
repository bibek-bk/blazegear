import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function NewsSection() {
  return (
    <div className="bg-[#0a0a0a] h-[30rem]">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <div className="lg:w-1/3 space-y-6">
          <h1 className="text-white text-5xl font-semibold leading-tight">
            Read what's new
          </h1>
          <button className="bg-[#7B6EF6] hover:bg-[#6A5ED3] transition-colors text-white px-6 py-2.5 rounded-lg">
            Explore more
          </button>
          <div className="flex gap-4 mt-8">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Right content - Image */}
        <div className="lg:w-2/3">
          <img 
            src="https://placehold.co/800x400" 
            alt="Apple devices showcase" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

