import { useState } from 'react'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img src="/Images/Logo.jpg" alt="Purbottar Vikash Parishad Logo" className="h-16 w-auto" />
            <h1 className="text-2xl font-black tracking-tight uppercase">Purbottar Vikash Parishad</h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}