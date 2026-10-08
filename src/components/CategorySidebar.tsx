const categories = [
  ['All', '/assets/allproducts.webp'],
  ['GTA VI', '/assets/gta-viproducts.webp'],
  ['PS5 Console', '/assets/ps5consoleproducts.webp'],
  ['Xbox Console', '/assets/xboxconsoleproducts.webp'],
  ['VR', '/assets/vrproducts.webp'],
  ['Racing Wheel', '/assets/wheelproducts.webp'],
  ['Big Screen Gaming', '/assets/bigscreengamingproducts.webp'],
]

export function CategorySidebar() {
  return <aside className="category-sidebar" aria-label="Gaming gadget categories">
    {categories.map(([label, image], index) => <button className={`category-tile ${index === 0 ? 'selected' : ''}`} type="button" key={label}>
      <span className="category-image"><img src={image} alt="" /></span>
      <span>{label}</span>
    </button>)}
  </aside>
}
