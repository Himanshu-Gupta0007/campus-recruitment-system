import React from 'react'
import {useState , createContext} from 'react'
import Chlidc from './Componts/Childc'
//import Navbar from './Componts/Navbar'
//const Createcontext = Createcontext(ThemeProvider)

const App = () => {
  const ThemeContext   = createContext()
  const [theme , setTheme] = useState('black')

  
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Chlidc theme={theme} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App