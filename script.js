const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu estilo de jogo no LOL",
        alternativas: [
            {
                texto: "Você gosta de ficar sozinho nas rotas e ficar forte para e consegui ganhar o jogo sem muita ajuda do seu time",
                afirmacao: "você tem preferência de jogar nas rotas superiores ou no meio onde a habilidade do jogador define quem vai ganhar "
            },
            {
                texto: "Você prefere ficar junto com um amigo para ter sempre uma estratégia para sair por cima do inimigo mesmo que ele esteja mais forte que você",
                afirmacao: " você tem preferência na rota inferior onde a prioridade é o trabalho em equipe"
            }
        ]
    },
    {
        enunciado: "você prefere",
        alternativas: [
            {
                texto: "Usar personagens tanks ",
                afirmacao: "ua prioridade é sempre estar na linha de frente e você sempre prioriza a vida dos seus companheiro do que a sua"
            },
            {
                texto: "usar personagens assassinos ou magos",
                afirmacao: "sua prioridade é sempre estar atrás do seu time e tentar causar o maior dano possível no seu inimigo"
            }
        ]
    },
    {
        enunciado: "você sempre",
        alternativas: [
            {
                texto: "focar na sua rota",
                afirmacao: "você sempre vai ter vantagens na sua rota por sempre focar nela mas as vezes nao ve o time inimigo andando pelo mapa que pode causar sua morte ou até mesmo a sua derrota"
            },
            {
                texto: "olha sua rota mas toda hora fica de olho no mapa",
                afirmacao: "você presta atenção na sua rota mais olha o mapa e isso faz você ajudar mais seu time quando precisa e até mesmo aviltar a morte"
            }
        ]
    },
    {
        enunciado: "Enunciado 4",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 5",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
