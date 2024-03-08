// 8) Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão. Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

// Classe Animal:

// Crie uma classe chamada Animal.
// Adicione dois atributos: nome e idade.
// Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.
// Classe Gato (Herda de Animal):

// Crie uma classe chamada Gato que herda da classe Animal.
// Adicione um atributo extra cor específico para gatos.
// Adicione um método miar() que exiba no console o som que um gato faz.
// Criando Animais:

// Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
// Para o gato, também defina a cor.
// Chamando os Métodos:

// Para cada animal, chame o método descrever() para ver a descrição no console.
// Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).
// Dica: Utilize console.log() para exibir as informações!
class Animal { 
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
}
descrever(){
    return ` Esse é meu cachorro caramelo ${this.nome} com ${this.idade} anos`}
}
class Gato extends Animal {
    constructor(nome, idade, cor){
        super(nome,idade)
        this.cor = cor; 
    }
    miar() {
        console.log(`${this.nome}  miaaau`);
    }
    descrever(){
        return `Esse é meu ${this.nome} com ${this.idade} e ${this.cor}`
    }
}
const cachorro = new Animal("beto", 4);
const gato = new Gato("Gato", 3, "Preto");

console.log(cachorro.descrever());
console.log(gato.descrever());
gato.miar();