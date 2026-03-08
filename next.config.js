/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['wzueowqyouyvtsoyzink.supabase.co'],
  },
}

module.exports = nextConfig
```

5. Click **Commit changes**
6. Click **Commit changes** again

---

**Step 3 — Create the third file:**

1. Click **Add file**
2. Click **Create new file**
3. In the filename box type exactly:
```
app/globals.css@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --yellow: #FFD93D;
  --blue: #4FC3F7;
  --dark-blue: #0288D1;
  --white: #FFFFFF;
  --light-bg: #FFFDE7;
  --text-dark: #1A1A2E;
  --text-medium: #4A4A6A;
}

body {
  font-family: 'Nunito', sans-serif;
  background-color: var(--white);
  color: var(--text-dark);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5 {
  font-family: 'Fredoka One', cursive;
}

.btn-primary {
  background: var(--yellow);
  color: var(--text-dark);
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'Fredoka One', cursive;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 217, 61, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 217, 61, 0.6);
}

.btn-secondary {
  background: var(--blue);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'Fredoka One', cursive;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 195, 247, 0.4);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 195, 247, 0.6);
}

.section-title {
  font-family: 'Fredoka One', cursive;
  font-size: 2.5rem;
  color: var(--text-dark);
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
  color: var(--text-medium);
  text-align: center;
  margin-bottom: 3rem;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

nav {
  background: white;
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-logo {
  font-family: 'Fredoka One', cursive;
  font-size: 2rem;
  color: var(--text-dark);
  text-decoration: none;
}

.nav-logo span {
  color: #4FC3F7;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--dark-blue);
}

.hero {
  background: linear-gradient(135deg, #FFFDE7 0%, #E1F5FE 100%);
  padding: 80px 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.hero h1 span {
  color: #4FC3F7;
}

.hero p {
  font-size: 1.3rem;
  color: var(--text-medium);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.badge {
  background: white;
  border-radius: 50px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Fredoka One', cursive;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 24px 0;
}

.show-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.show-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.show-card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.show-card-info {
  padding: 16px;
  background: white;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  padding: 24px 0;
}

.pricing-card {
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.pricing-card.popular {
  background: linear-gradient(135deg, #FFD93D, #FFB347);
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(255, 217, 61, 0.4);
}

.worlds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.world-card {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.world-card:hover {
  transform: scale(1.05);
}

.world-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 20px;
  color: white;
}

footer {
  background: #1A1A2E;
  color: white;
  padding: 48px;
  margin-top: 80px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 24px;
  text-align: center;
  color: rgba(255,255,255,0.6);
}

@media (max-width: 768px) {
  nav {
    padding: 16px 24px;
  }
  .nav-links {
    display: none;
  }
  .hero {
    padding: 48px 24px;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .section-title {
    font-size: 1.8rem;
  }
}
