export default function Home() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', background: '#F8F5EF' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy:        #0B1F3A;
          --navy-mid:    #152D52;
          --navy-light:  #1A3A6B;
          --gold:        #C9A84C;
          --gold-light:  #D4B96A;
          --gold-border: rgba(201,168,76,0.25);
          --bg:          #F8F5EF;
          --bg-card:     #FFFFFF;
          --border:      #D4C9B0;
          --border-light:#EDE8DE;
          --text:        #0B1F3A;
          --text-muted:  #6B7280;
          --text-light:  #8A9BB0;
          --radius:      6px;
          --shadow:      0 2px 16px rgba(11,31,58,0.06);
          --shadow-hover:0 12px 36px rgba(11,31,58,0.12);
        }

        /* ── NAV ── */
        .hp-nav {
          position: absolute; top: 0; left: 0; right: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 48px;
        }
        .hp-nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 700; color: #fff; letter-spacing: 0.02em;
        }
        .hp-nav-logo span { color: var(--gold); }
        .hp-nav-links { display: flex; gap: 32px; align-items: center; }
        .hp-nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.75);
          text-decoration: none; letter-spacing: 0.04em; font-weight: 500;
          transition: color 0.2s;
        }
        .hp-nav-links a:hover { color: var(--gold); }
        .hp-nav-cta {
          background: var(--gold) !important; color: var(--navy) !important;
          padding: 9px 22px; border-radius: 3px; font-weight: 600 !important;
        }

        /* ── HERO ── */
        .hp-hero {
          position: relative; height: 620px;
          display: flex; align-items: center;
          overflow: hidden; background: var(--navy);
        }
        .hp-hero-slides { position: absolute; inset: 0; }
        .hp-slide {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transition: opacity 1.2s ease;
        }
        .hp-slide-inner {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 10px;
        }
        .hp-slide-icon { font-size: 80px; opacity: 0.07; }
        .hp-slide-sublabel {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .hp-slide.hidden { opacity: 0; pointer-events: none; }

        @keyframes kenburns1 { 0%{transform:scale(1) translate(0,0)} 100%{transform:scale(1.06) translate(-1%,1%)} }
        @keyframes kenburns2 { 0%{transform:scale(1.04) translate(1%,0)} 100%{transform:scale(1) translate(0,-1%)} }
        @keyframes kenburns3 { 0%{transform:scale(1) translate(-1%,-1%)} 100%{transform:scale(1.05) translate(0,0)} }
        .hp-slide-1 { background: linear-gradient(135deg, #0B1F3A 0%, #1A3A6B 100%); animation: kenburns1 8s ease-in-out infinite alternate; }
        .hp-slide-2 { background: linear-gradient(135deg, #152D52 0%, #0B1F3A 100%); animation: kenburns2 9s ease-in-out infinite alternate; }
        .hp-slide-3 { background: linear-gradient(135deg, #0d2440 0%, #152D52 100%); animation: kenburns3 10s ease-in-out infinite alternate; }

        .hp-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.45) 60%, rgba(11,31,58,0.15) 100%);
        }
        .hp-hero-overlay-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
          background: linear-gradient(to top, #F8F5EF, transparent);
        }
        .hp-hero-goldline {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .hp-hero-content {
          position: relative; z-index: 2;
          padding: 0 48px; max-width: 680px;
        }
        .hp-hero-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
        }
        .hp-hero-eyebrow-line { width: 28px; height: 1px; background: var(--gold); flex-shrink: 0; }
        .hp-hero-eyebrow span {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); font-weight: 500;
        }
        .hp-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 52px; font-weight: 800; line-height: 1.12;
          color: #fff; margin-bottom: 20px;
        }
        .hp-hero h1 em { font-style: italic; color: var(--gold); }
        .hp-hero-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px; color: rgba(255,255,255,0.7);
          line-height: 1.75; max-width: 480px; margin-bottom: 36px; font-weight: 300;
        }
        .hp-hero-actions { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .hp-btn-gold {
          background: var(--gold); color: var(--navy);
          padding: 14px 32px; border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700; font-size: 14px; text-decoration: none;
          letter-spacing: 0.04em; cursor: pointer; border: none;
          box-shadow: 0 4px 20px rgba(201,168,76,0.35);
          transition: background 0.2s, transform 0.15s; display: inline-block;
        }
        .hp-btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); }
        .hp-btn-ghost {
          border: 1px solid rgba(255,255,255,0.35); color: rgba(255,255,255,0.85);
          padding: 13px 28px; border-radius: 3px; background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500; font-size: 14px; text-decoration: none;
          cursor: pointer; transition: border-color 0.2s, color 0.2s; display: inline-block;
        }
        .hp-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

        .hp-hero-dots {
          position: absolute; bottom: 36px; left: 48px; z-index: 3;
          display: flex; gap: 8px; align-items: center;
        }
        .hp-dot {
          width: 20px; height: 2px; background: rgba(255,255,255,0.3);
          border-radius: 1px; cursor: pointer; transition: all 0.3s;
        }
        .hp-dot.active { width: 36px; background: var(--gold); }

        .hp-hero-scene {
          position: absolute; bottom: 32px; right: 48px; z-index: 3; text-align: right;
        }
        .hp-hero-scene-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-bottom: 4px;
        }
        .hp-hero-scene-name {
          font-family: 'Playfair Display', serif;
          font-size: 14px; color: rgba(255,255,255,0.55); font-style: italic;
        }

        /* ── TRUST BAR ── */
        .hp-trust {
          background: var(--navy); padding: 20px 48px;
          display: flex; align-items: center; justify-content: center;
          gap: 48px; flex-wrap: wrap;
        }
        .hp-trust-item {
          display: flex; align-items: center; gap: 10px;
          font-family: 'DM Sans', sans-serif;
          color: rgba(255,255,255,0.55); font-size: 13px;
        }
        .hp-trust-icon { color: var(--gold); font-size: 15px; }
        .hp-trust-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.12); }

        /* ── SECTION COMMONS ── */
        .hp-section-header { text-align: center; margin-bottom: 52px; }
        .hp-section-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 14px; color: var(--gold);
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
        }
        .hp-section-eyebrow-line { width: 20px; height: 1px; background: var(--gold); }
        .hp-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px; font-weight: 700; color: var(--navy);
          line-height: 1.2; margin-bottom: 14px;
        }
        .hp-section-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: var(--text-muted);
          line-height: 1.7; max-width: 520px; margin: 0 auto; font-weight: 300;
        }

        /* ── SERVICES ── */
        .hp-services { padding: 80px 48px; background: var(--bg); }
        .hp-services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; max-width: 960px; margin: 0 auto;
        }
        .hp-service-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 32px 28px;
          box-shadow: var(--shadow); position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .hp-service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0; transition: opacity 0.2s;
        }
        .hp-service-card:hover {
          transform: translateY(-4px); box-shadow: var(--shadow-hover);
          border-color: var(--gold-border);
        }
        .hp-service-card:hover::before { opacity: 1; }
        .hp-service-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px; font-weight: 700;
          color: rgba(201,168,76,0.18); line-height: 1; margin-bottom: 14px;
        }
        .hp-service-emoji { font-size: 22px; margin-bottom: 12px; display: block; }
        .hp-service-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px; font-weight: 700; color: var(--navy);
          margin-bottom: 10px; line-height: 1.3;
        }
        .hp-service-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; color: var(--text-muted); line-height: 1.7; font-weight: 300;
        }
        .hp-service-link {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 18px; font-family: 'DM Sans', sans-serif;
          font-size: 11px; color: var(--gold);
          font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none;
        }

        /* ── PROCESS ── */
        .hp-process {
          background: var(--navy); padding: 80px 48px;
          position: relative; overflow: hidden;
        }
        .hp-process::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold) 40%, transparent);
        }
        .hp-process .hp-section-title { color: #fff; }
        .hp-process .hp-section-sub { color: rgba(255,255,255,0.45); }
        .hp-process-steps {
          display: flex; max-width: 960px; margin: 0 auto;
          position: relative;
        }
        .hp-process-steps::before {
          content: ''; position: absolute;
          top: 27px; left: 28px; right: 28px; height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.15));
        }
        .hp-process-step { flex: 1; text-align: center; padding: 0 12px; }
        .hp-process-num {
          width: 56px; height: 56px; border-radius: 50%;
          border: 1px solid var(--gold);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px; background: var(--navy); position: relative; z-index: 1;
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 700; color: var(--gold);
        }
        .hp-process-step-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px;
        }
        .hp-process-step-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.6; font-weight: 300;
        }

        /* ── SCENES GRID ── */
        .hp-scenes { padding: 80px 48px; background: var(--bg); }
        .hp-scenes-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          grid-template-rows: 240px 240px;
          gap: 12px; max-width: 960px; margin: 0 auto;
        }
        .hp-scene-item {
          border-radius: var(--radius); overflow: hidden; position: relative;
          cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
        }
        .hp-scene-item:hover { transform: scale(1.02); box-shadow: 0 16px 48px rgba(11,31,58,0.2); z-index: 2; }
        .hp-scene-item:first-child { grid-row: span 2; }
        .hp-scene-bg {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.6s ease;
        }
        .hp-scene-item:hover .hp-scene-bg { transform: scale(1.05); }
        .hp-scene-placeholder-icon { font-size: 56px; opacity: 0.08; }
        .hp-scene-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.25) 55%, transparent 100%);
        }
        .hp-scene-content {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 22px;
        }
        .hp-scene-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 6px; display: block;
        }
        .hp-scene-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px; font-weight: 700; color: #fff; line-height: 1.3;
        }
        .hp-scene-arrow {
          position: absolute; top: 14px; right: 14px;
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.5); font-size: 13px;
          opacity: 0; transition: opacity 0.2s;
        }
        .hp-scene-item:hover .hp-scene-arrow { opacity: 1; }
        .hp-scene-c1 { background: linear-gradient(135deg, #0B1F3A, #1A3A6B); }
        .hp-scene-c2 { background: linear-gradient(135deg, #152D52, #0B1F3A); }
        .hp-scene-c3 { background: linear-gradient(135deg, #1A3A6B, #152D52); }
        .hp-scene-c4 { background: linear-gradient(135deg, #0d2440, #0B1F3A); }
        .hp-scene-c5 { background: linear-gradient(135deg, #152D52, #1A3A6B); }

        /* ── STATS ── */
        .hp-stats {
          background: var(--bg-card);
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 48px;
        }
        .hp-stats-inner {
          max-width: 960px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .hp-stat {
          text-align: center; padding: 0 20px;
          border-right: 1px solid var(--border-light);
        }
        .hp-stat:last-child { border-right: none; }
        .hp-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 40px; font-weight: 700; color: var(--gold);
          line-height: 1; margin-bottom: 8px;
        }
        .hp-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: var(--text-light);
        }

        /* ── CTA ── */
        .hp-cta {
          background: var(--navy); padding: 88px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .hp-cta::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold) 40%, transparent);
        }
        .hp-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 12px; margin-bottom: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold);
        }
        .hp-cta-line { width: 20px; height: 1px; background: var(--gold); }
        .hp-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: 40px; font-weight: 700; color: #fff;
          line-height: 1.2; margin-bottom: 16px;
        }
        .hp-cta-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px; color: rgba(255,255,255,0.5);
          margin-bottom: 40px; font-weight: 300; line-height: 1.7;
        }
        .hp-cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ── FOOTER NOTE ── */
        .hp-footer-note {
          background: var(--bg); padding: 22px 48px;
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; color: var(--text-light);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hp-nav { padding: 16px 20px; }
          .hp-nav-links { display: none; }
          .hp-hero { height: auto; min-height: 520px; }
          .hp-hero-content { padding: 100px 20px 60px; }
          .hp-hero h1 { font-size: 36px; }
          .hp-trust { padding: 16px 20px; gap: 20px; }
          .hp-trust-divider { display: none; }
          .hp-services { padding: 56px 20px; }
          .hp-services-grid { grid-template-columns: 1fr; }
          .hp-process { padding: 56px 20px; }
          .hp-process-steps { flex-direction: column; gap: 32px; }
          .hp-process-steps::before { display: none; }
          .hp-scenes { padding: 56px 20px; }
          .hp-scenes-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 180px 180px 180px;
          }
          .hp-scene-item:first-child { grid-row: span 1; grid-column: span 2; }
          .hp-stats { padding: 36px 20px; }
          .hp-stats-inner { grid-template-columns: 1fr 1fr; gap: 20px 0; }
          .hp-stat:nth-child(2) { border-right: none; }
          .hp-stat:nth-child(3), .hp-stat:nth-child(4) { border-top: 1px solid var(--border-light); padding-top: 20px; }
          .hp-cta { padding: 60px 20px; }
          .hp-cta h2 { font-size: 28px; }
          .hp-section-title { font-size: 28px; }
        }
      `}</style>

      {/* ── NAV ── */}
      <section style={{ position: 'relative' }}>
        <nav className="hp-nav">
          <div className="hp-nav-logo">Valencia<span>City</span></div>
          <div className="hp-nav-links">
            <a href="/conocenos">Conócenos</a>
            <a href="/servicios">Servicios</a>
            <a href="/noticias">Noticias</a>
            <a href="/contactanos" className="hp-nav-cta">Contáctanos</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="hp-hero" id="hp-hero">
          <div className="hp-hero-slides">
            <div className="hp-slide hp-slide-1" id="slide-0">
              <div className="hp-slide-inner">
                <div className="hp-slide-icon">🏛️</div>
                <span className="hp-slide-sublabel">Ciudad de las Artes · Valencia</span>
              </div>
            </div>
            <div className="hp-slide hp-slide-2 hidden" id="slide-1">
              <div className="hp-slide-inner">
                <div className="hp-slide-icon">🏘️</div>
                <span className="hp-slide-sublabel">Barrio del Carmen · Extramurs</span>
              </div>
            </div>
            <div className="hp-slide hp-slide-3 hidden" id="slide-2">
              <div className="hp-slide-inner">
                <div className="hp-slide-icon">🛋️</div>
                <span className="hp-slide-sublabel">Reforma & Interiorismo</span>
              </div>
            </div>
          </div>

          <div className="hp-hero-overlay" />
          <div className="hp-hero-goldline" />
          <div className="hp-hero-overlay-bottom" />

          <div className="hp-hero-content">
            <div className="hp-hero-eyebrow">
              <span className="hp-hero-eyebrow-line" />
              <span>Asesores inmobiliarios · Valencia</span>
            </div>
            <h1>Tu piso en Valencia,<br /><em>encontrado.</em></h1>
            <p className="hp-hero-sub">
              Buscamos, negociamos, reformamos y decoramos. Tú solo tienes que llamarnos — nosotros nos encargamos de todo lo demás.
            </p>
            <div className="hp-hero-actions">
              <a href="/contactanos" className="hp-btn-gold">Busca mi piso →</a>
              <a href="/servicios" className="hp-btn-ghost">Ver servicios</a>
            </div>
          </div>

          <div className="hp-hero-dots" id="hp-dots">
            <div className="hp-dot active" onClick={() => typeof goSlide !== 'undefined' && goSlide(0)} />
            <div className="hp-dot" onClick={() => typeof goSlide !== 'undefined' && goSlide(1)} />
            <div className="hp-dot" onClick={() => typeof goSlide !== 'undefined' && goSlide(2)} />
          </div>
          <div className="hp-hero-scene">
            <div className="hp-hero-scene-label">Escena</div>
            <div className="hp-hero-scene-name" id="scene-name">Ciudad de las Artes</div>
          </div>
        </div>
      </section>

      {/* ── HERO SLIDER SCRIPT ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var scenes = ['Ciudad de las Artes', 'Barrio del Carmen', 'Reforma & Interiorismo'];
          var current = 0;
          var timer;
          window.goSlide = function(n) {
            var prev = document.getElementById('slide-' + current);
            var dots = document.querySelectorAll('.hp-dot');
            if (prev) prev.classList.add('hidden');
            if (dots[current]) dots[current].classList.remove('active');
            current = n;
            var next = document.getElementById('slide-' + current);
            if (next) next.classList.remove('hidden');
            if (dots[current]) dots[current].classList.add('active');
            var label = document.getElementById('scene-name');
            if (label) label.textContent = scenes[current];
            clearInterval(timer);
            timer = setInterval(function() { window.goSlide((current + 1) % 3); }, 5000);
          };
          timer = setInterval(function() { window.goSlide((current + 1) % 3); }, 5000);
        })();
      `}} />

      {/* ── TRUST BAR ── */}
      <div className="hp-trust">
        {[
          { icon: '✅', text: 'Solo trabajamos para el comprador' },
          { icon: '🏅', text: '+100 operaciones en Valencia' },
          { icon: '⏱️', text: 'Respuesta en menos de 24h' },
          { icon: '💶', text: 'Sin comisiones del vendedor' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'contents' }}>
            {i > 0 && <div className="hp-trust-divider" />}
            <div className="hp-trust-item">
              <span className="hp-trust-icon">{item.icon}</span>
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="hp-services">
        <div className="hp-section-header">
          <div className="hp-section-eyebrow">
            <span className="hp-section-eyebrow-line" />
            Lo que hacemos
            <span className="hp-section-eyebrow-line" />
          </div>
          <h2 className="hp-section-title">Un servicio completo,<br />de principio a fin</h2>
          <p className="hp-section-sub">Desde que decides buscar hasta que tienes las llaves — y más allá. Te acompañamos en cada fase.</p>
        </div>
        <div className="hp-services-grid">
          {[
            { num: '01', emoji: '🗺️', titulo: 'Búsqueda de piso', desc: 'Analizamos tu presupuesto, estilo de vida y objetivos para encontrarte el piso ideal en el mejor barrio de Valencia para ti.', href: '/servicios' },
            { num: '02', emoji: '💬', titulo: 'Negociación', desc: 'Negociamos en tu nombre. Conocemos los precios reales de cierre de cada zona y conseguimos el mejor precio posible.', href: '/servicios' },
            { num: '03', emoji: '📋', titulo: 'Gestión de la compra', desc: 'Nota simple, escrituras, notaría, impuestos. Te lo gestionamos todo para que no tengas que preocuparte por nada.', href: '/servicios' },
            { num: '04', emoji: '🔨', titulo: 'Reforma integral', desc: 'Coordinamos arquitectos y constructores de confianza. Presupuesto cerrado desde el primer día, sin sorpresas.', href: '/servicios' },
            { num: '05', emoji: '🛋️', titulo: 'Interiorismo', desc: 'Diseñamos y amueblamos tu nuevo hogar. Un espacio que refleja tu personalidad y maximiza el valor de tu inversión.', href: '/servicios' },
            { num: '06', emoji: '📈', titulo: 'Asesoría de inversión', desc: 'Identificamos oportunidades con alto potencial de revalorización antes de que el mercado las descubra.', href: '/servicios' },
          ].map((s, i) => (
            <div key={i} className="hp-service-card">
              <div className="hp-service-num">{s.num}</div>
              <span className="hp-service-emoji">{s.emoji}</span>
              <div className="hp-service-title">{s.titulo}</div>
              <p className="hp-service-desc">{s.desc}</p>
              <a href={s.href} className="hp-service-link">Saber más →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="hp-process">
        <div className="hp-section-header">
          <div className="hp-section-eyebrow" style={{ color: '#C9A84C' }}>
            <span className="hp-section-eyebrow-line" />
            Cómo trabajamos
            <span className="hp-section-eyebrow-line" />
          </div>
          <h2 className="hp-section-title">Tu compra, paso a paso</h2>
          <p className="hp-section-sub">Un proceso claro y sin sorpresas, desde la primera llamada hasta las llaves en tu mano.</p>
        </div>
        <div className="hp-process-steps">
          {[
            { n: '1', titulo: 'Llamada inicial', desc: 'Entendemos qué buscas, tu presupuesto y tus prioridades' },
            { n: '2', titulo: 'Búsqueda activa', desc: 'Filtramos el mercado y te presentamos solo lo que encaja' },
            { n: '3', titulo: 'Visitas y análisis', desc: 'Te acompañamos en cada visita con datos reales del barrio' },
            { n: '4', titulo: 'Negociación', desc: 'Conseguimos el mejor precio posible en tu nombre' },
            { n: '5', titulo: 'Cierre y llaves', desc: 'Gestionamos toda la burocracia hasta el día de la firma' },
          ].map((step, i) => (
            <div key={i} className="hp-process-step">
              <div className="hp-process-num">{step.n}</div>
              <div className="hp-process-step-title">{step.titulo}</div>
              <p className="hp-process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCENES GRID ── */}
      <section className="hp-scenes">
        <div className="hp-section-header">
          <div className="hp-section-eyebrow">
            <span className="hp-section-eyebrow-line" />
            Valencia en imágenes
            <span className="hp-section-eyebrow-line" />
          </div>
          <h2 className="hp-section-title">Barrios que conocemos<br />como nuestra casa</h2>
          <p className="hp-section-sub">Cada zona tiene su carácter. Nosotros te ayudamos a encontrar la que encaja contigo.</p>
        </div>
        <div className="hp-scenes-grid">
          {[
            { bg: 'hp-scene-c1', emoji: '🏛️', tag: 'Barrio destacado', titulo: 'El Carmen\ny Extramurs', href: '/noticias' },
            { bg: 'hp-scene-c2', emoji: '🌿', tag: 'Zona verde', titulo: 'Russafa', href: '/noticias' },
            { bg: 'hp-scene-c3', emoji: '🌊', tag: 'Frente al mar', titulo: 'Cabanyal', href: '/noticias' },
            { bg: 'hp-scene-c4', emoji: '🏙️', tag: 'Inversión', titulo: 'Nou Moles', href: '/noticias' },
            { bg: 'hp-scene-c5', emoji: '🏡', tag: 'Premium', titulo: 'Eixample', href: '/noticias' },
          ].map((scene, i) => (
            <a key={i} href={scene.href} className={`hp-scene-item`} style={{ textDecoration: 'none' }}>
              <div className={`hp-scene-bg ${scene.bg}`}>
                <div className="hp-scene-placeholder-icon">{scene.emoji}</div>
              </div>
              <div className="hp-scene-overlay" />
              <div className="hp-scene-arrow">↗</div>
              <div className="hp-scene-content">
                <span className="hp-scene-tag">{scene.tag}</span>
                <div className="hp-scene-title">{scene.titulo}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="hp-stats">
        <div className="hp-stats-inner">
          {[
            { val: '+100', label: 'operaciones acompañadas' },
            { val: '4',    label: 'idiomas · ES EN FR DE' },
            { val: '24h',  label: 'tiempo de respuesta' },
            { val: '0€',   label: 'comisiones del vendedor' },
          ].map((s, i) => (
            <div key={i} className="hp-stat">
              <div className="hp-stat-val">{s.val}</div>
              <div className="hp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="hp-cta">
        <div className="hp-cta-eyebrow">
          <span className="hp-cta-line" />
          ¿Empezamos?
          <span className="hp-cta-line" />
        </div>
        <h2>Tu piso en Valencia<br />empieza con una llamada</h2>
        <p className="hp-cta-sub">
          Cuéntanos qué buscas. En menos de 24 horas<br />te respondemos con un plan a medida.
        </p>
        <div className="hp-cta-actions">
          <a href="/contactanos" className="hp-btn-gold">Contáctanos ahora →</a>
          <a href="/servicios" className="hp-btn-ghost">Ver todos los servicios</a>
        </div>
      </section>

      {/* ── FOOTER NOTE ── */}
      <div className="hp-footer-note">
        📍 Valencia, España · Trabajamos exclusivamente para el comprador
      </div>

    </main>
  )
}