class Alumno{
    constructor(public nombre:string, public apellido:string, public numDoc: number, public carrera: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.numDoc=numDoc;
        this.carrera=carrera;
    }
    mostrarNombre():void{
        return console.info(`${this.nombre,this.apellido}`)
    }
    mostrarInfo():void{
        return console.info(`Alumno ${this.nombre,this.apellido}\n DNI ${this.numDoc} cursa actualmente la carrera de ${this.carrera} `) 
    }
}

export default Alumno
