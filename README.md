# PruebaFullStackAPI
API that connects with TheMovieDB

Para cambiar el puerto de conexión, modificar la variable de entorno PORT en el archivo .env.
Para iniciar la aplicación ejecutar el comando "node apirest" esto iniciará la API y la dejará escuchando en el puerto que le hayamos indicado.
Por defecto es el puerto 3070.

Se proveen rutas como: 
  /films ---> Tendencias del día.
  /popular -> Pelíclas populares.
  /rated ---> Mejor valoradas.
  /new -----> Novedades.
  /search --> Filtrado de pelíclas usando "?filter=" para captar la variable de filtro.
