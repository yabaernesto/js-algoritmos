function pesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const chute = lista[meio];
    if (chute === item) {
      return meio; // Item encontrado! 
    }

    if (chute > item) {
      alto = meio - 1; // O chute foi muito alto 
    } else {
      baixo = meio + 1; // O chute foi muito baixo 
    }
  }
  return null; // Item não encontrado 
}

const minhaLista = [3, 4, 5, 6, 7];

console.log(pesquisaBinaria(minhaLista, 1));
console.log(pesquisaBinaria(minhaLista, 4));
console.log(pesquisaBinaria(minhaLista, 5));
