# Skystay
[Ir al www.skystay.cl](https://skystay.cl)

# Sky scanner api
[Ir al https://rapidapi.com/ntd119/api/sky-scanner3/](https://rapidapi.com/ntd119/api/sky-scanner3/)

# Buscador de Ciudades y Hoteles

Este proyecto es un buscador de ciudades y hoteles desarrollado en **Angular**. A continuación, se detallan las funcionalidades implementadas:

1. **Búsqueda de Ciudades y Hoteles**:
   - Se creó un formulario de búsqueda que permite buscar ciudades y hoteles.
   - Los campos requeridos se validan antes de realizar la búsqueda.
   - El criterio de búsqueda se puede modificar según las necesidades del usuario.

2. **Almacenamiento en Caché**:
   - Se implementó el almacenamiento en caché utilizando el **localStorage**.
   - La respuesta del servicio se guarda en caché para evitar llamadas innecesarias al servidor.

3. **Eliminación de Elementos**:
   - Se permite eliminar un elemento de la lista de resultados.
   - Esto proporciona una experiencia más interactiva para el usuario.

4. **Limpieza de Caché al Recargar**:
   - Al recargar la página, se borra la caché para obtener datos actualizados.

5. **Interceptor de Peticiones HTTP**:
   - Se añadió un interceptor que agrega encabezados y muestra un indicador de carga durante las peticiones HTTP.

6. **Manejo de Resultados Vacíos**:
   - La API seleccionada devuelve datos de resultados vacíos.
   - (importante) la api que escogí no funciona muy bien al traer resultados. En caso de resultados vacíos, les retorno un **mock de prueba** para mantener la funcionalidad.

7. **Dominio y despliegue**:
   - Se adquirio un dominio de prueba en nic.cl para este test.
   - Se desplegó el código en netlify.

¡Gracias por revisar este test práctico! Siéntete libre de clonarlo y probarlo tú mismo.

