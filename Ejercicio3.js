/* hacer objetos con funciones 
class ....> new  */

class Alumno{
    contructor(nombre){
        this.nombre=nombre;
    }
    imprimirNombre(){
        console.log(this.nombre);
    }
}
/* Tipod de declaracion de variables
var: variable global (ya que no se usa) nivel de funcion
let: variable "local" nivel de bloque
const: contante
Instanciamos un objeto para el alumno didier */

let didi= new Alumno("Didier");
let wil= new Alumno("Wilber");
didi.imprimirNombre();
wil.imprimirNombre();


