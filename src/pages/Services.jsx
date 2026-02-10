import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: 'favorite',
      title: 'Health & Wellness',
      description: 'Regular health camps, medical check-ups, awareness programs, and health insurance assistance for vulnerable communities.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: 'school',
      title: 'Education Programs',
      description: 'Scholarship programs, skill training workshops, digital literacy initiatives, and educational support for underprivileged children.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'business_center',
      title: 'Livelihood Support',
      description: 'Vocational training, microfinance assistance, self-employment programs, and market linkage support for sustainable income.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'agriculture',
      title: 'Agricultural Support',
      description: 'Organic farming training, modern agricultural techniques, soil testing, and assistance with quality seeds and tools.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'home',
      title: 'Housing & Infrastructure',
      description: 'Support for construction of houses, sanitation facilities, water supply systems, and community infrastructure development.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'group',
      title: 'Women & Child Welfare',
      description: 'Women empowerment programs, child protection initiatives, nutrition support, and maternal health awareness campaigns.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Services</h1>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Purbottar Vikash Parishad provides comprehensive services focused on health, education, livelihood, and community development. Our programs are designed to bring sustainable change in the lives of vulnerable communities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              {/* Color Bar */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all group-hover:scale-110 duration-300 text-white`}>
                  <span className="material-symbols-outlined text-4xl">
                    {service.icon}
                  </span>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Link */}
                <a className="inline-flex items-center text-primary font-semibold text-sm group/link hover:gap-2 transition-all">
                  Learn More
                  <span className="material-symbols-outlined text-lg ml-2 group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary via-blue-600 to-primary rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Our Help?</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              If you or your community needs support with any of our services, we are here to help. Get in touch with us to learn more about how we can assist you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              <span className="material-symbols-outlined">mail</span>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">Service Highlights</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Communities Reached</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Active programs</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">10K+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Direct Beneficiaries</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Individuals served</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">25+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Programs Active</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Ongoing initiatives</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-all">
            <div className="text-4xl font-black text-primary mb-2">15+</div>
            <p className="text-gray-600 dark:text-gray-400 font-semibold">Years Experience</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Since inception</p>
          </div>
        </div>
      </section>
    </div>
  )
}