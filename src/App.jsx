import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import MainCmp from './MainCmp'

function App() {
  const [cmp, setCmp] = useState('home')
  const [isDark, setIsDark] = useState(false)

  return (
    <section className={'app', isDark ? 'dark' : ''}>
      <Header setCmp={setCmp} isDark={isDark} setIsDark={setIsDark}/>
      <MainCmp cmp={cmp}/>
      <Footer />
    </section>
  )
}

export default App
