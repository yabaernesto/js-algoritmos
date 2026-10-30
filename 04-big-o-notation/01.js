// TODO: Notação O(1) constant time (tempo constante): busca um item dentro do array fazendo acesso direito pelo indice

let lista = [10, 20, 30, 40, 50]

let resultado = buscarIndex(lista, 3)

console.log(resultado)


function buscarIndex(array, posicao) {
  return array[posicao]
}

/**
 * Acesso Direto na Memória: Ao executar array[posicao], 
 * o computador não precisa percorrer o array elemento por elemento (o que seria uma busca linear $O(n)$). 
 * Ele calcula o endereço de memória onde o item está guardado e faz a leitura em uma única operação.
 */

/**
 * 1. **Independente do Tamanho da Entrada**: 
 * Não importa se a `lista` possui 5 elementos ou 50 milhões de elementos: a função levará exatamente a mesma quantidade de etapas e 
 * tempo para retornar `array[3]`.
 */