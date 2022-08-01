import React, { useCallback, useState } from 'react'

interface ThemeValue {
  theme: Array<string>
  handleBackground: () => any
  handleColors: () => any
}

export const ThemeContext = React.createContext<ThemeValue>({
  theme: ['light', 'blue'],
  handleBackground: () => null,
  handleColors: () => null
})

interface Props {
  children: any
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(['light', 'blue'])
  const handleBackground = useCallback(() => {
    if (theme[0] === 'light') {
      setTheme(['dark', theme[1]])
    } else {
      setTheme(['light', theme[1]])
    }
  }, [theme, setTheme])
  const handleColors = useCallback(() => {
    // fix this after
    setTheme([theme[0], ''])
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={{ theme, handleBackground, handleColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
