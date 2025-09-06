import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    

    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;    

    

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            buscaConta.visualizar();
        } else {
            console.log(colors.fg.red, "\n  A conta número: " + numero 
                + "não foi encontrada."
             );
            
        }
    }
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();            
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.blue, "\nA Conta número :" + conta.numero +
            "foi criada com sucesso"  + colors.reset
        );
        
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if(buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log(colors.fg.green, "\n A conta número " +  conta.numero 
            + "foi atualizada com sucesso!!", colors.reset            );
            
        } else {
            console.log(colors.fg.red, "\n A conta número " +  conta.numero 
            + "não foi localizada", colors.reset            );
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if(buscaConta != null){
           this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
           console.log(colors.fg.green, "\n A conta número " +  numero 
            + "foi apagada", colors.reset            );

        } else {
            console.log(colors.fg.red, "\n A conta número " +  numero 
            + "não foi localizada", colors.reset            );
        }
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if(conta != null){
            
            if(conta.sacar(valor) == true){
                console.log(colors.fg.green, "\n O saque na Conta Numero :" + numero +
                    "foi efetuado com sucesso", colors.reset
                );
                
            }
            
        } else {
            console.log(colors.fg.red, "\n A conta numero :" + numero +
                    "não foi encontrada", colors.reset
                );
        }
    }
    depositar(numero: number, valor: number): void {
       let conta = this.buscarNoArray(numero)

       if(conta != null){
        conta.depositar(valor);
        console.log(colors.fg.green, "\n O deposito na Conta Numero :" + numero +
                    "foi efetuado com sucesso", colors.reset);
        
       }else{
            console.log(colors.fg.red, "\n O deposito na Conta Numero :" + numero +
                    "foi efetuado com sucesso", colors.reset);
       }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
       let contaOrigem = this.buscarNoArray(numeroOrigem)
       let contaDestino = this.buscarNoArray(numeroDestino)

       if(contaOrigem != null  && contaDestino){
        if(contaOrigem.sacar(valor) == true){
            contaDestino.depositar(valor)
            console.log(colors.fg.green,"\n A trasnferencia da conta"+ contaOrigem +
                " para a conta numero " + contaDestino + "foi efetuado com sucesso", colors.reset
            );
            
        } else {
            console.log(colors.fg.green,"\n A conta numero"+ contaOrigem +
                " e/ou conta numero " + contaDestino + "não foram encontrados.", colors.reset
            );
        }
       }
    }

    // Métodos auxiliares

    // Gerar Número da Conta

    public gerarNumero(): number {
        return ++ this.numero;
    }
    

    //checa se a conta existe

    public buscarNoArray(numero: number): Conta | null {

        for (const conta of this.listaContas) {
            if(conta.numero  === numero )
                return conta;
        }

        return null
    }
}