'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const shows = [
    { title: "Hoo's Big Day", age: "0-4", episodes: 12, emoji: "🦉", color: "#FFD93D" },
    { title: "Ocean Friends", age: "0-4", episodes: 8, emoji: "🐠", color: "#4FC3F7" },
    { title: "Space Adventures", age: "5-7", episodes: 10, emoji: "🚀", color: "#9C27B0" },
    { title: "Dino Discovery", age: "5-7", episodes: 15, emoji: "🦕", color: "#4CAF50" },
    { title: "Math Magic", age: "8-10", episodes: 20, emoji: "⭐", color: "#FF9800" },
    { title: "Art with Hoo", age: "0-4", episodes: 6, emoji: "🎨", color: "#E91E63" },
  ]

  const worlds = [
    { name: "Ocean World", emoji: "🌊", color: "#0288D1", description: "Dive into underwater adventures" },
    { name: "Space World", emoji: "🚀", color: "#7B1FA2", description: "Explore the galaxy with Hoo" },
    { name: "Dino World", emoji: "🦕", color: "#388E3C", description: "Journey to prehistoric times" },
    { name: "Jungle World", emoji: "🌿", color: "#689F38", description: "Swing through the jungle" },
    { name: "Arctic World", emoji: "❄️", color: "#0097A7", description: "Discover the frozen north" },
    { name: "Magic World", emoji: "✨", color: "#E91E63", description: "Where anything is possible" },
  ]

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      color: "#F5F5F5",
      textColor: "#1A1A2E",
      features: ["10 free shows", "2 lessons per month", "1 kids profile", "Basic badges"],
      cta: "Start Free"
    },
    {
      name: "Hoolo Plus",
      price: "$9.99",
      period: "per month",
      color: "#FFD93D",
      textColor: "#1A1A2E",
      popular: true,
      features: ["Unlimited shows", "All recorded lessons", "3 kids profiles", "Full badge system", "Learning Tree"],
      cta: "Start Plus"
    },
    {
      name: "Academy",
      price: "$16.99",
      period: "per month",
      color: "#4FC3F7",
      textColor: "white",
      features: ["Everything in Plus", "Unlimited live classes", "Personalized daily video", "Daily parent reports", "Priority support"],
      cta: "Start Academy"
    },
    {
      name: "Family",
      price: "$24.99",
      period: "per month",
      color: "#1A1A2E",
      textColor: "white",
      features: ["Everything in Academy", "Up to 4 kids profiles", "Family dashboard", "Weekly family report", "Exclusive family content"],
      cta: "Start Family"
    },
  ]

  const testimonials = [
    { name: "Sarah M.", location: "USA", text: "My daughter absolutely loves Hoolo! She asks for it every morning. The content is so educational and completely safe.", stars: 5 },
    { name: "James T.", location: "UK", text: "Finally a platform with zero ads! My son can watch without me worrying about inappropriate content.", stars: 5 },
    { name: "Priya K.", location: "Australia", text: "The Academy classes are incredible. My 7 year old has learned so much about science and maths!", stars: 5 },
  ]

  return (
    <div>
      {/* NAVIGATION */}
      <nav style={{
        background: 'white',
        padding: '16px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Fredoka One', fontSize: '2rem', color: '#1A1A2E' }}>
            Hoo<span style={{ color: '#4FC3F7' }}>lo</span> 🦉
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {[
            { label: 'Shows', href: '/shows' },
            { label: 'Academy', href: '/academy' },
            { label: 'Creators', href: '/creators' },
            { label: 'Teachers', href: '/teachers' },
            { label: 'Pricing', href: '/pricing' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'Nunito',
              fontWeight: 700,
              color: '#1A1A2E',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/login" style={{
            background: '#FFD93D',
            color: '#1A1A2E',
            padding: '10px 24px',
            borderRadius: '50px',
            fontFamily: 'Fredoka One',
            textDecoration: 'none',
            fontSize: '1rem'
          }}>
            Login
          </Link>
          <Link href="/signup" style={{
            background: '#4FC3F7',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '50px',
            fontFamily: 'Fredoka One',
            textDecoration: 'none',
            fontSize: '1rem'
          }}>
            Sign Up Free
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #FFFDE7 0%, #E1F5FE 100%)',
        padding: '80px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ fontSize: '6rem', marginBottom: '1rem', animation: 'bounce 2s infinite' }}>🦉</div>
        <h1 style={{
          fontFamily: 'Fredoka One',
          fontSize: '3.5rem',
          color: '#1A1A2E',
          marginBottom: '1rem',
          lineHeight: 1.2
        }}>
          Where Little Ones<br />
          <span style={{ color: '#4FC3F7' }}>Hoot with Joy!</span>
        </h1>
        <p style={{
          fontFamily: 'Nunito',
          fontSize: '1.3rem',
          color: '#4A4A6A',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          The safest most magical streaming and learning platform for kids ages 0-10.
          Zero ads. Pure joy. Real learning.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link href="/signup" style={{
            background: '#FFD93D',
            color: '#1A1A2E',
            padding: '16px 40px',
            borderRadius: '50px',
            fontFamily: 'Fredoka One',
            fontSize: '1.2rem',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(255,217,61,0.4)'
          }}>
            Start for Free 🎉
          </Link>
          <Link href="/shows" style={{
            background: '#4FC3F7',
            color: 'white',
            padding: '16px 40px',
            borderRadius: '50px',
            fontFamily: 'Fredoka One',
            fontSize: '1.2rem',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(79,195,247,0.4)'
          }}>
            Browse Shows 📺
          </Link>
        </div>

        {/* TRUST BADGES */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { icon: '🚫', text: 'Zero Ads' },
            { icon: '🛡️', text: '100% Safe' },
            { icon: '👶', text: 'Ages 0-10' },
            { icon: '✅', text: 'Parent Approved' },
            { icon: '🏆', text: 'Award Winning' },
          ].map(badge => (
            <div key={badge.text} style={{
              background: 'white',
              borderRadius: '50px',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Fredoka One',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              {badge.icon} {badge.text}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SHOWS */}
      <section style={{ padding: '80px 48px', background: 'white' }}>
        <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
          Featured Shows 📺
        </h2>
        <p style={{ fontFamily: 'Nunito', textAlign: 'center', color: '#4A4A6A', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Handpicked content your kids will absolutely love
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {shows.map(show => (
            <div key={show.title} style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              background: 'white'
            }}>
              <div style={{
                background: show.color,
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem'
              }}>
                {show.emoji}
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontFamily: 'Fredoka One', fontSize: '1.2rem', marginBottom: '8px' }}>{show.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    background: '#E1F5FE',
                    color: '#0288D1',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontFamily: 'Nunito',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>Ages {show.age}</span>
                  <span style={{ fontFamily: 'Nunito', color: '#4A4A6A', fontSize: '0.9rem' }}>{show.episodes} episodes</span>
                </div>
                <button style={{
                  width: '100%',
                  marginTop: '12px',
                  background: '#FFD93D',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '10px',
                  fontFamily: 'Fredoka One',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  ▶ Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNING WORLDS */}
      <section style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #FFFDE7 0%, #E1F5FE 100%)' }}>
        <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
          Hoo's Learning Worlds 🌍
        </h2>
        <p style={{ fontFamily: 'Nunito', textAlign: 'center', color: '#4A4A6A', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Earn badges to unlock magical worlds full of adventure and learning
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {worlds.map((world, index) => (
            <div key={world.name} style={{
              background: world.color,
              borderRadius: '20px',
              padding: '32px 20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {index > 1 && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  fontSize: '1.2rem'
                }}>🔒</div>
              )}
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{world.emoji}</div>
              <h3 style={{ fontFamily: 'Fredoka One', color: 'white', fontSize: '1.2rem', marginBottom: '8px' }}>{world.name}</h3>
              <p style={{ fontFamily: 'Nunito', color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>{world.description}</p>
              {index <= 1 ? (
                <span style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  background: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '50px',
                  fontFamily: 'Fredoka One',
                  fontSize: '0.85rem'
                }}>Unlocked ✨</span>
              ) : (
                <span style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  background: 'rgba(0,0,0,0.2)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '50px',
                  fontFamily: 'Fredoka One',
                  fontSize: '0.85rem'
                }}>Earn badges to unlock</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: '80px 48px', background: 'white' }}>
        <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
          Simple Pricing 💰
        </h2>
        <p style={{ fontFamily: 'Nunito', textAlign: 'center', color: '#4A4A6A', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Start free. Upgrade when you love it. Cancel anytime.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.color,
              borderRadius: '24px',
              padding: '32px',
              textAlign: 'center',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              boxShadow: plan.popular ? '0 8px 30px rgba(255,217,61,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
              position: 'relative'
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FF6B6B',
                  color: 'white',
                  padding: '4px 20px',
                  borderRadius: '50px',
                  fontFamily: 'Fredoka One',
                  fontSize: '0.85rem'
                }}>
                  Most Popular ⭐
                </div>
              )}
              <h3 style={{ fontFamily: 'Fredoka One', fontSize: '1.5rem', color: plan.textColor, marginBottom: '8px' }}>{plan.name}</h3>
              <div style={{ fontFamily: 'Fredoka One', fontSize: '3rem', color: plan.textColor, marginBottom: '4px' }}>{plan.price}</div>
              <div style={{ fontFamily: 'Nunito', color: plan.textColor, opacity: 0.8, marginBottom: '24px' }}>{plan.period}</div>
              <ul style={{ listStyle: 'none', marginBottom: '24px', textAlign: 'left' }}>
                {plan.features.map(feature => (
                  <li key={feature} style={{
                    fontFamily: 'Nunito',
                    color: plan.textColor,
                    padding: '6px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <Link href="/signup" style={{
                display: 'block',
                background: plan.textColor === 'white' ? 'white' : '#1A1A2E',
                color: plan.textColor === 'white' ? '#1A1A2E' : 'white',
                padding: '14px',
                borderRadius: '50px',
                fontFamily: 'Fredoka One',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #FFFDE7 0%, #E1F5FE 100%)' }}>
        <h2 style={{ fontFamily: 'Fredoka One', fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>
          Parents Love Hoolo ❤️
        </h2>
        <p style={{ fontFamily: 'Nunito', textAlign: 'center', color: '#4A4A6A', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Join thousands of happy families worldwide
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{'⭐'.repeat(t.stars)}</div>
              <p style={{ fontFamily: 'Nunito', color: '#4A4A6A', marginBottom: '16px', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ fontFamily: 'Fredoka One', color: '#1A1A2E' }}>{t.name} — {t.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1A1A2E', color: 'white', padding: '48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto 32px'
        }}>
          <div>
            <h3 style={{ fontFamily: 'Fredoka One', fontSize: '1.8rem', marginBottom: '16px' }}>
              Hoo<span style={{ color: '#4FC3F7' }}>lo</span> 🦉
            </h3>
            <p style={{ fontFamily: 'Nunito', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Where little ones hoot with joy. Safe, magical, educational.
            </p>
          </div>
          {[
            { title: 'Platform', links: ['Shows', 'Academy', 'Hoolo Studio', 'Rankings'] },
            { title: 'For Creators', links: ['Creator Portal', 'Upload Content', 'Earnings', 'Apply Now'] },
            { title: 'For Parents', links: ['Safety', 'Pricing', 'Parent Dashboard', 'Support'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'Fredoka One', fontSize: '1.1rem', marginBottom: '16px', color: '#FFD93D' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: '8px' }}>
                    <a href="#" style={{ fontFamily: 'Nunito', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          textAlign: 'center',
          fontFamily: 'Nunito',
          color: 'rgba(255,255,255,0.5)'
        }}>
          © 2026 Hoolo. All rights reserved. Made with ❤️ for little ones everywhere.
        </div>
      </footer>
    </div>
  )
}
