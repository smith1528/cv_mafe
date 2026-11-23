import Image from "next/image";
import WorkGrid from "@/components/WorkGrid";
import { experience, profile, skills, tools, works } from "@/data/content";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="container nav">
        <a href="#inicio" className="logo">M. F. Moncada</a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#trabajos">Trabajos</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a href="#contacto" className="btn btn-dark">Hablemos</a>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="container hero">
          <div className="hero-text">
            <span className="eyebrow">
              <span className="rec" aria-hidden="true" /> {profile.role}
            </span>
            <h1>
              María Fernanda
              <br />
              <em>Moncada</em> Molina
            </h1>
            <p className="lead">
              Cuento historias de cultura, territorio y personas que pocas veces llegan a la
              noticia, con una mirada creativa y sensible, de la idea al montaje final.
            </p>
            <ul className="pills">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <figure className="portrait">
            <div className="portrait-frame">
              {profile.portrait ? (
                <Image
                  src={profile.portrait}
                  alt={`Retrato de ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <span className="portrait-placeholder">Retrato vertical, luz natural, mirando a cámara.</span>
              )}
              <div className="portrait-top">
                <span><span className="rec" aria-hidden="true" /> REC</span>
              </div>
            </div>
            <figcaption>{profile.location}</figcaption>
          </figure>
        </section>

        {/* MARQUEE: la lista se repite dos veces para que el loop sea continuo */}
        <div className="marquee" aria-label="Herramientas que maneja">
          <div className="marquee-track">
            {[0, 1].map((copy) =>
              tools.map((t) => (
                <span key={`${copy}-${t}`} aria-hidden={copy === 1}>
                  {t} <span className="star">✦</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* TRABAJOS */}
        <section id="trabajos" className="container section">
          <div className="section-head">
            <div>
              <span className="label">01 — Trabajos seleccionados</span>
              <h2>
                Historias que <em>se escuchan</em>,<br />se leen y se ven.
              </h2>
            </div>
          </div>
          <WorkGrid works={works} />
        </section>

        {/* TRAYECTORIA */}
        <section id="trayectoria" className="band">
          <div className="container section two-col">
            <div>
              <span className="label">02 — Trayectoria</span>
              <h2>
                De la radio
                <br />
                al <em>set</em>.
              </h2>
            </div>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.title}>
                  <span className="period">{e.period}</span>
                  <div>
                    <h3>{e.title}</h3>
                    {e.orgUrl ? (
                      <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="org">
                        {e.org} ↗
                      </a>
                    ) : (
                      <span className="org">{e.org}</span>
                    )}
                    <p>{e.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="container section two-col">
          <div>
            <span className="label">03 — Sobre mí</span>
            <p className="quote">
              Me interesa contar la cultura, la historia y los temas que casi nadie mira. Antes de
              contar historias con una cámara, las enseñé bailando: fui docente de danza
              tradicional colombiana.
            </p>
          </div>
          <div className="about">
            <p>
              Estudiante de octavo semestre de Comunicación Social y Periodismo. Trabajo la
              creación de contenidos, la producción audiovisual, la fotografía y la edición, desde
              la idea y la narrativa hasta la entrevista y el montaje. Soy organizada, aprendo
              rápido, me relaciono con facilidad y sé liderar proyectos o trabajar por mi cuenta.
            </p>
            <div className="facts">
              <div>
                <span className="label">Formación</span>
                <span>
                  Comunicación Social y Periodismo
                  <br />
                  Universidad de La Sabana · 8.º semestre
                </span>
              </div>
              <div>
                <span className="label">Reconocimientos</span>
                <span>
                  Mención de Honor al Mejor Bachiller Técnico
                  <br />
                  I.E.D. Pompilio Martínez · 2021
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CONTACTO */}
      <footer id="contacto" className="contact">
        <div className="container">
          <span className="label">04 — Contacto</span>
          <h2>
            ¿Tienes una historia
            <br />
            por <em>contar</em>?
          </h2>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-light">{profile.email}</a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp · {profile.phoneDisplay}
            </a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {profile.instagramHandle}
            </a>
          </div>
          <div className="footer-bar">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <nav aria-label="Redes">
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.sabana360} target="_blank" rel="noopener noreferrer">Conexión Sabana 360</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
