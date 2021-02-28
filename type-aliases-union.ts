//Tipos complexos
function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, 'sapato') 
logDetails('123', 'sapato') 
//Nota de Aula
// o Union ( | ) possibilita aceitar outra propriedade 


type Uid = number | string | undefined | null 

function logInfo(uid: Uid, user: Uid) {
    console.log(`An user with ${uid} has a name as${user}.`);
}

logInfo(123, 'Lucas')
logInfo('123', 'Lucas')

// Nota de Aula
//Type aliases - vai unir se igual as propriedades



type Plataform = 'Windows' | 'Linux' | 'Mac OS' | 'IOS' 

function renderPlataform(plataform: Plataform) {
    return plataform
}

// renderPlataform('Android') // Dá erro pois android não está tipado
renderPlataform('Linux')

