// atributo bateria - inicia em um valor no const, se bateria for maior que 0 = operação. Se n = bateria vazia, return -1; 
// carregar


class Calculadora{
    bateria: number;
    constructor(bateria:number){
        this.bateria = bateria;
    }
    public carregar(carregador:number){
        this.bateria += carregador;

    }
    public soma(numero1:number, numero2:number):number{
        if(this.bateria>0){
            this.bateria -= 1;
            return numero1+numero2;

        }
        else{
            console.log("bateria vazia")
            return this.bateria;
        }
    }
    public subtrai(numero1:number, numero2:number):number{
        if(this.bateria>0){
            this.bateria -= 1;
            return numero1-numero2;
        }
        else{
            console.log("bateria vazia")
            return this.bateria;
        }
    }
    public divisao(numero1:number, numero2:number):number{
        if(this.bateria>0){
            this.bateria -= 1;
            return numero1/numero2;
        }
        else{
            console.log("bateria vazia");
            return this.bateria;
        }
    }
    public multiplica(numero1:number, numero2:number):number{
        return numero1*numero2;
    }
}
let calculadora1= new Calculadora(10);
calculadora1.carregar(5);
console.log(calculadora1.bateria);
// console.log(calculadora1.soma(5,6));
// console.log(calculadora1.bateria);
// console.log(calculadora1.subtrai(10,2));
// console.log(calculadora1.bateria);
// console.log(calculadora1.multiplica(2,2));
// console.log(calculadora1.bateria);
// console.log(calculadora1.divisao(10,2));
// console.log(calculadora1.bateria);
