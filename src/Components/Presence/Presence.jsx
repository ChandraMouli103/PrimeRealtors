import { useNavigate } from 'react-router-dom'
import './Presence.css'
import layoutImage from '../../assets/layout.png'
import phaseA from '../../assets/Layouts/janaharsha-phase-a.pdf'
import phaseBK from '../../assets/Layouts/janaharsha-phase-b-k.pdf'
import phaseBExtension from '../../assets/Layouts/janaharsha-phase-b-ext.pdf'
import phaseBExtensionLingampally from '../../assets/Layouts/janaharsha-phase-b-ext-lingampally.pdf'
import phaseCD from '../../assets/Layouts/janaharsha-phase-c-d.pdf'
import phaseDRaipol from '../../assets/Layouts/janaharsha-phase-d-raipol.pdf'
import phaseGF from '../../assets/Layouts/janaharsha-phase-g-f.pdf'
import phaseH from '../../assets/Layouts/janaharsha-phase-h.pdf'
import phaseH2 from '../../assets/Layouts/janaharsha-phase-h2.pdf'
import phaseJI from '../../assets/Layouts/janaharsha-phase-j-i.pdf'
import phaseL from '../../assets/Layouts/janaharsha-phase-l.pdf'
import phaseM from '../../assets/Layouts/janaharsha-phase-m.pdf'
import phaseNNaganpally from '../../assets/Layouts/janaharsha-phase-n-naganpally.pdf'
import phaseNPolkampally from '../../assets/Layouts/janaharsha-phase-n-polkampally.pdf'
import phasePQRV from '../../assets/Layouts/janaharsha-phase-p-q-r-v.pdf'
import phaseST from '../../assets/Layouts/janaharsha-phase-s-t.pdf'
import phaseU from '../../assets/Layouts/janaharsha-phase-u.pdf'

const locations = [
    ['Janaharsha', 'Multiple Blocks', 'The core Janaharsha venture — 2,000+ acres of plotted land with teak plantations and established roads.', '120 – 2400+ Sq. Yds', 'Ramoji Film City proximity'],
    ['Ibrahimpatnam', 'Multiple Blocks', 'Growing locality with strong road connectivity and access to ORR and Vijayawada Highway.', '150 – 1000 Sq. Yds', 'Ibrahimpatnam Town Center'],
    ['Polkampally', 'Select Blocks', 'Emerging area with affordable plots and good future appreciation potential.', '120 – 600 Sq. Yds', 'Near Koheda Road'],
    ['Manneguda', 'Select Blocks', 'Strategic location with access to major highways and growing infrastructure.', '200 – 800 Sq. Yds', 'Vijayawada Highway Corridor'],
    ['Raipole', 'Select Blocks', 'Quiet locality suitable for farmhouse and plantation-oriented buyers.', '360 – 1200 Sq. Yds', 'Green Belt Area'],
    ['Naganpally', 'Select Blocks', 'Well-connected area with a mix of residential and agricultural land options.', '120 – 600 Sq. Yds', 'Near ORR Access'],
]

