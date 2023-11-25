const n1 = prompt('Digite a primeira nota');
const n2 = prompt('Digite a segunda nota');
const n3 = prompt('Digite a terceira nota');

if (n1 !== null && n2 !== null && n3 !== null) {
    const nota1 = parseFloat(n1);
    const nota2 = parseFloat(n2);
    const nota3 = parseFloat(n3);

    function media(num1: number, num2: number, num3: number): number {
        return (num1 + num2 + num3) / 3;
    }

    const mediaAritmetica = media(nota1, nota2, nota3);

    console.log(`A média aritmética das notas é ${mediaAritmetica.toFixed(2)}`);
} else {
    console.error("Alguma das notas é inválida ou a entrada foi cancelada.");
}
