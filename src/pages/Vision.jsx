export default function Vision() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Vision & Mission</h1>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-10 border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">visibility</span>
              </div>
              <h2 className="text-3xl font-black">Our Vision</h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              To create a just, equitable, and sustainable society where every individual, irrespective of their socio-economic background, has access to quality health, education, livelihood opportunities, and lives with dignity and respect.
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-10 border border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-green-600 text-4xl">trending_up</span>
              </div>
              <h2 className="text-3xl font-black">Our Mission</h2>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              To empower vulnerable and marginalized communities through sustainable development programs that focus on health promotion, quality education, livelihood enhancement, and social welfare. We are committed to working with utmost integrity and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2">Strategic Objectives</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          <div className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-lg mb-2">Health & Wellness</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Promote preventive healthcare, provide medical services, and build awareness about health and hygiene in communities. Ensure access to quality healthcare services for all, especially vulnerable populations.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-lg mb-2">Quality Education</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ensure access to quality education, skill development, and digital literacy for all, especially children from disadvantaged backgrounds. Support lifelong learning and professional development.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">business_center</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-lg mb-2">Livelihood Enhancement</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Create sustainable livelihood opportunities through vocational training, entrepreneurship support, and market linkages. Enable communities to achieve economic independence and self-sufficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary/50">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-lg mb-2">Community Development</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Strengthen community participation, build social capital, and promote collective action for sustainable development. Foster inclusive governance and community leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary via-blue-600 to-primary rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black mb-4">Our Commitment</h2>
            <p className="text-white/90 leading-relaxed">
              We are committed to bringing lasting change through evidence-based interventions, continuous learning, and community partnership. Together, we strive to build a brighter future where development reaches every doorstep and transforms lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}