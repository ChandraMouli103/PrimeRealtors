import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Our Presence', href: '/our-presence' },
	{ label: 'Buy/Sell', href: '/buy-sell' },
	{ label: 'News Update', href: '/news-update' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Contact', href: '/contact' },
]

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const closeMenu = () => setIsMenuOpen(false)
	const goTo = (path) => {
		navigate(path)
		closeMenu()
	}
	const callPrimeRealtors = () => {
		window.location.href = 'tel:+918073648872'
	}
	const isActive = (href) => href === '/' ? location.pathname === '/' && !location.hash : location.pathname + location.search === href || location.pathname === href

	return (
		<header className={`site-header ${isMenuOpen ? 'menu-open' : ''}`}>
			<div className="header-inner">
				<button className="brand" type="button" onClick={() => goTo('/')} aria-label="Prime Realtors home">
					<img className="header-logo" src={logo} alt="Prime Realtors" />
				</button>
				<nav id="primary-navigation" className={`primary-navigation ${isMenuOpen ? 'is-open' : ''}`}>
					{navItems.map((item) => <button className={isActive(item.href) ? 'is-active' : ''} key={item.label} type="button" onClick={() => goTo(item.href)} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</button>)}
				</nav>
				<div className="header-actions">
					<div className="header-quick-links">
						<button className="call-button" type="button" onClick={callPrimeRealtors} aria-label="Call Prime Realtors"><span className="call-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation"><path d="M6.6 10.8c1.8 3.5 3.1 4.8 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.2 21 3 13.8 3 5.3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.4 0 .8-.2 1.1l-2.2 2.2Z" /><path d="M13 3h8v8M21 3l-9 9" /></svg></span><strong>80736 48872</strong></button>
						<a className="header-whatsapp" href="https://wa.me/918073648872" target="_blank" rel="noreferrer" aria-label="Chat with Prime Realtors on WhatsApp" title="Chat with us on WhatsApp">
							<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.2 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.9 9.9 0 0 1-1.5-5.2c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.4-4.5 9.9-10.1 9.9Zm5.5-7.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.8-1-2.5-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1-1.1 2.6 0 1.5 1.1 3 1.2 3.2.2.2 2.1 3.3 5.1 4.5 1.9.8 2.7.9 3.7.8.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.3-.3-.4-.6-.5Z" /></svg>
						</a>
					</div>
					<button className="header-cta" type="button" onClick={() => goTo('/buy-sell?tab=visit#contact-details')}>Book a Site Visit</button>
					<button className={`menu-toggle ${isMenuOpen ? 'is-close' : ''}`} type="button" aria-expanded={isMenuOpen} aria-controls="primary-navigation" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsMenuOpen((open) => !open)}>
						<span className="sr-only">{isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}</span><span /><span /><span />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
