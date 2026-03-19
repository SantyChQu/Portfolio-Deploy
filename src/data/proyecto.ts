export type Proyecto = {
  Identificador: string;
  Titulo: string;
  Resumen: string;
  DescripcionDetallada: string;
  DescripcionConocimientos: string;
  DescripcionTecnologias: string;
  UrlCodigo: string;
  Habilitado: boolean;
  Imagenes: string[];
};

export const PROYECTOS: Proyecto[] = [
  {
    Identificador: 'gestion-biblioteca',
    Titulo: 'Sistema para Biblioteca',
    Resumen:
      'Sistema que permite registrar libros, gestionar usuarios y controlar préstamos y devoluciones de una biblioteca.',
      DescripcionDetallada:
      `Este proyecto fue mi primera aplicación desarrollada en el ecosistema .NET, realizada en el marco del seminario de lenguajes orientado a C#. En una primera etapa, el enfoque estuvo puesto en afianzar los fundamentos del lenguaje, para luego avanzar hacia el desarrollo completo de una aplicación funcional.
  
      La aplicación permite gestionar una biblioteca mediante el registro y administración de libros, usuarios y préstamos, incluyendo operaciones de alta, modificación y eliminación. Durante su desarrollo, trabajé con tecnologías como Blazor y Razor para la construcción de la interfaz, complementadas con HTML y CSS.
      
      A nivel de arquitectura, se aplicaron conceptos de Clean Architecture, organizando el sistema en capas bien definidas (presentación, dominio y acceso a datos). Además, se incorporaron patrones de diseño como Repositorio e Inyección de Dependencias, junto con el uso de SQLite como base de datos.
      
      Este proyecto marcó mi primer acercamiento a la construcción de aplicaciones completas, integrando lógica de negocio, persistencia de datos y diseño de interfaces.`,
      DescripcionConocimientos: `
      - Implementación completa de operaciones CRUD.
      - Aplicación práctica de principios SOLID.
      - Separación de responsabilidades en capas (presentación, dominio y datos).
      - Uso de patrones de diseño: Repositorio e Inyección de Dependencias.
      - Modelado de casos de uso y lógica de negocio.
      - Diseño de entidades y relaciones del sistema.
      - Integración con base de datos SQLite.
      - Primer acercamiento al desarrollo full stack con .NET.
      `,
    DescripcionTecnologias:
      'C#, .NET, Razor, Blazor, HTML, CSS, JavaScript, SQLite, EntityFrameWork',
    UrlCodigo: 'https://github.com/SantyChQu/Gestion-Biblioteca-.NET',
    Habilitado: true,
    Imagenes: [
      '/Biblioteca/imagen1.png',
      '/Biblioteca/imagen2.png',
      '/Biblioteca/imagen3.png',
      '/Biblioteca/imagen4.png',
    ],
  
  },
  {
    Identificador: 'gestion-alquiler-maquinarias',
    Titulo: 'Sistema de Alquiler de Maquinarias',
    Resumen: 'Sistema para registrar maquinarias, administrar clientes y gestionar reservas, pagos y estado de los alquileres.',
    DescripcionDetallada: `
Este proyecto fue desarrollado en el marco de la materia Ingeniería de Software II, donde se simuló un entorno de trabajo real siguiendo una metodología iterativa. En una primera etapa, se trabajó en el relevamiento y análisis de requerimientos mediante entrevistas con un cliente simulado, documentando necesidades y definiendo el alcance del sistema.

Luego, se avanzó hacia el desarrollo de una aplicación web para la gestión de alquiler de maquinarias, realizando entregas incrementales y presentaciones semanales del progreso, alineadas a una dinámica similar a Scrum.

El sistema permite gestionar distintos tipos de usuarios (clientes, empleados y jefe), cada uno con funcionalidades específicas. Entre ellas se incluyen la gestión de datos personales, la realización de reservas, pagos y consulta de alquileres.

Uno de los aspectos centrales del proyecto fue la implementación de reglas de negocio complejas, como la validación de disponibilidad de maquinarias para evitar solapamientos de fechas, la gestión de estados de los alquileres (pendiente, aceptado, rechazado), el cálculo de costos y la definición de políticas de cancelación y reembolso.

Este proyecto representó un desafío importante en el diseño de la lógica del sistema, especialmente en la gestión de alquileres, donde fue clave modelar correctamente los flujos y restricciones del negocio.
`,
DescripcionConocimientos: `
- Relevamiento y análisis de requerimientos mediante entrevistas.
- Modelado de procesos de negocio y reglas complejas.
- Implementación de lógica de validación (disponibilidad y solapamiento de fechas).
- Gestión de estados en entidades (pendiente, aceptado, rechazado).
- Diseño de flujos de alquiler, pagos y cancelaciones.
- Manejo de múltiples roles de usuario con diferentes permisos.
- Trabajo con metodología iterativa (similar a Scrum).
- Desarrollo incremental con entregas y validaciones semanales.
- Resolución de problemas complejos enfocados en lógica de negocio.
-Uso de Motor de Plantillas (Jinra)
`,
    DescripcionTecnologias:
    'Python, Django, Sqlite, HTML, CSS, JavaScript, Jinja',
    UrlCodigo: 'https://github.com/SantyChQu/ProyectoAlquilerMaquinarias',
    Habilitado: true,
    Imagenes: Array.from({ length: 11 }, (_, i) =>
      `/Maquinarias/imagen${i + 1}.png`
    ),
  },
  {
    Identificador: 'gestion-sitios-historicos',
    Titulo: 'Sistema de Sitios Históricos',
    Resumen: 'Sistema para registrar sitios históricos, gestionar su información y permitir a los usuarios explorarlos y dejar reseñas.',
    DescripcionDetallada: `
Este proyecto fue desarrollado en el marco de la materia Proyecto de Software, donde se trabajó en equipo simulando un entorno profesional de desarrollo. La aplicación se dividió en dos partes principales: un portal de administración (privado) y un portal público, ambos integrados a través de una API.

El sistema tiene como objetivo centralizar la gestión y visualización de sitios históricos, permitiendo registrar información geográfica, descripciones, imágenes y estado de conservación, así como gestionar reseñas y propuestas de nuevos sitios por parte de los usuarios.

En la aplicación privada, desarrollada con Flask, se implementaron módulos completos para la gestión de usuarios, roles y permisos, autenticación, administración de sitios históricos, etiquetas, búsquedas avanzadas, exportación de datos y control de funcionalidades mediante feature flags. También se trabajó en la trazabilidad del sistema mediante el registro de historial de cambios.

Por otro lado, el portal público, desarrollado con Vue.js, permite a los usuarios explorar los sitios a través de listados, mapas interactivos y vistas de detalle, además de interactuar mediante reseñas, calificaciones y funcionalidades como favoritos, incluyendo autenticación mediante Google.

Ambas aplicaciones se integran mediante una API REST, utilizando PostgreSQL como base de datos con soporte para datos geoespaciales. El desarrollo implicó el manejo de una gran cantidad de funcionalidades, validaciones y reglas de negocio, así como la coordinación en equipo y el uso de herramientas de versionado y gestión de dependencias.

Este proyecto representó una experiencia completa de desarrollo full stack, abarcando desde la organización del trabajo en equipo hasta la implementación de una arquitectura funcional con múltiples componentes integrados.
`,
DescripcionConocimientos: `
- Desarrollo full stack con separación de frontend y backend.
- Implementación de API REST para integración entre sistemas.
- Modelado de sistemas complejos con múltiples módulos.
- Gestión de usuarios, roles y permisos.
- Implementación de autenticación ( JWT ) y manejo de sesiones.
- Desarrollo de búsquedas avanzadas con múltiples filtros.
- Manejo de datos geoespaciales y mapas interactivos.
- Diseño de lógica para moderación de contenido (reseñas).
-Uso de Sistemas de Almacenamiento (MINIO).
- Trabajo con funcionalidades avanzadas (feature flags, historial de cambios).
- Desarrollo en equipo utilizando Git y GitLab.
- Uso de gestor de dependencias (Poetry).
- Organización del trabajo mediante features y control de versiones.
`,
    DescripcionTecnologias:
      'Python, Flask, PostgreSQL, SQLAlchemy, Vue.js 3, JavaScript, HTML, CSS, API REST, Jinja, Poetry, Git, GitLab.',
    UrlCodigo: 'https://github.com/SantyChQu/ProyectoSitiosHistoricos',
    Habilitado: true,
    Imagenes: Array.from({ length: 18 }, (_, i) =>
      `/SitiosHistoricos/imagen${i }.png`),
  },
  {
    Identificador: 'proyecto-4',
    Titulo: 'Proyecto 4 (En desarrollo)',
    Resumen: 'Proximamente...',
    DescripcionDetallada:
      '',
    DescripcionConocimientos:
      '',
    DescripcionTecnologias:
      '',
    UrlCodigo: '#',
    Habilitado: false,
    Imagenes: [],
  },
];

