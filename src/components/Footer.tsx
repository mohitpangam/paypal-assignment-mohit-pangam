import { ChevronUp, Headphones, Mail } from 'lucide-react'
import { assetPaths } from '../assets'
import { PlaceholderImage } from './PlaceholderImage'

const megaLinks = [
  ['Action Cameras', 'Action Cameras', 'Pocket Cameras', 'GoPro Cameras', 'DJI Cameras', 'DJI Drones', '360 Cameras'],
  ['Cameras', 'DSLR Cameras', 'Cameras', 'iPhones', 'DSLR Gimbal Combos', 'Wildlife Photography', 'Tripod and camera accessories'],
  ['Trekking Gear', 'Trekking Gear', 'Trekking Jackets', 'Trek/Snow Pants', 'Trekking Shoes', 'Trek Accessories'],
  ['Riding Gear', 'Riding Gear', 'Riding Luggage', 'Riding Jackets', 'Riding Essentials', 'Riding Boots', 'Binoculars'],
  ['Creator Gear', 'Wireless & Collar Mics', 'Professional Cameras', 'Mirrorless Cameras', 'UNLMTD Vlogging', 'Mobile Gimbals', 'Vlogging'],
  ['Gaming Console', 'PS5 Console', 'VR', 'Racing Wheel', 'Big Screen Gaming', 'Xbox Console'],
  ['Winter Wear', 'Snow Boots', 'Winter Jackets', 'Backpacks'],
  ['Camping Gear', 'Camping Gear', 'Camping Stools & Tables', 'Camping Tents', 'Sleeping Bags & Mats'],
  ['Audio Visual Equipment', 'Projectors', 'VR', 'Mics', 'Speakers'],
]

const footerColumns = [
  ['Sharepal', 'About', 'Why SharePal', 'Sitemap', 'CarePal'],
  ['Become a Pal', 'Sharepal for Creators', 'Careers', 'Sharepal for Brands', 'Asset Funding Program', 'Rent Your Gear'],
  ['Information', 'How it works?', 'FAQs', 'Verification', 'Cancellation Policy', 'Life at Sharepal'],
  ['Policies', 'Terms & Condition', 'Shipping policy', 'Damage Policy', 'Terms of Use', 'Privacy Policy'],
]

export function Footer() {
  const scrollToProducts = () => document.getElementById('listing')?.scrollIntoView({ behavior: 'smooth' })
  return <footer className="site-footer">
    <div className="footer-inner page-container">
      <div className="footer-mega-grid">{megaLinks.map(([heading, ...links]) => <div className="footer-link-group" key={heading}><h3>{heading}</h3>{links.map((link) => <a href="#listing" key={link}>{link}</a>)}</div>)}</div>
      <div className="footer-seo"><a href="#listing">Renting from SharePal in Bangalore</a><p>Discover the convenience of renting from SharePal, your trusted partner in Bangalore for all your rental needs. Whether you&apos;re exploring the vibrant streets of Koramangala, setting up a shoot in Indiranagar, or planning a trek from the outskirts of Whitefield, SharePal has you covered. Choose from a wide range of products, including cameras, action cameras, gaming consoles, projectors, speakers, trekking gear, riding gear, and more. With doorstep delivery and pickup services, flexible rental tenures, and an easy-to-use platform, renting has never been easier.</p><strong>Categories on Rent</strong><a href="#listing">Action Cameras on Rent</a><p>Capture your adventures in stunning detail with our range of action cameras. Choose from top brands like GoPro, Insta360, and DJI, perfect for everything from extreme sports to casual vlogging.</p><button type="button">Read More⌄</button></div>
      <div className="footer-main"><div className="footer-logo"><PlaceholderImage src={assetPaths.logo} alt="Share" className="footer-logo-image" /><span>Pal</span></div><div className="footer-columns">{footerColumns.map(([heading, ...links]) => <div className="footer-column" key={heading}><h3>{heading}</h3>{links.map((link, index) => <a href="#listing" key={link}>{link}{(heading === 'Become a Pal' && index > 2) && <em>New</em>}</a>)}</div>)}<div className="footer-column footer-help"><h3>Need Help</h3><a href="#listing"><Headphones size={14} /> Contact Support</a><strong>Contact Us</strong><a href="mailto:care@sharepal.in"><Mail size={14} /> care@sharepal.in</a><div className="social-links"><a href="https://www.facebook.com/Sharepal.in" target="_blank" rel="noreferrer" aria-label="Visit SharePal on Facebook"><img src="/assets/facebook.svg" alt="" /></a><a href="https://www.instagram.com/sharepal.in/" target="_blank" rel="noreferrer" aria-label="Visit SharePal on Instagram"><img src="/assets/instagram.svg" alt="" /></a><a href="https://www.linkedin.com/company/sharepal/" target="_blank" rel="noreferrer" aria-label="Visit SharePal on LinkedIn"><img src="/assets/linkedin.svg" alt="" /></a></div></div></div></div>
      <div className="footer-bottom"><button type="button" onClick={scrollToProducts}>Go up <ChevronUp size={14} /></button><span>© 2026. SWNAC E-Kiraya Services Pvt Ltd</span><span>Made with <b>♥</b> for India</span></div>
    </div>
  </footer>
}
