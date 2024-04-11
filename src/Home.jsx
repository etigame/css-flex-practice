export default function Home() {
  return (
    <section className="home">
      <section className="hero">
        <img
          src="https://flex-practise.netlify.app/img/main.jpeg"
          alt="forest"
        />
        <div className="text">
          <h1>Flex class</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sint
            ipsam repellendus amet ipsa velit consectetur nobis officia quod sed
            error quis a, modi eos eligendi blanditiis! Pariatur, autem earum!
          </p>
          <a href="#">About us</a>
        </div>
      </section>
      <section className="container">
        <section className="section some-text">
          <h2>Some text</h2>
          <div className="line"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
            dignissimos pariatur corporis accusamus molestiae id, doloribus
            inventore et vel, atque expedita a temporibus consequuntur veritatis
            sequi error maxime odit repellat sed nam voluptatum beatae quam. Ex,
            nesciunt architecto iusto deleniti at libero aliquam reiciendis enim
            officiis velit nulla eum vero.
          </p>
        </section>
      </section>
      <section className="container">
        <section className="section our-team">
          <h2>Our team</h2>
          <div className="line"></div>
          <div className="team-cards">
            <div className="card">
              <img src="https://flex-practise.netlify.app/img/team-1.jpg" alt="team member" />
              <h3>Efi</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, cupiditate.
              </p>
              <a className="whats" href="https://wa.me/+9725767665?text=hii">
                Whatsapp<i className="fa fa-phone"></i>
              </a>
            </div>
            <div className="card">
               <img src="https://flex-practise.netlify.app/img/team-2.jpg" alt="team member" />
               <h3>Avia</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate.</p>
               <a className="whats" href="https://wa.me/+9725767665?text=hii">Whatsapp<i className="fa fa-phone"></i></a>
            </div>
            <div className="card">
               <img src="https://flex-practise.netlify.app/img/team-3.jpg" alt="team member" />
               <h3>Meir</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, cupiditate.</p>
               <a className="whats" href="https://wa.me/+9725767665?text=hii">Whatsapp<i className="fa fa-phone"></i></a>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
