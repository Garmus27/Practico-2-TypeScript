// Primero creo el arreglo
let azul="azul";
let verde="verde";
let rojo="rojo";
let amarillo="amarillo";
let colores:string[];
// Luego con la funcion "PUSH" agrego los elemntos citados en el ejercicio
colores.push(azul,verde,rojo);
// con la funcion splice, agrego el elemento amarillo entre azul y verde
colores.splice(1,0,amarillo);
//seguimos usando la funcion splice, esta vez para quitar el color verde
colores.splice(2,1);
//creo la funcion para mostrar el arreglo
function mostrar(array:string[]):any{
    return console.info(array);
}
mostrar(colores);

