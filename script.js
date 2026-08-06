// 1. BANCO DE DADOS (Matriz de Objetos)
const idolosVasco = [
    {
        nome: "Roberto Dinamite",
        foto: "https://veja.abril.com.br/wp-content/uploads/2023/01/Roberto-Dinamite-do-Vasco-comemorando-gol..jpg.jpg?crop=1&resize=1212,909",
        historia: "O maior artilheiro da história do Vasco da Gama (708 gols) e do Campeonato Brasileiro. Roberto é a personificação do clube, tendo dedicado sua vida à Cruz de Malta como jogador e presidente.",
        wiki: "https://pt.wikipedia.org/wiki/Roberto_Dinamite"
    },
    {
        nome: "Romário",
        foto: "https://www.netvasco.com.br/news/noticias16/arquivos/20210425-102801-1-.jpg",
        historia: "O Baixinho genial foi revelado em São Januário. Conquistou títulos históricos e escolheu o Vasco para marcar o milésimo gol de sua carreira em 2007. Um dos maiores de todos os tempos.",
        wiki: "https://pt.wikipedia.org/wiki/Rom%C3%A1rio"
    },
    {
        nome: "Edmundo",
        foto: "https://upload.wikimedia.org/wikipedia/commons/7/74/EdmundoVasco2008_%28cropped_2%29.jpg",
        historia: "O 'Animal'. Ídolo máximo da década de 90, quebrou recordes de gols no Brasileirão de 1997, levando o Vasco ao tricampeonato brasileiro com atuações avassaladoras.",
        wiki: "https://pt.wikipedia.org/wiki/Edmundo_(futebolista)"
    },
    {
        nome: "Juninho Pernambucano",
        foto: "https://www.netvasco.com.br/news/noticias16/arquivos/20250130-064354-1-66-juninho-pernambucano-vestiu-a-camisa-31-em-2000---foto-getty-images.jpg",
        historia: "O Reizinho de São Januário. Imortalizado pelo gol de falta no Monumental de Núñez contra o River Plate em 1998. Símbolo de técnica e amor à camisa.",
        wiki: "https://pt.wikipedia.org/wiki/Juninho_Pernambucano"
    },
    {
        nome: "Barbosa",
        foto: "https://terceirotempo.uol.com.br/imagens/56/68/w700_h804_arq_5668.webp",
        historia: "O maior goleiro da história do clube. Pilar do 'Expresso da Vitória', conquistou o Sul-Americano de 1948, o primeiro título continental de um clube brasileiro.",
        wiki: "https://pt.wikipedia.org/wiki/Moacir_Barbosa_Nascimento"
    },
    {
        nome: "Bellini",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9CZvbpjaJ5M7RG6iwaefGBlmTCmHdi7gdw&s",
        historia: "Zagueiro implacável e primeiro brasileiro a levantar a taça da Copa do Mundo. Liderou o Expresso da Vitória com postura e técnica inigualáveis.",
        wiki: "https://pt.wikipedia.org/wiki/Hilderaldo_Bellini"
    },
    {
        nome: "Felipe",
        foto: "https://terceirotempo.uol.com.br/imagens/63/93/w500_h140_qfl_fto_16393.webp",
        historia: "O Maestro. O jogador mais vitorioso da história do Vasco. Revelado no clube, dominou o meio-campo com uma genialidade rara.",
        wiki: "https://pt.wikipedia.org/wiki/Felipe_Jorge_Loureiro"
    },
    {
        nome: "Mauro Galvão",
        foto: "https://s2-ge.glbimg.com/jQrG2AVCS4OWNJNRdNTSXfNyieM=/0x0:1536x864/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/D/X/Xba5wDRLOeDRmgeReNXQ/whatsapp-image-2024-10-19-at-17.19.17.jpeg",
        historia: "O capitão da glória eterna. Liderou a zaga cruz-maltina na conquista da Copa Libertadores da América no ano do Centenário (1998).",
        wiki: "https://pt.wikipedia.org/wiki/Mauro_Galv%C3%A3o"
    },
    {
        nome: "Pedrinho",
        foto: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/8378663994_f488d0f862_o-e1695847822555.jpg?w=850",
        historia: "Talento ímpar revelado pelo clube. Superou lesões gravíssimas abraçado pela torcida. Campeão da Libertadores, tornou-se presidente décadas depois.",
        wiki: "https://pt.wikipedia.org/wiki/Pedrinho_(futebolista)"
    },
    {
        nome: "Carlos Germano",
        foto: "https://odia.ig.com.br/_midias/jpg/2020/04/14/1140x632/1_cg-16696460.jpg",
        historia: "Paredão vascaíno. Passou 10 anos defendendo a meta cruz-maltina com extrema competência, sendo vital nos títulos de 97 e 98.",
        wiki: "https://pt.wikipedia.org/wiki/Carlos_Germano"
    }
];

// 2. RENDERIZAR OS CARDS NA TELA (Manipulação do DOM)
const gridIdolos = document.getElementById('idols-grid');

idolosVasco.forEach((idolo, index) => {
    // Para cada ídolo, ele injeta este bloco HTML dinamicamente
    const cardHTML = `
        <div class="card" onclick="abrirModal(${index})">
            <img src="${idolo.foto}" alt="${idolo.nome}" class="card__img">
            <h3 class="card__title">${idolo.nome}</h3>
            <button class="card__btn">Ver Detalhes</button>
        </div>
    `;
    gridIdolos.innerHTML += cardHTML;
});

// 3. LÓGICA DO MODAL (Pop-up dinâmico)
const modal = document.getElementById('modal-idolo');
const modalNome = document.getElementById('modal-nome');
const modalHistoria = document.getElementById('modal-historia');
const modalWiki = document.getElementById('modal-wiki');
const closeModal = document.getElementById('close-modal');

// Função disparada ao clicar no Card
function abrirModal(index) {
    const idoloClicado = idolosVasco[index];
    
    // Substitui as informações no HTML
    modalNome.textContent = idoloClicado.nome;
    modalHistoria.textContent = idoloClicado.historia;
    modalWiki.href = idoloClicado.wiki;
    
    // Exibe a janela
    modal.style.display = 'flex';
}

// Fechar no X
closeModal.onclick = () => modal.style.display = 'none';

// Fechar clicando na área escura fora do modal
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 4. INTERCEPTAÇÃO DO FORMULÁRIO DE SÓCIO
document.getElementById('socio-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o refresh da página
    const nome = document.getElementById('nome').value;
    alert(`Saudações Vascaínas, ${nome}! Seus dados foram processados com sucesso. O Vasco é Pra Quem Acredita!`);
    this.reset(); // Limpa os campos
});