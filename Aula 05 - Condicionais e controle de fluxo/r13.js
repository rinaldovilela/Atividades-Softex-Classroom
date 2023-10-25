document.getElementById("questao13").addEventListener("click", function() {
    console.log("Script executado");
    
    let diaDaSemana = prompt('Digite o dia da semana por extenso(EX. Terça-feira):');

if(diaDaSemana.toLowerCase() === 'sábado' || diaDaSemana.toLowerCase() === 'domingo') {
    alert(`${diaDaSemana} é um dia de fim de semana.`);
} else if (
    diaDaSemana.toLowerCase() === 'segunda-feira' ||
    diaDaSemana.toLowerCase() === 'terça-feira' ||
    diaDaSemana.toLowerCase() === 'quarta-feira' ||
    diaDaSemana.toLowerCase() === 'quinta-feira' ||
    diaDaSemana.toLowerCase() === 'sexta-feira'
) {
    alert(`${diaDaSemana} é um dia útil.`);
} else {
    alert(`Dia da semana inválido.`);
}

});