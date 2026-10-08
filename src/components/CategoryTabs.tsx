import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const entertainmentItems = ['Projectors', 'Speakers', 'Mics', 'VR']

export function CategoryTabs() {
  const [open, setOpen] = useState(false)
  return <nav className="tabs-wrap page-container" aria-label="Product categories"><div className="category-tabs">{['Photography', 'Gaming', 'Outdoor'].map((tab) => <button className={tab === 'Gaming' ? 'active' : ''} key={tab} type="button">{tab}</button>)}<div className="tab-with-menu"><button className={open ? 'menu-active' : ''} type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>Entertainment <ChevronDown size={17} /></button><AnimatePresence>{open && <motion.div className="entertainment-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}><p>Explore entertainment</p>{entertainmentItems.map((item) => <button key={item} type="button">{item}</button>)}</motion.div>}</AnimatePresence></div></div></nav>
}
