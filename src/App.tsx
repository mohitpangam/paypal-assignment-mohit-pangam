import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Search, SlidersHorizontal, X } from 'lucide-react'
import { Fragment, useEffect, useMemo, useState } from 'react'
import sourceProducts from './assets/product-list.json'
import { CategoryTabs } from './components/CategoryTabs'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { ProductCard } from './components/ProductCard'
import { RecommendationSection } from './components/RecommendationSection'
import { FaqSection } from './components/FaqSection'
import { ReviewsSection } from './components/ReviewsSection'
import { Breadcrumb } from './components/Breadcrumb'
import { Footer } from './components/Footer'
import { CategorySidebar } from './components/CategorySidebar'
import type { Product, RentalDates } from './types'

const products = sourceProducts.products as Product[]

export default function App() {
  const [dates, setDates] = useState<RentalDates>({ delivery: '', pickup: '' })
  const [cart, setCart] = useState<number[]>([])
  const [toast, setToast] = useState('')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('popular')
  const [showFloatingCta, setShowFloatingCta] = useState(false)
  const hasDates = Boolean(dates.delivery && dates.pickup)

  useEffect(() => {
    const updateFloatingCta = () => {
      const firstProductImage = document.querySelector('.product-grid .product-image')
      if (!firstProductImage) return
      const oneRowEarlier = firstProductImage.getBoundingClientRect().top + window.scrollY - 48
      setShowFloatingCta(window.scrollY >= oneRowEarlier)
    }

    updateFloatingCta()
    window.addEventListener('scroll', updateFloatingCta, { passive: true })
    window.addEventListener('resize', updateFloatingCta)
    return () => {
      window.removeEventListener('scroll', updateFloatingCta)
      window.removeEventListener('resize', updateFloatingCta)
    }
  }, [])

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    return [...filtered].sort((a, b) => sort === 'price-low' ? a.per_day_rent - b.per_day_rent : sort === 'rating' ? b.rating - a.rating : b.booked_count - a.booked_count)
  }, [query, sort])

  const updateDate = (field: keyof RentalDates, value: string) => setDates((current) => ({ ...current, [field]: value }))
  const handleAdd = (productName = '') => {
    if (!hasDates) { setToast('Select rental dates to view prices'); return }
    setCart((current) => [...current, Date.now()])
    setToast(`${productName || 'Item'} added to cart`)
  }

  return <div className="app-shell">
    <Header dates={dates} onDateChange={updateDate} cartCount={cart.length} />
    <CategoryTabs />
    <main className="page-container content-layout">
      <CategorySidebar />
      <section className="main-content" id="listing">
        <HeroBanner />
        <div className="listing-heading"><div><h2>Gaming Gadgets On Rent</h2><p>Total items: {visibleProducts.length} items</p></div><div className="listing-tools"><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" aria-label="Search products" /></label><label className="sort-field"><SlidersHorizontal size={17} /><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products"><option value="popular">Popular</option><option value="price-low">Price low to high</option><option value="rating">Top rated</option></select></label></div></div>
        <div className="product-grid">{visibleProducts.slice(0, 12).map((product, index) => <Fragment key={product.id}><ProductCard product={product} showTag={index !== 0} onAdd={() => handleAdd(product.name)} onWishlist={() => setToast('Added to wishlist')} />{index === 3 && <div className="promo-image-card"><img src="/assets/link-1.webp" alt="Become an Asset Partner. Earn Monthly." /></div>}{index === 7 && <div className="promo-image-card"><img src="/assets/link-2.webp" alt="Rent out your gear on SharePal." /></div>}</Fragment>)}</div>
        <RecommendationSection />
      </section>
    </main>
    <div className="page-container lower-content"><FaqSection /><Breadcrumb /><ReviewsSection /></div>
    <Footer />
    <AnimatePresence>{toast && <motion.div className="toast" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} onAnimationComplete={() => window.setTimeout(() => setToast(''), 2200)}>{toast}<button type="button" aria-label="Close notification" onClick={() => setToast('')}><X size={16} /></button></motion.div>}</AnimatePresence>
    {showFloatingCta && <div className="floating-cta" role="status"><CalendarDays size={19} />{hasDates ? `${dates.delivery} → ${dates.pickup}` : 'Select rental dates to view prices'}</div>}
  </div>
}
