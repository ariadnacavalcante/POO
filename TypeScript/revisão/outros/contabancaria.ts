//conta, atributos: nome da pessoa, saldo atual, senha; 
//metodos: depositar, sacar, trocar senha;
//regras de negócio: depositar se informar senha correta, se tiver saldo suficiente; para depositar senha correta; pra alterar senha informar senha
//antiga correta, pra alterar nome - senha correta
class Conta{
    nomeConta: string;
    saldoAtual: number;
    senha: string;
    
    constructor(nomeConta:string, saldoAtual:number, senha:string){
        this.nomeConta = nomeConta;
        this.saldoAtual = saldoAtual;
        this.senha = senha;
    }
    public Depositar(valorDeposito:number, senha:string){
        if(senha==this.senha){
            this.saldoAtual += valorDeposito;
            console.log("Depósito efetuado com sucesso!");
        }
        else{
            console.log("Depósito não efetuado com sucesso!");
        }
    }
    public sacar(valorSaque:number, senha:string){
        if(senha==this.senha){
            if(this.saldoAtual >= valorSaque){
                this.saldoAtual-= valorSaque;
                console.log("Saque efetuado com sucesso!");
            }
            else{
            console.log("Saque não efetuado");
        }
        }
    }
    public trocarSenha(senhaantiga:string, senhaNova:string){
        if(this.senha == senhaantiga){
            this.senha = senhaNova;
            console.log("Senha alterada com sucesso!");
        }
        else{
            console.log("Senha incorreta!");
        }
    }
    public alterarNome(senhaCompara: string, nomeNovo: string){
        if(this.senha == senhaCompara){
            this.nomeConta = nomeNovo;
            console.log("Nome alterado.");
        } 
        else{
            console.log("senha incorreta!");
        }
    }
}
    let conta1  = new Conta ("Ariadna", 100, "ariarc");
    conta1.trocarSenha("arirc", "abcdef");
    console.log(conta1);
    conta1.alterarNome("ariarc", "Bruno");
    console.log(conta1);
    

    

