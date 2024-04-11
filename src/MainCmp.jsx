import About from './About'
import FAQ from './FAQ'
import Home from './Home'

export default function MainCmp({cmp}) {
    
    return (
        <section className='main-cmp'>
            {cmp === 'home' && <Home />}
            {cmp === 'about' && <About />}
            {cmp === 'faq' && <FAQ />}
        </section>
    )
}