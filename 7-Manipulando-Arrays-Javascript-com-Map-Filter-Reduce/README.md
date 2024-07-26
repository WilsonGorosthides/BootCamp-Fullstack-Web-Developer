# Map, Filter e Reduce

## Método map
O método map é uma função de array que cria um novo array com os resultados de chamar uma função fornecida em cada elemento do array original.

## Como funciona?
A função passada para o map é chamada de `"função callback"` e é invocada uma vez para cada elemento do array, na ordem, e cria um novo array a partir dos resultados.
* Cria um novo array
* Não modifica o array
original
* Realiza as operações em
ordem

## Sintaxe

 ```
 const newArray = array.map(callback(element, index, array) {
  // corpo da função callback
});
```

* callback: A função que será chamada para cada elemento do array.
    1. element: O elemento atual sendo processado no array.
    2. index (opcional): O índice do elemento atual.
    3. array (opcional): O array original.

<strong>OBS: </strong> thisArgs(opcional): valor de 'this' dentro da função de callback

## Exemplos
### 1. Dobrar os valores de um array
```
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### 2. Transformar um array de strings para um array de objetos
```
const names = ['Alice', 'Bob', 'Charlie'];
const users = names.map(name => ({ name: name }));
console.log(users); 
// [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
```
### 3. Adicionar uma chave a cada objeto em um array
```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const usersWithId = users.map((user, index) => {
  return { ...user, id: index };
});

console.log(usersWithId); 
// [
//   { name: 'Alice', age: 25, id: 0 },
//   { name: 'Bob', age: 30, id: 1 },
//   { name: 'Charlie', age: 35, id: 2 }
// ]
```

O método map é útil para transformar dados de uma forma consistente e é uma ferramenta poderosa para trabalhar com arrays em JavaScript.

## Método filter
O método filter é uma função de array que cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

## Como funciona?
A função passada para o filter é chamada de `"função callback"` e é invocada uma vez para cada elemento do array. Se a função callback retornar true, o elemento atual é incluído no novo array. Caso contrário, é excluído.

## Sintaxe
```
const newArray = array.filter(callback(element, index, array) {
  // corpo da função callback
});
```
* callback: A função que será chamada para cada elemento do array.
    1. element: O elemento atual sendo processado no array.
    2. index (opcional): O índice do elemento atual.
    3. array (opcional): O array original.
<strong>OBS: </strong> thisArgs(opcional): valor de 'this' dentro da função de callback

## Exemplos
### 1. Filtrar números maiores que 10
``` 
const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(number => number > 10);
console.log(filtered); // [12, 130, 44]
```
### 2. Filtrar palavras com mais de 6 caracteres
```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const longWords = words.filter(word => word.length > 6);
console.log(longWords); // ['exuberant', 'destruction', 'present']
```
### 3. Filtrar objetos em um array por uma propriedade específica
```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const usersOver30 = users.filter(user => user.age > 30);
console.log(usersOver30); 
// [{ name: 'Charlie', age: 35 }]
```
### 4. Filtrar valores que incluem 'maça' de um array
```
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((frutas) =>frutas.includes('maçã))
// retorno: ['maçã fuji, maçã verde];
```
O método filter é útil para criar subarrays com base em condições específicas e é uma ferramenta poderosa para manipulação de arrays em JavaScript.



## Método reduce
O método reduce é uma função de array que aplica uma função "acumuladora" contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.

## Como funciona?
A função passada para o reduce é chamada de `"função callback"` e é invocada uma vez para cada elemento do array. O valor retornado da função callback é atribuído ao acumulador, e o próximo elemento do array é processado com esse valor acumulado.

## Sintaxe
```
const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```
* callback: A função que será chamada para cada elemento do array.
    1. accumulator: O valor acumulado previamente retornado na última invocação do callback.
    2. currentValue: O elemento atual sendo processado no array.
    3. index (opcional): O índice do elemento atual.
    4. array (opcional): O array original.
* initialValue: Um valor inicial opcional para o acumulador.

## Exemplos
### 1. Somar todos os valores de um array
```
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
```
### 2. Encontrar o maior valor em um array
```
const numbers = [1, 2, 3, 4];
const max = numbers.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);
console.log(max); // 4
```
### 3. Contar ocorrências de elementos em um array
```
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const count = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count); 
// { apple: 2, banana: 3, orange: 2 }`
```

O método reduce é uma ferramenta poderosa para transformar e agregar dados de arrays em JavaScript, permitindo a criação de resultados complexos a partir de arrays simples.





## Atividades

### Map
- Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

### Filter
- Filtre e retorne todos os números pares de um array.

### Reduce
1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.