const phaseLayouts = [
    ['Phase A', 'Khalsa Ibrahimpatnam (incl. A Ext)', 'An established phase with convenient access to Ibrahimpatnam and nearby growth corridors.', phaseA],
    ['Phase B & K', 'Khalsa Ibrahimpatnam', 'A well-connected phase suited to residential planning and long-term investment.', phaseBK],
    ['Phase B Extension', 'Khalsa Ibrahimpatnam / Sitarampet', 'An extended layout with a practical location near growing local infrastructure.', phaseBExtension],
    ['Phase B Ext (Lingampally)', 'Lingampally, Manchal', 'A quieter phase with open surroundings and scope for future farmhouse living.', phaseBExtensionLingampally],
    ['Phase C & D', 'Manoharabad / Lingampally, Manchal', 'A developing location for buyers looking for space, access and future potential.', phaseCD],
    ['Phase D (Raipol)', 'Raipol, Ibrahimpatnam', 'A peaceful phase suited to farmhouse, plantation and relaxed weekend living.', phaseDRaipol],
    ['Phase G & F', 'Raipol, Ibrahimpatnam', 'A green and spacious setting for buyers planning a slower lifestyle outside the city.', phaseGF],
    ['Phase H', 'Raipol, Ibrahimpatnam', 'A calm locality with room for future homes, gardens and plantation-led plans.', phaseH],
    ['Phase H2', 'Raipol, Ibrahimpatnam', 'An established Raipol option for buyers seeking a quieter plot investment.', phaseH2],
    ['Phase J & I', 'Janaharsha', 'A central Janaharsha phase with access to established roads and nearby amenities.', phaseJI],
    ['Phase L', 'Janaharsha', 'A flexible plotted phase for investment, future homes and family plans.', phaseL],
    ['Phase M', 'Janaharsha', 'A spacious layout within the larger Janaharsha landscape and its natural setting.', phaseM],
    ['Phase N (Naganpally)', 'Naganpally', 'A well-connected phase with a quieter setting and long-term appreciation potential.', phaseNNaganpally],
    ['Phase N (Polkampally)', 'Polkampally', 'An emerging phase suited to affordable plots and future-focused buyers.', phaseNPolkampally],
    ['Phase P, Q, R & V', 'Janaharsha', 'Multiple connected blocks offering more choice across plot sizes and plans.', phasePQRV],
    ['Phase S & T', 'Janaharsha', 'An established plotted setting for buyers planning a home or long-term holding.', phaseST],
    ['Phase U', 'Janaharsha', 'A spacious phase where plantation, open land and future living can come together.', phaseU],
]

function Presence() {
    const navigate = useNavigate()

    return (
        <main className="presence-page">
            <section className="presence-hero">
                <div className="presence-hero-content">
                    <div>
                        {/* <p className="presence-eyebrow">Prime Realtors</p> */}
                        <h1>Across the Janaharsha <em>Landscape.</em></h1>
                        <p>Deep local knowledge across Janaharsha and the surrounding localities, with a growing inventory for different land requirements.</p>
                    </div>
                    <div className="presence-hero-art">
                        <img src={layoutImage} alt="Janaharsha plotted layout map" />
                    </div>
                </div>
            </section>


            <section className="presence-layouts">
                <div className="presence-directory-heading">
                    <div>
                        <p className="presence-eyebrow">Layout directory</p>
                        <h2>Find your phase, then explore the <em>layout.</em></h2>
                    </div>
                    <p className="presence-layouts-intro">Open the relevant layout plan to review the phase and locality details before speaking with our team.</p>
                </div>
                <div className="phase-layout-grid">
                    {phaseLayouts.map(([phase, locality, description, layout]) => <article className="phase-layout-card" key={phase}>
                        <p>{locality}</p>
                        <h3>{phase}</h3>
                        <span>{description}</span>
                        <a className="phase-layout-link" href={layout} target="_blank" rel="noreferrer">View layout <span className="phase-layout-link-icon" aria-hidden="true">&#8599;</span></a>
                    </article>)}
                </div>
            </section>

            <section className="presence-contact">
                <div className="presence-hero-content">
                    <div className="presence-contact-content">
                        <p className="presence-eyebrow">Looking for a specific area?</p>
                        <h2>Tell us where you want to <em>begin.</em></h2>
                        <p>Contact us with your preferred locality and we will share available options and layout details.</p>
                        <div className="presence-social-links" aria-label="Follow Prime Realtors on social media">
                            <a href="https://www.instagram.com/primerealtorsjanaharsha/" target="_blank" rel="noreferrer" aria-label="Open Prime Realtors Janaharsha on Instagram">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".8" className="presence-social-icon-fill" /></svg>
                                <span>Instagram</span>
                            </a>
                            <a href="https://www.facebook.com/PrimeRealtorsJanaharsha/" target="_blank" rel="noreferrer" aria-label="Open Prime Realtors Janaharsha on Facebook">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5h2V3.8c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H7v3h3v8h4Z" /></svg>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.youtube.com/@PrimeRealtorsjanaharsha" target="_blank" rel="noreferrer" aria-label="Open Prime Realtors Janaharsha on YouTube">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z" /><path d="m10 15.5 5-3.5-5-3.5v7Z" className="presence-social-play" /></svg>
                                <span>YouTube</span>
                            </a>
                        </div>
                        <button type="button" onClick={() => navigate('/contact#contact-details')}>Contact Prime Realtors <span aria-hidden="true">&#8599;</span></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Presence