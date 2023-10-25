document.getElementById("questao7").addEventListener("click", function() {
    console.log("Script executado");

    let letra = prompt("Digite uma letra")

    letra = letra.toLowerCase()

    let vogais = ['a', 'e', 'i', 'o', 'u']

    let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    if(vogais.includes(letra)) {
    alert(`A letra ${letra} é uma vogal.`)
    } else if(consoante.includes(letra)){
    alert(`A letra ${letra} é uma consoante`)
    }else {
    alert("Isso não é uma letra.")
    }


    
});