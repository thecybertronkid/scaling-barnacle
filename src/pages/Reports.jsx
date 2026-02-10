import { useState } from 'react'

export default function Reports() {
  const [selectedYear, setSelectedYear] = useState(2024)

  const reports = {
    2024: {
      title: 'Annual Report 2024',
      highlights: [
        {
          icon: 'groups',
          stat: '5,000+',
          label: 'Beneficiaries Reached',
          description: 'Direct beneficiaries from our health and education programs',
        },
        {
          icon: 'health_and_safety',
          stat: '150+',
          label: 'Health Camps',
          description: 'Medical check-ups and health awareness initiatives',
        },
        {
          icon: 'school',
          stat: '1,200',
          label: 'Students Supported',
          description: 'Scholarships and educational assistance provided',
        },
        {
          icon: 'business',
          stat: '800+',
          label: 'Skills Trained',
          description: 'Vocational training and livelihood programs',
        },
      ],
      financial: {
        revenue: '₹2,50,00,000',
        expenses: '₹2,35,00,000',
        programs: '₹1,80,00,000',
        operations: '₹45,00,000',
        admin: '₹10,00,000',
      },
    },
    2023: {
      title: 'Annual Report 2023',
      highlights: [
        {
          icon: 'groups',
          stat: '4,500+',
          label: 'Beneficiaries Reached',
          description: 'Communities supported through various initiatives',
        },
        {
          icon: 'health_and_safety',
          stat: '140+',
          label: 'Health Programs',
          description: 'Medical and wellness activities',
        },
        {
          icon: 'school',
          stat: '1,000',
          label: 'Students Assisted',
          description: 'Educational support and scholarships',
        },
        {
          icon: 'business',
          stat: '700+',
          label: 'Trained',
          description: 'Skills and livelihood training',
        },
      ],
      financial: {
        revenue: '₹2,20,00,000',
        expenses: '₹2,10,00,000',
        programs: '₹1,60,00,000',
        operations: '₹40,00,000',
        admin: '₹10,00,000',
      },
    },
  }

  const current = reports[selectedYear]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">Annual Reports</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Transparent financial and operational reports of our initiatives
        </p>
      </header>

      {/* Year Selection */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedYear(2024)}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            selectedYear === 2024
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:border-primary'
          }`}
        >
          2024
        </button>
        <button
          onClick={() => setSelectedYear(2023)}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            selectedYear === 2023
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:border-primary'
          }`}
        >
          2023
        </button>
      </div>

      {/* Report Title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-2">{current.title}</h2>
      </div>

      {/* Key Highlights */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Key Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {current.highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-gray-100 dark:border-slate-800 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <div className="text-3xl font-bold mb-2">{item.stat}</div>
              <p className="font-semibold mb-2">{item.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Summary */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Financial Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Total Revenue</p>
            <p className="text-2xl font-bold">{current.financial.revenue}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Total Expenses</p>
            <p className="text-2xl font-bold">{current.financial.expenses}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Programs</p>
            <p className="text-2xl font-bold">{current.financial.programs}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Operations</p>
            <p className="text-2xl font-bold">{current.financial.operations}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Administration</p>
            <p className="text-2xl font-bold">{current.financial.admin}</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Download Full Report</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          For a detailed breakdown of our programs, impact metrics, and financial statements, please download the complete annual report.
        </p>
        <a
          href="#"
          className="bg-white text-primary px-8 py-3 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <span className="material-symbols-outlined">download</span>
          Download PDF Report
        </a>
      </section>
    </div>
  )
}