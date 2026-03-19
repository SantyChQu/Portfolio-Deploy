import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROYECTOS } from '../data/proyecto';
import styles from '../components/layout/Main/main.module.css';

function splitParagraphs(text: string): string[] {
  return text
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/g)
    .map((p) => p.replace(/\s+\n/g, '\n').trim())
    .filter(Boolean);
}

function splitHyphenList(text: string): string[] {
  return text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace(/^-+/, '').trim())
    .filter(Boolean);
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const proyecto = PROYECTOS.find((p) => p.Identificador === slug);

  if (!proyecto) {
    return (
      <main className={styles.main}>
        <section className={styles.sectionProjects}>
          <h2 className={styles.sectionTitle}>Proyecto no encontrado</h2>
          <p className={styles.sectionText}>No se encontró un proyecto con esa URL.</p>
          <Link to="/" className={styles.projectCardBtn}>
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = proyecto.Imagenes.length > 1;
  const goPrev = () =>
    setCurrentIndex((i) => (i === 0 ? proyecto.Imagenes.length - 1 : i - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i === proyecto.Imagenes.length - 1 ? 0 : i + 1));

  return (
    <main className={styles.main}>
      <section className={styles.sectionProjects}>
        <h2 className={styles.sectionTitle}>{proyecto.Titulo}</h2>
        {/* Cuadro único que enmarca el carrusel de imágenes */}
        <div className={`${styles.projectsFrame} ${styles.projectDetailFrame}`}>
          <article className={styles.projectCard}>
            <div className={styles.projectCardImageWrap}>
              <div className={styles.projectCardImage}>
                {proyecto.Imagenes.length > 0 ? (
                  <img
                    src={proyecto.Imagenes[currentIndex]}
                    loading="lazy"
                    alt={`${proyecto.Titulo} - imagen ${currentIndex + 1}`}
                  />
                ) : (
                  <p className={styles.sectionText}>
                    Aún no se han cargado imágenes para este proyecto.
                  </p>
                )}
              </div>
              {hasMultiple && (
                <>
                  <button
                    type="button"
                    className={styles.carouselArrow}
                    onClick={goPrev}
                    aria-label="Imagen anterior"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                    onClick={goNext}
                    aria-label="Siguiente imagen"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </article>
        </div>

        {/* Secciones de contenido debajo del cuadro de imágenes */}
        <div className={styles.projectDetailSections}>
          <section className={styles.projectDetailSection}>
            <h3 className={styles.projectDetailSubtitle}>Descripción detallada</h3>
            {splitParagraphs(proyecto.DescripcionDetallada).map((paragraph, idx) => (
              <p key={idx} className={styles.sectionText}>
                {paragraph}
              </p>
            ))}
          </section>

          <section className={styles.projectDetailSection}>
            <h3 className={styles.projectDetailSubtitle}>Conocimientos y habilidades adquiridos</h3>
            {splitHyphenList(proyecto.DescripcionConocimientos).length > 0 ? (
              <ul className={styles.projectDetailList}>
                {splitHyphenList(proyecto.DescripcionConocimientos).map((item, idx) => (
                  <li key={idx} className={styles.sectionText}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.sectionText}>{proyecto.DescripcionConocimientos}</p>
            )}
          </section>

          <section className={styles.projectDetailSection}>
            <h3 className={styles.projectDetailSubtitle}>Lenguajes y tecnologías usadas</h3>
            <p className={styles.sectionText}>{proyecto.DescripcionTecnologias}</p>
          </section>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <a
            href={proyecto.UrlCodigo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCardBtn}
          >
            Ver código en GitHub
          </a>
          <Link to="/" className={styles.projectCardBtn} style={{ marginLeft: '0.75rem' }}>
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}

