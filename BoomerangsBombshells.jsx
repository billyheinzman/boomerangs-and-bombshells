import { useState } from "react";

const NAV_LINKS = [
  { label: "Podcast", href: "#podcast" },
  { label: "Blog", href: "#blog" },
  { label: "432 Hz", href: "#music" },
  { label: "Let's Church", href: "#church" },
  { label: "Shop", href: "#shop" },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Rumble", href: "https://rumble.com" },
  { label: "Patreon", href: "https://patreon.com" },
  { label: "Substack", href: "https://substack.com" },
];

const EPISODES = [
  {
    num: "001",
    title: "Where Truth Returns",
    desc: "The vision behind Boomerangs & Bombshells — why truth, faith, and discernment matter more than ever.",
    duration: "48 min",
    tag: "Foundation",
  },
  {
    num: "002",
    title: "The Art of Discernment",
    desc: "How to test what you hear, read, and watch against Scripture. A practical guide for the modern believer.",
    duration: "54 min",
    tag: "Faith",
  },
  {
    num: "003",
    title: "Faith in the Noise",
    desc: "Staying grounded when the world feels chaotic. Billy shares what has anchored him through the storm.",
    duration: "41 min",
    tag: "Testimony",
  },
];

const BLOG_POSTS = [
  {
    title: "Why the King James Bible Still Stands",
    excerpt: "An honest look at why Billy chose the KJV for Let's Church — and what makes it different from modern translations.",
    tag: "Scripture",
    date: "Mar 2026",
  },
  {
    title: "432 Hz: Frequency, Faith & Worship",
    excerpt: "The science and spiritual dimension of tuning. What changes when music is rooted in natural harmony.",
    tag: "Music",
    date: "Feb 2026",
  },
  {
    title: "Recommended Voices: Who Billy Listens To",
    excerpt: "A spotlight on George Hobbs, JT Follows JC, and Crow777 — voices worth your time.",
    tag: "Community",
    date: "Feb 2026",
  },
];

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="7.5" y="1" width="3" height="16" rx="1.5" fill="currentColor" />
      <rect x="1" y="5" width="16" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 2l9 5-9 5V2z" fill="currentColor" />
    </svg>
  );
}

