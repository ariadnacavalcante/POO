class Fone{
    id: string;
    numero: string;

    constructor(id: string, numero:string){
        this.id = id;
        this.numero = numero;

    }
    public getId():string{
        return this.id;
    }
    public setId():string{
        return this.id;
    }
    public getNumero(): string{
        return this.numero;
    }
    public setNumero(): string{
        return this.numero;
    }
    public toString(){
        return this.getId()+':'+this.getNumero();
    }
}
export {Fone};