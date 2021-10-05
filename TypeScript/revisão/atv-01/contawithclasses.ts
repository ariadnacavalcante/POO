// atributos e métodos
// nome e tipo
class Conta{
    nome_titular: string;
    saldo: number;  
 
}
let Conta = new Conta();
Conta.saldo = 30;
console.log(Conta);
let conta1 = new Conta();
Conta.saldo = 50;
console.log(conta1);


function depositar(conta, valor:number):void{
    conta.saldo += valor;
}
function sacar(conta:any, valor:number):boolean{
    if(valor<=conta.saldo){
        conta.saldo -= valor;
        console.log("saque efetuado com sucesso!", conta2.nome_titular)
        return true;
    }
    else{
        console.log("saldo insuficiente");
            return false;
        }
    }

    


    let conta = {
        "nome_titular": "Victor",
        "saldo": 0,

}
    let conta2 = {
    "nome_titular": "Ari",
    "saldo": "1000",
}

sacar(conta2, 100);
console.log(conta2.saldo, conta2.nome_titular);
depositar(conta, 10);
console.log(conta.saldo)
sacar(conta, 5);
console.log(conta.saldo);
sacar(conta, 10);
console.log(conta.saldo);
console.log(conta_nova);