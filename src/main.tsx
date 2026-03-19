import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
   </BrowserRouter> 
  </StrictMode>,
);

/*
el archivo main es el punto de entrada de nuestra app,
es el encargado de montar nuestra app (archivo app, nuestro 
componente principal).
y este archivo main tiene sus propios estilos que esta encapsulado
en lo que es el Root.

Por que definimos aca Browser Router ?

Porque es el encargado de habilitar la navegacion por URLs
(nos permite definir rutas en los componentes que tiene dentro
(en nuestro caso App) y permite el uso de navegar con Link To)
Tambien nos habilita el uso de Hooks como useParams , UseLocation

Sin definir este todo lo que mencionamos arriba no funcionaria 

Nota: podria ir tambien en App pero eso implicaria 
tener todo mas mezclado en vez de separar BrowserRouter como un entorno global
que encapsula App

Otra forma a entender:
BrowserRouter va en main.tsx porque habilita 
(provee contexto) a todo lo que está dentro 
de App para que pueda usar herramientas de react-router-dom.

*/