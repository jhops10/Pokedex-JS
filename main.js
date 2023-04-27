import data from './database.js';


const main = document.querySelector('.conteudo_principal');
const card = document.querySelector('#card');
if (card) {
    verificaTipo();
}

exibePokemons();

function exibePokemons() {
    return data.forEach((pokemon) => {
        main.innerHTML += `
    <div id="card">
        <h2 class="titulo_card">${pokemon.name}</h2>
        <p class="tipo"><b>Tipo:</b> ${pokemon.type}</p>
        <p class="peso"><b>Peso:</b> ${pokemon.averageWeight.value}kg</p>
        <img class="imagem" src="${pokemon.image}" alt="Imagem Pokemon">
        <a class="botao" href="${pokemon.moreInfo}" target="_blank">More Info</a>
    </div>
    `
    });
}

