function filtrarStringsLongas(arrayDeStrings: string[]): string[] {
  const stringsFiltradas = arrayDeStrings.filter((str) => str.length > 5);
  return stringsFiltradas;
}

const arrayOriginal: string[] = ["banana", "maçã", "laranja", "abacaxi", "uva"];
const arrayFiltrado: string[] = filtrarStringsLongas(arrayOriginal);
console.log("Array filtrado:", arrayFiltrado);
