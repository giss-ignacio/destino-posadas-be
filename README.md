# destino-posadas-be

Destino Posadas

Una aplicación para visualizar las distintas métricas y desempeño de los hoteles de Posadas.

Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Pre-requisitos 📋
Tener instalado Docker, node, git y visual studio code.

Instalación 🔧
Clonar el repositorio, en rama MAIN ejecutar npm install, luego crear un archivo
".env", alli se colocaran los datos que le enviaremos de forma privada.
Abrir docker y ejecutar en la consola "docker-compose up -d" para que construya el entorno y levanten los servicios de mongo, adminMongo y fiware-Orion.
Acceder a adminMongo y conectarse usando: mongodb://@mongodb
Finalmente ejecutar en la consola npm run star para que levante el backend.

Construido con 🛠️
NodeJs - MongoDb - Fiware

Versionado 📌
Git y github

Autores ✒️
Gustavo Caradonna - Ignacio Giss - Dario Piazza - Joaquín Soriano
