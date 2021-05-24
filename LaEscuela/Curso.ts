class Curso{
    constructor(public piso:number,public salon: string, public carreraAsignada:string, public Alumnos:string[]){
        this.piso=piso;
        this.salon=salon;
        this.carreraAsignada=carreraAsignada;
    }
    mostrar():void{
        return console.info(`El curso ${this.piso,this.salon} tiene asiganda la materia ${this.carreraAsignada} y cursan actualmente ${this.Alumnos.length} alumnos.`)
    }
}
export default Curso