import React, { useCallback, useState } from 'react'

interface ThemeValue {
  backgroundTheme: string
  colorTheme: string
  handleBackground: () => any
  handleColors: () => any
}

export const ThemeContext = React.createContext<ThemeValue>({
  backgroundTheme: 'light',
  colorTheme: 'default',
  handleBackground: () => null,
  handleColors: () => null
})

interface Props {
  children: any
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [backgroundTheme, setBackgroundTheme] = useState('light')
  const [colorTheme, setColorTheme] = useState('blue')
  const handleBackground = useCallback(() => {
    if (backgroundTheme === 'light') {
      setBackgroundTheme('dark')
    } else {
      setBackgroundTheme('light')
    }
  }, [backgroundTheme, setBackgroundTheme])
  const handleColors = useCallback(() => {
  }, [colorTheme, setColorTheme])

  return (
    <ThemeContext.Provider value={{
      backgroundTheme, handleBackground,
      colorTheme, handleColors
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
