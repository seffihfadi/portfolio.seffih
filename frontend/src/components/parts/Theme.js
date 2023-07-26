import { useState, useEffect } from "react"

const Theme = () => {
/*
  const themeStored = localStorage.getItem('sfp-theme') !== null ? false : localStorage.getItem('sfp-theme') 
  const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useState('')

  if (!themeStored) {
    localStorage.setItem('sfp-theme', preferDark ? 'dark' : 'light')
    setTheme(preferDark ? 'dark' : 'light')
  } else {
    setTheme(themeStored)
  }

  //const siteTheme = localStorage.getItem('sfp-theme')
  
  //console.log(isSetedDark)
*/
  
  
  const [theme, setTheme] = useState('light')
  /*
  useEffect(() => {
    const existTheme = localStorage.getItem('sfp-theme') !== null
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (!existTheme) {
      localStorage.setItem('sfp-theme', preferDark ? 'dark' : 'light')
      setTheme(preferDark ? 'dark' : 'light')
    } else {
      setTheme(localStorage.getItem('sfp-theme'))
      document.documentElement.classList.add(localStorage.getItem('sfp-theme'))
    }
    
  }, [])

*/
  //const [theme, setTheme] = useState('')
  const currentTheme = theme == 'dark' ? 'light' : 'dark'
  const handleTheme = () => {
    
    setTheme(currentTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    
  <div className="theme">
    <button onClick={handleTheme} className="btn-switch">
      {theme == 'dark' ? 
        <span>
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span> 
      : 
        <span>
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>  
      }<span className="mx-2">{currentTheme}</span>  
    </button>
      
      
  </div>
  
  )
}

export default Theme