import { useNavigate } from 'react-router-dom'
import './About.css'
import dreamCityImage from '../../assets/Gallery/dreamcity.jpeg'
import lakeImage from '../../assets/Gallery/lake.jpeg'
import parkImage from '../../assets/Gallery/park1.jpeg'
import layout from '../../assets/Gallery/layout.jpeg'

const features = [
    ['2,000+', 'Acres', 'A vast plotted landscape covering thousands of acres in the southern outskirts of Hyderabad.'],
    ['60,000+', 'Plots', 'Individual plots distributed across multiple blocks, from 120 sq. yds to 2400+ sq. yds.'],
    ['2006', 'Completed', 'An established layout, not a newly announced project. The land has had years to develop naturally.'],
    ['Teak', 'Plantations', 'Existing teak plantations in applicable areas provide natural character to the landscape.'],
    ['Roads', 'Infrastructure', 'Established road connectivity across the venture with approach roads from major highways.'],
    ['Power', 'Connectivity', 'Electricity infrastructure is already available across applicable parts of the venture.'],
]

const plotSizes = ['120', '200', '240', '360', '480', '600', '800', '900', '1000', '1200', '2400+']

const possibilities = [
    'Investment & asset creation', 'Farmhouse / weekend retreat', 'Farm land & organic farming',
    'Plantation & green living', 'Future residential development', 'Generational wealth building',
    'Vegetable & fruit gardens', 'Recreation & family space',
]

const possibilityIcons = ['↗', '⌂', '✦', '❋', '⌘', '◇', '❀', '◉']

function About() {
    const navigate = useNavigate()

    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-content">
                    <div className="about-hero-copy">
                        <p className="about-eyebrow">The Janaharsha landscape</p>
                        <h1>A landscape with a <em>head start.</em></h1>
                        <p>2,000+ acres, 60,000+ plots and an established story in the southern outskirts of Hyderabad.</p>
                    </div>
                    <div className="about-hero-image">
                        <img src={layout} alt="Janaharsha Dream City plotted landscape" />
                        {/* <span>Janaharsha, Hyderabad</span> */}
                    </div>
                </div>
            </section>

            {/* <section className="about-gallery about-content" aria-label="Janaharsha gallery">
                <div className="about-gallery-heading"><p className="about-eyebrow">A closer look</p><h2>The landscape in <em>view.</em></h2></div>
                <div className="about-gallery-list">
                    <figure><img src={layoutGalleryImage} alt="Janaharsha layout and roads" /><figcaption>Connected layouts</figcaption></figure>
                    <figure><img src={lakeImage} alt="Lake near the Janaharsha landscape" /><figcaption>Open surroundings</figcaption></figure>
                    <figure><img src={parkImage} alt="Green park area in Janaharsha" /><figcaption>Green spaces</figcaption></figure>
                </div>
            </section> */}

            <section className="about-introduction about-content">
                <div className="about-section-label">
                    <p>Introduction to Janaharsha</p>
                    <img src={parkImage} alt="" />
                </div>
                <div>
                    <h2>Land that has already begun to <em>grow.</em></h2>
                    <p>Janaharsha is one of the largest plotted land ventures in the southern outskirts of Hyderabad. Spread across over 2,000 acres, it comprises more than 60,000 individual plots distributed across multiple blocks and localities.</p>
                    <p>The venture was completed in 2006, making it an established layout rather than a newly announced development. Over the years, parts of the venture have developed teak plantations, road infrastructure and electricity connectivity.</p>
                </div>
            </section>

            <section className="about-location-advantages about-content about-cta-near">
                <div className="about-section-heading">
                    <p className="about-eyebrow">Location advantage</p>
                    <h2>Connected to the places shaping the <em>future.</em></h2>
                </div>
                <div className="location-advantage-list">
                    <article><span>01</span><h3>Near Ramoji Film City</h3><p>A recognised destination nearby that adds visibility and everyday relevance to the surrounding corridor.</p></article>
                    <article><span>02</span><h3>Access to ORR connections</h3><p>Road links towards the Outer Ring Road and major routes make the wider area easier to reach from Hyderabad.</p></article>
                    <article><span>03</span><h3>Growing local infrastructure</h3><p>Neighbouring areas such as Ibrahimpatnam and Raipole continue to develop, supporting long-term interest in the region.</p></article>
                </div>
            </section>

            <section className="about-history">
                <div className="about-content history-grid">
                    <div className="history-copy-hed">
                        <p className="about-eyebrow">Development history</p>
                        <h2>A long-term view of the <em>Landscape.</em></h2>
                    </div>
                    <div className="history-copy">
                        <p>Janaharsha was developed as a large-scale plotted venture in the southern corridor of Hyderabad. The project was completed in 2006, with thousands of plots carved across multiple blocks and varying plot sizes.</p>
                        <p>Over the years, the venture has seen natural growth. Teak plantations have matured in applicable areas, roads have been laid, and electricity infrastructure has been established.</p><p>Surrounding localities including Ibrahimpatnam, Polkampally, Manneguda, Raipole and Naganpally have also seen gradual development.</p>
                    </div>
                </div>
            </section>

            <section className="about-possibilities about-content">
                <div className="about-section-heading">
                    <p className="about-eyebrow">Long-term land-use possibilities</p>
                    <h2>Begin with land. Build your <em>own direction.</em></h2>
                </div>
                <div className="possibility-grid">
                    {possibilities.map((item, index) => 
                    <div key={item} className="possibility-card-data">
                        <span className="possibility-card-icon" aria-hidden="true">{possibilityIcons[index]}</span>
                        <h3>{item}</h3>
                    </div>)}
   
                </div>
            </section>

            <section className="about-cta">
                <div>
                    <p className="about-eyebrow">Ready to explore Janaharsha?</p>
                    <h2>Find the part of the landscape that fits your <em>future.</em></h2>
                </div>
                <div className="about-cta-actions">
                    <p>Prime Realtors can guide you through the blocks, layouts and opportunities within Janaharsha.</p>
                    <div className='about-cta-btns'>
                    <button type="button" onClick={() => navigate('/contact#contact-details')}>Buy a plot <span aria-hidden="true">&#8599;</span></button>
                    <button type="button" className="about-cta-outline" onClick={() => navigate('/contact#contact-details')}>Contact us</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About
