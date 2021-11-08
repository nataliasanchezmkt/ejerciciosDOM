/*
Generaciones
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

 

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generacion”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/




class Persona {
    constructor(nombre, edad, genero, peso, altura, fecha){
        this.name=nombre
        this.age=edad
        this.gender=genero
        this.w=peso
        this.h=altura
        this.dateOfB=fecha

    }

    

    esMayordeEdad(){
        if(this.age>= 18){
            alert('Mayor de edad')

        }else{
            alert('Menor de edad')
        }

    }
    
    
   

    



}
  

 creador =()=>{
    
    
    let nombre = document.querySelector('#nombre').value
    let edad = document.querySelector('#age').value
    let genero = document.querySelector('#genero').value
    let peso = document.querySelector('#w').value
    let altura = document.querySelector('#h').value
    let fecha = document.querySelector('#fecha').value

    persona = new Persona (nombre, edad, genero, peso, altura, fecha);
    





    
  

   

}


