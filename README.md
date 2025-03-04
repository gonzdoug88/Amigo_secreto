# Challenge Amigo Secreto

Una aplicación web que permite a los usuarios crear una lista de nombres y seleccionar uno de forma aleatoria.

## Características

- Añadir nombres a una lista
- Visualizar la lista de nombres agregados
- Seleccionar un nombre de forma aleatoria
- Reiniciar el sorteo para comenzar de nuevo
- Visualización de resultados mediante un modal informativo

## Tecnologías

- HTML
- CSS
- JavaScript

## Cómo funciona

1. El usuario ingresa nombres en el campo de texto
2. Los nombres se agregan a la lista visible en la interfaz
3. Al hacer clic en "Sortear", la aplicación selecciona aleatoriamente uno de los nombres
4. El nombre seleccionado se muestra en un modal
5. El usuario puede reiniciar el sorteo en cualquier momento

## Funcionalidades principales

### Agregar nombres

La función `agregarAmigo()` valida que no se ingresen campos vacíos y agrega nombres a un arreglo.

### Mostrar lista de nombres

La función `enseñarAmigos()` actualiza la interfaz para mostrar todos los nombres agregados.

### Realizar el sorteo

La función `sortearAmigo()` selecciona un nombre aleatoriamente de la lista y muestra el resultado en un modal.

### Reiniciar

La función `reiniciarSorteoDeAmigo()` limpia el arreglo de nombres y restablece la interfaz.

### Manejo del modal

Las funciones `openModal()` y `closeModal()` controlan la visibilidad del modal de resultados.

## Instalación

1. Clona este repositorio
2. Abre el archivo `index.html` en tu navegador ó
3. abre la URL compartida

## Personalización

Puedes personalizar la apariencia de la aplicación modificando los estilos CSS o añadir funcionalidades adicionales al código JavaScript, si se desea realizar modificaciones.

## Solución de problemas

Si experimentas problemas al ejecutar el sorteo, verifica que:
- Revisa tu conexión a internet
- El campo "Escribe un nombre" no esté vacio

## Autoria

Douglas González - Guatemala - 2025
