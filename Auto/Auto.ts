class Auto{
    constructor(public marca: string, public modelo:string,public potencia:number, public velMax:number){
        this.marca=marca;
        this.modelo=modelo;
        this.potencia=potencia;
    }
    mostrar():void{
        console.info(`Este vehiculo es un ${this.modelo} de la marca ${this.marca}, posee una potencia de ${this.potencia}CV y logra una velocidad maxima de ${this.velMax} km/h`)
    }
    calcularTiempo(distancia: number):void{
        console.info(`Este vehiculo alcanzando una velocidad maxima de ${this.velMax} puede recorrer una distancia de ${distancia} en ${distancia/this.velMax} horas`)

    }
}
const fiatArgo= new Auto(`Fiat`,`Argo`,99,173)
const vwVento=new Auto(`VolkWagen`,`Vento`,150,220)
const fiestaK=new Auto(`Ford`,`Fiesta Kinetic`,120,190)
const onix=new Auto(`Chevrolet`,`Onix`,90,183)

let autos=[fiatArgo,vwVento,fiestaK,onix]

for (let i=0;i<autos.length;i++){
    console.info(autos[i].mostrar)
}