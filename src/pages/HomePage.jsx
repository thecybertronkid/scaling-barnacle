import { Link } from 'react-router-dom'

export default function HomePage() {
  const news = [
    {
      id: 1,
      title: 'New Policy Implementation for Digital Infrastructure',
      category: 'Policy',
      date: 'Oct 24, 2024',
      description: 'The organization has announced a comprehensive framework designed to modernize our digital backbone through strategic community partnerships.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMdDudF3A9guMN-HxIXyappQUds2ItJit4k1_9br0X3m1EacygqIIw7IC01wCdA5n59Dj2b2J_8amNJ1Pn51nRNdfOWLhlgQXv1bynYJpok5k6SNaWDXAmIrOIjPyIHuUHNsyP-IMWgijfk3bZ4BX0I0MeqDO-QCUKdPYQpePWO4LIQ6FGXiCdLefd9qvH0vXs6Y6g9o4N-mo_PclL-2BCzYWrFP8UgVtu3SKGMoeudz9xVCInumLEDh26ZeKlE-_4E0FnusyjGeyr',
      categoryColor: 'bg-primary/10 text-primary',
    },
    {
      id: 2,
      title: 'Health Camp Initiative Reaches 500+ Beneficiaries',
      category: 'Report',
      date: 'Oct 20, 2024',
      description: 'Our latest health camp across rural communities has successfully provided medical check-ups and health services to over 500 individuals.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfNA-m6Oq02g6mxFUy1Wh28vjhQodfBGkwKWCvXMfj39828fCZHOSXjTBf8FPo8o6dJ_86Ux5l0CmymM0twBM5muFoyroC6fE5njh6BUjcRxZVphd86Ihr_YK_s4Wvqqysh7e1YCQulzt1WRuQ8K8tl3aKuPc4MYRlfoAmp18sr1xs7MFgNByPY5ErH4-xSSlaAn3IXjI6k3Z_5rMY5PKr9gp-BjDtEXdRCMG39T2ENmzTxS0KN3A5b1rLnaUZ9yYRO35Tud0uCaPe',
      categoryColor: 'bg-green-100 text-green-700',
    },
    {
      id: 3,
      title: 'Community Outreach: Skill Training Program Launch',
      category: 'Community',
      date: 'Oct 15, 2024',
      description: 'Launching a new skill training program to empower youth and create sustainable livelihood opportunities in rural areas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm5tPmm312anWIrwUeP9SgC_8AEudxffH66TWgd1et9x2GMj6adSZxZlFDYzpUCPnBkZGdYjV8MYCAA3rSPEiHBoVHtKHtbyxKtmkq1odyx86kH_QK4WctZ6z4O3OYll7Shj52yJK2a0nBlRXL4D25sqoxzVP6gGeohVdzN9XvnN0B4acc9TIdhX2DmBnIFDQxSa06EUdSsS1rNISYzt9sCLOFcqqjjZibDypRiGkkOHOqCPF-K0UQb3Cf3dyBwHO13oMSEwqgPz__',
      categoryColor: 'bg-orange-100 text-orange-700',
    },
  ]

  const galleryImages = [
    {
      title: 'International Summit 2024',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfLV0uvJxNkgXhqakte1oJancyLTxvIPdacAAWRL-W4aIDDuPXfux_KYOLPCjuZ9yQ_ukIdjlV6hzdhA9MHZj0A-GKhn9XTR-k1DkyV3HlCtd2JCpDQK0RLhSAQja22qGz3rsALdbgrFMBgKyv0pS5SvKO0DRM3yHKhgzLjtuVibPYIE8QR_87xG6yoxT198dFvdQWKujxc5Bhe3h2IAR3HAPySmvpUgl2JmkrJMJa2ar2yIW4_rp72cZSTJu8Wbv2PqB1NplTsnpd',
      colSpan: 1,
    },
    {
      title: 'Laboratory Inspections',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANoP0SlC_rktN8fdQ39d4T8-ZARTi11DVm92KR0YDBRWZmyM9DNfvib26OABxDE2HA8Z_w9KII9XxNkhUoD60zm4-NSfzYiFz0gA9VXf8L2hYrHd2rC1I6a1-Wxuhs3GRKaIWuqYpyX4V-6q33xeizyhaG0tCMErNziyAe0wYnDpAx5w2makR3qvP6RE9sZk9b81X-YJ21H9xr81_NYwyYNo2Jab-gQ2weJ-NlvmiwSjlKHz58Y8YQmRrG2o6SG6oA9_-M1lNndsqa',
      colSpan: 1,
    },
    {
      title: 'Departmental Workshop & Training',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1DZaLT-E8BXjRPhI75lIJFOXYdefQ8BhWtjPGj3NTTlnGo80VDU6s9mcI-9DLGr8JFNCUk8Ptf-pY8BSXw_Rudg33FrPgBygpGmx097feUthQ3PGBFxl0KvKIx5oQyHD_hyw8F0SrqaA5UJv4_fJ6cLrik2IdX5tZdeowNS5eiQYa1131gixvIuuShG_Z-mccpeHQgf_X6kRKQReoYBpUq311f2x8kYhTU9qmgMzkR-V0QrqgQ38EPgJAFv-pXFq-OGmXa1gVoRLC',
      colSpan: 2,
    },
    {
      title: 'Strategic Planning Session',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClCEitEWDVM1ADsqmBGiWi6YC4ahtDMIx1ty72IfC8ma29aPhilmvPCsPmF4NZcDLWqRoo_eW7AJ9m8SqWJRk-z2XaQ985N53KgqWKjoc-1vz029XkVoXLzwL7zSVfCJ7VhB6IdcZRFoXs4L55uSPkGw5Ulhk62goc6VGsDR6jdmZdGkA2LKbyPPeHO2YW78jViSXGskjvzyTxJl8SSkg8xrcT26Eq_a8-2tWAIIojuYwzouqWW68z6WIzOhtixWDNMhOY7nQghVK_',
      colSpan: 2,
    },
    {
      title: 'Annual Press Briefing',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTVq7mT_ILsLcM0ydCHRbzyHOmY4DOj-amsfUyveAhBDWXnWgQbqtu9V-VgHaS4ie91-fTRItjG7WXKrmgwDn2GfN_lEjYtnUkDhvXNR9zRMfdUxro4Yw0UziszGEsT1u0Rq0AlXqxTzIBaiRFfhWNViYNxSQljQ1CQeVTf_mrAlHDGf1VWacJxSNlgIbFznlsl6WxQbyoYGYFbPq3nZinOeOpAaVd62gjb0eXrNgEBevAJhFgszbPaIB-_KKpRJO8BfcMt9REvyzk',
      colSpan: 1,
    },
    {
      title: 'National Civic Conference',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5DJAgLXd7_i9NckwoSZCU0db-cSYNVNIbzx11FTMbD4Ak_HGDrLqGO4eyg7K_s7yCMcYISjPdxqHZw_FDzE8h9opnFV9GkUogIo4gIRc80njJHClcYg2HGsYT0IpgwhSW7jMM1UOeVRLarYf3CSia3owhnps9_mSAcy-ny_ymoE63H5lbS9LY5qCpfjwML0MrdxOFrJtZPX6Zl-qL5WL1ekSgbDpa39e_7HvloPIUPjvfV3AGJjIcHUwsy3FPFvH-0Pe2ZgehslRm',
      colSpan: 1,
    },
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="aspect-[21/9] w-full bg-cover bg-center flex items-center justify-center text-center p-8"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKr45KWAVmEkkVCG9lym61boHpnpy8-0uOkqUuy8roVYGTpbUyNM2LlFX5O7SxAdnQtMfDyZBtgtPgAdidrDTZ_0CMF36JAzBTOqziYrGpTvFCKlPcFlwoBtNx3P3r__HkCVJwQbS7TM8SBK1CczBLez7goJEtnkqEty8MTBipIP9_SRDDsW2sl6gJzuVRma-V5RWSngdcHlqHBe5ABzxTbvlPnDB_kS1oBelHc1Gz5WzYUXw4zLtHnAwBcRUQ4JHnA1bg4eGIkcgj")',
            }}
          >
            <div className="max-w-3xl">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-4 leading-tight">
                Welcome to Purbottar Vikash Parishad
              </h2>
              <p className="text-white/90 text-lg mb-8 font-light">
                Purbottar Vikash Parishad is a reputed NGO in Assam serving needy, poor and backward communities of the region with health, education, and livelihood programs.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link
                  to="/services"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-blue-700 transition-all inline-block"
                >
                  Explore Services
                </Link>
                <Link
                  to="/reports"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-bold text-base hover:bg-white/20 transition-all inline-block"
                >
                  Latest Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col mb-12">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">News & Events</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Stay informed with our latest updates and official announcements</p>
            </div>
            <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all group">
              View all <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group"
            >
              <div
                className="h-48 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url("${item.image}")` }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${item.categoryColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{item.description}</p>
                <a className="text-primary text-sm font-bold flex items-center gap-1 group/link cursor-pointer hover:gap-2 transition-all">
                  Read More <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">east</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-black tracking-tight mb-2">Photo Gallery</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl h-64 cursor-pointer ${
                image.colSpan === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 duration-300">
                <span className="text-white text-sm font-semibold">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">50+</div>
                <p className="text-white/90 font-semibold">Communities Served</p>
                <p className="text-white/70 text-xs mt-1">Across the region</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">10K+</div>
                <p className="text-white/90 font-semibold">Lives Impacted</p>
                <p className="text-white/70 text-xs mt-1">Direct beneficiaries</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">25+</div>
                <p className="text-white/90 font-semibold">Active Programs</p>
                <p className="text-white/70 text-xs mt-1">Ongoing initiatives</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-5xl font-black mb-3">15+</div>
                <p className="text-white/90 font-semibold">Years Experience</p>
                <p className="text-white/70 text-xs mt-1">Since inception</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}