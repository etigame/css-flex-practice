import {useState} from 'react'

export default function Header({ setCmp, isDark, setIsDark }) {
  const cmps = ['home', 'about', 'faq']
  const [activeLink, setActiveLink] = useState(0)

  const handleClick = (cmp, idx) => {
    setCmp(cmp)
    setActiveLink(idx)
  }

  return (
    <section className="header">
      <a className="logo" href="#">
        fle<span>x</span>
      </a>
      <nav>
        <i className="fa-solid fa-bars"></i>
        <ul>
          {cmps.map((cmp, idx) => {
            return (
              <li key={cmp} className={activeLink === idx ? 'active' : ''}>
                <a href="#" onClick={() => handleClick(cmp, idx)}>
                  {cmp}
                </a>
              </li>
            )
          })}
          {/* <li>
            <a href="#" onClick={() => setCmp('home')}>
              home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCmp('about')}>
              about
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCmp('faq')}>
              FAQ
            </a>
          </li> */}
        </ul>
      </nav>
      <button className="mode-btn" onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? '☀️' : '🌙'}
      </button>
    </section>
  )
}
