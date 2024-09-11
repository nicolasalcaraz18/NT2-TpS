Sugerencias de APIs Públicas para Practicar

Rick and Morty API: https://rickandmortyapi.com/api
Practicar obteniendo personajes, episodios, etc.
PokeAPI: https://pokeapi.co/
Ideal para trabajar con datos de Pokémon, como habilidades, tipos, y estadísticas.
Dog CEO's Dog API: https://dog.ceo/dog-api/
Permite obtener imágenes aleatorias de perros, por raza, etc.
REST Countries: https://restcountries.com/v3.1/all
Para obtener datos sobre países, como población, idiomas, etc.
SpaceX API: https://api.spacexdata.com/v4/launches
Ideal para obtener información sobre lanzamientos espaciales y otros datos relacionados
con SpaceX.
Datos del clima API: OpenWeatherMap

Ejercicio 1: Mostrar Títulos de alguna información obtenida
Usa fetch para obtener los títulos de los 10 primeros de alguna de las APIs y mostrar en la
consola.
Resultado Esperado: Deberías ver una lista en la consola.
Ejercicio 2: Eliminar un Post
Con axios, realiza una petición para eliminar un post utilizando la API de JSONPlaceholder
en https://jsonplaceholder.typicode.com/posts/1.
Resultado Esperado: Deberías recibir una confirmación en la consola de que el post ha
sido eliminado (aunque en JSONPlaceholder, en realidad no se elimina).
Ejercicio 3: Listar Álbumes de Fotos
Implementa una función async que utilice axios para obtener y mostrar en consola los
álbumes de un usuario desde https://jsonplaceholder.typicode.com/albums?userId=1.
Resultado Esperado: Obtener y mostrar una lista de álbumes para el userId especificado.
Ejercicio 4: Mostrar Información de Usuario
Usa fetch y async/await para obtener la información del usuario con ID 5 de
JSONPlaceholder y muéstrala en la consola.
Resultado Esperado:
Los detalles del usuario con ID 5 deberían mostrarse en la consola.
Ejercicio 5: Eliminar un To-Do
Con axios, envía una petición DELETE para eliminar un TO-DO con un ID específico en
https://jsonplaceholder.typicode.com/todos/1.
Resultado Esperado: La consola debe mostrar una confirmación del lo eliminado.

Ejercicio 6: Mostrar Comentarios de un Post
Escribe una función async que obtenga los comentarios del post con ID 2 usando fetch
desde https://jsonplaceholder.typicode.com/comments?postId=2.
Ejercicio 7: Eliminar una Foto
Usa fetch y async/await para eliminar una foto con ID 1 desde
https://jsonplaceholder.typicode.com/photos/1
Ejercicio 8: Mostrar Datos del Clima
Implementa una función async para obtener y mostrar datos del clima de una ciudad
específica usando axios y la API de OpenWeatherMap.
Resultado Esperado: Información del clima para la ciudad especificada se mostrará en
consola. (Necesitas una API key para esto).
Ejercicio 9: Obtener Lista de Tareas
Escribe una función async que use fetch para obtener y mostrar en consola las tareas
pendientes del usuario con ID 3 desde https://jsonplaceholder.typicode.com/todos?userId=3
Ejercicio 10: Obtener y Mostrar Artículos
Escribe una función obtenerArticulos que haga una solicitud a una API para obtener
artículos y luego muestre los resultados en la consola. Usa la API de JSONPlaceholder para
obtener posts como un ejemplo.
Resultado Esperado: La función debe retornar una nueva promesa.