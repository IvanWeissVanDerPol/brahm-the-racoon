'use client'

import { useState } from 'react'
import { events, pastEvents } from '@/data/events'

export default function EventsSection() {
  const [showPast, setShowPast] = useState(false)

  const statusBadge = (status: string, soldOut?: boolean) => {
    if (soldOut) return <span className="text-[#E05C5C] text-[10px] uppercase tracking-wider font-semibold">Sold Out</span>
    if (status === 'upcoming') return <span className="text-[#5CB87A] text-[10px] uppercase tracking-wider font-semibold">Upcoming</span>
    if (status === 'past') return <span className="text-[#5A5678] text-[10px] uppercase tracking-wider font-semibold">Past</span>
    return null
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section id="events" className="py-[clamp(3rem,6vw,6rem)] px-6 bg-[#16161F]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#E8E4E0] mb-2">
          Live
        </h2>
        <p className="text-[#8A8698] mb-8 max-w-lg">
          Upcoming shows. Come feel it live.
        </p>

        {/* Upcoming */}
        {events.length === 0 ? (
          <div className="p-8 rounded-xl border border-[#2A2A3E] bg-[#1C1C2A] text-center">
            <p className="text-[#5A5678] text-sm">No shows scheduled yet. Stay tuned.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {events.map(event => (
              <div
                key={event.id}
                className={`p-5 rounded-xl border transition-all ${
                  event.soldOut
                    ? 'border-[#E05C5C]/20 bg-[#1C1C2A] opacity-60'
                    : 'border-[#2A2A3E] bg-[#1C1C2A] hover:border-[#D4956A]/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Date block */}
                  <div className="text-center shrink-0">
                    <div className="text-[#D4956A] font-[family-name:var(--font-heading)] text-xl leading-tight">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-[#8A8698] text-[10px] uppercase tracking-wider">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-[#5A5678] text-[10px]">
                      {new Date(event.date).getFullYear()}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-12 bg-[#2A2A3E]" />

                  {/* Event info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#E8E4E0] font-semibold text-sm">{event.title}</h3>
                      {statusBadge(event.status, event.soldOut)}
                    </div>
                    <p className="text-[#8A8698] text-xs">
                      {event.venue} &middot; {event.city}, {event.country}
                    </p>
                    {event.lineup && (
                      <p className="text-[#5A5678] text-[11px] mt-1">
                        {event.lineup.join(' / ')}
                      </p>
                    )}
                    <p className="text-[#5A5678] text-xs mt-1 line-clamp-1">{event.description}</p>
                  </div>

                  {/* Ticket CTA */}
                  <div className="shrink-0">
                    {event.ticketUrl ? (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                          event.soldOut
                            ? 'bg-[#E05C5C]/10 text-[#E05C5C] cursor-not-allowed'
                            : 'bg-[#D4956A] text-[#0D0D14] hover:bg-[#E8C4A0]'
                        }`}
                      >
                        {event.soldOut ? 'Sold Out' : event.ticketPrice ? `${event.ticketPrice}` : 'Free'}
                        {!event.soldOut && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        )}
                      </a>
                    ) : (
                      <span className="inline-block px-5 py-2.5 rounded-lg text-xs text-[#5A5678] border border-[#2A2A3E]">
                        TBA
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past shows toggle */}
        {pastEvents.length > 0 && (
          <div className="mt-8">
            <button
              onClick={() => setShowPast(!showPast)}
              className="flex items-center gap-2 text-xs text-[#5A5678] hover:text-[#8A8698] transition-colors"
            >
              <span>{showPast ? 'Hide' : 'Show'} past shows ({pastEvents.length})</span>
              <svg
                className={`w-3 h-3 transition-transform ${showPast ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>

            {showPast && (
              <div className="mt-4 space-y-2">
                {pastEvents.map(event => (
                  <div key={event.id} className="p-4 rounded-lg border border-[#2A2A3E] bg-[#1C1C2A]/50">
                    <div className="flex items-center gap-3">
                      <span className="text-[#5A5678] text-xs font-mono shrink-0">
                        {formatDate(event.date)}
                      </span>
                      <span className="text-[#5A5678]">/</span>
                      <span className="text-[#8A8698] text-xs">{event.title}</span>
                      <span className="text-[#5A5678] text-xs">@ {event.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
