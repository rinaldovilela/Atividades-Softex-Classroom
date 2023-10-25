let cidade = prompt("Digite sua cidade")

let primeiraLetra =  cidade.charAt(0)

if(primeiraLetra == "s" || primeiraLetra == "S") {
    alert(`O nome da sua cidade começa com S`)
}else {
    alert(`O nome da sua cidade não começa com a letra S`)
}