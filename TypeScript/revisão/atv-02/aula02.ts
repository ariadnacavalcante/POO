class CanetaDois{
    modelo: string;
    cor: string;
    ponta: number;
    carga: number;
    tampada: boolean;
    constructor(modelo:string, cor:string, ponta:number, tampada:boolean){
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
        this.carga = 100;
        this.tampada = tampada;

    }

    public rabiscar (carga: number):boolean{
        if(this.carga>=1 && this.tampada== false){
            console.log("Rabisco");
            this.carga-= carga;
            return true;
        }
        else{
            console.log("Erro");
            return false;
        }
    }

    public tampar (): boolean{
        if(this.tampada==false){
            console.log("tampar")
            this.tampada = true;
            return true;
        }
        else{
            console.log("já tampada")
            return false;
        }
    }
        public destampar ():boolean {
            if(this.tampada==true){
                console.log("destampar")
                this.tampada = false;
                return true;
            }
            else{
                console.log("já destampada")
                    return false;
                }
            }
        

    }

let caneta01 = new CanetaDois("bic", "azul", 0.5, true);
console.log(caneta01);
caneta01.rabiscar(caneta01.carga);
caneta01.tampar();
caneta01.destampar();
let caneta02 = new CanetaDois("bic bico fino", "preta", 0.3, false);
console.log(caneta02);
caneta02.rabiscar(caneta02.carga);
caneta02.tampar();
caneta02.destampar();

