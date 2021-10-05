import {Contato} from './Contato.ts';
import {Fone} from './Fone.ts';
class Agenda{
    private contatos;
    constructor(){
        this.contatos = new Map<string, Contato>();
    }
    public getContatos(){
        return this.contatos;
    }

    public addContato(contato:Contato){
        if(this.contatos.has(contato.getNome())){
            const acharContato = this.contatos.get(contato.getNome());
            const telefones = contato.getFones();
            telefones.forEach((element) => {
                acharContato?.addFone(element);
            });
        }
        this.contatos.set(contato.getNome(), contato);
    }
    public rmvContato(chave: string){
        this.contatos.delete(chave);
    }
    public search(pattern: string){
        let arrayFones = [];
        for(const contatoAgenda of this.contatos.values()){
            arrayFones.push(contatoAgenda);
        }
        arrayFones.sort();
        const  arrayFilter = arrayFones.filter((element) => {
            if(element.getNome().indexOf(pattern) != -1){
                return element;
            }else if(element.getFones().lastIndexOf){

            }
        });
    }
    public toString(): string {
        let arrayFones: Contato[];
        arrayFones = [];
        for(const contatoAgenda of this.contatos.values()){
            arrayFones.push(contatoAgenda);
        }
        arrayFones.sort();
        let retorno = "";
        arrayFones.forEach((element) => {
            retorno += element.toString() + "\n";
        });

        return retorno;
    }
    
}
const contato1 = new Contato("ari");
const contato2 = new Contato("bruno");
const fone1 = new Fone("tim", "(9)99999999");
const fone2 = new Fone("oi", "(9)99999999");
contato1.addFone(fone1);
contato2.addFone(fone2);
const agenda1 = new Agenda();
agenda1.getContatos().set(contato2.getNome(), contato2);
agenda1.addContato(contato1);
agenda1.addContato(contato1);
console.log(agenda1.toString());
agenda1.rmvContato("bruno");
console.log(agenda1.toString());

// console.log(agenda1.getContatos().get("ari")?.getFones());
// console.log(agenda1.getContatos().get("bruno")?.getFones());