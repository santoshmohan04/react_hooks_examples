import { useState, createContext } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import TodoComponent from './components/TodoComponent';

export const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
    <TodoComponent/>
    </>
  )
}

export default App
