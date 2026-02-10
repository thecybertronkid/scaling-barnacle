import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      title: 'Health Camp Initiative',
      src: 'https://images.unsplash.com/photo-1576091160550-112667149b5b?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 2,
      title: 'Education Program',
      src: 'https://images.unsplash.com/photo-1427504494785-cdec707157f0?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 3,
      title: 'Community Gathering',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      colSpan: 2,
    },
    {
      id: 4,
      title: 'Skill Training Session',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f70d2f4e5?w=600&h=400&fit=crop',
      colSpan: 2,
    },
    {
      id: 5,
      title: 'Agricultural Support',
      src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop',
      colSpan: 1,
    },
    {
      id: 6,
      title: 'Women Empowerment',
      src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&h=400&fit=crop',
      colSpan: 1,
    },
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Photo Gallery</h1>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Glimpses of our community development programs and initiatives
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl h-64 cursor-pointer transition-all ${
                image.colSpan === 2 ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">{image.title}</p>
                  <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-base">zoom_in</span>
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
            </div>

            {/* Title */}
            <div className="text-center mt-6">
              <h2 className="text-white text-2xl font-bold">{selectedImage.title}</h2>
              <p className="text-white/70 mt-2 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined">image</span>
                Click outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}