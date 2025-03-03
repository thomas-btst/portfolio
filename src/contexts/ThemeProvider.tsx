import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
