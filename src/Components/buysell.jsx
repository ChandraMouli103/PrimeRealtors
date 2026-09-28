import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './buy.css'
import layoutOverview from '../assets/layout.png'
import phaseA from '../assets/Layouts/janaharsha-phase-a.pdf'
import phaseBK from '../assets/Layouts/janaharsha-phase-b-k.pdf'
import phaseBExtension from '../assets/Layouts/janaharsha-phase-b-ext.pdf'
import phaseBExtensionLingampally from '../assets/Layouts/janaharsha-phase-b-ext-lingampally.pdf'
import phaseCD from '../assets/Layouts/janaharsha-phase-c-d.pdf'
import phaseDRaipol from '../assets/Layouts/janaharsha-phase-d-raipol.pdf'
import phaseGF from '../assets/Layouts/janaharsha-phase-g-f.pdf'
import phaseH from '../assets/Layouts/janaharsha-phase-h.pdf'
import phaseH2 from '../assets/Layouts/janaharsha-phase-h2.pdf'
import phaseJI from '../assets/Layouts/janaharsha-phase-j-i.pdf'
import phaseL from '../assets/Layouts/janaharsha-phase-l.pdf'
import phaseM from '../assets/Layouts/janaharsha-phase-m.pdf'
import phaseNNaganpally from '../assets/Layouts/janaharsha-phase-n-naganpally.pdf'
import phaseNPolkampally from '../assets/Layouts/janaharsha-phase-n-polkampally.pdf'
import phasePQRV from '../assets/Layouts/janaharsha-phase-p-q-r-v.pdf'
import phaseST from '../assets/Layouts/janaharsha-phase-s-t.pdf'
import phaseU from '../assets/Layouts/janaharsha-phase-u.pdf'

const phaseLayouts = [
    ['Phase A', 'Khalsa Ibrahimpatnam', phaseA],
    ['Phase B & K', 'Khalsa Ibrahimpatnam', phaseBK],
    ['Phase B Extension', 'Khalsa Ibrahimpatnam / Sitarampet', phaseBExtension],
    ['Phase B Ext (Lingampally)', 'Lingampally, Manchal', phaseBExtensionLingampally],
    ['Phase C & D', 'Manoharabad / Lingampally, Manchal', phaseCD],
    ['Phase D (Raipol)', 'Raipol, Ibrahimpatnam', phaseDRaipol],
    ['Phase G & F', 'Raipol, Ibrahimpatnam', phaseGF],
    ['Phase H', 'Raipol, Ibrahimpatnam', phaseH],
    ['Phase H2', 'Raipol, Ibrahimpatnam', phaseH2],
    ['Phase J & I', 'Janaharsha', phaseJI],
    ['Phase L', 'Janaharsha', phaseL],
    ['Phase M', 'Janaharsha', phaseM],
    ['Phase N (Naganpally)', 'Naganpally', phaseNNaganpally],
    ['Phase N (Polkampally)', 'Polkampally', phaseNPolkampally],
    ['Phase P, Q, R & V', 'Janaharsha', phasePQRV],
    ['Phase S & T', 'Janaharsha', phaseST],
    ['Phase U', 'Janaharsha', phaseU],
]

