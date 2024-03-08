// 9) Vamos criar um programa em JavaScript para somar notas!

// Classe SomadorDeNotas:

// Crie uma classe chamada SomadorDeNotas.
// Adicione um atributo total inicializado com 0 para armazenar a soma das notas.
// Método adicionarNota:

// Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
// Este método deve receber um parâmetro nota e somá-lo ao atributo total.
// Criando o Somador e Adicionando Notas:

// Crie um objeto da classe SomadorDeNotas, chamado somador.
// Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.
// Chamando o Método para Ver o Total:

// Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.
// Dica: Utilize console.log() para exibir as informações!
    
// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    constructor() {
        this.total = 0; // Inicializa o total como 0
    }

    // Método para adicionar uma nota ao total
    adicionarNota(nota) {
        this.total += nota;
    }

    // Método para exibir o total das notas
    verTotal() {
        console.log(`O total das notas é: ${this.total}`);
    }
}

// Criando um objeto da classe SomadorDeNotas
let somador = new SomadorDeNotas();

// Adicionando algumas notas ao somador
somador.adicionarNota(8);
somador.adicionarNota(7.5);
somador.adicionarNota(9.2);

// Chamando o método verTotal() para ver o total das notas
somador.verTotal();