import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Contact.css'

const contactPaths = {
    buy: {
        title: 'I Want to Buy',
        copy: 'Tell us your requirements and we will find matching plots.',
        action: 'Share buying requirements',
    },
    sell: {
        title: 'I Want to Sell',
        copy: 'Share your plot details and we will connect you with serious buyers.',
        action: 'Share plot details',
    },
    visit: {
        title: 'I Want to Visit',
        copy: 'Book a guided site visit to explore Janaharsha plots.',
        action: 'Book a site visit',
    },
}

function Contact() {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedTab = new URLSearchParams(location.search).get('tab')
    const activePath = contactPaths[selectedTab] ? selectedTab : 'buy'
    const activeContact = contactPaths[activePath]

    useEffect(() => {
        if (location.hash === '#contact-details') {
            document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location.hash])

    const selectPath = (path) => {
        const target = path === 'buy'
            ? '/buy-sell?tab=buy#buy-layouts-title'
            : path === 'sell'
                ? '/buy-sell?tab=sell#sell-enquiry'
                : `/buy-sell?tab=${path}`

        navigate(target)
    }
    const submitContactForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const message = [
            'New Prime Realtors enquiry',
            `Name: ${formData.get('name')}`,
            `Phone: ${formData.get('phone')}`,
            `Email: ${formData.get('email')}`,
            `Address: ${formData.get('address')}`,
        ].join('\n')
        window.open(`https://wa.me/918073648872?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
        event.currentTarget.reset()
        navigate('/thank-you')
    }

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-hero-copy">
                    <h1>One conversation is all it takes to start your <em>Land journey.</em></h1>
                    <p>Tell us what you are looking for, and Prime Realtors will help you take the next clear step.</p>
            
                </div>
            
            </section>
            <section className="contact-content">
                <div className="contact-section-heading">
                    {/* <p className="contact-eyebrow">How can we help?</p> */}
                    <h2>Choose the path that fits your <em>needs.</em></h2>
                </div>
                <div className="contact-paths">
                    {Object.entries(contactPaths).map(([path, details]) => <button className={`contact-path ${activePath === path ? 'is-active' : ''}`} type="button" key={path} onClick={() => selectPath(path)}>
                        <span className="contact-path-number">0{Object.keys(contactPaths).indexOf(path) + 1}</span>
                        <span className="contact-path-title">{details.title}</span>
                        <span className="contact-path-copy">{details.copy}</span>
                        <span className="contact-path-arrow" aria-hidden="true">&#8599;</span>
                    </button>)}
                </div>
            </section>
            <div className="contact-details" id="contact-details">
                    <div className="contact-detail-info">
                        <div className="contact-list-heading">
                            <p className="contact-eyebrow-">Get in touch</p>
                         
                        </div>
                        <div className="contact-detail-list">
                        <a href="tel:+918073648872"><span className="contact-detail-icon" aria-hidden="true">&#9742;</span><small>Kalyan:</small><strong>80736 48872</strong></a>
                        <a href="tel:+918463937607"><span className="contact-detail-icon" aria-hidden="true">&#9742;</span><small>Srinivas:</small><strong>8463937607</strong></a>
                        <a href="tel:+918106438696"><span className="contact-detail-icon" aria-hidden="true">&#9742;</span><small>Shiva:</small><strong>81064 38696</strong></a> 
                        <a href="https://wa.me/918073648872" target="_blank" rel="noreferrer"><span className="contact-detail-icon contact-whatsapp-icon" aria-hidden="true">WA</span><small>WhatsApp</small><strong>+91 80736 48872</strong></a>
                        <a href="mailto:primerealtors.janaharsha@gmail.com"><span className="contact-detail-icon" aria-hidden="true">&#9993;</span><small>Email</small><strong>primerealtors.janaharsha@gmail.com</strong></a>
                        <div><span className="contact-detail-icon contact-location-icon" aria-hidden="true">&#9673;</span><small>Office</small><strong>Prime Realtors, QP-11, Dream City II (Sagar Block), Ibrahimpatnam, Telangana, 501506.</strong></div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={submitContactForm}>
                        <p className="contact-eyebrow-">Send an enquiry</p>
                        <h2>Tell us a little about <em>you.</em></h2>
                        <label>Name<input name="name" type="text" placeholder="Your full name" required /></label>
                        <label>Phone<input name="phone" type="tel" placeholder="Your phone number" required /></label>
                        <label>Email<input name="email" type="email" placeholder="Your email address" required /></label>
                        <label>Address<textarea name="address" rows="3" placeholder="Your address or preferred location" required /></label>
                        <button className="contact-form-submit" type="submit">Submit Enquiry <span aria-hidden="true">&#8599;</span></button>
                    </form>
            </div>
        </main>
    )
}

export default Contact
