//Classes não são obrigatórias, podemos trabalhar com programação funcional
//mas é interessante ver o que elas podem fazer em ts

class userAccount {
    name: string;
    age: number

    constructor(
        name:string, 
        age: number) {
            
        this.name = name;
        this.age = age;
    }

    //Método
    logDetails() : void {
        console.log(`The player ${this.name} is ${this.age} years old.`);       
    }
}

//Classe que extende da classe userAccount
class userAdmin extends userAccount {
    nickname: string;
    level: number;

    constructor(
        name:string, 
        age: number, 
        nickname: string, 
        level: number ) {

        //super() pega as propriedades das classe que está extendendo
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }
}

//Criando uma nova classe
const userlucas = new userAccount("Lucas", 21)

console.log(userlucas)
console.log(userlucas.age);
userlucas.logDetails()


const userduda = new userAdmin('Eduarda',20,'Duda', 100)
console.log(userduda)
console.log(userduda.name);
userduda.logDetails()


//Modifiers (Public, Private, Protected e Readonly)