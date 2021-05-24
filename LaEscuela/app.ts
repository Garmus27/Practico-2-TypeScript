import Alumno from "./Alumno"
import Curso from "./Curso"
import Escuela from "./Escuela"

const alumno1=new Alumno(" Emmanuel", "Avellaneda",36087797,"Diseño de Softare");
const alumno2=new Alumno("Frann", "Garcia",29852725,"Diseño de Software");
const alumno3=new Alumno("Florencia", "Perez",35128743, "Diseño de Software");

let listadoAlumnos=[];
listadoAlumnos.push(alumno1);
listadoAlumnos.push(alumno2);
listadoAlumnos.push(alumno3);

const curso1=new Curso(1,"A","Diseño de Software",listadoAlumnos);
let cursosCesit=[];
cursosCesit.push(curso1);
const cesit=new Escuela("CESIT",cursosCesit,false,true,true);
console.info(cesit.mostrar);




