import { assetPaths } from '../assets'
import { PlaceholderImage } from './PlaceholderImage'

export function HeroBanner() {
  return <section className="hero-banner" aria-labelledby="hero-title"><div className="hero-art hero-art-left"><PlaceholderImage src={assetPaths.heroLeft} alt="Xbox gaming setup" /></div><div className="hero-copy"><h1 id="hero-title">Gaming Consoles</h1><p>Rent the latest gaming gadgets from <b>SharePal</b> PS5, Xbox, Oculus VR, Racing Wheel on rent.</p><div className="platform-row"><PlaceholderImage src={assetPaths.platformXbox} alt="Xbox" /><span className="platform-divider" aria-hidden="true">|</span><PlaceholderImage src={assetPaths.platformPs5} alt="PlayStation 5" /><span className="platform-divider" aria-hidden="true">|</span><PlaceholderImage src={assetPaths.platformMeta} alt="Meta" /></div></div><div className="hero-art hero-art-right"><PlaceholderImage src={assetPaths.heroRight} alt="PlayStation gaming setup" /></div></section>
}
