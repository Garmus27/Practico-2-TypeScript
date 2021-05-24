class Escuela{
    constructor(public nombre:string,public cursos:string[],public gym:boolean,public laboratorio:boolean, public Taller: boolean){
        this.nombre=nombre
        this.cursos=cursos;
        this.gym=gym;
        this.laboratorio=laboratorio;
        this.Taller=Taller;
    }
    mostrar():void{
        if (this.gym===true){
            if(this.laboratorio===true){
                if(this.Taller===true){
                    console.info(`La escuela ${this.nombre} cuenta con ${this.cursos.length} cursos, un gimnasio, un laboratorio y un taller`)
                }else{
                    console.info(`La escuela ${this.nombre} cuenta con ${this.cursos.length} cursos, un gimnasio, y un laboratorio.`)
                }
            }else{
                console.info(`La escuela ${this.nombre} cuenta con ${this.cursos.length} cursos, y un gimnasio.`)
            }
        }else{
            console.info(`La escuela ${this.nombre} cuenta con ${this.cursos.length} cursos`)
        }
    }
}


export default Escuela