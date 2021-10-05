class Calculadora{
    battery: number;
    batteryMax: number;
    display: number;
    constructor(bateriaMax:number){
        this.battery = 0;
        this.battery = bateriaMax;
        this.display = 0;
    }
}
const calculator = new Calculadora(5) 
console.log(calculator);

  