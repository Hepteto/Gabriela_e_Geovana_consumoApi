// Pegando o input - barra de pesquisa
const searchBar = document.querySelector(".search-bar");

// Tabela personagens
let charactersTable = [];

//Eventos - pegando os dados da api
getCharacters();

searchBar.addEventListener("keyup", e => {
	let { value } = e.target;

	value = value.toLowerCase();

		// dados que serão filtrados
	let searchCharacters = charactersTable.filter(character => {
		return (
			character.name.toLowerCase().includes(value) ||
			character.house.toLowerCase().includes(value)
		);
	});

	// Mostrar personagens ou casas pesquisadas- parâmetros de searchCharacters
	displayCharacters(searchCharacters);
});

// FUNÇÕES
// Mostrar infos personagens
function displayCharacters(charactersArray) {
	let characterItems = charactersArray
		.map(character => {

			return `
			<ul class="characters">
				<li class="character">
					<div class="character-image">
						<img class="img-character" src="${character.image}" alt="${character.name}">
					</div>
					
					<div class="character-infos">
						<h1 class="character-name">
							${character.name}
						</h1>
						<p class="character-house">
							<strong>House: </strong>${character.house}
						</p>
						<p class="character-actor">
							<strong>Actor: </strong>${character.actor}
						</p>
					</div>
				</li>				
			</ul>		
            `
			;
		})
		.join("");

		// Escrevendo no HTML
	document.querySelector(".container").innerHTML = characterItems;

}

async function getCharacters() {
	try {
		const response = await fetch("https://hp-api.onrender.com/api/characters");
		charactersTable = await response.json();
	} catch (error) {
        console.log(error);
	}
}
