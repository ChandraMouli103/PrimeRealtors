import { useNavigate } from 'react-router-dom'
import './ThankYou.css'

function ThankYou() {
    const navigate = useNavigate()

    return (
        <main className="thank-you-page">
            <section className="thank-you-panel">
                <span className="thank-you-icon" aria-hidden="true">&#10003;</span>
                <p className="contact-eyebrow">Thank you</p>
                <h1>Your enquiry is <em>on its way.</em></h1>
                <p>We have opened WhatsApp with your details. The Prime Realtors team will get back to you shortly.</p>
                <div className="thank-you-actions">
                    <button type="button" onClick={() => navigate('/contact')}>Send another enquiry</button>
                    <button type="button" className="thank-you-secondary" onClick={() => navigate('/')}>Back to home</button>
                </div>
            </section>
        </main>
    )
}

export default ThankYou