const plotPlanExamples = [
    { plot: 'FP-61 · Part A1', phase: 'F Phase · Paradise Sector', survey: '469', area: '600', width: '60′', depth: '90′', top: '40′ wide road', right: '40′ wide road', left: 'FP-61 · Part C & D', bottom: 'FP-61 · Part A2' },
    { plot: 'QD-2068', phase: 'Polkampally', survey: '440', area: '360', width: '45′', depth: '72′', top: '40′ wide road', right: 'Neighbouring land', left: '40′ wide road', bottom: 'Unit QD-2067' },
    { plot: 'LP-194 · Part A', phase: 'L Phase · Naganpally', survey: '314', area: '400', width: '50′', depth: '72′', top: '50′ wide road', right: 'LP-194 · Part A1', left: '40′ wide road', bottom: 'LP-194 · Part C' },
    { plot: 'QP-14 · Part B', phase: 'Polkampally', survey: '449 & 450', area: '400', width: '72′', depth: '50′', top: 'QP-14 · Part C', right: '40′ wide road', left: 'QP-14 · Parts D & E', bottom: 'QP-14 · Part A' },
    { plot: 'RG-382', phase: 'Janaharsha', survey: '347', area: '720', width: '60′', depth: '90′', top: '40′ wide road', right: '40′ wide road', left: 'RG-347', bottom: 'RG-381 · North Part' },
    { plot: 'SS-672 · Part A', phase: 'Polkampally', survey: '189 & 190', area: '240', width: '45′', depth: '48′', top: 'SS-672 · Part B', right: 'SS-615', left: '40′ wide road', bottom: '50′ wide road' },
    { plot: 'QP-1045 · Part A', phase: 'Janaharsha', survey: 'To be confirmed', area: '120', width: '49′ 4″', depth: '21′ 10″', top: 'QP-1045 · Part B', right: '40′ wide road', left: 'QP-1045 · Part D', bottom: 'QP-1044' },
]

