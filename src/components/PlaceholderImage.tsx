import { useState } from 'react'
import { assetLabel } from '../assets'

type Props = { src: string; alt: string; className?: string; loading?: 'lazy' | 'eager' }

export function PlaceholderImage({ src, alt, className = '', loading }: Props) {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className={`asset-placeholder ${className}`} aria-label={`${assetLabel(src)} placeholder`}>{assetLabel(src)}</div>
  ) : (
    <img className={className} src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />
  )
}
