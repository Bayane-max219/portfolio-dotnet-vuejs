"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const skills = [
  { label: "C# / ASP.NET Core", level: 92 },
  { label: "Entity Framework Core", level: 88 },
  { label: "Vue 3 / Nuxt 3", level: 84 },
  { label: "n8n · Automatisation IA", level: 90 },
  { label: "Docker / CI-CD", level: 82 },
  { label: "PostgreSQL / SQL Server", level: 80 },
  { label: "SignalR / WebSocket", level: 78 },
  { label: "JWT / Sécurité API", level: 85 },
];

const projets = [
  {
    num: "01",
    name: "DevTrack",
    desc: "Plateforme de gestion de tickets style Jira — ASP.NET Core 10 + C# + Entity Framework Core Code First + PostgreSQL. Clean Architecture 4 couches, authentification JWT, temps réel SignalR WebSocket, export PDF iText7, 18 tests xUnit, CI/CD GitHub Actions, conteneurisé Docker.",
    tags: ["ASP.NET Core 10", "C#", "EF Core", "SignalR", "JWT", "PostgreSQL", "Docker", "xUnit", "iText7"],
    highlight: ["ASP.NET Core 10", "EF Core", "SignalR"],
    href: "https://github.com/Bayane-max219/devtrack",
    note: "⭐ Projet phare .NET",
  },
  {
    num: "02",
    name: "JVN LAB — Automatisation IA",
    desc: "Développeur Full Stack & Automatisation IA chez JVN LAB (Paris, remote) — 3 agents IA en production : réponses Facebook automatisées, génération de posts multi-canaux, reporting hebdomadaire chaînés via n8n. Automation LinkedIn pour 3 pages entreprises via n8n + Claude API + Canva API + Buffer.",
    tags: ["n8n", "Claude API", "Facebook Graph", "LinkedIn API", "Canva API", "Airtable", "Railway"],
    highlight: ["n8n", "Claude API"],
    href: "https://github.com/Bayane-max219",
    note: "✅ En production",
  },
  {
    num: "03",
    name: "SmartERP — Gestion de Stock",
    desc: "ERP multi-utilisateurs de gestion de stock et ventes — Vue.js 3 + Laravel 12 + MySQL + Docker. Dashboard analytics Chart.js, Point de Vente (POS), rapports, rôles/permissions, mode hors-ligne localStorage, Docker Compose multi-services.",
    tags: ["Vue.js 3", "Laravel 12", "MySQL", "Docker", "Pinia", "Chart.js", "JWT"],
    highlight: ["Vue.js 3"],
    href: "https://github.com/Bayane-max219/Gestion-de-stock",
    note: "✅ Vue.js 3",
  },
  {
    num: "04",
    name: "Trading Crypto — Multi-tenant",
    desc: "Plateforme de trading algorithmique avec backtesting EMA/RSI/Momentum — architecture multi-tenant avec séparation stricte des contextes utilisateurs, chiffrement AES-256 des clés API Binance, paper trading, conteneurisé Docker.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Binance API", "pandas", "AES-256"],
    highlight: [] as string[],
    href: "https://github.com/Bayane-max219/Gestion_Portefeuil",
  },
];

const tools = [
  "C#", "ASP.NET Core 10", "EF Core", "Vue 3", "Nuxt 3",
  "n8n", "Docker", "JWT", "SignalR", "PostgreSQL", "SQL Server",
  "iText7", "xUnit", "GitHub Actions", "Claude API", "Railway",
];

const marqueeItems = [
  "C#", "ASP.NET Core 10", "EF Core Code First", "Vue 3", "Nuxt 3",
  "n8n", "Docker", "SignalR", "JWT", "PostgreSQL", "SQL Server",
  "xUnit", "GitHub Actions", "Claude API", "Automatisation IA",
];

