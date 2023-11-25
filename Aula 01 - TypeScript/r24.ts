interface Carro {
  marca: string;
  modelo: string;
  ano: number;
}

function filtrarCarrosPorAno(carros: Carro[], anoDesejado: number): Carro[] {
  const carrosFiltrados = carros.filter((carro) => carro.ano > anoDesejado);
  return carrosFiltrados;
}

const carros: Carro[] = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2018 },
  { marca: "Ford", modelo: "Focus", ano: 2022 },
  { marca: "Chevrolet", modelo: "Cruze", ano: 2019 },
];

const anoDesejado: number = 2019;
const carrosFiltrados: Carro[] = filtrarCarrosPorAno(carros, anoDesejado);
console.log("Carros fabricados após", anoDesejado, ":", carrosFiltrados);
