// 10) Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

// Funcionário:

// atributo: Nome
// atributo: Idade
// atributo: Salário base
// método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.
// Professor (herança de Funcionário):
// atributo: Disciplina
// atributo: Horas de aula por semana
// método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.
// Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
// Dois objetos do tipo Professor com informações fictícias.
// Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.
// Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

// Definição da classe Funcionário
class Funcionario {
    constructor(nome, idade, salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    // Método para calcular o salário do funcionário
    calcularSalario() {
        // Este método será implementado nas subclasses
    }
}

// Definição da classe Professor, que herda de Funcionário
class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAulaPorSemana) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasAulaPorSemana = horasAulaPorSemana;
    }

    // Método para calcular o salário do professor
    calcularSalario() {
        // O salário do professor é calculado multiplicando o número de horas de aula pelo valor da hora/aula
        let valorHoraAula = 50; // Valor fictício da hora/aula
        let salarioProfessor = this.horasAulaPorSemana * valorHoraAula;
        console.log(`O salário do professor ${this.nome} é: R$ ${salarioProfessor}`);
    }
}

// Criando dois objetos do tipo Professor com informações fictícias
let professor1 = new Professor("João", 40, 3000, "Matemática", 20);
let professor2 = new Professor("Maria", 35, 3500, "História", 18);

// Chamando o método calcularSalario() para cada professor e mostrando o salário calculado no console
professor1.calcularSalario();
professor2.calcularSalario();