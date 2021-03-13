//Classes não são obrigatórias, podemos trabalhar com programação funcional
//mas é interessante ver o que elas podem fazer em ts

class UserAccount {
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

//Classe que extende da classe UserAccount
class user extends UserAccount {
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
const lucas = new UserAccount("Lucas", 21)

console.log(lucas)
console.log(lucas.age);
lucas.logDetails()


const duda = new user('Eduarda',20,'Duda', 100)
console.log(duda)
console.log(duda.name);
duda.logDetails()
