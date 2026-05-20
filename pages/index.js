import { useState } from 'react';
import Head from 'next/head';
import { getHistoryForDay, MONTHS, getDaysInMonth } from '../data/history';

const CAT_COLORS = {
  Politics: '#8b5e3c',
  Science: '#3c6e8b',
  Technology: '#5e3c8b',
  Culture: '#8b3c5e',
  War: '#6e3c3c',
  Nature: '#3c8b5e',
  Exploration: '#8b7d3c',
  Disaster: '#8b4c3c',
  Crime: '#5c5c5c',
};

function AdBanner({ type }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f6f1 0%, #ede9e0 100%)',
      border: '1px dashed #c4b89c',
      borderRadius: 4,
      padding: type === 'tall' ? '40px 20px' : '18px 20px',
      textAlign: 'center',
      margin: '28px 0',
      color: '#9c8e76',
      fontSize: 11,
      letterSpacing: 2,
      textTransform: 'uppercase',
    }}>
      — Advertisement —
      <div style={{ fontSize: 9, marginTop: 4, opacity: 0.6 }}>
        Google AdSense · 728×90 Leaderboard
      </div>
    </div>
  );
}

function AffiliateBox({ event }) {
  const searchTerm = event ? encodeURIComponent(event.text.split(',')[0].split('.')[0].substring(0, 60) + ' history book') : 'history book';
  const affiliateUrl = `https://www.amazon.com/s?k=${searchTerm}&tag=todayinhist03-20`;
  return (
    <a href={affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#faf8f4',
        border: '1px solid #e8e2d6',
        borderRadius: 6,
        padding: '14px 16px',
        marginTop: 10,
        marginBottom: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <span style={{ fontSize: 24 }}>📚</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: '#8a7d6b', textTransform: 'uppercase', letterSpacing: 1.5, fontFamily: 'system-ui, sans-serif' }}>Dive Deeper</div>
          <div style={{ fontSize: 13, color: '#3d3427', marginTop: 2 }}>
            Explore books about this era on Amazon →
          </div>
        </div>
        <div style={{
          background: '#c45d3e',
          color: '#fff',
          fontSize: 10,
          padding: '6px 14px',
          borderRadius: 4,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontFamily: 'system-ui, sans-serif',
          whiteSpace: 'nowrap',
        }}>
          Shop
        </div>
      </div>
    </a>
  );
}

function SidebarAd() {
  return (
    <div style={{
      background: '#faf8f4',
      border: '1px solid #e8e2d6',
      borderRadius: 6,
      padding: '24px 16px',
      textAlign: 'center',
      color: '#9c8e76',
      fontSize: 10,
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginBottom: 20,
    }}>
      — Sponsored —
      <div style={{ fontSize: 9, marginTop: 4, opacity: 0.6 }}>300×250 Ad Unit</div>
    </div>
  );
}