function SkillRow({ label, level }: { label: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.65rem 0", borderBottom: "1px solid var(--navy-border)" }}>
      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div className="skill-bar-bg">
          <div className="skill-bar-fill" style={{ width: `${width}%` }} />
        </div>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--indigo-light)", width: "2rem", textAlign: "right" }}>
          {level}
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", color: "var(--text)" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.2s",
        background: scrolled ? "rgba(13,27,46,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--navy-border)" : "none",
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
          <span style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
            B<span style={{ color: "var(--indigo-light)" }}>.</span>S
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {["Stack", "Projets", "Formation", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
            ))}
          </div>
          <a href="/cv-bayane-singcol.pdf" download className="btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.8rem" }}>
            ↓ Télécharger CV
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: "7rem", paddingBottom: "5rem", maxWidth: "72rem", margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

          <div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--indigo-light)",
              border: "1px solid var(--navy-border)",
              padding: "0.4rem 1rem", background: "var(--indigo-soft)",
            }}>
              <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              Candidature · BuildingMadaT Services · Freelance · Antananarivo
            </span>
          </div>

          <div style={{ display: "flex", gap: "4rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h1 style={{ fontWeight: 900, lineHeight: 1, marginBottom: "1.5rem", fontSize: "clamp(2.8rem, 8vw, 6rem)" }}>
                Bayane Miguel
                <br />
                <span style={{ color: "var(--indigo-light)" }}>Singcol</span>
              </h1>

              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "1rem" }}>
                Développeur Full Stack · .NET / Vue.js
              </h2>

              <p style={{ color: "var(--text-muted)", maxWidth: "36rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Développeur full-stack orienté écosystème <strong style={{ color: "var(--text)" }}>Microsoft .NET et Vue / Nuxt</strong>,
                je conçois des APIs REST ASP.NET Core avec <strong style={{ color: "var(--indigo-light)" }}>Entity Framework Core (Code First)</strong>
                {" "}et j&apos;industrialise les processus métier via{" "}
                <strong style={{ color: "var(--indigo-light)" }}>n8n en production</strong>.
                Habitué aux contextes ERP / CRM multi-tenant, j&apos;utilise Claude Code, Cursor et Copilot
                en validant systématiquement le code généré.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/cv-bayane-singcol.pdf" download className="btn-primary">
                  ↓ Télécharger mon CV
                </a>
                <a href="#projets" className="btn-outline">
                  Voir les projets →
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", top: "0.5rem", left: "0.5rem",
                  width: "100%", height: "100%",
                  background: "var(--indigo)", opacity: 0.4,
                }} />
                <div style={{
                  position: "relative", width: "180px",
                  border: "2px solid var(--indigo)",
                  overflow: "hidden", aspectRatio: "3/4",
                }}>
                  <Image src="/profile.png" alt="Bayane Miguel Singcol" fill className="object-cover object-top" priority />
                </div>
                <div style={{
                  position: "absolute", bottom: "-1rem", right: "-1rem",
                  background: "var(--indigo)", padding: "0.4rem 0.8rem",
                  border: "2px solid var(--navy-card)",
                }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    OPEN TO WORK
                  </span>
                </div>
              </div>

              <div style={{
                background: "var(--navy-card)", border: "1px solid var(--navy-border)",
                padding: "1rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
                textAlign: "center", minWidth: "200px",
              }}>
                {[
                  { value: "19/20", label: ".NET académique" },
                  { value: "100%", label: "DevTrack demo" },
                  { value: "3 agents", label: "IA en prod" },
                  { value: "17 commits", label: "GitHub .NET" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--indigo-light)" }}>{s.value}</div>
                    <div style={{ fontSize: "0.65rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--navy-border)", borderBottom: "1px solid var(--navy-border)", padding: "1rem 0", overflow: "hidden", marginTop: "3rem" }}>
          <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ marginLeft: "2rem", marginRight: "2rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {item}
                <span style={{ marginLeft: "2rem", color: "var(--indigo)" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ padding: "5rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p className="section-label">Compétences</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Stack<br />technique
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Back-end <strong style={{ color: "var(--text)" }}>ASP.NET Core 10</strong> avec Clean Architecture,
              front-end <strong style={{ color: "var(--text)" }}>Vue 3 / Nuxt 3</strong>, automatisation{" "}
              <strong style={{ color: "var(--text)" }}>n8n</strong> en production.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tools.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div>
            {skills.map((s) => (
              <SkillRow key={s.label} label={s.label} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--navy-border)" }} />

      {/* PROJETS */}
      <section id="projets" style={{ padding: "5rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p className="section-label">GitHub · Open Source</p>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.75rem" }}>Projets clés</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "3rem" }}>
          Projets fullstack .NET, Vue.js et automatisation IA — code vérifiable sur GitHub.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {projets.map((p) => (
            <div key={p.num} className="project-card">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--navy-border)", lineHeight: 1 }}>{p.num}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {p.note && (
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--indigo-light)", background: "var(--indigo-soft)", padding: "0.15rem 0.5rem", border: "1px solid rgba(99,102,241,0.3)" }}>
                      {p.note}
                    </span>
                  )}
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--indigo-light)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    GitHub →
                  </a>
                </div>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--text)" }}>{p.name}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tags.map((t) => (
                  <span key={t} className={`tag ${p.highlight?.includes(t) ? "tag-highlight" : ""}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--navy-border)" }} />

      {/* FORMATION */}
      <section id="formation" style={{ padding: "5rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p className="section-label">Académique</p>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>Formation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ background: "var(--navy-card)", border: "1px solid var(--navy-border)", padding: "1.5rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>Diplôme</p>
            <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>
              Licence en Sciences et Technologies — Informatique
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              ESMIA · École Supérieure de Management et d&apos;Informatique Appliquée
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Mention Bien · Janvier 2026</p>
            <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {[
                { label: ".NET", note: "19/20" },
                { label: "PHP", note: "20/20" },
                { label: "PostgreSQL", note: "15.75/20" },
                { label: "JavaScript", note: "16.75/20" },
                { label: "Stage", note: "17.60/20" },
              ].map((n) => (
                <span key={n.label} className="tag tag-highlight">
                  {n.label} <strong>{n.note}</strong>
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { period: "Avr. 2024 → Juin 2024", company: "AccèsBanque Madagascar", role: "Stagiaire — Intégration systèmes" },
              { period: "Nov. 2024 → Jan. 2025", company: "Randevteam Web Agency", role: "Webmaster · Développement Web & Données" },
              { period: "Juin 2025 → Sep. 2025", company: "Teko Consulting (POTEKO)", role: "Développeur Web · Projets client" },
            ].map((s) => (
              <div key={s.company} style={{ background: "var(--navy-card)", border: "1px solid var(--navy-border)", padding: "1rem 1.25rem" }}>
                <p style={{ fontSize: "0.7rem", color: "var(--indigo-light)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{s.period}</p>
                <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)" }}>{s.company}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--navy-border)" }} />

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 1.5rem", maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ background: "var(--navy-card)", border: "1px solid var(--navy-border)", padding: "3rem 3.5rem" }}>
          <div style={{ maxWidth: "36rem" }}>
            <p className="section-label">Contact</p>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Un projet .NET ou Vue.js ?<br />
              <span style={{ color: "var(--indigo-light)" }}>Travaillons ensemble.</span>
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
              Disponible pour missions freelance remote — Madagascar / Europe GMT+1.
              Réponse sous 24h.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Email", value: "baymi312@gmail.com", href: "mailto:baymi312@gmail.com" },
                { label: "Téléphone", value: "+261 34 83 498 86", href: "tel:+261348349886" },
                { label: "GitHub", value: "Bayane-max219", href: "https://github.com/Bayane-max219" },
              ].map((c) => (
                <a key={c.label} href={c.href}
                  target={c.label === "GitHub" ? "_blank" : undefined}
                  rel={c.label === "GitHub" ? "noopener noreferrer" : undefined}
                  style={{ display: "block", padding: "0.875rem", border: "1px solid var(--navy-border)", textDecoration: "none", transition: "all 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--indigo)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--navy-border)")}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.25rem" }}>{c.label}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>{c.value}</div>
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="mailto:baymi312@gmail.com" className="btn-primary">
                Envoyer un message →
              </a>
              <a href="/cv-bayane-singcol.pdf" download className="btn-outline">
                ↓ Télécharger le CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--navy-border)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 900, fontSize: "0.9rem" }}>
            B<span style={{ color: "var(--indigo-light)" }}>.</span>S
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-faint)" }}>
            Bayane Miguel Singcol · Développeur Full Stack .NET / Vue.js · 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
