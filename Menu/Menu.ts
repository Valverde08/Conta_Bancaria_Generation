import { Conta } from "../src/model/Conta";

import leia from 'readline-sync'


let contas : Array<Conta> = new Array<Conta>();


let aux = true




do {
    console.log("**************************************************");
    console.log();
    console.log("            BANCO DO BRAZIL COM Z                 ");
    console.log();
    console.log("**************************************************");
    console.log();
    console.log("  1 - Criar Conta");
    console.log("  2 - Listar todas as Contas");
    console.log("  3 - Buscar Conta por Numero");
    console.log("  4 - Atualizar Dados da Conta");
    console.log("  5 - Apagar Conta");
    console.log("  6 - Sacar");
    console.log("  7 - Depositar");
    console.log("  8 - Transferir valores entre Contas");
    console.log("  9 - Sair");
    console.log();
    console.log("**************************************************");
    console.log();
    console.log();

    let opcao : number = leia.questionInt("Entre com a opção desejada:") ;

    switch (true) {
        case opcao == 1:

            

            

            let tipo : number = leia.questionInt("Qual o tipo de conta 1 - Corrente || 2 - Poupança") ;

            let nome : string = leia.question("Qual o nome do titula ?") ;

            let valor : number = leia.questionInt("Qual valor será depositado ?") ;

            contas.push(new Conta(
                2546,
                89653214,
                tipo,
                nome,
                valor,

            ))

            
            
            break;


        case opcao == 2:
            console.log('====================================');
            console.log("Contas cadastradas");
            console.log('====================================');
            contas.map((item)=>{
                console.log('====================================');
                console.log(item.titular);
                console.log('====================================');
            })

            break;

        case opcao == 3:
            let numerConta : number = leia.questionInt("Qual o número da conta do  titular ?") ;
            contas.map((item)=>{
                if(item.numero == numerConta)
                    return console.log(`O número de conta ${item.numero} é do cliente ${item.titular}. `);
                else 
                    return    console.log(`O número de conta ${item.numero} não tem nenhum cliente associado a ela.`);
            })
            break;
        
        case opcao == 9:
            console.log('====================================');
            console.log("Programa Finalizado!");
            console.log('====================================');
            aux = false

            break;
        default:
            break;
    }
} while (aux);    