class ContaBanco{
    nomeConta: string;
    saldoAtual: number;
    senha: string;
    username: string;
    
    constructor(nomeConta:string, saldoAtual:number, senha:string, username:string){
        this.nomeConta = nomeConta;
        this.saldoAtual = saldoAtual;
        this.senha = senha;
        this.username = username;
    }
    public Depositar(valorDeposito:number, senha:string, username:string){
        if(senha==this.senha && username==this.username){
            this.saldoAtual += valorDeposito;
            console.log("Depósito efetuado com sucesso!");
        }
        else{
            console.log("Depósito não efetuado com sucesso!");
        }
    }
    public sacar(valorSaque:number, senha:string, username:string){
        if(senha==this.senha && username==this.username){
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
    public alterarNome(senhaCompara: string, nomeNovo: string, username:string){
        if(this.senha == senhaCompara && username==this.username){
            this.nomeConta = nomeNovo;
            console.log("Nome alterado.");
        } 
        else{
            console.log("senha incorreta!");
        }
    }
}
class Banco{
    contasDoBanco: ContaBanco[];
    constructor(){
        this.contasDoBanco = [];
    }
    public criarConta(nomeConta:string, senhaConta: string, saldoConta:number, username:string){
        
    }
        
}
let banco1 = new Banco();
banco1.criarConta("Ariadna", "aribr", 100, "ari");
banco1.criarConta("Ariadna", "aribr", 100, "ari");
    

    

