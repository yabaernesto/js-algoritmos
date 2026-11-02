// Notação O(n) linear time / tempo de execução linear
function pesquisaSimples(lista, item) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === item) {
      return i;
    }
  }
  return null;
}

const numeros = [4, 13 - 16]; console.log(pesquisaSimples(numeros, 30));
