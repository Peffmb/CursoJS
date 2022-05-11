// tipo de dados
// booleanos

// conversão implícita
const numero = 456;
// const numeroString = ("456a"); // tipo string

const numeroString = number("456a"); // converte para numero



//number()
//string()
console.log(numero === numeroString) // false não é igual
console.log(numero + numeroString) // soma porém não os valores
console.log(numero == numeroString) // true porque converte tipo string para number



// conversão explícita