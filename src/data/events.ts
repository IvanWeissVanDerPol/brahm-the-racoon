export type EventStatus = 'upcoming' | 'past' | 'cancelled'

export interface Event {
  id: string
  title: string
  date: string
  venue: string
  city: string
  country: string
  status: EventStatus
  ticketUrl?: string
  ticketPrice?: string
  description: string
  lineup?: string[]
  soldOut?: boolean
}

export const events: Event[] = [
  {
    id: 'asuncion-launch',
    title: 'Still Reaching — Album Launch',
    date: '2026-07-18',
    venue: 'Sala de la Cultura',
    city: 'Asunción',
    country: 'PY',
    status: 'upcoming',
    ticketUrl: '#',
    ticketPrice: '80,000 Gs',
    description: 'Official album launch party. Full live set with band. Limited edition vinyl and merch available at the show.',
    lineup: ['Brahm the Racoon', 'Special guest TBA'],
    soldOut: false
  },
  {
    id: 'encarnacion-show',
    title: 'Noche de Acústica',
    date: '2026-08-15',
    venue: 'Teatro Municipal',
    city: 'Encarnación',
    country: 'PY',
    status: 'upcoming',
    ticketUrl: '#',
    ticketPrice: '60,000 Gs',
    description: 'Intimate acoustic set. stripped-down arrangements of the album plus new material.',
    soldOut: false
  },
  {
    id: 'ciudad-del-este',
    title: 'Brahm en Vivo',
    date: '2026-09-05',
    venue: 'Centro de Convenciones',
    city: 'Ciudad del Este',
    country: 'PY',
    status: 'upcoming',
    ticketUrl: '#',
    ticketPrice: '70,000 Gs',
    description: 'First show in CDE. Full electric set with visual projections.',
    soldOut: false
  }
]

export const pastEvents: Event[] = [
  {
    id: 'private-showcase',
    title: 'Private Studio Showcase',
    date: '2026-04-20',
    venue: 'Estudio del Centro',
    city: 'Asunción',
    country: 'PY',
    status: 'past',
    description: 'Invite-only preview of the Still Reaching album. 40 guests. First public performance.',
  },
  {
    id: 'open-mic-pilot',
    title: 'Open Mic Night',
    date: '2026-03-12',
    venue: 'Café Literario',
    city: 'Asunción',
    country: 'PY',
    status: 'past',
    description: 'First ever live performance. Three songs acoustic. Tested the material in front of a live audience.',
  }
]
