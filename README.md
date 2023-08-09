# API rest de una lista de tareas
<img src='image/todo-list.png' alt="To Do List" width="230" height="190">

### Autor: Marianny Márquez
### Prográmate Academy
<img src='image/programate.png' alt='Logo Prográmate' width="180" height="70">

## Descripción

Este proyecto está pensado para realizar una lista de tareas para una librería comunitaria utilizando la base de datos de MongoDB Atlas, para así poder asignar las mismas a los trabajadores, o involucrados en esta librería.
Esta API rest esta ideada para trabajarla desde el framework Angular versión 16.1.6 <img src='image/Logo angular.png' alt='Logo Angular' width="60" height="90">

## Funcionalidades
- Obtener y actualizar las tareas.
- Obtener tareas por ID.
- Crear nuevas tareas.
- Eliminar una tarea.

## Pendientes
Esta API se planea mejorar agregandole otras funcionalidades como:
- Tener una lista independiente de empleados/responsables para de esta manera personalizar las tareas según su responsable.

## Tecnologías utilizadas
- JavaScript.
- Node.
- Expresss.
- Nodemon.
- HTML y CSS
- MongoDB y Mongoose.
- Angular.
- TypeScript.
- rxjs.

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias necesarias para poder usar la API:
    npm i express mongoose cors nodemon rxjs

## Uso
1. Inicia la aplicación, se deben abrir dos termianles
node index.js ó npm run dev (Para el backend)
ng server (Para el frontend)
2. Accede a la ruta del frontend http://localhost:4200/todo y así podrás consumir la API desde tu servidor local.

Puedes acceder a los endpoints desde Postman y de esta manera consumir la Api desde allí:

1. http://localhost:3000/todo/ -Obtener todas las tareas-
2. http://localhost:3000/todo/'id' -Obtener las tareas por ID-
3. http://localhost:3000/todo/delete/'id' -Eliminar tareas-
4. http://localhost:3000/todo/update/'id' -Editar/actualizar las tareas y su contenido-
5. http://localhost:3000/api/todo/create -Crear nuevas tareas-

Nota: Para crear y actualizar tareas debes hacerlo conel siguiente formato en JSON

``` 

{
    "task" : "Asignarle género a los libros",
    "task_responsable" : "Pepito Perez",
    "deadline" : "09-30-2023",
    "status" : "64a600bda2472a22f78cf5b4",
    "update" : "Falta enumerar todos los libros"
}

```


### A tomar en cuenta
Este proyecto no esta terminado ya que se presentaron dificultades al momento de conectar y trabajar con los datos del backend en el framework de angular, sin embargo se listan los servicios de los endpoints faltantes (delete y update) y se adelanta el endpoint de post, mas este no tiene funcionalidad desde su template ya que no llegan a guardarse los datos y presenta error desde el archivo HTML, así que por los momentos el proyecto muestra desde el HTML las tareas guardadas anteriormente en su base de datos.

