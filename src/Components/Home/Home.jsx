import './Home.css'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import homeHero from '../../assets/Home1.jpg'
import futureplanning from '../../assets/planfuture.jpg'
import layoutMap from '../../assets/layout.png'
import farmhouseImage from '../../assets/formhouse.jpg'
import weekendImage from '../../assets/Weekendtrips.jpg'
import farmlandImage from '../../assets/farmland.jpg'
import organicImage from '../../assets/organic.jpg'
import plantationImage from '../../assets/plant.jpg'
import futureHomeImage from '../../assets/futurehome.jpg'
import natureImage from '../../assets/nature.jpg'
const plotUses = [['Farmhouse', 'Create a peaceful farmhouse based on your family lifestyle and future plans.'], ['Weekend retreat', 'A private space outside the city for family time and slower weekends.'], ['Farm land', 'Use larger plots for plantation, gardening and suitable farming activities.'], ['Organic garden', 'Grow vegetables, herbs, fruit trees and seasonal produce for family use.'], ['Plantation', 'Retain existing trees and add new plantation around your own landscape vision.'], ['Future home', 'Secure land today and consider residential development when the timing is right.']]
const localities = [['Janaharsha', 'Multiple blocks', '2,000+ acres with teak plantations and established roads.', '120 - 2400+ Sq. Yds'], ['Ibrahimpatnam', 'Multiple blocks', 'Strong road connectivity with access to ORR and Vijayawada Highway.', '150 - 1000 Sq. Yds'], ['Polkampally', 'Select blocks', 'An emerging area with affordable plots and future potential.', '120 - 600 Sq. Yds'], ['Manneguda', 'Select blocks', 'Strategic access to major highways and growing infrastructure.', '200 - 800 Sq. Yds'], ['Raipole', 'Select blocks', 'A quieter locality suited to farmhouse and plantation buyers.', '360 - 1200 Sq. Yds'], ['Naganpally', 'Select blocks', 'A well-connected mix of residential and agricultural land.', '120 - 600 Sq. Yds']]
const plotSizes = ['120', '200', '240', '360', '480', '600', '800', '900', '1000', '1200', '2400+']
const opportunities = [['600 Sq. Yds', 'Janaharsha - Block XX', 'East Facing', 'Investment / Future Home'], ['1200 Sq. Yds', 'Janaharsha - Block YY', 'North Facing', 'Farmhouse / Larger Land'], ['240 Sq. Yds', 'Ibrahimpatnam - Block A', 'West Facing', 'Investment'], ['2400+ Sq. Yds', 'Janaharsha - Block ZZ', 'South Facing', 'Farm Land / Plantation']]

function MetricValue({ value, suffix = '' }) {
    const [currentValue, setCurrentValue] = useState(0)
    const metricRef = useRef(null)
    const numericValue = Number(value)

    useEffect(() => {
        let frameId
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                setCurrentValue(0)
                return
            }

            let startTime
            const animate = (time) => {
                if (!startTime) startTime = time
                const progress = Math.min((time - startTime) / 1400, 1)
                const easedProgress = 1 - Math.pow(1 - progress, 3)
                setCurrentValue(Math.floor(numericValue * easedProgress))
                if (progress < 1) frameId = requestAnimationFrame(animate)
            }

            frameId = requestAnimationFrame(animate)
        }, { threshold: 0.6 })

        if (metricRef.current) observer.observe(metricRef.current)
        return () => {
            observer.disconnect()
            cancelAnimationFrame(frameId)
        }
    }, [numericValue])

    return <strong ref={metricRef}>{currentValue.toLocaleString()}{suffix}</strong>
}

function MetricBand() {
    return (
        <section className="metric-band">
            <div className="content-width metrics-row">
                <div className="metric-card metric-card-acres"><MetricValue value="2000" suffix="+" /><span className="metric-label">Acres</span><span className="metric-hover-copy">A large established plotted landscape.</span></div>
                <div className="metric-card metric-card-plots"><MetricValue value="60000" suffix="+" /><span className="metric-label">Plots</span><span className="metric-hover-copy">Multiple blocks and plot sizes.</span></div>
                <div className="metric-card metric-card-experience"><MetricValue value="10" suffix="+ years" /><span className="metric-label">Local expertise</span><span className="metric-hover-copy">Knowledge that helps you choose clearly.</span></div>
                <div className="metric-card metric-card-teak"><strong>Teak</strong><span className="metric-label">Plantations</span><span className="metric-hover-copy">Nature already growing with the land.</span></div>
            </div>
        </section>
    )
}

