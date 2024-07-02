## DESCRIPCIÓN

**Nombre: Jose Eduardo Roman Piña**
**Email: jeduardo.roman69@gmail.com**
**WhatsApp: +52 5515751939**
**Ciudad: Soyaniquilpan, Estado de México**
**País: México**

## ¿Cómo describirías el propósito de este proyecto? (opcional)
Poder demostrar nuestras habilidades en el front, si bien es cierto que es una aplicación relativamente sencilla, demuestra en como encaramos los retos. Además de que en mi caso nunca había trabajado con Boostrap, lo cual fue algo que aprendí sobre la marcha del desarrollo de esta prueba técnica.

## ¿Cuál es tu stack tecnológico preferido? ¿Por qué? (opcional)
Me agrada trabajar con Next.js por la facilidad y simplicidad con la que puedes trabajar. COntiene propios hook y elementos que hacen que el desarrollo sea más eficiente. El renderizado de la aplicación es más rápido.

## Descripción de la Solución

Por favor, proporciona una breve descripción de tu solución. Incluye detalles sobre la arquitectura, los componentes principales y cualquier decisión técnica importante que hayas tomado.

### Introducción
Quize dar un toque personal al desarrollo de esta aplicación, agregando un nombre y un logo representativo de la unión de mis dos apellidos, RoPi.

La aplicación esta desarrollada con React v18, Next.js v14 y Boostrap.

### Descripción de la palicación
En la página principal se muestra una barra de Navegación y la sección principal donde se muestra un input, un select y dos botones los cuales agregan una tarea, esta debe de tener una prioridad (Alta, Media, Baja).

Posteriormente se encuentra un select para el filtrado de tareas.

Enseguida continua una tabla donde se visualizaran las tareas agregadas.

Por último un pequeño footer con el link a mi portfolio.

### Cómo funciona la aplicación

Se inicia ingresando una tarea en el input y otorgando una prioridad que va de la más alta a la más baja. Al termino de estos dos campos, podemos hacer dos cosas, una agregar la tarea o bien, limpiar los elementos y volver a editar.

Al agregar una tarea podemos ver que esta se muestra con sus características, como ID, Tarea, Prioridad y Acciones; la columna acciones se visualizan tres botones, que permiten editar una tarea, marcar la tarea como completada o hecha, y eliminar una tarea.

- #### Actualizar una tarea
Al dar click en el boton de Actualizar, esta nos dirije a una nueva página donde tendremos un input con el contenido de la tarea; un select con la prioridad que se le otorgo; y el boton de actualizar que si se presiona redirija al home.

Muestra un boton de Regresar en caso de querer omitir el proceso.

- #### Completar una tarea.
Se completa una tarea el marcar este boton, el cual modificará la forma visual de cómo se observa en la tabla, este proceso se puede modificar, volviendo a clickear el boton, marcando la traea como pendiente.

- ### Eliminar una tarea

Al clickear este boton se elimina  la tarea sin poderla recuperar, es un proceso que si se ejecuta no habrá marcha atrás.

- #### Filtrado
Se cuenta con un select de filtrado que mostrará las tareas completadas, pendientes o todas las tareas.

### Complementos

- La aplicación cuenta con una página Not Found en caso de ir a una página no creada.

- Se hace uso de localStorage para almacenar las tareas y no perderlas al actualizar/refrescar la pagina.

- Cuenta con validadciones en caso de no tener tareas creadas o traeas completadas.

- Uso de un componenete Loading que hace más amigable la interfaz con el usuario.

## Instrucciones para Ejecutar el Proyecto

Por favor,  proporciona una breve descripción de como ejeuctar el proyecto, plus si lo tienes en el README.md 

## Como usar el programa

- Realiza un clone a este repositorio ejecutando el comando:

```
git clone + <url>
```

Ya instalado los archivos en tu ordenador, teclea:

```
cd todo-list
```

Ahora instalaremos las dependencias

```
npm install
```

Por último ejecutar el programa

```
npm run dev
```

Te mostrará la opción de visualizarla en una ventana del navegador, por defecto viene <b>[localhost:300](http://localhost:3000/)


## ¿Que resaltarias de tu proyecto?

- El poder refrescar la página sin perder los datos mostrados es una ventaja que se ofrece de este sitio.

- Usar un framework moderno como lo es Next.js que hoy en día esta incrementando la comunidad.
- Visita el deploy:  <b>[RoPi ToDo List](https://todo-list-99qk.vercel.app/)
