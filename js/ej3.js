/*Lista de tareas
Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un boton que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/


let contenedorPadre=''
function addTask(){


let items = document.getElementById('tareas')

contenedorPadre = document.querySelector('#lista');

let elementos = document.createElement('h5');

elementos.innerHTML = items.value;

elementos.className = 'mt-3' 

contenedorPadre.appendChild(elementos);





}
remove=()=> {
    contenedorPadre.removeChild(contenedorPadre.children[contenedorPadre.children.length-1])
}

















