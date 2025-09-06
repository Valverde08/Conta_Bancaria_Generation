import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from "./src/controller/ContaController";


export function main() {

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino, numeroOrigem: number;

    let titular: string;

    const tiposContas = ["Conta Corrente","Conta Poupança"];
    
   

   
    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                // console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                
                // console.log("Digite o numero da agência:");                
                // agencia =readlinesync.questionInt("")

                // console.log("Digite o nome dtitular da conta:");                
                // titular =readlinesync.question("")

                // console.log("Digite o tipo da conta:");                
                // tipo =readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                // console.log("Digite o saldo da sua conta:");                
                // saldo =readlinesync.questionFloat("")

                
                let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
                contas.cadastrar(cc1);

                let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
                contas.cadastrar(cc2);

                let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
                contas.cadastrar(cp1);

                let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
                contas.cadastrar(cp2);

                                

                // switch (tipo) {
                //     case 1:
                //         console.log("Digite o limite da conta  (R$):");
                //         limite = readlinesync.questionFloat("")
                //         contas.cadastrar(
                //             new ContaCorrente(
                //                 contas.gerarNumero(), agencia, tipo, titular, saldo, limite
                //             )
                //         )

                //         keyPress();
                        
                //         break;
                
                //     case 2 :
                //         console.log("Digite a data do seu aniversário");
                //         aniversario = readlinesync.questionFloat("")
                //         contas.cadastrar(
                //             new ContaPoupanca(
                //                 contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario
                //             )
                //         )
                //     break;
                // }

                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero)

                if(conta != null){
                    console.log("Digite o número da agencia:");
                    agencia = readlinesync.questionInt("");
                    

                    console.log("Digite o nome do titular da conta:");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$):");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da conta  (R$):");
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(
                                    numero, agencia, tipo, titular, saldo, limite
                                )
                            )

                            keyPress();
                            
                            break;
                    
                        case 2 :
                            console.log("Digite a data do seu aniversário");
                            aniversario = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaPoupanca(
                                    contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario
                                )
                            )
                        break;
                    }

                } else {
                    console.log(colors.fg.red, "\n A conta número " +  numero 
                    + "não foi localizada", colors.reset);
                }
                

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);




                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt("");
                
                console.log("Digite o valor do saque:");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor),



                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da conta:");
                numero = readlinesync.questionInt("");
                
                console.log("Digite o valor do deposito:");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor),

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número  da conta  de origem:");
                numero = readlinesync.questionInt("");

                console.log("Digite o número  da conta  de destino:");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor de deposito:");
                valor = readlinesync.questionFloat("");
                
                contas.transferir(numero, numeroDestino, valor)

                
                

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();