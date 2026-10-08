import { CalendarDays, ChevronDown, MapPin, Search, ShoppingCart, UserRound } from 'lucide-react'
import { useState } from 'react'
import { assetPaths } from '../assets'
import type { RentalDates } from '../types'
import { PlaceholderImage } from './PlaceholderImage'

function Logo() {
  return <div className="logo-block"><PlaceholderImage src={assetPaths.logo} alt="Share" className="logo-image" /><span className="logo-pal">pal</span></div>
}

function RentalPill({ dates, onDates }: { dates: RentalDates; onDates: () => void }) {
  return <div className="rental-pill" aria-label="Rental date controls">
    <button className="rental-segment location-segment" type="button"><MapPin size={19} /><span>Bangalore</span><ChevronDown size={16} /></button>
    <button className="rental-segment" type="button" onClick={onDates}><CalendarDays size={18} /><span>{dates.delivery || 'Delivery Date'}</span></button>
    <button className="rental-segment" type="button" onClick={onDates}><CalendarDays size={18} /><span>{dates.pickup || 'Pickup Date'}</span></button>
    <button className="rental-select" type="button" onClick={onDates}><CalendarDays size={18} /><span>Select</span></button>
  </div>
}

export function Header({ dates, onDateChange, cartCount }: { dates: RentalDates; onDateChange: (field: keyof RentalDates, value: string) => void; cartCount: number }) {
  const [dateOpen, setDateOpen] = useState(false)
  return <header className="site-header">
    <div className="header-inner page-container"><Logo /><div className="header-controls"><RentalPill dates={dates} onDates={() => setDateOpen((open) => !open)} />{dateOpen && <div className="date-popover"><label>Delivery date<input type="date" value={dates.delivery} onChange={(event) => onDateChange('delivery', event.target.value)} /></label><label>Pickup date<input type="date" value={dates.pickup} onChange={(event) => onDateChange('pickup', event.target.value)} /></label><button type="button" onClick={() => setDateOpen(false)}>Apply dates</button></div>}</div><div className="header-actions"><button className="icon-button" type="button" aria-label="Search"><Search size={23} /></button><button className="icon-button cart-button" type="button" aria-label={`Cart, ${cartCount} items`}><ShoppingCart size={23} />{cartCount > 0 && <span>{cartCount}</span>}</button><button className="profile-button" type="button"><span className="avatar"><UserRound size={23} /></span><strong>Hi, Login</strong></button></div></div>
  </header>
}
