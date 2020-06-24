/*...solution[8]...*/

/*...solution[9]...*/

function promedio(listaDeNumeros) {
	return sumatoria(listaDeNumeros) / longitud(listaDeNumeros);
}

function sumatoria(listaDeNumeros) {
  let sumatoria = 0;
  for (let numero of listaDeNumeros) {
    sumatoria = sumatoria + numero;
  }
  return sumatoria;
}

function agregar(lista, elemento) {
  return lista.push(elemento);
}

function longitud(lista) {
  return lista.length;
}