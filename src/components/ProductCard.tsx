import { motion } from 'framer-motion'
import { Heart, Plus } from 'lucide-react'
import type { Product } from '../types'
import { PlaceholderImage } from './PlaceholderImage'

export function ProductCard({ product, onAdd, onWishlist, showTag = true }: { product: Product; onAdd: () => void; onWishlist: () => void; showTag?: boolean }) {
  const price = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(product.per_day_rent)
  return <motion.article className="product-card" layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ duration: 0.22 }}><button className="heart-button" type="button" aria-label={`Add ${product.name} to wishlist`} onClick={onWishlist}><Heart size={20} /></button><div className={`product-image ${product.out_of_stock ? 'is-out' : ''}`}>{showTag && product.tag && <span className={`tag tag-${product.tag.toLowerCase().replaceAll(' ', '-')}`}>{product.tag}</span>}<PlaceholderImage src={product.image} alt={product.name} loading="lazy" /></div>{product.out_of_stock && <span className="stock-ribbon">Out of Stock</span>}<h3>{product.name}</h3><div className="product-divider" /><div className="product-bottom"><button className="price-copy" type="button" onClick={onAdd} title="Select dates to see rental price"><span>₹{price}/day</span><b>Select dates for total</b></button><button className="add-button" type="button" aria-label={`Add ${product.name} to cart`} onClick={onAdd} disabled={product.out_of_stock}>{product.out_of_stock ? '!' : <Plus size={25} />}</button></div>{product.rating > 0 && <div className="rating-line">★ {product.rating} <span>·</span> {product.booked_count} booked</div>}</motion.article>
}
