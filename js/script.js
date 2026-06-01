let perguntaAtual = 0;
let pontuacao = 0;
let respostasDoUsuario = []; 

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
    const p = perguntas[perguntaAtual];
    const correta = p.correta;
    const botoes = document.querySelectorAll(".btn-opcao");

    // trava os botões para evitar duplo clique no delay
    botoes.forEach(btn => btn.style.pointerEvents = "none");

    // mandar pro navegador
    respostasDoUsuario.push({
        pergunta: p.pergunta,
        alternativaEscolhida: p.alternativas[indexSelecionado],
    });

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
            // guarda o score e a string do array no localStorage
            localStorage.setItem("pontuacaoFinal", pontuacao);
            localStorage.setItem("historicoRespostas", JSON.stringify(respostasDoUsuario));
            
            window.location.href = "resultado.html";
        }
    }, 1500);
}

// inicializa o quiz assim que o documento carregar tudo
window.onload = carregarPergunta;
