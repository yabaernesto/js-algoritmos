// TODO: Notação O(log n)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let numeroBuscado = 4

let index = buscaBinaria(numeros, numeroBuscado)

if (index != -1) {
  console.log(`Numero encontrado no index ${index}`)
} else {
  console.log('Numero nao encontrado')
}

function buscaBinaria(array, valorBuscado) {
  // TODO:
  let inicio = 0
  let fim = array.length - 1

  while (inicio <= fim) {
    let meio = Math.floor(inicio + (fim - inicio) / 2)

    if (array[meio] === valorBuscado) {
      return meio
    }

    if (valorBuscado > array[meio]) {
      inicio = meio + 1
    } else {
      fim = meio - 1
    }
  }

  return -1
}

/**
 * Sempre que um algoritmo reduz pela metade a quantidade de dados que precisa processar a cada passo do loop,
 * ele está operando em tempo O(log n)
 */
