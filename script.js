
/* FILTROS DOS PRODUTOS */

const pesquisa = document.getElementById("pesquisa");
const filtroMarca = document.getElementById("filtro-marca");
const filtroCondicao = document.getElementById("filtro-condicao");
const limparFiltros = document.getElementById("limpar-filtros");

const produtos = document.querySelectorAll(".produto");
const mensagemVazia = document.getElementById("mensagem-vazia");


function filtrarProdutos() {

    const texto = pesquisa.value.toLowerCase();
    const marca = filtroMarca.value;
    const condicao = filtroCondicao.value;

    let encontrados = 0;

    produtos.forEach(produto => {

        const nome = produto.querySelector("h3").textContent.toLowerCase();

        const marcaProduto = produto.dataset.marca;
        const condicaoProduto = produto.dataset.condicao;

        const correspondeNome = nome.includes(texto);

        const correspondeMarca =
            marca === "todos" || marca === marcaProduto;

        const correspondeCondicao =
            condicao === "todos" || condicao === condicaoProduto;

        if (
            correspondeNome &&
            correspondeMarca &&
            correspondeCondicao
        ) {

            produto.style.display = "block";
            encontrados++;

        } else {

            produto.style.display = "none";

        }

    });

    mensagemVazia.hidden = encontrados !== 0;

}


pesquisa.addEventListener("input", filtrarProdutos);

filtroMarca.addEventListener("change", filtrarProdutos);

filtroCondicao.addEventListener("change", filtrarProdutos);


limparFiltros.addEventListener("click", () => {

    pesquisa.value = "";
    filtroMarca.value = "todos";
    filtroCondicao.value = "todos";

    filtrarProdutos();

});


/* FORMULÁRIO TRADE-IN */

const formularioTrade = document.getElementById("form-trade");

formularioTrade.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca-trade").value;
    const modelo = document.getElementById("modelo-trade").value;
    const armazenamento = document.getElementById("armazenamento").value;
    const estado = document.getElementById("estado").value;
    const defeitos = document.getElementById("defeitos").value;
    const acessorios = document.getElementById("acessorios").value;

    const mensagem =
        `Olá! Gostaria de solicitar uma avaliação para troca do meu celular.

Nome: ${nome}

Marca: ${marca}
Modelo: ${modelo}
Armazenamento: ${armazenamento}
Estado de conservação: ${estado}
Defeitos: ${defeitos}
Acessórios: ${acessorios}

Gostaria de receber uma avaliação para utilizar meu aparelho como parte do pagamento de outro smartphone.`;

    const numeroWhatsApp = "5511983437074";

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");

});