function PlotBoundary({ side, label }) {
    const roadMatch = label.match(/(\d+\s*[′'’]?\s*(?:wide\s*)?road)/i)

    if (roadMatch) {
        return <span className={`plot-edge-label plot-edge-${side} plot-edge-road`}>
            <span className="plot-road-symbol" aria-hidden="true"><i /></span>
            <strong>{roadMatch[1].replace(/\s+/g, ' ')}</strong>
        </span>
    }

    const plotNumber = label.replace(/^(?:unit\s+no?\.?\s*)/i, '').replace(/^neighbouring\s+land$/i, 'Adjacent land')

    return <span className={`plot-edge-label plot-edge-${side} plot-edge-neighbour`}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="2.5" width="15" height="15" /><path d="M6 6h8v8H6z" /></svg>
        <strong>{plotNumber}</strong>
    </span>
}

const tabDetails = {
    buy: {
        label: 'Buy A Plot',
        eyebrow: 'Find land for your next chapter',
        heading: <>Find your peace.<br /><em>Then explore the layout.</em></>,
        intro: 'Explore plot plans, compare dimensions and locations, then tell us what you are looking for.',
    },
    sell: {
        label: 'Sell A Plot',
        eyebrow: 'List your land with Prime Realtors',
        heading: <>Have a plot to sell?<br /><em>Let’s share its story.</em></>,
        intro: 'Send us your plot details and expected price. Our team will get in touch to discuss the next steps.',
    },
    visit: {
        eyebrow: 'Visit Janaharsha',
        heading: <>See the land<br /><em>for yourself.</em></>,
        intro: 'Request a guided site visit and our team will help arrange a convenient time.',
    },
}

function BuySell() {
    const location = useLocation()
    const navigate = useNavigate()
    const requestedTab = new URLSearchParams(location.search).get('tab')
    const activeTab = tabDetails[requestedTab] ? requestedTab : 'buy'
    const [selectedFile, setSelectedFile] = useState('')
    const [formStatus, setFormStatus] = useState('')

    useEffect(() => {
        if (location.hash) {
            document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location.hash, activeTab])

    const switchTab = (tab) => {
        setFormStatus('')
        setSelectedFile('')
        navigate(`/buy-sell?tab=${tab}`)
    }

    const sendToWhatsApp = async (event, kind) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const uploadedFile = formData.get('plotPhoto')
        const lines = [`Prime Realtors ${kind} enquiry`]

        for (const [label, field] of [
            ['Name', 'ownerName'],
            ['Phone', 'phone'],
            ['Email', 'email'],
            ['Preferred location', 'location'],
            ['Plot size', 'plotSize'],
            ['Purpose', 'purpose'],
            ['Block', 'block'],
            ['Plot number', 'plotNumber'],
            ['Expected price', 'expectedPrice'],
            ['Preferred visit date', 'visitDate'],
            ['Notes', 'notes'],
        ]) {
            const value = formData.get(field)
            if (value) lines.push(`${label}: ${value}`)
        }

        const hasUpload = uploadedFile instanceof File && uploadedFile.size > 0
        const canShareUpload = kind === 'seller'
            && hasUpload
            && typeof navigator.share === 'function'
            && typeof navigator.canShare === 'function'
            && navigator.canShare({ files: [uploadedFile] })

        if (canShareUpload) {
            try {
                await navigator.share({
                    files: [uploadedFile],
                    title: 'Prime Realtors plot listing',
                    text: lines.join('\n'),
                })
                setFormStatus('Choose WhatsApp in the share menu. Your plot details and selected file will be ready to send there.')
                form.reset()
                setSelectedFile('')
                return
            } catch (error) {
                if (error.name === 'AbortError') {
                    setFormStatus('Sharing was cancelled. Your selected file is still available; try again when ready.')
                    return
                }
            }
        }

        window.open(`https://wa.me/918073648872?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
        if (kind === 'seller' && hasUpload) {
            setFormStatus('WhatsApp has opened with your plot details, but this browser cannot attach the image automatically. Attach the selected file in the chat before sending. Your form details and file selection are still here.')
            return
        }

        setFormStatus('WhatsApp has opened with your enquiry. Review the details and tap Send to submit it to Prime Realtors.')
        form.reset()
        setSelectedFile('')
    }

    return (
        <main className="buy-sell-page">
            
            {activeTab === 'visit' ? <section className="buy-sell-intro">
                <p className="buy-eyebrow">{tabDetails.visit.eyebrow}</p>
                <h1>{tabDetails.visit.heading}</h1>
                <p>{tabDetails.visit.intro}</p>
            </section> : <>
                <section className="buy-sell-intro">
                    <p className="buy-eyebrow">{tabDetails[activeTab].eyebrow}</p>
                    <h1>{tabDetails[activeTab].heading}</h1>
                    <p>{tabDetails[activeTab].intro}</p>
                </section>
                <section className="buy-sell-switchbar">
                    <div className="buy-sell-tabs" role="tablist" aria-label="Buy or sell a plot">
                        {Object.entries(tabDetails).filter(([tab]) => tab !== 'visit').map(([tab, details]) => <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={activeTab === tab ? 'is-active' : ''}
                        key={tab}
                        onClick={() => switchTab(tab)}
                    >
                        <svg className="buy-tab-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            {tab === 'buy'
                                ? <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2M8 10.8h5.6M10.8 8v5.6" /></>
                                : <><path d="M3 10.5 12 4l9 6.5" /><path d="M5.5 9.8V20h13V9.8M9 20v-6h6v6" /><path d="M16.5 4.8h3v3" /></>}
                        </svg>
                        <span>{details.label}</span>
                        </button>)}
                    </div>
                </section>
            </>}
            {activeTab === 'buy' && <>
                <section className="buy-layouts-section" aria-labelledby="buy-layouts-title">
                    <section className="plot-plan-section" aria-labelledby="plot-plan-title">
                        <div className="plot-plan-heading">
                            <div>
                                {/* <p className="buy-eyebrow">Plot-level examples</p> */}
                                <h3 id="plot-plan-title">See the shape of a <em>plot.</em></h3></div>
                            <p>Registration-plan details help you understand plot dimensions, area, and neighbouring roads before you enquire.</p>
                        </div>
                        <div className="plot-plan-grid">
                            {plotPlanExamples.map((plan) =>
                                <article className="plot-plan-card" key={plan.plot}>
                                <header className="plot-plan-card-heading">
                                    <div>
                                        <span>{plan.phase}</span>
                                        {/* <h4>{plan.plot}</h4> */}
                                    </div>
                                    <span className="plot-area-tag">{plan.area}<small>Sq. Yds</small></span>
                                </header>
                                <div className="plot-plan-drawing" role="img" aria-label={`${plan.plot}, ${plan.area} square yards, ${plan.width} by ${plan.depth}. North boundary: ${plan.top}. East boundary: ${plan.right}. South boundary: ${plan.bottom}. West boundary: ${plan.left}.`}>
                                    <PlotBoundary side="top" label={plan.top} />
                                    <PlotBoundary side="right" label={plan.right} />
                                    <PlotBoundary side="bottom" label={plan.bottom} />
                                    <PlotBoundary side="left" label={plan.left} />
                                    <div className="plot-dimension plot-dimension-width">{plan.width}</div>
                                    <div className="plot-dimension plot-dimension-depth">{plan.depth}</div>
                                    <div className="plot-boundary">
                                        {/* <strong>{plan.plot}</strong> */}
                                        <strong>{plan.area} Sq. Yds</strong>
                                    </div>
                                    <svg className="plot-compass" viewBox="0 0 100 100" role="img" aria-label="Compass rose: north up, east right, south down, west left">
                                        <text x="50" y="12" textAnchor="middle">N</text>
                                        <text x="89" y="54" textAnchor="middle">E</text>
                                        <text x="50" y="98" textAnchor="middle">S</text>
                                        <text x="11" y="54" textAnchor="middle">W</text>
                                        <path d="M50 19 58 43 50 50 42 43Z" className="compass-dark" />
                                        <path d="M50 19 50 50 42 43Z" className="compass-light" />
                                        <path d="M81 50 57 58 50 50 57 42Z" className="compass-dark" />
                                        <path d="M81 50 50 50 57 42Z" className="compass-light" />
                                        <path d="M50 81 42 57 50 50 58 57Z" className="compass-dark" />
                                        <path d="M50 81 50 50 58 57Z" className="compass-light" />
                                        <path d="M19 50 43 42 50 50 43 58Z" className="compass-dark" />
                                        <path d="M19 50 50 50 43 58Z" className="compass-light" />
                                    </svg>
                                </div>
                                <footer className="plot-plan-meta">
                                    <span>Survey no.</span>
                                    <strong>{plan.survey}</strong>
                                </footer>
                            </article>)}
                        </div>
                        <p className="plot-plan-disclaimer">Illustrative details transcribed from sample registration plans. Confirm dimensions, survey number, boundaries, and availability against the current registered documents.</p>
                    </section>
                    {/* <div className="buy-phase-grid">
                        {phaseLayouts.map(([phase, locality, file]) => <article className="buy-phase-item" key={phase}>
                            <div><span>{locality}</span><h3>{phase}</h3></div>
                            <a href={file} target="_blank" rel="noreferrer" aria-label={`Open ${phase} layout PDF`}>View layout <span aria-hidden="true">&#8599;</span></a>
                        </article>)}
                    </div> */}
                </section>
                <section className="buy-form-section" id="buy-enquiry">
                    <div className="buy-form-copy">
                        <p className="buy-eyebrow">Enquire about a plot</p>
                        <h2>Let’s find the right <em>place.</em></h2>
                        <p>Share your preferences and our team will follow up with relevant details.</p>
                    </div>
                    <form className="buy-form" onSubmit={(event) => sendToWhatsApp(event, 'buyer')}>
                        <label>Name<input name="ownerName" type="text" autoComplete="name" required /></label>
                        <label>Contact number<input name="phone" type="tel" autoComplete="tel" required /></label>
                        <label>Email<input name="email" type="email" autoComplete="email" /></label>
                        <label>Preferred locality<select name="location" defaultValue=""><option value="" disabled>Select a locality</option><option>Janaharsha</option><option>Ibrahimpatnam</option><option>Polkampally</option><option>Manneguda</option><option>Raipole</option><option>Naganpally</option></select></label>
                        <label>Plot size<input name="plotSize" type="text" placeholder="e.g. 240 Sq. Yds" /></label>
                        <label>Purpose<select name="purpose" defaultValue=""><option value="" disabled>Select a purpose</option><option>Investment</option><option>Future home</option><option>Farmhouse</option><option>Farm land / plantation</option><option>Weekend retreat</option></select></label>
                        <label className="buy-form-wide">Additional details<textarea name="notes" rows="3" placeholder="Budget, facing preference or questions" /></label>
                        <button className="buy-submit" type="submit">Continue in WhatsApp <span aria-hidden="true">&#8599;</span></button>
                        {formStatus && <p className="buy-form-status buy-form-wide" role="status">{formStatus}</p>}
                    </form>
                </section>
            </>}

            {activeTab === 'sell' && <section className="buy-form-section seller-form-section" id="sell-enquiry">
                <div className="buy-form-copy">
                    <p className="buy-eyebrow">Sell · Property submission</p>
                    <h2>Share the details of your <em>plot.</em></h2>
                    <p>Send the property information and our team will contact you to discuss next steps.</p>
                </div>
                <form className="buy-form" onSubmit={(event) => sendToWhatsApp(event, 'seller')}>
                    <label>Owner name<input name="ownerName" type="text" autoComplete="name" required /></label>
                    <label>Contact number<input name="phone" type="tel" autoComplete="tel" required /></label>
                    <label>Block<input name="block" type="text" required /></label>
                    <label>Plot number<input name="plotNumber" type="text" required /></label>
                    <label>Plot size<input name="plotSize" type="text" placeholder="e.g. 240 Sq. Yds" required /></label>
                    <label>Expected price<input name="expectedPrice" type="text" inputMode="decimal" placeholder="₹" required /></label>
                    <label className="buy-file-field buy-form-wide">Upload layout / plot photo
                        <span className="buy-file-drop">Choose an image or PDF<input name="plotPhoto" type="file" accept="image/*,.pdf,application/pdf" onChange={(event) => setSelectedFile(event.target.files?.[0]?.name || '')} /></span>
                        <small>{selectedFile || 'No file selected'}</small>
                    </label>
                    <button className="buy-submit" type="submit">Share plot details <span aria-hidden="true">&#8599;</span></button>
                    {formStatus && <p className="buy-form-status buy-form-wide" role="status">{formStatus}</p>}
                </form>
            </section>}

            {activeTab === 'visit' && <section className="buy-form-section" id="visit-enquiry">
                <div className="buy-form-copy">
                    <p className="buy-eyebrow">Site visit request</p>
                    <h2>Let’s plan your <em>visit.</em></h2>
                    <p>Share your contact details and preferred visit date. Our team will coordinate the arrangements.</p>
                </div>
                <form className="buy-form" onSubmit={(event) => sendToWhatsApp(event, 'site visit')}>
                    <label>Name<input name="ownerName" type="text" autoComplete="name" required /></label>
                    <label>Contact number<input name="phone" type="tel" autoComplete="tel" required /></label>
                    <label>Email<input name="email" type="email" autoComplete="email" /></label>
                    <label>Preferred locality<select name="location" defaultValue=""><option value="" disabled>Select a locality</option><option>Janaharsha</option><option>Ibrahimpatnam</option><option>Polkampally</option><option>Manneguda</option><option>Raipole</option><option>Naganpally</option></select></label>
                    <label>Preferred visit date<input name="visitDate" type="date" required /></label>
                    <label className="buy-form-wide">Additional details<textarea name="notes" rows="3" placeholder="Number of visitors or anything we should know" /></label>
                    <button className="buy-submit" type="submit">Request a site visit <span aria-hidden="true">&#8599;</span></button>
                    {formStatus && <p className="buy-form-status buy-form-wide" role="status">{formStatus}</p>}
                </form>
            </section>}
        </main>
    )
}

export default BuySell