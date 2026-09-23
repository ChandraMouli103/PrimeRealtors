import './Footer.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

const footerGroups = [
    { title: 'Explore', links: [{ label: 'About us', path: '/about' }, { label: 'Gallery', path: '/gallery' }, { label: 'Buying a home', path: '/buy-sell' }, { label: 'Selling a home', path: '/buy-sell' }] },
    { title: 'Support', links: [{ label: 'Contact us', path: '/contact' }, { label: 'FAQs', path: '/contact' }, { label: 'Privacy policy', path: '/contact' }] },
]

function Footer() {
    const navigate = useNavigate()

    return (
        <footer className="site-footer" id="contact">
                <div className="footer-main">
                <div className="footer-intro"><button className="footer-brand" type="button" onClick={() => navigate('/')} aria-label="Prime Realtors home"><img src={logo} alt="Prime Realtors" /></button><p>Thoughtful property guidance for the next place you call home.</p><button className="footer-email" type="button" onClick={() => { window.location.href = 'mailto:primerealtors.janaharsha@gmail.com' }}>primerealtors.janaharsha@gmail.com</button></div>
                <div className="footer-links">{footerGroups.map((group) => <div className="footer-group" key={group.title}><h2>{group.title}</h2>{group.links.map((link) => <button type="button" onClick={() => navigate(link.path)} key={link.label}>{link.label}</button>)}</div>)}</div>
                <div className="footer-contact"><h2>Get in touch</h2><a href="tel:+919980746991">Raju: 99807 46991</a><a href="tel:+918106438696">Shiva: 81064 38696</a><a href="tel:+918073648872">Kalyan: 80736 48872</a><a href="https://wa.me/918073648872" target="_blank" rel="noreferrer">WhatsApp: +91 80736 48872</a><a href="mailto:primerealtors.janaharsha@gmail.com">primerealtors.janaharsha@gmail.com</a><address>Prime Realtors, QP-11, Dream City II (Sagar Block), Ibrahimpatnam, Telangana 501506</address></div>
                <div className="footer-note"><span>Find your next chapter</span><button className="footer-arrow" type="button" onClick={() => navigate('/contact')} aria-label="Explore homes">&#8599;</button></div>
            </div>
            <div className="footer-bottom"><span>© 2026 Prime Realtors</span><span>Built on trust, guided by experience.</span></div>
            <a className="whatsapp-float" href="https://wa.me/918073648872" target="_blank" rel="noreferrer" aria-label="Chat with Prime Realtors on WhatsApp" title="Chat with us on WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.2 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.9 9.9 0 0 1-1.5-5.2c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.4-4.5 9.9-10.1 9.9Zm5.5-7.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.8-1-2.5-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.6 0 1.5 1.1 3 1.2 3.2.2.2 2.1 3.3 5.1 4.5 1.9.8 2.7.9 3.7.8.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.3-.3-.4-.6-.5Z" /></svg>
            </a>
        </footer>
    )
}

export default Footer
