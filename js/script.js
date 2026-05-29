const perguntas = [
    {
        pergunta: "Quantos segundos uma pessoa vive apos ter seu nome escrito no Death Note?",
        imagem: "BancoImgs/questaoUm.jpeg",
        alternativas: ["10 Segundos", "40 Segundos", "50 Segundos", "60 Segundos"],
        correta: 1
    },
    {
        pergunta: "Qual e o nome verdadeiro de L?",
        imagem: "BancoImgs/questao2.jpeg",
        alternativas: ["Ryuzaki", "L Lawliet", "Lind L. Taylor", "L não tem nome verdadeiro confirmado"],
        correta: 1
    },
    {
        pergunta: "O que acontece se voce escrever um nome errado no Death Note 4 vezes?",
        imagem: "BancoImgs/questao3.jpeg",
        alternativas: ["Você Morre", "O Caderno para de funcionar", "Nada Acontece", "A Pessoa ganha imunidade"],
        correta: 2
    },
    {
        pergunta: "Quem foi o Terceiro Kira?",
        imagem: "BancoImgs/questao4.jpeg",
        alternativas: ["Kyosuke Higuchi", "Kiyomi Takada", "Misa Amane", "Teru Mikami"],
        correta: 0
    },
    {
        pergunta: "E o que ele era?",
        imagem: "BancoImgs/questao5.jpeg",
        alternativas: ["Um Humano com muito senso de justiça", "Uma Repórter da TV Sakura", "Um Empresário Ganancioso", "Um Assassino que já matava antes da posse do Death Note"],
        correta: 2
    },
    {
        pergunta: "Quem matou o L?",
        imagem: "BancoImgs/questao6.jpeg",
        alternativas: ["Light Yagami", "Misa Amane", "Shinigami Rem", "Shinigami Ryuk"],
        correta: 2
    },
    {
        pergunta: "Quem e a personagem na foto?",
        imagem: "BancoImgs/questao7.jpeg",
        alternativas: ["Ryome Takada", "Misa Amane", "Mello", "Nenhum desses!"],
        correta: 1
    },
    {
        pergunta: "TERU MIKAMI----",
        imagem: "BancoImgs/questao8.jpg", // Note que este arquivo está como .jpg na árvore de arquivos
        alternativas: ["Quarto Kira", "Escolhido por Light Yagami", "Passou a vida defendendo os Fracos", "DELETAR DELETAR DELETAR DELETAR"],
        correta: 3
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const p = perguntas[perguntaAtual];
    
    // pra atualizar os negocio de cima do quiz
    document.getElementById("numero-questao").innerText = `${perguntaAtual + 1} / ${perguntas.length}`;
    document.getElementById("valor-pontuacao").innerText = pontuacao;
    
    // Atualiza a imagem e o texto da questão
    document.getElementById("imagem-pergunta").src = p.imagem;
    document.getElementById("texto-pergunta").innerText = p.pergunta;
    
    // atualiza o texto de cada botão
    const botoes = document.querySelectorAll(".btn-opcao .texto-btn");
    botoes.forEach((btn, index) => {
        btn.innerText = p.alternativas[index];
    });
}

function verificarResposta(indexSelecionado) {
    const correta = perguntas[perguntaAtual].correta;
    const botoes = document.querySelectorAll(".btn-opcao");

    // Trava os botões para evitar duplo clique no delay
    botoes.forEach(btn => btn.style.pointerEvents = "none");

    if (indexSelecionado === correta) {
        pontuacao += 1; // soma 1 ponto pra cada questão acertada
        botoes[indexSelecionado].classList.add("correto");
    } else {
        botoes[indexSelecionado].classList.add("errado");
        botoes[correta].classList.add("correto"); // mostra visualmente qual ta certa
    }

    setTimeout(() => {
        botoes.forEach(btn => {
            btn.classList.remove("correto", "errado");
            btn.style.pointerEvents = "auto";
        });
        
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            // salva o score do jogador no navegador e redireciona para a tela final
            localStorage.setItem("pontuacaoFinal", pontuacao);
            window.location.href = "resultado.html";
        }
    }, 1500);
}

// inicializa o quiz assim que o documento carregar tudo (ia mandou colocar)
window.onload = carregarPergunta;