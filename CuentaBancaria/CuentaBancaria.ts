class cuentaBancaria{
    constructor(public saldo: number){
        this.saldo=saldo;
    }
    ingreso(monto:number):void{
        if (monto>500000){
            console.warn(`ERROR: el monto ingresado exede el limite de 500000, porfavor intente de nuevo con un monto menor`)
        }else{
            console.info(`El saldo en su cuenta es de ${this.saldo+monto} pesos`)
        }
    }
    extraccion(monto:number):void{
        if(monto>this.saldo){
            console.warn(`ERROR: El saldo en su cuenta es insuficiente para realizar esta operacion, intente de nuevo con un monto menor o realize una consulta de saldo, muchas gracias.`)
        }else if (monto>100000){
            console.warn(`ERROR: El limite para extracciones es de 100000, el monto ingresado supera este limite, intente de nuevo ingresando un monto menor.`)
        }else{
            console.info(`El saldo en su cuenta es ${this.saldo-monto} pesos`)
        }
    }
}