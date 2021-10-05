function criar_conta (nome_titular:string, saldo:number):any{
    return{
        "nome_titular": nome_titular,
        "saldo" : saldo
    }
}
function sacar (conta:any, valor: number):boolean{
   
    if(conta.saldo>=conta){
        console.log("Saque permitido");
        conta.saldo -= valor;
    return true;
        
    }
    else{
        console.log("saldo insuficiente");
        return false;
    }
}
let ari = criar_conta("Ariadna", 2000);
let bruno = criar_conta("Bruno", 1500);

sacar(bruno, 50);
sacar(ari, 50);