export default function BoomerangsBombshells() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [churchEmail, setChurchEmail] = useState("");
  const [churchJoined, setChurchJoined] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleChurchJoin = (e) => {
    e.preventDefault();
    if (churchEmail) setChurchJoined(true);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Palatino Linotype', serif", background: "#0b0b0b", color: "#f0ece4", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(11,11,11,0.92)", backdropFilter: "blur(12px)", borderBottom: "0.5px solid #1e1e1e" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#c9a84c", display: "flex" }}><CrossIcon /></span>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: 17, fontWeight: 700, color: "#f0ece4", letterSpacing: "0.01em" }}>B&amp;B</span>
          </a>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}
                style={{ fontSize: 13, color: "#888", textDecoration: "none", fontFamily: "system-ui, sans-serif", letterSpacing: "0.04em" }}
              >{l.label}</a>
            ))}
            <a href="#email"
              style={{ fontSize: 12, padding: "7px 16px", background: "#c9a84c", color: "#0b0b0b", borderRadius: 6, textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600, letterSpacing: "0.04em" }}
            >Subscribe</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 24px 80px" }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a1408", border: "0.5px solid #c9a84c33", borderRadius: 20, padding: "6px 14px", marginBottom: 32 }}>
            <span style={{ color: "#c9a84c", fontSize: 11 }}><CrossIcon /></span>
            <span style={{ fontSize: 11, fontFamily: "system-ui, sans-serif", letterSpacing: "0.14em", color: "#c9a84c", textTransform: "uppercase" }}>Christian Media Platform</span>
          </div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, color: "#f0ece4", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Boomerangs<br />
            <span style={{ color: "#c9a84c" }}>&amp; Bombshells</span>
          </h1>
          <p style={{ fontSize: 13, letterSpacing: "0.2em", color: "#666", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", margin: "0 0 28px" }}>
            Truth · Faith · Discernment
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#9a9590", maxWidth: 520, margin: "0 0 48px", fontFamily: "system-ui, sans-serif" }}>
            A faith-centered media hub created by Billy Heinzman — where truth returns, discernment grows, and believers find community.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#podcast"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "#c9a84c", color: "#0b0b0b", borderRadius: 8, textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}
            ><PlayIcon /> Listen Now</a>
            <a href="#church"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "transparent", color: "#f0ece4", borderRadius: 8, textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", fontWeight: 500, border: "0.5px solid #2e2e2e" }}
            ><CrossIcon /> Join Let's Church</a>
            <a href="#email"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "transparent", color: "#888", borderRadius: 8, textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", border: "0.5px solid #1e1e1e" }}
            >Get Episodes by Email</a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL STRIP ── */}
      <div style={{ borderTop: "0.5px solid #1a1a1a", borderBottom: "0.5px solid #1a1a1a", background: "#0e0e0e" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
          <span style={{ fontSize: 11, color: "#444", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>Find us on</span>
          <div style={{ display: "flex", gap: 6 }}>
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #222", borderRadius: 6, color: "#888", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}
              >{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* ── PODCAST ── */}
      <section id="podcast" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "system-ui, sans-serif", marginBottom: 10 }}>Latest Episodes</p>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 32, fontWeight: 700, color: "#f0ece4", margin: 0 }}>The Podcast</h2>
        </div>
        <div>
          {EPISODES.map((ep) => (
            <div key={ep.num} style={{ display: "flex", alignItems: "flex-start", gap: 24, padding: "24px 0", borderBottom: "0.5px solid #1a1a1a" }}>
              <span style={{ fontSize: 12, color: "#444", fontFamily: "system-ui, sans-serif", minWidth: 32, paddingTop: 3 }}>{ep.num}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 18, fontWeight: 700, color: "#f0ece4", margin: 0 }}>{ep.title}</h3>
                  <span style={{ fontSize: 10, padding: "3px 8px", background: "#1a1408", color: "#c9a84c", border: "0.5px solid #c9a84c33", borderRadius: 10, fontFamily: "system-ui, sans-serif" }}>{ep.tag}</span>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif", maxWidth: 560 }}>{ep.desc}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                <span style={{ fontSize: 12, color: "#555", fontFamily: "system-ui, sans-serif" }}>{ep.duration}</span>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", color: "#0b0b0b" }}>
                  <PlayIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 10 }}>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"
            style={{ fontSize: 13, padding: "9px 20px", border: "0.5px solid #2a2a2a", borderRadius: 7, color: "#888", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}
          >Watch on YouTube</a>
          <a href="https://rumble.com" target="_blank" rel="noreferrer"
            style={{ fontSize: 13, padding: "9px 20px", border: "0.5px solid #2a2a2a", borderRadius: 7, color: "#888", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}
          >Watch on Rumble</a>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ background: "#0d0d0d", borderTop: "0.5px solid #1a1a1a", borderBottom: "0.5px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "system-ui, sans-serif", marginBottom: 10 }}>Written Word</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 32, fontWeight: 700, color: "#f0ece4", margin: 0 }}>From the Blog</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {BLOG_POSTS.map((post) => (
              <div key={post.title}
                style={{ background: "#111", border: "0.5px solid #1e1e1e", borderRadius: 12, padding: "24px", cursor: "pointer" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 10, padding: "3px 9px", background: "#1a1408", color: "#c9a84c", border: "0.5px solid #c9a84c33", borderRadius: 10, fontFamily: "system-ui, sans-serif" }}>{post.tag}</span>
                  <span style={{ fontSize: 11, color: "#444", fontFamily: "system-ui, sans-serif" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: 17, fontWeight: 700, color: "#f0ece4", marginBottom: 10, lineHeight: 1.35 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#c9a84c", fontSize: 12, fontFamily: "system-ui, sans-serif" }}>
                  Read more <ChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 432 HZ MUSIC ── */}
      <section id="music" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "system-ui, sans-serif", marginBottom: 10 }}>Frequency & Worship</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 32, fontWeight: 700, color: "#f0ece4", marginBottom: 16, lineHeight: 1.2 }}>432 Hz Music</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, fontFamily: "system-ui, sans-serif", marginBottom: 24 }}>
              Curated worship, ambient, and prayer music tuned to 432 Hz. Let it accompany your study, prayer, and rest.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Worship", "Ambient", "Prayer", "Meditation"].map(tag => (
                <span key={tag} style={{ fontSize: 12, padding: "5px 12px", border: "0.5px solid #2a2a2a", borderRadius: 20, color: "#666", fontFamily: "system-ui, sans-serif" }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: "#111", border: "0.5px solid #1e1e1e", borderRadius: 14, overflow: "hidden" }}>
            {/* Replace the src below with your actual YouTube embed URL */}
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/yC4PbMWZmrM"
              title="432 Hz Worship Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── LET'S CHURCH ── */}
      <section id="church" style={{ background: "#0d0d0d", borderTop: "0.5px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, background: "#1a1408", border: "0.5px solid #c9a84c44", borderRadius: "50%", color: "#c9a84c", marginBottom: 24 }}>
              <CrossIcon />
            </div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "system-ui, sans-serif", marginBottom: 12 }}>Community Bible Study</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 36, fontWeight: 700, color: "#f0ece4", marginBottom: 16, lineHeight: 1.2 }}>Let's Church</h2>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.8, fontFamily: "system-ui, sans-serif", marginBottom: 12 }}>
              A bi-weekly Bible study walking through the King James Bible — chapter by chapter, with open discussion. Welcoming, growth-focused, community-driven.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a1408", border: "0.5px solid #c9a84c44", borderRadius: 20, padding: "7px 16px", marginBottom: 36 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#c9a84c", display: "inline-block" }}></span>
              <span style={{ fontSize: 13, color: "#c9a84c", fontFamily: "system-ui, sans-serif" }}>Launching May 1, 2026</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 40 }}>
              {[["King James Bible", "Chapter by chapter"], ["Open Discussion", "Everyone welcome"], ["Bi-Weekly", "Starting May 1"]].map(([t, s]) => (
                <div key={t} style={{ background: "#111", border: "0.5px solid #1e1e1e", borderRadius: 10, padding: "16px 14px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f0ece4", margin: "0 0 4px", fontFamily: "system-ui, sans-serif" }}>{t}</p>
                  <p style={{ fontSize: 12, color: "#555", margin: 0, fontFamily: "system-ui, sans-serif" }}>{s}</p>
                </div>
              ))}
            </div>
            {churchJoined ? (
              <div style={{ background: "#0d1a0d", border: "0.5px solid #2a5c2a", borderRadius: 10, padding: "16px 20px", color: "#5caa5c", fontSize: 14, fontFamily: "system-ui, sans-serif" }}>
                You're on the list. See you May 1st. ✝
              </div>
            ) : (
              <form onSubmit={handleChurchJoin} style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto" }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={churchEmail}
                  onChange={e => setChurchEmail(e.target.value)}
                  style={{ flex: 1, background: "#111", border: "0.5px solid #2a2a2a", borderRight: "none", borderRadius: "8px 0 0 8px", padding: "12px 16px", color: "#f0ece4", fontSize: 14, fontFamily: "system-ui, sans-serif", outline: "none" }}
                />
                <button type="submit"
                  style={{ padding: "12px 20px", background: "#c9a84c", color: "#0b0b0b", border: "none", borderRadius: "0 8px 8px 0", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
                >Join</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── EMAIL LIST ── */}
      <section id="email" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ background: "#111", border: "0.5px solid #1e1e1e", borderRadius: 16, padding: "52px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "system-ui, sans-serif", marginBottom: 12 }}>Stay Connected</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 30, fontWeight: 700, color: "#f0ece4", marginBottom: 16, lineHeight: 1.3 }}>Join the Email List</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, fontFamily: "system-ui, sans-serif" }}>
              New episode alerts, fresh blog posts, music additions, and updates from Billy — straight to your inbox. No spam. Faith only.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div style={{ background: "#0d1a0d", border: "0.5px solid #2a5c2a", borderRadius: 10, padding: "20px 24px", color: "#5caa5c", fontSize: 15, fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
                Welcome to the community. ✝️
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ width: "100%", background: "#0b0b0b", border: "0.5px solid #2a2a2a", borderRadius: 8, padding: "13px 16px", color: "#f0ece4", fontSize: 14, fontFamily: "system-ui, sans-serif", outline: "none", marginBottom: 10, boxSizing: "border-box" }}
                />
                <button type="submit"
                  style={{ width: "100%", padding: "13px", background: "#c9a84c", color: "#0b0b0b", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}
                >Subscribe — It's Free</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── RECOMMENDED VOICES ── */}
      <section style={{ background: "#0d0d0d", borderTop: "0.5px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#555", fontFamily: "system-ui, sans-serif", marginBottom: 24 }}>Voices Worth Your Time</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["George Hobbs", "JT Follows JC", "Crow777"].map(name => (
              <div key={name} style={{ background: "#111", border: "0.5px solid #1e1e1e", borderRadius: 10, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#1a1408", border: "0.5px solid #c9a84c33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#c9a84c", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
                  {name[0]}
                </div>
                <span style={{ fontSize: 14, color: "#888", fontFamily: "system-ui, sans-serif" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "0.5px solid #1a1a1a", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#c9a84c" }}><CrossIcon /></span>
            <span style={{ fontSize: 15, fontFamily: "'Georgia', serif", color: "#444" }}>Boomerangs & Bombshells</span>
          </div>
          <p style={{ fontSize: 12, color: "#444", fontFamily: "system-ui, sans-serif", margin: 0 }}>
            <a href="mailto:boomerangandbombshells@gmail.com" style={{ color: "#555", textDecoration: "none" }}>boomerangandbombshells@gmail.com</a>
            {" · "}Truth. Faith. Discernment.
          </p>
        </div>
      </footer>

    </div>
  );
}
