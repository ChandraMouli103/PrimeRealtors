import { useNavigate } from 'react-router-dom'
import './NewsUpdate.css'
import heroImage from '../../assets/Home1.jpg'
import layoutImage from '../../assets/Gallery/layout.jpeg'
import greeneryImage from '../../assets/Gallery/park.jpeg'
import siteImage from '../../assets/Gallery/view.jpeg'

const updates = [
    {
        category: 'Layout plans',
        title: 'Explore the plot plans',
        copy: 'Review sample plot boundaries, dimensions, road access and neighbouring plots before discussing a specific option with our team.',
        image: layoutImage,
        alt: 'Printed plotted land plan showing boundaries and dimensions',
        action: 'View plot options',
        href: '/buy-sell?tab=buy',
    },
    {
        category: 'The landscape',
        title: 'A greener setting outside the city',
        copy: 'Janaharsha includes established teak plantations and open surroundings. Visit to experience the landscape in person.',
        image: greeneryImage,
        alt: 'Green landscape and trees at the project',
        action: 'Plan a site visit',
        href: '/buy-sell?tab=visit',
    },
    {
        category: 'On-site views',
        title: 'See the surroundings for yourself',
        copy: 'Browse views from the project and talk with Prime Realtors about locality, access and the plans that interest you.',
        image: siteImage,
        alt: 'View across the Janaharsha project surroundings',
        action: 'Open the gallery',
        href: '/gallery',
    },
]

function NewsUpdate() {
    const navigate = useNavigate()

    return (
        <main className="news-page">
            <section className="news-hero">
                <div className="news-hero-copy">
                    <p className="news-eyebrow">Prime Realtors · Janaharsha</p>
                    <h1>News from<br /><em>the landscape.</em></h1>
                    <p>Project views, plot plan guidance and updates from the Janaharsha community.</p>
                    <a href="https://www.instagram.com/primerealtorsjanaharsha/" target="_blank" rel="noreferrer" className="news-social-link">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".8" /></svg>
                        Follow our updates <span aria-hidden="true">&#8599;</span>
                    </a>
                </div>
                <div className="news-hero-image">
                    <img src={heroImage} alt="Aerial view of Janaharsha plotted landscape and roads" />
                    <span>Janaharsha · Hyderabad</span>
                </div>
            </section>

            
{/* 
            <section className="news-contact-band">
                <div>
                    <p className="news-eyebrow">Have a question?</p>
                    <h2>Get the details<br /><em>that matter to you.</em></h2>
                </div>
                <p>Talk with the Prime Realtors team about plot plans, locality or arranging a visit.</p>
                <button type="button" onClick={() => navigate('/contact')}>Contact Prime Realtors<span aria-hidden="true">&#8599;</span></button>
            </section> */}
        </main>
    )
}

export default NewsUpdate
