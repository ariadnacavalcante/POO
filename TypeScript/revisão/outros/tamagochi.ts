class Bichinho{
    private energia: number;
    private saciedade: number;
    private limpeza: number;
    private diamantes: number;
    private idade: number;
    private energiaMax: number;
    private limpezaMax:number;
    private saciedadeMax: number;
    constructor(energiaMax: number, limpezaMax:number, saciedadeMax: number ){
        this.energia = energiaMax;
        this.energiaMax = energiaMax;
        this.saciedade = saciedadeMax;
        this.saciedadeMax = saciedadeMax;
        this.limpeza = limpezaMax;
        this.limpezaMax = limpezaMax;
        this.idade = 0;
        this.diamantes = 0;
    }
    public getEnergia(): number{
        return this.energia;
    }
    public setEnergia(novaEnergia:number){
        this.energia = novaEnergia;
    }
    public getEnergiaMax(): number{
        return this.energiaMax;
    }
    public setEnergiaMax(novaEnergiaMax:number){
        this.energiaMax = novaEnergiaMax;
    }

    public getSaciedade(): number{
        return this.saciedade;
    }
    public setSaciedade(novaSaciedade:number){
        this.saciedade = novaSaciedade;
    }
    public getSaciedadeMax(): number{
        return this.saciedadeMax;
    }
    public setSaciedadeMax(novaSaciedadeMax:number){
        this.saciedadeMax = novaSaciedadeMax;
    }
    public getLimpeza(): number{
        return this.limpeza;
    }
    public setLimpeza(novaLimpeza:number){
        this.limpeza = novaLimpeza;
    }
    public getLimpezaMax(): number{
        return this.limpezaMax;
    }
    public setLimpezaMax(novaLimpezaMax:number){
        this.limpeza = novaLimpezaMax;
    }
    
    public getIdade(): number{
        return this.idade;
    }
    public setIdade(novaIdade:number){
        this.idade = novaIdade;
    }
    public getDiamantes(): number{
        return this.diamantes;
    }
    public setDiamantes(novoDiamantes:number){
        this.diamantes = novoDiamantes;
    }
    public comer(){
        //if se estiver morto
        if(this.getEnergia()<=0 || this.getLimpeza()<=0|| this.getSaciedade()<=0){
            console.log("O pet morreu, não é possível executar nenhuma ação.")
            return;
        }
        if(this.getLimpeza()>=2){
            this.setEnergia(this.getEnergia()-1); // se não tá morto, tem pelo menos 1 de energia.
            this.setLimpeza(this.getLimpeza()-2);
            this.setIdade(this.getIdade()+1);
            if(this.getSaciedade()+4<=this.getSaciedadeMax()){
                this.setSaciedade(this.getSaciedade()+4);
            
            }
            else{
                this.setSaciedade(this.getSaciedadeMax());                
            }
        }
        else{
            console.log('O pet não possui limpeza para realizar a atividade');
        }

    }
    public brincar(){
        if(this.getEnergia()<=0|| this.getLimpeza()<=0 || this.getSaciedade()<=0){
            console.log("O pet morreu, não é possível executar nenhuma ação.")
            return;
        }
        if(this.getEnergia()>=2){
            if(this.getLimpeza()>=3){
                this.setEnergia(this.getEnergia()-2);
                this.setLimpeza(this.getLimpeza()-3);
                this.setSaciedade(this.getSaciedade()-1);
                this.setDiamantes(this.getDiamantes()+1);
                this.setIdade(this.getIdade()+1);
                if(this.getEnergia()==0){
                    console.log("O pet morreu brincando");
                }
                if(this.getLimpeza()==0){
                    console.log("O pet morreu brincando");
                }
                if(this.getSaciedade()==0){
                    console.log('O pet morreu brincando');
                }
            }
            else{
                console.log("O pet não possui limpeza para realizar a atividade.");
            }     
        }
        else{
            console.log("O pet não pode realizar a atividade.");
        }
        
    }
    public dormir(){
        let sono = this.getEnergiaMax()-this.getEnergia();
        if(sono>=5){
            console.log("o pet está dormindo, silêncio!!!!!!")
            this.setEnergia(this.getEnergiaMax());
            this.setIdade(this.getIdade()+sono);
        }
        else{
            console.log("o pet não está com sono :(");
        }
        


    }
    public bain(){
        if(this.getEnergia()==0 || this.getLimpeza()==0 || this.getSaciedade()==0){
            console.log("O pet está morto");
        }
        if(this.getEnergia()>=3){
            this.setEnergia(this.getEnergia()-3);
            this.setSaciedade(this.getSaciedade()-1);
            this.setLimpeza(this.getLimpezaMax());
            this.setIdade(this.getIdade()+2);
        }
        else{
            console.log("O pet não pode tomar banho agora.")
        }

    }
    public show(){
        return this.toString();
    }
    public toString(){
    return "E:"+this.getEnergia() +"/"+this.getEnergiaMax()+", S:"+this.getSaciedade()+"/"+this.getSaciedadeMax()+
    ", L:"+this.getLimpeza()+"/"+this.getLimpezaMax()+", D:"+this.getDiamantes()+
    ", I:"+this.getIdade();
    }

}

let tamagochi = new Bichinho(10, 10, 10);
tamagochi.comer();
console.log(tamagochi.show());
tamagochi.dormir();
console.log(tamagochi.show());
tamagochi.brincar();
tamagochi.brincar();
tamagochi.brincar();
console.log(tamagochi.show());


