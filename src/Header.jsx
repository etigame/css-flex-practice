export default function Header({ setCmp }) {
  return (
    <section className="header">
      <a className="logo" href="#">
        fle<span>x</span>
      </a>
      <nav>
        <i className="fa-solid fa-bars"></i>
        <ul>
          <li>
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
          </li>
        </ul>
      </nav>
      <button className="mode-btn">🌙</button>
    </section>
  )
}
