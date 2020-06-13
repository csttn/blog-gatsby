const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if(theme === 'light') return '#DEF2F1'
  if(theme === 'dark') return '#1A1A1D'
}

export default getThemeColor