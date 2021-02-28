//Type Aliases com Intersection 

//Cenario : Jogo Online - RPG

//AccountInfo - Dados pessoais
//CharInfo - Dados dos Personagens 
//PlayerInfo - Conjunto de dados do Account e Char

type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 1940,
    name: 'Lucas',
    // email: 'lucas@email.com'
}


type CharInfo = {
    nickname: string,
    level: number,
}

const char: CharInfo = {
    nickname: 'licas0019',
    level: 100
}

//Intersection
type PlayerInfo = AccountInfo & CharInfo 

const player: PlayerInfo = {
    id: 189,
    name: 'Duda',
    nickname: 'Dudinha',
    level: 100
}




// Obs
// | = ou
// & = e