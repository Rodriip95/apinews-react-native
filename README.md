
# Reba News

Esta App muestra noticias donde se puede filtrar por noticias de Argentina y tambien noticias mundiales en idioma español.
Tambien se pueden filtrar por diferentes categorias como deportes, politica, ciencia y negocios entre otros.

## Informacion tecnica:

La App esta creada en React Native CLI, se desarrollo 100% en un entorno de Mac, lo cual solo se testeo en un dispositivo iOS.
Los datos que consulta la aplicacion son de una Api de noticias, tambien se trabajo un pequeño prototipo en Figma con los colores y tipografias de la corporacion, se siguio un patron de diseño simple de estructura de carpetas
y se aplico Typescript en partes del codigo. La App cuenta con un controlador de estados de tipo Context para guardar la configuracion del filtrado de noticias.

 - [API News](https://newsapi.org/)
 - [Propotipo Figma](https://www.figma.com/file/iHnxn36ZdxORmEyvBFwnCP/reba?node-id=0%3A1)


| Recursos             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Colores | ![#4262FF](https://via.placeholder.com/10/4262FF?text=+) #4262FF ![#70E777](https://via.placeholder.com/10/70E777?text=+) #70E777 |
| Tipografias | Montserrat y Poppins |

## Pendientes

Si bien la aplicacion funciona, consultando la API desde una Flatlist que va recargando noticias a medida que scrolleamos,
los faltantes a la fecha son:

- Logeo con cuenta Google y cierre de sesion
- Implementar guardado de noticias en favoritos
- Pantalla favoritos
- Detalles de noticias
- Terminar maqueta de Menu Drawer

