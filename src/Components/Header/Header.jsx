import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'
const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Our Presence', href: '/our-presence' },
	{ label: 'Buy/Sell', href: '/buy-sell' },
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
					<button className="call-button" type="button" onClick={callPrimeRealtors} aria-label="Call Prime Realtors"><span className="call-icon" aria-hidden="true"><svg viewBox="0 0 24 24" role="presentation"><path d="M6.6 10.8c1.8 3.5 3.1 4.8 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.2 21 3 13.8 3 5.3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.4 0 .8-.2 1.1l-2.2 2.2Z" /><path d="M13 3h8v8M21 3l-9 9" /></svg></span><strong>80736 48872</strong></button>
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
