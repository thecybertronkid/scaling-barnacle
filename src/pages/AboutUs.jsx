export default function AboutUs() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">About Us</h1>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Purbottar Vikash Parishad (PVP) is a Non-Government Organization working for social development of the backward and poor communities in Assam. The organization is engaged in addressing key issues related to health, education and livelihood.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-8xl opacity-20">image</span>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-black mb-2">Our Journey</h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Purbottar Vikash Parishad was established with a mission to bring positive change in the lives of underprivileged communities in Assam. Over the years, we have successfully implemented numerous programs and projects focusing on health, education, and sustainable livelihood.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our dedicated team of professionals and volunteers work tirelessly to ensure that every individual gets equal opportunities to grow and prosper. We believe in transparency and accountability in all our operations and remain committed to creating a better future for our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2">Key Statistics</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 dark:bg-primary/20">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Communities</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">50+</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Active partnerships</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/20">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lives Impacted</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">10,000+</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Direct beneficiaries</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/20">
                  <span className="material-symbols-outlined text-purple-600">check_circle</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Programs</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">25+</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Ongoing initiatives</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100 dark:bg-orange-900/20">
                  <span className="material-symbols-outlined text-orange-600">check_circle</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">15+</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Years serving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2">Our Core Values</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">integrity</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We operate with complete transparency and honesty in all our dealings and operations.
            </p>
          </div>

          <div className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We believe in collaborative efforts and community participation for sustainable development.
            </p>
          </div>

          <div className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">eco</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We focus on long-term solutions that benefit both people and the environment.
            </p>
          </div>

          <div className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">favorite</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Compassion</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We are driven by empathy and a genuine desire to help others in need.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}