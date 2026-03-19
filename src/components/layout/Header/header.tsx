import styles from './header.module.css';
import {Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className={styles.header}>
      <nav aria-label="Navegación principal">
        <ul className={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/#sobre-mi">Sobre Mi</Link></li>
          <li><Link to="/#proyectos">Proyectos</Link></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