export default function Home() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [day, setDay] = useState(now.getDate());
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const content = getHistoryForDay(month, day);
  const isToday = month === now.getMonth() + 1 && day === now.getDate();
  const dateStr = `${MONTHS[month - 1]} ${day}`;
  const dayOptions = Array.from({ length: getDaysInMonth(month) }, (_, i) => i + 1);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const goToDay = (m, d) => {
    setMonth(m);
    setDay(d);
    setExpandedEvent(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTitle = `What Happened on ${dateStr}? — Today In History`;
  const pageDesc = content.events[0]
    ? `On ${dateStr}: ${content.events[0].text.slice(0, 120)}...`
    : `Discover what happened on ${dateStr} throughout history.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* === MASTHEAD === */}
        <header className="fade-up" style={{
          maxWidth: 780,
          margin: '0 auto',
          textAlign: 'center',
          padding: '36px 20px 20px',
          borderBottom: '3px double #2c2416',
        }}>
          <div style={{ fontSize: 10, letterSpacing: 6, textTransform: 'uppercase', color: '#8a7d6b', marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>
            Est. 2026 · A Daily Chronicle
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(34px, 7vw, 56px)',
            fontWeight: 900,
            margin: '0 0 6px',
            lineHeight: 1,
            color: '#1a1207',
            letterSpacing: -1,
          }}>
            Today In History
          </h1>
          <div style={{ fontSize: 13, color: '#8a7d6b', letterSpacing: 3, textTransform: 'uppercase', fontFamily: 'system-ui, sans-serif' }}>
            History · Rediscovered Daily
          </div>
        </header>

        {/* === DATE NAV === */}
        <nav className="fade-up delay-1" style={{
          maxWidth: 780,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
          padding: '18px 20px',
          borderBottom: '1px solid #ddd5c7',
        }}>
          <select value={month} onChange={e => goToDay(Number(e.target.value), Math.min(day, getDaysInMonth(Number(e.target.value))))} style={selectStyle}>
            {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
          </select>
          <select value={day} onChange={e => goToDay(month, Number(e.target.value))} style={selectStyle}>
            {dayOptions.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          {!isToday && (
            <button onClick={() => goToDay(now.getMonth() + 1, now.getDate())} style={{
              background: 'none', border: '1px solid #c4b89c', color: '#8a7d6b',
              padding: '7px 16px', borderRadius: 4, cursor: 'pointer',
              fontSize: 12, fontFamily: "'Source Serif 4', Georgia, serif",
            }}>
              Today
            </button>
          )}
        </nav>

        <main style={{ maxWidth: 780, margin: '0 auto', padding: '0 20px' }}>

          {/* === HERO DATE === */}
          <div className="fade-up delay-2" style={{ textAlign: 'center', padding: '36px 0 8px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(36px, 8vw, 58px)',
              fontWeight: 900,
              color: '#1a1207',
              lineHeight: 1.1,
              margin: 0,
            }}>
              {dateStr}
            </h2>
            <div style={{ width: 40, height: 3, background: '#c45d3e', margin: '16px auto 0' }} />
          </div>

          {/* === DID YOU KNOW === */}
          <div className="fade-up delay-3" style={{
            background: '#2c2416',
            color: '#e8dcc8',
            padding: '22px 24px',
            borderRadius: 2,
            margin: '20px 0 0',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -10, left: 24,
              background: '#c45d3e', color: '#fff',
              fontSize: 9, letterSpacing: 3, textTransform: 'uppercase',
              padding: '3px 10px', fontWeight: 700, fontFamily: 'system-ui, sans-serif',
            }}>
              Did You Know
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
              {content.fact}
            </p>
          </div>

          <AdBanner type="normal" />

          {/* === MAJOR EVENTS === */}
          <section className="fade-up delay-4">
            <h3 style={sectionHeading}>
              <span style={sectionLine} />
              Major Events
              <span style={sectionLine} />
            </h3>

            {content.events.map((event, i) => (
              <div key={i}>
                <article
                  onClick={() => setExpandedEvent(expandedEvent === i ? null : i)}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '18px 0',
                    borderBottom: '1px solid #e8e2d6',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 28,
                    fontWeight: 900,
                    color: '#c45d3e',
                    minWidth: 72,
                    lineHeight: 1,
                  }}>
                    {event.year}
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#fff',
                      background: CAT_COLORS[event.category] || '#666',
                      padding: '2px 8px',
                      borderRadius: 2,
                      marginBottom: 6,
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 600,
                    }}>
                      {event.category}
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: 15, lineHeight: 1.65, color: '#3d3427' }}>
                      {event.text}
                    </p>
                  </div>
                  <div style={{ color: '#c4b89c', fontSize: 20, alignSelf: 'center', flexShrink: 0 }}>
                    {expandedEvent === i ? '−' : '+'}
                  </div>
                </article>

                {expandedEvent === i && <AffiliateBox event={event} />}
                {i === 1 && <AdBanner type="normal" />}
              </div>
            ))}
          </section>

          {/* === BORN ON THIS DAY === */}
          {content.births && content.births.length > 0 && (
            <section className="fade-up delay-5" style={{ marginTop: 36 }}>
              <h3 style={sectionHeading}>
                <span style={sectionLine} />
                Born On This Day
                <span style={sectionLine} />
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {content.births.map((b, i) => (
                  <div key={i} style={{
                    background: '#fff',
                    border: '1px solid #e8e2d6',
                    borderRadius: 4,
                    padding: 16,
                  }}>
                    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: '#1a1207' }}>
                      {b.name}
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#c45d3e', margin: '4px 0', fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {b.year}
                    </div>
                    <div style={{ fontSize: 13, color: '#8a7d6b', lineHeight: 1.5 }}>
                      {b.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* === DEATHS === */}
          {content.deaths && content.deaths.length > 0 && (
            <section style={{ marginTop: 32 }}>
              <h3 style={sectionHeading}>
                <span style={sectionLine} />
                Notable Deaths
                <span style={sectionLine} />
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {content.deaths.map((d, i) => (
                  <div key={i} style={{
                    background: '#fff',
                    border: '1px solid #e8e2d6',
                    borderRadius: 4,
                    padding: 16,
                  }}>
                    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, fontWeight: 700, color: '#1a1207' }}>
                      {d.name}
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: '#6e3c3c', margin: '4px 0', fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {d.year}
                    </div>
                    <div style={{ fontSize: 13, color: '#8a7d6b', lineHeight: 1.5 }}>
                      {d.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <AdBanner type="tall" />

          {/* === NEWSLETTER === */}
          <section className="fade-up delay-6" style={{
            background: 'linear-gradient(135deg, #2c2416 0%, #3d2e1a 100%)',
            borderRadius: 4,
            padding: '36px 28px',
            textAlign: 'center',
            margin: '12px 0 36px',
          }}>
            <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: '#c45d3e', marginBottom: 8, fontFamily: 'system-ui, sans-serif' }}>
              Never Miss A Day
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(20px, 4vw, 28px)',
              color: '#e8dcc8',
              margin: '0 0 8px',
              fontWeight: 700,
            }}>
              Get History In Your Inbox
            </h3>
            <p style={{ color: '#9c8e76', fontSize: 14, margin: '0 0 20px', lineHeight: 1.6 }}>
              A curated dose of today's most fascinating historical moments — delivered every morning at 7 AM.
            </p>
            {subscribed ? (
              <div style={{ color: '#4ade80', fontSize: 14, fontWeight: 600 }}>
                ✓ You're in! Check your inbox tomorrow morning.
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    background: '#1a1207',
                    border: '1px solid #4a3d2a',
                    color: '#e8dcc8',
                    padding: '12px 14px',
                    borderRadius: 4,
                    fontSize: 14,
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    outline: 'none',
                  }}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                />
                <button onClick={handleSubscribe} style={{
                  background: '#c45d3e',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, sans-serif',
                  whiteSpace: 'nowrap',
                }}>
                  Subscribe
                </button>
              </div>
            )}
            <div style={{ fontSize: 10, color: '#6b5d4a', marginTop: 12, fontFamily: 'system-ui, sans-serif' }}>
              Free · No spam · Unsubscribe anytime
            </div>
          </section>

          {/* === EXPLORE NEARBY DAYS === */}
          <section style={{ marginBottom: 32 }}>
            <h3 style={sectionHeading}>
              <span style={sectionLine} />
              Explore Nearby Days
              <span style={sectionLine} />
            </h3>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[-3, -2, -1, 1, 2, 3].map(offset => {
                const d = new Date(2024, month - 1, day + offset);
                const m = d.getMonth() + 1;
                const dd = d.getDate();
                return (
                  <button
                    key={offset}
                    onClick={() => goToDay(m, dd)}
                    style={{
                      background: '#fff',
                      border: '1px solid #ddd5c7',
                      borderRadius: 4,
                      padding: '10px 18px',
                      cursor: 'pointer',
                      fontSize: 13,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 600,
                      color: '#3d3427',
                    }}
                  >
                    {MONTHS[m - 1].slice(0, 3)} {dd}
                  </button>
                );
              })}
            </div>
          </section>
        </main>

        {/* === FOOTER === */}
        <footer style={{
          maxWidth: 780,
          margin: '0 auto',
          borderTop: '3px double #2c2416',
          padding: '24px 20px 40px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18,
            fontWeight: 900,
            color: '#1a1207',
            marginBottom: 10,
          }}>
            Today In History
          </div>
          <div style={{ fontSize: 11, color: '#8a7d6b', letterSpacing: 2, lineHeight: 2.2, fontFamily: 'system-ui, sans-serif' }}>
            ABOUT · PRIVACY · CONTACT · ADVERTISE
          </div>
          <div style={{ fontSize: 10, color: '#c4b89c', marginTop: 10, letterSpacing: 1, fontFamily: 'system-ui, sans-serif' }}>
            © 2026 TODAYINHISTORY.CO · ALL RIGHTS RESERVED
          </div>
          <div style={{ fontSize: 9, color: '#c4b89c', marginTop: 8, fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
            As an Amazon Associate, we earn from qualifying purchases.
          </div>
        </footer>
      </div>
    </>
  );
}

const selectStyle = {
  background: '#fff',
  border: '1px solid #ddd5c7',
  color: '#3d3427',
  padding: '8px 12px',
  borderRadius: 4,
  fontSize: 14,
  fontFamily: "'Source Serif 4', Georgia, serif",
  cursor: 'pointer',
  outline: 'none',
};

const sectionHeading = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  fontSize: 12,
  letterSpacing: 4,
  textTransform: 'uppercase',
  color: '#8a7d6b',
  margin: '0 0 20px',
  fontWeight: 400,
  fontFamily: 'system-ui, sans-serif',
};

const sectionLine = {
  flex: 1,
  height: 1,
  background: '#ddd5c7',
};
