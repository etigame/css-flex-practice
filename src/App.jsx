import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import MainCmp from './MainCmp'

function App() {
  const [cmp, setCmp] = useState('home')

  return (
    <section className="app">
      <Header setCmp={setCmp}/>
      <MainCmp cmp={cmp}/>
      <Footer />
    </section>
  )
}

export default App
