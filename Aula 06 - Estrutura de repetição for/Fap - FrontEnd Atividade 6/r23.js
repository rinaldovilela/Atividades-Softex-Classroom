let somaAlturas = 0;

for (let i = 1; i <= 5; i++) {
    const altura = parseFloat(prompt(`Digite a altura da pessoa ${i} (em metros):`));
    somaAlturas += altura;
}

const mediaAlturas = somaAlturas / 5;
console.log(`A média de altura das 5 pessoas é: ${mediaAlturas.toFixed(2)} metros.`);