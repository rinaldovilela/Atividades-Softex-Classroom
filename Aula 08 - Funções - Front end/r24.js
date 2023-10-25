document.getElementById("questao24").addEventListener("click", function() {
    console.log("Script 24 executado.");
    function filtrarCarrosPorAno(carros, anoDesejado) {
        const carrosFiltrados = carros.filter(carro => carro.ano > anoDesejado);
        return carrosFiltrados;
    }
    
    const carros = [
        { marca: "Toyota", modelo: "Corolla", ano: 2020 },
        { marca: "Honda", modelo: "Civic", ano: 2018 },
        { marca: "Ford", modelo: "Focus", ano: 2022 },
        { marca: "Chevrolet", modelo: "Cruze", ano: 2019 }
    ];
    
    const anoDesejado = 2019;
    const carrosFiltrados = filtrarCarrosPorAno(carros, anoDesejado);
    console.log("Carros fabricados após", anoDesejado, ":", carrosFiltrados);
    

});