function Home() {
    const navigate = useNavigate()
    const [isLayoutOpen, setIsLayoutOpen] = useState(false)

    return (
        <main className="home-page" id="home">
            <section className="janaharsha-hero">
                <div className="hero-content-wrap">
                    <div className="hero-copy">
                        <p className="home-eyebrow">
                            <span /> Janaharsha, Hyderabad
                        </p>
                        <h1>Own Land Today.<br />
                            <em>Build a Legacy for Generations.</em>
                        </h1>
                        <p className="hero-lead">An established plotted landscape near Ramoji Film City, where your family can begin with land today and shape its future over time.</p>
                        <div className="hero-actions">
                            <button className="home-button home-button-primary" type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Find a plot <span>&#8599;</span></button>
                            <button className="home-button home-button-outline" type="button" onClick={() => navigate('/buy-sell?tab=visit#contact-details')}>Book a site visit</button>
                        </div>
                    </div>
                    <div className="janaharsha-art" aria-label="Illustration of a farmhouse plot near Hyderabad">
                       <img src={homeHero} alt="Aerial view of Janaharsha plotted landscape with roads and greenery" />
                    </div>
                </div>
            </section>
            <MetricBand />
            {/* Future Planning */}
            <section className="future-section content-width" id="about">
                <div className="section-intro">
                    <p className="home-eyebrow">More than land</p>
                    <h2>A plan for the <em>future.</em></h2>
                    <h3>Own today. Create tomorrow.</h3>
                    <p>Land does not always need to be developed immediately. A plot purchased today can be planned gradually over the next 8-12 years and beyond, based on your family&apos;s requirements.</p><p>Buy a piece of land today and give your family the freedom to decide what it becomes tomorrow.</p>
                </div>
                  <div className="future-copy">
                    <img src={futureplanning} alt="future-plan" className='future-paln-img' />
                </div>
            </section>
            {/* plot possibilities */}
            <section className="possibility-section content-width-evry">
                <div className="section-heading">
                    <p className="home-eyebrow">What can your land become?</p>
                    <h2>Every Investment Carries a <em>Possibility.</em></h2>
                </div>
                <div className="possibility-list">
                    {plotUses.map(([title, text], index) => {
                    const possibilityImages = {
                        Farmhouse: farmhouseImage,
                        'Weekend retreat': weekendImage,
                        'Farm land': farmlandImage,
                        'Organic garden': organicImage,
                        Plantation: plantationImage,
                        'Future home': futureHomeImage,
                    }

                    return (
                    <article className="possibility-card" key={title}>
                        {/* <span>0{index + 1}</span> */}
                        <div className='possi-blii-image'>
                            <img src={possibilityImages[title]} alt={`${title} land use`} className='possibl-image' />
                        </div>
                        <div className="posible-card-cont">
                            <h3>{title}</h3>
                            <p>{text}</p>
                            {/* <button type="button" onClick={() => navigate('#find-land')}>Explore suitable plots &#8599;</button> */}
                        </div>
                       
                    </article>)})}
                </div>
            </section>
            {/* Nature Plan */}
            <section className="nature-section">
                <div className="content-width nature-row">
                    <div className="nature-art">
                       <img src={natureImage} alt="Green agricultural landscape with a field and trees" className="nature-image" />
                    </div>
                    <div className="nature-copy">
                        <p className="home-eyebrow">A landscape years in the making</p>
                        <h2>Nature is already part of the <em>plan.</em></h2>
                        <p>Parts of Janaharsha contain teak plantations established during the earlier development period. Instead of starting with completely barren land, buyers may find opportunities where nature has already had years to establish itself.</p>
                        <div className="nature-points">
                            <span>Preserve existing trees</span>
                            <span>Add fruit-bearing trees</span>
                            <span>Create walking paths</span>
                            <span>Plan a farmhouse around the landscape</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* WHAT YOU NEED */}
            <section className="find-section content-width" id="find-land">
                <div className="find-heading">
                    <p className="home-eyebrow">Find land by your requirement</p>
                    <h2>Start with what you <em>Need.</em></h2>
                    <p>Tell us your requirement and Prime Realtors will help you shortlist the right block, plot size and purpose.</p>
                    <div className="finder-note"><span>01</span><span>Choose a size or purpose to begin</span></div>
                    <button className="home-button home-button-primary finder-cta" type="button" onClick={() => navigate('/buy-sell?tab=buy')}><span><small>Ready to explore?</small>Find suitable plots</span><b aria-hidden="true">&#8599;</b></button>
                </div>
                <div className="find-options">
                    <div className="finder-group"><div className="finder-group-heading"><h3>By plot size</h3><span>11 options</span></div><div className="filter-list">{plotSizes.map((size) => <button type="button" onClick={() => navigate('/buy-sell?tab=buy')} key={size}>{size} <small>Sq. Yds</small></button>)}</div></div>
                    <div className="finder-group"><div className="finder-group-heading"><h3>By purpose</h3><span>06 options</span></div><div className="filter-list"><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Investment</button><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Future home</button><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Farmhouse</button><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Farm land</button><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Plantation</button><button type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Weekend retreat</button></div></div>
                    
                </div>
            </section>
           {/* LOCALITY */}
            <section className="locality-section">
                <div className="content-width-local">
                    <div className="section-heading locality-heading">
                        <p className="home-eyebrow">Our presence</p>
                        <h2 >Local knowledge across the Janaharsha <em>Landscape.</em></h2>
                    </div>
                    <div className="locality-map-board">
                        <button className="locality-map-trigger" type="button" onClick={() => setIsLayoutOpen(true)} aria-label="Open Janaharsha layout map">
                            <img src={layoutMap} alt="Janaharsha layout map preview" />
                            <span className="locality-map-trigger-copy"><strong>View layout map</strong><small>Click to explore connectivity</small></span>
                            <span className="locality-map-trigger-icon" aria-hidden="true">&#8599;</span>
                        </button>
                    </div>
                    {isLayoutOpen && <div className="layout-modal" role="dialog" aria-modal="true" aria-label="Janaharsha layout map">
                        <button className="layout-modal-backdrop" type="button" onClick={() => setIsLayoutOpen(false)} aria-label="Close layout map" />
                        <div className="layout-modal-content">
                            <div className="layout-modal-header"><div><span>Janaharsha layout</span><small>Location guide · Not to scale</small></div><button type="button" onClick={() => setIsLayoutOpen(false)} aria-label="Close layout map">&#10005;</button></div>
                            <img src={layoutMap} alt="Janaharsha layout map showing nearby roads, blocks and landmarks" />
                        </div>
                    </div>}
                    <div className="locality-list">
                        {localities.map(([name, type, description, sizes]) => 
                        <article className="locality-card" key={name}>
                            <div>
                                <span>{type}</span>
                                <h3>{name}</h3>
                                <p>{description}</p>
                            </div>
                            <footer>
                                <small>Plot sizes</small>
                                <strong>{sizes}</strong>
                                {/* <button type="button" onClick={() => navigate('#contact')}>View available plots &#8599;</button> */}
                            </footer>
                        </article>)}
                    </div>
                </div>
            </section>
          {/* NRI / remote buyer support */}
            <section className="remote-section">
                <div className="content-width remote-row">
                    <div>
                        <p className="home-eyebrow">NRI / remote buyer support</p>
                        <h2>Property Search Made Easy.</h2>
                        
                    </div>
                    <div className="remote-steps">
                        {[['Share your requirement', '✉'], ['Prime Realtors shortlists options', '⌕'], ['Layout plans and details shared', '▤'], ['Site photos / video walkthrough', '◉'], ['Family or representative site visit', '⌂'], ['Final shortlisting', '✓'], ['Documentation coordination', '▣'], ['Registration and handover support', '↗']].map(([step, icon]) =>
                            <div key={step}>
                                <span className="remote-step-icon" aria-hidden="true">{icon}</span>
                                <p>{step}</p>
                            </div>)}
                    </div>
                    <button className="home-button home-button-light" type="button" onClick={() => navigate('/contact')}>Schedule a  consultation <span>&#8599;</span></button>
                </div>
            </section>
              {/* Looking to buy? */}
            <section className="look-support-section " id="selling">
                <div className="support-card">
                    <p className="home-eyebrow">Looking to buy?</p>
                    <h2>Tell us what you are looking for.</h2>
                    <p>Preferred plot size, budget, location, purpose and facing preference.</p>
                    <button className="home-button home-button-primary" type="button" onClick={() => navigate('/buy-sell?tab=buy')}>Create buying requirement</button>
                </div>
                <div className="support-card support-card-light">
                    <p className="home-eyebrow">Already own a plot?</p>
                    <h2>Share it with a serious buyer.</h2>
                    <p>Block, plot number, plot size, expected price and contact details.</p>
                    <button className="home-button home-button-outline" type="button" onClick={() => navigate('/buy-sell?tab=sell')}>Submit plot for sale</button>
                </div>
            </section>
          
        </main>
    )
}

export default Home
