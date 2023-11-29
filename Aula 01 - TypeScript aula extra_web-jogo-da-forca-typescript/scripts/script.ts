const wordList: { word: string; hint: string }[] = [
  {
    word: "violao",
    hint: "Um instrumento musical com cordas.",
  },
  {
    word: "oxigenio",
    hint: "Um gas incolor e inodoro essencial para a vida.",
  },
  {
    word: "montanha",
    hint: "Uma grande elevacao natural da superficie da Terra.",
  },
  {
    word: "pintura",
    hint: "Uma forma de arte que utiliza cores em uma superficie para criar imagens ou expressao.",
  },
  {
    word: "astronomia",
    hint: "O estudo cientifico de objetos e fenomenos celestes.",
  },
  {
    word: "futebol",
    hint: "Um esporte popular jogado com uma bola esferica.",
  },
  {
    word: "chocolate",
    hint: "Uma guloseima doce feita a partir de graos de cacau.",
  },
  {
    word: "borboleta",
    hint: "Um inseto com asas coloridas e um corpo esguio.",
  },
  {
    word: "historia",
    hint: "O estudo de eventos passados e da civilizacao humana.",
  },
  {
    word: "pizza",
    hint: "Um prato salgado que consiste em uma base redonda e achatada com coberturas.",
  },
  {
    word: "jazz",
    hint: "Um genero musical caracterizado pela improvisacao e sincopacao.",
  },
  {
    word: "camera",
    hint: "Um dispositivo usado para capturar e gravar imagens ou videos.",
  },
  {
    word: "diamante",
    hint: "Uma gema preciosa conhecida por seu brilho e dureza.",
  },
  {
    word: "aventura",
    hint: "Uma experiencia emocionante ou ousada.",
  },
  {
    word: "ciencia",
    hint: "O estudo sistemico da estrutura e comportamento do mundo fisico e natural.",
  },
  {
    word: "bicicleta",
    hint: "Um veiculo movido a pedal, com duas rodas.",
  },
  {
    word: "cafex",
    hint: "Uma bebida cafeinada popular feita a partir de graos de cafe torrados.",
  },
  {
    word: "danca",
    hint: "Um movimento ritmico do corpo frequentemente realizado com musica.",
  },
  {
    word: "galaxia",
    hint: "Um vasto sistema de estrelas, gas e poeira mantido unido pela gravidade.",
  },
  {
    word: "orquestra",
    hint: "Um grande conjunto de musicos tocando varios instrumentos.",
  },
  {
    word: "vulcao",
    hint: "Uma montanha ou colina com uma abertura pela qual lava, fragmentos de rocha, vapor quente e gas sao expelidos.",
  },
  {
    word: "romance",
    hint: "Uma obra longa de ficcao, tipicamente com uma trama complexa e personagens.",
  },
  {
    word: "escultura",
    hint: "Uma forma de arte tridimensional criada moldando ou combinando materiais.",
  },
  {
    word: "sinfonia",
    hint: "Uma composicao musical longa para uma orquestra completa, geralmente com varios movimentos.",
  },
  {
    word: "arquitetura",
    hint: "A arte e ciencia de projetar e construir edificios.",
  },
  {
    word: "ballet",
    hint: "Uma forma de danca classica caracterizada por movimentos precisos e elegantes.",
  },
  {
    word: "astronauta",
    hint: "Uma pessoa treinada para viajar e trabalhar no espaco.",
  },
  {
    word: "cachoeira",
    hint: "Uma cascata de agua caindo de uma altura.",
  },
  {
    word: "tecnologia",
    hint: "A aplicacao do conhecimento cientifico para fins praticos.",
  },
  {
    word: "arcoiris",
    hint: "Um fenomeno meteorologico causado pela reflexao, refracao e dispersao da luz.",
  },
  {
    word: "universo",
    hint: "Todo o material existente, espaco e tempo como um todo.",
  },
  {
    word: "piano",
    hint: "Um instrumento musical tocado pressionando teclas que fazem martelos baterem nas cordas.",
  },
  {
    word: "ferias",
    hint: "Um periodo de tempo dedicado ao prazer, descanso ou relaxamento.",
  },
  {
    word: "floresta",
    hint: "Uma floresta densa caracterizada por alta pluviosidade e biodiversidade.",
  },
  {
    word: "teatro",
    hint: "Um edificio ou area ao ar livre onde pecas, filmes ou outras performances sao encenados.",
  },
  {
    word: "telefone",
    hint: "Um dispositivo usado para transmitir som a longas distancias.",
  },
  {
    word: "idioma",
    hint: "Um sistema de comunicacao composto por palavras, gestos e sintaxe.",
  },
  {
    word: "deserto",
    hint: "Uma terra esteril ou arida com pouca ou nenhuma precipitacao.",
  },
  {
    word: "girassol",
    hint: "Uma planta alta com uma grande cabeca de flor amarela.",
  },
  {
    word: "fantasia",
    hint: "Um genero de ficcao imaginativa envolvendo magia e elementos sobrenaturais.",
  },
  {
    word: "telescopio",
    hint: "Um instrumento optico usado para visualizar objetos distantes no espaco.",
  },
  {
    word: "brisa",
    hint: "Um vento suave.",
  },
  {
    word: "oasis",
    hint: "Um local fertil no deserto onde a agua e encontrada.",
  },
];

const hangmanImage: HTMLImageElement =
  document.querySelector(".hangman-box img")!;
const wordDisplay: HTMLUListElement = document.querySelector(".word-display")!;
const guessesText: HTMLBRElement = document.querySelector(".guesses-text b")!;
const keyboardDiv: HTMLDivElement = document.querySelector(".keyboard")!;
const gameModal: HTMLDivElement = document.querySelector(".game-modal")!;
const playAgainBtn: HTMLButtonElement = document.querySelector(".play-again")!;

let currentWord: string, correctLetters: string[], wrongGuessCount: number;
const maxGuesses: number = 6;

const resetGame = (): void => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};

const getRandomWord = (): void => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  const hintElement = document.querySelector(".hint-text b") as HTMLElement;
  if (hintElement) {
    hintElement.innerText = hint;
  }
  resetGame();
};

const gameOver = (isVictory: boolean): void => {
  setTimeout(() => {
    const modalText = isVictory
      ? `Você encontrou a palavra`
      : `A palavra correta é`;
    gameModal.querySelector("img")!.src = `images/${
      isVictory ? "victory" : "lost"
    }.gif`;
    gameModal.querySelector("h4")!.innerText = `${
      isVictory ? "Você Ganhou!" : "Você Perdeu!"
    }`;
    gameModal.querySelector(
      "p"
    )!.innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button: HTMLButtonElement, clickedLetter: string): void => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

for (let i = 97; i < 123; i++) {
  const button: HTMLButtonElement = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target as HTMLButtonElement, String.fromCharCode(i))
  );
}

getRandomWord();

playAgainBtn.addEventListener("click", getRandomWord);
