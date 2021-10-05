import {Fone} from "./Fone.ts"
class Contato{
   private nome: string;
   private fones: Fone[];

    constructor(nome:string){
        this.nome = nome;
        this.fones = [];
    }
    public getNome():string{
        return this.nome;
    }
    public setNome(): string{
        return this.nome;
    }
    public getFones():Fone[]{
        return this.fones;
    }
    public addFone(fone: Fone){
        if(this.validate(fone.getNumero())){
            this.fones.push(fone);
        }
        else{
            console.log("Esse número é inválido")
        }
        
    }

    public validate(numero:string):boolean {
    const separaEmVetor = numero.split("");
    for (let i = 0; i < separaEmVetor.length; i++) {
        if (separaEmVetor[i] != '0' && separaEmVetor[i] != '1' && separaEmVetor[i] != '2' && separaEmVetor[i]!='3' && separaEmVetor[i]!='4' &&
        separaEmVetor[i]!='5' && separaEmVetor[i]!='6' && separaEmVetor[i]!='7' && separaEmVetor[i]!='8' && separaEmVetor[i]!='9' && 
        separaEmVetor[i]!='(' && separaEmVetor[i]!=')' && separaEmVetor[i]!='.') {
        return false;
        }
    }
    
    return true;
    }

    public toString(){
        let retorno = "- "+ this.getNome()+" ";
        for (let i = 0; i < this.getFones().length; i++) {
            retorno+="["+ i + ":" + this.getFones()[i].toString()+"] ";
            
        }
        return retorno;
    }

}

export {Contato}