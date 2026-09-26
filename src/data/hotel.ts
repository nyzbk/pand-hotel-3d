export interface HotelSuite {
  id: string;
  name: string;
  category: string;
  size: string;
  view: string;
  image: string;
  rate: string;
  highlights: string[];
  description: string;
}

export interface HotelAmenity {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const HOTEL_SUITES: HotelSuite[] = [
  {
    id: 'ralph-lauren-master-suite',
    name: 'The Ralph Lauren Master Suite',
    category: 'Signature Suite',
    size: '48 m²',
    view: 'Historic Pandreitje & Courtyard View',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    rate: 'From €520 / night',
    highlights: ['Antique Four-Poster King Bed', 'Ralph Lauren Fabric Wall Coverings', 'Whirlpool Spa Bath & Rain Shower'],
    description: 'Our most prestigious residence. Boasting soaring 18th-century exposed timber beams, genuine antiques, and exquisite Ralph Lauren bespoke upholstery.'
  },
  {
    id: 'garden-suite',
    name: 'The Private Garden Suite',
    category: 'Terrace Suite',
    size: '42 m²',
    view: 'Private Inner Courtyard Garden',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    rate: 'From €440 / night',
    highlights: ['Private Secluded Garden Terrace', 'Working Fireplace Hearth', 'Hermès Paris Bath Amenities'],
    description: 'A secluded sanctuary opening directly onto the tranquil inner courtyard. Enjoy evening nightcaps beside the private fireplace.'
  },
  {
    id: 'junior-canal-suite',
    name: 'Junior Canal-Side Suite',
    category: 'Canal Suite',
    size: '36 m²',
    view: 'Quiet Pandreitje Canal Panorama',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
    rate: 'From €380 / night',
    highlights: ['Direct Bruges Canal Views', 'Louis XVI Antique Seating', 'Bespoke Italian Cotton Linens'],
    description: 'Charming views over historic cobblestones and canal waters. Features timeless period furniture and marble-appointed bathroom.'
  },
  {
    id: 'charming-classic-room',
    name: 'Charming Deluxe Carriage Room',
    category: 'Deluxe Room',
    size: '28 m²',
    view: 'Historic Bruges Rooftops',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85',
    rate: 'From €290 / night',
    highlights: ['Goose Down Pillows & Duvets', 'Antique Writing Bureau', 'Complimentary Nespresso & Tea Bar'],
    description: 'Intimate boutique ambiance preserving the original proportions of the 18th-century carriage mansion. Quiet and supremely comfortable.'
  }
];

export const HOTEL_AMENITIES: HotelAmenity[] = [
  {
    title: 'The Louis XVI Fireplace Salon',
    subtitle: 'Antique Library & Hearth',
    description: 'A stately private drawing room warmed by an authentic open fireplace, surrounded by 1,000 rare antiquarian books and comfortable leather chesterfields.',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'Champagne Breakfast in the Garden Veranda',
    subtitle: 'Silver Teapot Service',
    description: 'Awaken to farm-fresh eggs cooked to order, artisanal Flemish cheeses, warm brioche, and chilled champagne served with traditional silver teapot service.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: 'The Intimate Library Bar',
    subtitle: 'Honour Bar & Cellar Reserve',
    description: 'An exclusive retreat reserved solely for hotel residents. Pour yourself vintage cognac, Belgian craft ales, or single malt whiskies in quiet elegance.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85'
  }
];
