# Secret Santa - EQ.13 BEDU (Backend)
Proyecto final del bootcamp de JS de BEDU

## Descripción General de la aplicación:
Esta aplicación permite crear un grupo de intercambio con una lista de invitados entre los cuales se darán regalos de forma secreta.
Se manejan dos roles generales entre los usuarios registrados en la plataforma: Participante y Organizador.
Se establecen fechas límites en cada actividad: Unión de participantes con tiempo para crear la "wishlist" de cada uno, fecha del sorteo y fecha de intercambio.
Cada participante puede crear su wishlist y editarla tanto como desee, siempre que sea antes de la fecha del sorteo (para evitar que una vez realizado este último, el usuario cambie de
opinión sobre sus regalos).

## Características:
- Registro de nuevos usuarios
- Los participantes pueden ver en todo momento a quién le darán su obsequio, así como la wishlist del mismo.
- Los Organizadores pueden ser o no Participantes.
- La aplicación está diseñada para no "cerrar" los intercambios, de modo que el intercambio siempre termine con el último participante entregando su regalo al primero.
- En el momento en el que el organizador realice el sorteo, la posibilidad de agregar nuevos usuarios y/o editar la wishlist será eliminada (mostrando una advertencia previa a la ejecución del sorteo).
- En la wishlist se permite agregar URL  e imágenes del obsequio a fin de facilitar la búsqueda del mismo por parte de los participantes.

## Requerimientos
- NodeJS
- MySQL

## Getting Started
- Creamos el archivo .env conforme al ejemplo.
- Creamos la base de datos manualmente (con el nombre asignado en la variable MYSQL_DATABASE del archivo .env):  
`create database nombre-database`
- Instalamos las dependencias:  
`npm install`
- Iniciamos el sistema:  
`npm start`