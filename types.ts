// Em Ts só existe true ou false (escrito) para boolean
let isOpen: boolean
isOpen = true || false


//string ('text', "text", `text`)
let message: string
message = 'text 01'
message = "text 02"
message = `text ${isOpen}` // dentro de `` é considerado tudo como string


//number (int, flot e hexadecimal)
let total: number
total : 20;
total : 20.5;
total : 0xff0;


//Tem que tipar que é array e de que tipo

//Array (type[]) 
let itemsNumber : number[]
itemsNumber = [1,2,3]

let itemsString : string[]
itemsString = ['text', 'text']

//Array (Array<type>) 
let itemsStrings: Array<string>
itemsStrings = ['text', 'text']

let itemsNumbers: Array<number>
itemsNumbers = [1,2,3]


//tuple
//Aqui ja sabemos que é um array e de que tipo ele é 
let values: [number, string]
values: [1, 'text']


//enum
//enumerator para criação de chave-valor
 enum Colors {
     white = '#fff',
     black = '#212121',
 }

 //any (Qualquer coisa) - Não recomendavel usar
 let coisa
 coisa = [1]


 //void ( retorna vazio)
function logger(): void {
    console.log('foo');
}


//null | undefined
type log = string | undefined


//never - nunca retornará
function error(): never {
    throw new Error('error');
}


//Object - Qualquer coisa
//É tudo aquilo que não é string, number, boolean, Array
let camiseta : object

camiseta = {
    tamanho: 'M',
    cor: 'Red',
    qtde: '20'
}