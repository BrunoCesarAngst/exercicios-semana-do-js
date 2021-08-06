/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5];

const getOddNumber = (number) => number % 2 === 1

const notAnEvenNumber = randomNumbers.filter(getOddNumber)

// {
//   if (number % 2 !== 0) {
//     return number;
//   }
// });

console.log(notAnEvenNumber);

/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];

const countNumbersLessThan501 = (acc, number) =>
  number < 501 ? ++acc : acc
// {
  // if (number < 501) {
  //   acc ++
  // }
  // return acc
// }

const isLessOf501B = crazyNumbers.reduce(countNumbersLessThan501, 0)

console.log(isLessOf501B);

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3];

const numberInSquare = numbers.map((number) => number * number);

console.log(numberInSquare);

/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: "Bastardos inglórios", release: 2009 },
  { name: "Pulp Fiction", release: 1994 },
  { name: "Kill Bill: Volume 2", release: 2004 },
  { name: "Quatro Quartos", release: 1995 },
  { name: "Sin City", release: 2005 },
  { name: "Era uma Vez em... Hollywood", release: 2019 },
  { name: "Django Livre", release: 2012 },
  { name: "Cães de Aluguel", release: 1992 },
  { name: "À Prova de Morte", release: 2007 },
  { name: "Kill Bill: Volume 1", release: 2003 },
];

const movesOfTheYear2000 = tarantinoMovies.filter(({ release, name}) => {
  if (release < 2000) {
    return name;
  }
});

console.log(movesOfTheYear2000);

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: "Breaking Bad", releaseYear: 2008 },
  { name: "Mr. Robot", releaseYear: 2015 },
  { name: "True Detective", releaseYear: 2014 },
  { name: "Hannibal", releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: "House M.D.", releaseYear: 2004 },
  { name: "Watchmen", releaseYear: 2019 },
];

const namesTvShows = tvShows.map(({ name }) => name);

console.log(namesTvShows);

/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: "Dark Souls III", price: 95.03 },
  { name: "Shadow of the Tomb Raider", price: 101.19 },
  { name: "Sekiro: Shadows Die Twice", price: 179.99 },
  { name: "Resident Evil 2", price: 119.9 },
  { name: "Death Stranding", price: 149.99 },
];

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

const newCart = cart.reduce((acc, { name }) =>
  `${acc} - Name: ${name}\n`, "");

console.log(newCart);


// reduce

const phaseScores = [
  { name: "Vinicius Costa", score: 337 },
  { name: "Roger Melo", score: 43 },
  { name: "Alfredo Braga", score: 234 },
  { name: "Pedro H. Silva", score: 261 },
  { name: "Ana Paula Rocha", score: 491 },
  { name: "Vinicius Costa", score: 167 },
  { name: "Roger Melo", score: 137 },
  { name: "Alfredo Braga", score: 135 },
  { name: "Ana Paula Rocha", score: 359 },
  { name: "Pedro H. Silva", score: 133 },
];

const rogerScore = phaseScores.reduce((acc, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    acc += phaseScore.score
  }

  return acc
}, 0)

console.log(rogerScore);
console.log(phaseScores);

const test = [1, 2, 3];

const testOftest = test.reduce((acc, test) => acc + test, -1)

console.log(testOftest)


// filter

const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
console.log(users);

// map

const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const saleProducts = products.map((product) => {
  if (product.price >= 30) {
    // bad way
    // product.price = product.price / 2
    // return product

    // good way
    return {
      name: product.name,
      price: product.price / 2,
    };
  }

  return product;
});

console.log(saleProducts);
console.log(products);

