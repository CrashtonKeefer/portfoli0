import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashton</title>
        <meta name="description" content="Ashton — portfolio" />
        <meta property="og:title" content="Ashton" />
        <meta property="og:description" content="Ashton — portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/ashton-logo.svg" alt="Ashton logo" />
          </div>
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact" className="cta">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <h1 className="hero-title">Ashton</h1>
            <p className="hero-sub">Design • Code • Product</p>
            <div className="hero-cta">
              <a href="#work" className="btn">See work</a>
            </div>
          </div>
        </section>

        <section id="work" className="work container">
          <h2>Selected work</h2>
          <div className="cards">
            <article className="card">
              <div className="card-media" />
              <h3>Project One</h3>
              <p>Short description that mirrors the layout of the original site.</p>
            </article>
            <article className="card">
              <div className="card-media" />
              <h3>Project Two</h3>
              <p>Short description that mirrors the layout of the original site.</p>
            </article>
            <article className="card">
              <div className="card-media" />
              <h3>Project Three</h3>
              <p>Short description that mirrors the layout of the original site.</p>
            </article>
          </div>
        </section>

        <section id="about" className="about container">
          <h2>About</h2>
          <p>Short bio and information — renamed to Ashton as requested.</p>
        </section>

        <section id="contact" className="contact container">
          <h2>Contact</h2>
          <p>Email: hello@ashton.example</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Ashton</p>
        </div>
      </footer>

      <style jsx>{`
        .container{max-width:1100px;margin:0 auto;padding:0 20px}
        .site-header{position:sticky;top:0;background:#fff;border-bottom:1px solid rgba(0,0,0,0.06);z-index:50}
        .header-inner{display:flex;align-items:center;justify-content:space-between;padding:18px 0}
        .logo img{height:28px}
        .nav a{margin-left:20px;color:#111;text-decoration:none}
        .nav .cta{padding:8px 12px;border-radius:6px;background:#111;color:#fff}

        .hero{padding:120px 0 80px;background:linear-gradient(180deg,#fff,#fafafa)}
        .hero-title{font-size:64px;margin:0 0 10px;letter-spacing:-1px}
        .hero-sub{margin:0 0 24px;color:#666}
        .btn{display:inline-block;padding:10px 16px;border-radius:8px;background:#111;color:#fff;text-decoration:none}

        .work{padding:60px 0}
        .work h2{margin-bottom:28px}
        .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .card{background:#fff;border:1px solid rgba(0,0,0,0.06);padding:18px;border-radius:12px}
        .card-media{height:160px;background:linear-gradient(90deg,#eee,#f7f7f7);border-radius:8px;margin-bottom:12px}

        .about,.contact{padding:60px 0}
        .site-footer{border-top:1px solid rgba(0,0,0,0.06);padding:24px 0;text-align:center;color:#666}

        @media(max-width:900px){
          .cards{grid-template-columns:repeat(2,1fr)}
          .hero-title{font-size:46px}
        }
        @media(max-width:600px){
          .cards{grid-template-columns:1fr}
          .nav a{margin-left:12px}
          .hero{padding:80px 0}
          .hero-title{font-size:36px}
        }
      `}</style>
    </>
  )
}
