let cidade = prompt("Digite o nome da sua cidade")

let estado = prompt("Digite o nome do Estado da sua cidade.")

alert(`Você mora em ${cidade.charAt(0).toUpperCase() + cidade.slice(1)}, ${estado.charAt(0).toUpperCase() + estado.slice(1)}.`)

//Por serem nomes poróprios, adicionei um pequeno parâmetro para converter as primeiras letras das palavras em maiúsculas. Caso o usuário não digite corretamente.