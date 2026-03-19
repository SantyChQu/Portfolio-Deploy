import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';
import { PROYECTOS, type Proyecto } from '../../../data/proyecto';

type ProjectCardProps = {
  proyecto: Proyecto;
};

function ProjectCard({ proyecto }: ProjectCardProps) {
  const { Titulo, Resumen, UrlCodigo, Imagenes, Identificador, Habilitado } = proyecto;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hasMultiple = Imagenes.length > 1;

  const goPrev = () =>
    setCurrentIndex((i) => (i === 0 ? Imagenes.length - 1 : i - 1));

  const goNext = () =>
    setCurrentIndex((i) => (i === Imagenes.length - 1 ? 0 : i + 1));

  return (
    <>
      <article className={styles.projectCard}>
        <div className={styles.projectCardImageWrap}>
          <div className={styles.projectCardImage}>
            {Imagenes.length > 0 && (
              <img
                src={Imagenes[currentIndex]}
                alt={`${Titulo} - imagen ${currentIndex + 1}`}
                onClick={() => setIsOpen(true)}
                className={styles.clickableImage}
              />
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
                ‹
              </button>

              <button
                type="button"
                className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                onClick={goNext}
                aria-label="Siguiente imagen"
              >
                ›
              </button>
            </>
          )}
        </div>

        <h3 className={styles.projectCardTitle}>{Titulo}</h3>
        <p className={styles.projectCardDescription}>{Resumen}</p>

        <div className={styles.projectCardActions}>
          <Link
            to={Habilitado ? UrlCodigo : ""}
            className={`${styles.projectCardBtn} ${
              !Habilitado ? styles.disabled : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
            title={!Habilitado ? "Proyecto bloqueado" : ""}
            onClick={(e) => {
              if (!Habilitado) e.preventDefault();
            }}
          >
            Ver código proyecto
          </Link>

          <Link
            to={Habilitado ? `/proyecto/${Identificador}` : "#"}
            className={`${styles.projectCardBtn} ${
              !Habilitado ? styles.disabled : ""
            }`}
            title={!Habilitado ? "Proyecto bloqueado" : ""}
            onClick={(e) => {
              if (!Habilitado) e.preventDefault();
            }}
          >
            Ver detalle proyecto
          </Link>
        </div>
      </article>

      {/* MODAL */}
      {isOpen && (
  <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
    
    <div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()}
    >

      {/* Botón cerrar */}
      <button
        className={styles.modalClose}
        onClick={() => setIsOpen(false)}
        aria-label="Cerrar"
      >
        ✕
      </button>

      <img
        src={Imagenes[currentIndex]}
        alt={`${Titulo} - imagen ${currentIndex + 1}`}
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            className={styles.modalArrow}
            onClick={goPrev}
          >
            ‹
          </button>

          <button
            type="button"
            className={`${styles.modalArrow} ${styles.modalArrowRight}`}
            onClick={goNext}
          >
            ›
          </button>
        </>
      )}
        </div>
      </div>
      )}
    </>
  );
}

export default function Main() {
  return (
    <main id="inicio" className={styles.main}>
      <section id="sobre-mi" className={styles.sectionAbout}>
        <h1> Choque Santiago</h1>
        <h2 className={styles.sectionTitle}>Acerca de Mí</h2>

        <div className={styles.aboutContent}>
          <p className={styles.sectionText}>
          Soy estudiante de 4to/5to año de la carrera Licenciatura en Sistemas en la Universidad Nacional de La Plata (UNLP),
           con interés en desarrollarme profesionalmente en el ámbito del desarrollo de software.
          </p>

          <p className={styles.sectionText}>
            Durante mi formación he trabajado con distintas tecnologías del
            desarrollo web, los cuales me han ayudado a afianzar mis
            conocimientos, además de realizar proyectos personales que me
            permitieron aplicar y reforzar lo aprendido.
          </p>

          <p className={styles.sectionText}>
            Me interesa seguir creciendo en el área del desarrollo, aprender
            de equipos con experiencia y enfrentar nuevos desafíos que me
            ayuden a mejorar como desarrollador.
          </p>

          <p className={styles.sectionText}>
            Me considero una persona curiosa, con muchas ganas de aprender y
            de seguir desarrollando mis habilidades técnicas en un entorno
            profesional.
          </p>
        </div>
      </section>

      <section id="proyectos" className={styles.sectionProjects}>
        <h2 className={styles.sectionTitle}>Mis proyectos</h2>

        <div className={styles.projectsFrame}>
          {PROYECTOS.map((project) => (
            <ProjectCard key={project.Identificador} proyecto={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
