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
// metódo set
const mapa = new Map();
const fone = new Fone("tim", "(88)88687564");
mapa.set(fone.id, fone);
console.log(mapa);
const fone2 = new Fone("oi", "(88)88687564");
mapa.set(fone2.id, fone2);
console.log(mapa)

// método get
const fone3 = mapa.get("tim");
console.log(fone3);

const fone4 = mapa.get("oi");
console.log(fone4);

// método has
console.log(mapa.has("tim"));
console.log(mapa.has("claro"));

// número de chaves (retorna o número de elementos)
const chave = "vivo";
if(mapa.has(chave)==true){
    const key = mapa.get(chave);
    console.log(key);
}

// atributo size
console.log(mapa.size);

//método delete
mapa.delete('tim');
console.log(mapa);

//iteração sobre mapa
console.log(mapa.keys())
for(const ch of mapa.keys()){
console.log(ch, mapa.get(ch))
}
// iteração somente sobre valores
console.log(mapa.values());
for(const valores of mapa.values()){
    console.log(valores)    
}

//caso a chave não exista retorna undefined
// não posso acessar (chamar) se for undefined//
const _mapaFone: Map <string, Fone> = new Map<string, Fone>();
const fones5 = _mapaFone.get("casa");
if(fones5!= undefined){
    fones5.id ="trabalho";
}
//enviando novos valores 
_mapaFone.set('casa', new Fone('casa', '(88)98181828281'));
console.log(fones5);
console.log(fones5?.getId())
 

