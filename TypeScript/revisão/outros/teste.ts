class Caneta {
    modelo: string;
    carga: number;
    cor: string;
    constructor(modeloCaneta: string, cargaCaneta: number, corCaneta: string){
      this.modelo = modeloCaneta;
      this.carga = cargaCaneta;
      this.cor = corCaneta;
    }
  };
  class Estojo {
    canetas: Caneta[];
    constructor(){
      this.canetas = [];
    }
  }
  
  let caneta1 = new Caneta( "bic", 1, "azul");
  let caneta2 = new Caneta( "bic2", 10, "preta");
  
  let estojo = new Estojo();
  console.log(estojo.canetas);
  estojo.canetas.push(caneta1);
  console.log(estojo.canetas);
  estojo.canetas.push(caneta2);
  console.log(estojo.canetas);