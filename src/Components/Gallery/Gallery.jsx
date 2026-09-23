import { useState } from 'react'
import './Gallery.css'
import aImage from '../../assets/Gallery/a.jpeg'
import bImage from '../../assets/Gallery/B.jpeg'
import dreamCityImage from '../../assets/Gallery/dreamcity.jpeg'
import homeImage from '../../assets/Gallery/home.jpeg'
import lakeImage from '../../assets/Gallery/lake.jpeg'
import layoutImage from '../../assets/Gallery/layout.jpeg'
import parkImage from '../../assets/Gallery/park.jpeg'
import parkOneImage from '../../assets/Gallery/park1.jpeg'
import parkTwoImage from '../../assets/Gallery/park2.jpeg'
import viewImage from '../../assets/Gallery/view.jpeg'
import waterTankImage from '../../assets/Gallery/watertank.jpeg'

const galleryItems = [
    { image: dreamCityImage, title: 'Dream City', category: 'Community' },
    { image: homeImage, title: 'Your next home', category: 'Lifestyle' },
    { image: lakeImage, title: 'Lake views', category: 'Nature' },
    { image: viewImage, title: 'Open horizons', category: 'Location' },
    { image: layoutImage, title: 'Planned layouts', category: 'Development' },
    { image: parkImage, title: 'Green spaces', category: 'Amenities' },
    { image: parkOneImage, title: 'A place to grow', category: 'Lifestyle' },
    { image: parkTwoImage, title: 'Community parks', category: 'Amenities' },
    { image: waterTankImage, title: 'Built for tomorrow', category: 'Infrastructure' },
    { image: aImage, title: 'Prime locations', category: 'Community' },
    { image: bImage, title: 'Room to belong', category: 'Lifestyle' },
]

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <main className="gallery-page">
            <section className="gallery-hero">
                <p className="gallery-eyebrow">Prime Realtors · Janaharsha</p>
                <h1>Spaces made for <em>living well.</em></h1>
                <p>Explore the places, plans, and everyday details that make our communities feel like home.</p>
            </section>

            <section className="gallery-content" aria-label="Project gallery">
                <div className="gallery-heading">
                    <div>
                        <p className="gallery-kicker">A closer look</p>
                        <h2>See the <em>possibility.</em></h2>
                    </div>
                    <p>{galleryItems.length} views from the Prime Realtors collection</p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <button className={`gallery-card gallery-card-${index + 1}`} type="button" key={item.title} onClick={() => setSelectedImage(item)}>
                            <img src={item.image} alt={item.title} />
                            <span className="gallery-card-overlay">
                                <small>{item.category}</small>
                                <strong>{item.title}</strong>
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            {selectedImage && (
                <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
                    <button className="gallery-lightbox-backdrop" type="button" aria-label="Close image" onClick={() => setSelectedImage(null)} />
                    <div className="gallery-lightbox-content">
                        <button className="gallery-lightbox-close" type="button" aria-label="Close image" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div>
                            <small>{selectedImage.category}</small>
                            <strong>{selectedImage.title}</strong>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Gallery
