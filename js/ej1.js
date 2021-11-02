/* 
Números mágicos
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 
*/



// creamos la variable vacia para el numero magico

 let numeroMagico=''

// funcion para el boton de comenzar, el caul asigna valor random a la variable 

 function empezarJuego(){
    console.log('empieza el juego')
   //generar un numero aleatorio del 1 al 10
    numeroMagico =  Math.floor(Math.random()*11)
    console.log(numeroMagico)

 }
     
 //  funcion para comparar el numero ingresado por el usuario
     
     
 function send(){
     let numero = document.querySelector('#digito');
     console.log(numero.value)


    if (numero.value==numeroMagico){
        alert('Felicitaciones adivinaste! presiona el boton rojo para seguir jugando')
    }else {
        if(numero.value>numeroMagico){
            alert('Te pasaste! El numero que ingresaste es mayor al numero magico, intenta de nuevo!')
        }else if(numero.value<numeroMagico){
            alert('Un poco mas! El numero que ingresaste es menor al numero magico, intenta de nuevo!')
        }
    }

    
    }

