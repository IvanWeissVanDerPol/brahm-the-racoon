export const merch = [
  {
    id: 'still-reaching-tshirt',
    name: 'Still Reaching T-Shirt',
    price: { pyg: '120,000', usd: '15' },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    color: 'Black',
    description: 'Screen-printed on heavyweight 100% cotton. Front: "Still Reaching" album artwork. Back: lyrics from the title track.',
    waTemplate: 'Hi! I want to order the Still Reaching T-Shirt in [SIZE] — 120,000 Gs.',
    image: null,
    featured: true,
    category: 'apparel'
  },
  {
    id: 'brahm-hoodie',
    name: 'Brahm Hoodie',
    price: { pyg: '250,000', usd: '32' },
    sizes: ['S', 'M', 'L', 'XL'],
    color: 'Charcoal',
    description: 'Premium fleece hoodie with embroidered racoon logo on chest. Moon-phase graphic on back.',
    waTemplate: 'Hi! I want the Brahm Hoodie in [SIZE] — 250,000 Gs.',
    image: null,
    featured: true,
    category: 'apparel'
  },
  {
    id: 'racoon-sticker',
    name: 'Racoon Logo Sticker Pack',
    price: { pyg: '25,000', usd: '3' },
    sizes: [],
    color: 'Assorted',
    description: 'Set of 5 vinyl stickers. Waterproof, UV-resistant. 3" x 3" each. Includes racoon logo, moon phases, and lyric quotes.',
    waTemplate: 'Hi! I want the Racoon Sticker Pack — 25,000 Gs.',
    image: null,
    featured: false,
    category: 'accessories'
  },
  {
    id: 'engineer-mug',
    name: 'The Engineer Mug',
    price: { pyg: '60,000', usd: '8' },
    sizes: [],
    color: 'Black',
    description: 'Ceramic 12oz mug. Heat-reactive — turns from black to gold when filled with hot liquid, revealing the Brahm racoon logo.',
    waTemplate: 'Hi! I want The Engineer Mug — 60,000 Gs.',
    image: null,
    featured: false,
    category: 'accessories'
  },
  {
    id: 'digital-album',
    name: 'Still Reaching — Digital Album',
    price: { pyg: '50,000', usd: '6' },
    sizes: [],
    color: null,
    description: 'Full digital album (8 tracks) in high-quality MP3 + WAV. Includes digital booklet with lyrics and artwork. Delivered via email.',
    waTemplate: 'Hi! I want the Still Reaching digital album — 50,000 Gs.',
    image: null,
    featured: true,
    category: 'digital'
  },
  {
    id: 'lyric-poster',
    name: 'Still Reaching Lyric Poster',
    price: { pyg: '80,000', usd: '10' },
    sizes: [],
    color: null,
    description: '18" x 24" matte poster. Full lyrics of "Still Reaching" over a night sky illustration. Signed and numbered.',
    waTemplate: 'Hi! I want the Still Reaching Lyric Poster — 80,000 Gs.',
    image: null,
    featured: false,
    category: 'posters'
  }
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'apparel', label: 'Apparel' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'digital', label: 'Digital' },
  { id: 'posters', label: 'Posters' }
]
