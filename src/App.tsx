import Header from './components/layout/Header/header';
import Footer from './components/layout/Footer/footer';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AppRoutes from './routes/routes';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    // Si la URL tiene hash (#algo), scroll al elemento con ese id.
    if (hash && hash.startsWith('#')) {
      const id = hash.slice(1);
      window.requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          /* en caso de que no encuentre el id, hago que scrolleo hasta arriba del todo (el inicio)*/
        }
      });
      return;
    }

    // Si no hay hash y simplemente se cambia la ruta actual, volvemos arriba (el unico caso que no tiene hash es el inicio).
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);
  return null;

/*
ScrollToTop: componente de comportamiento que defino´
para escuchar cambios y ejecutar logica, mas especificamente a cambios
en las rutas.

En esta funcion/componenete estoy haciendo uso de uno de los Hooks de
React-Router-dom que me da informacion sobre la URL actual

Cada vez que el pathname cambia, lo que quiero hacer es que la pantalla
vuelva arriba del todo, es decir, un scroll a la parte superior de la pagina.

Para eso hago uso de UseEffect, el cual es un hook de React que 
me permite ejecutar efectos secundarios que pasan por fuera
del renderizado
Para cada UseEffect, debemos de definir en el primer parametro
una funcion que querramos hacer, y como segundo parametro
es el array de dependencias que serian cuando quiero que se ejecute.
Ejemplo: quiero que se ejecute el scroll arriba de todo cuando se cambia
de ruta
(hacer scroll, usar fetch para API, escuchar eventos, etc)

Pongo scrollToTop dentro de App porque quiero que 
quiero que se aplique en todas las rutas asi evito repetir codigo.
Si quisiera que sea solo para una pagina entonces lo pongo en una
de ellas
*/
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </>
  );
}

/*
En App renderizamos los componenentes utiles y los componentes a renderizar 
que queremos mostrar/habilitar al usuario.

Por ejemplo el header y footer. 

NOTA IMPORTANTE: header y footer estan declarados en App porque son parte 
del layout global, son componentes que siempre vamos a querer que esten 
sin importar en que pagina estemos.

Main en cambio depende de la pagina en que estemos,
dependiendo en que url estemos vamos a querer renderizar una cosa u otra
(en nuestro caso los proyectos en general o un proyecto en particular (main or detailProject))

Para eso de las rutas en caso de que tengamos varias rutas a definir usamos un archivo
aparte dedicado a eso que en mi caso lo llame Routes.
ahi dentro defino todas mis rutas y que componente/elemento renderizo dependiendo
dicha rutas

*/
export default App;
