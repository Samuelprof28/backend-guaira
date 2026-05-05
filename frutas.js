//Lista ordenada de valores

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
// Índice:         0        1       2       3

//console.log(frutas);
console.log(frutas[3]);

frutas[0] = "Abacaxi";
console.log(frutas);

//NÃO COPIAR - Alterar o nome dos elementos 2 e 3 [colchetes]
frutas[2] = "Cacau";
frutas[3] = "Damasco";
console.log(frutas);
console.log(frutas.length) // Quantidade de elementos
frutas.push("Figo"); //Adiciona um elemento sempre no final

const removido = frutas.pop(); //Remove o último elemento
console.log(frutas);
console.log(removido);
frutas.shift(); //Remove o primeiro elemento 
console.log(frutas);

console.log(frutas.indexOf("Cacau")); // Essa fruta está no meu array
console.log(frutas.indexOf("Pêra")); //Essa fruta não está noo meu array