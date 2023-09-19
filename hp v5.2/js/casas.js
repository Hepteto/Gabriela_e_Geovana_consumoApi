function gryffindor(){

    let charactersTable = [];

    getCharacters();

    function displayCharacters(charactersArray) {
        let characterItems = charactersArray
            .map(character => {

                return `
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
                
                `
                ;
            })
            .join("");

            // Escrevendo no HTML
        document.querySelector(".characters_gryffindor").innerHTML = characterItems;
    }

    async function getCharacters() {
        try {
            const response = await fetch("https://hp-api.onrender.com/api/characters/house/gryffindor");
            charactersTable = await response.json();
            displayCharacters(charactersTable);
        } catch (error) {
            console.log(error);
        }
    }

}

function slytherin(){

    let charactersTable = [];

    getCharacters();

    function displayCharacters(charactersArray) {
        let characterItems = charactersArray
            .map(character => {

                return `
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
                
                `
                ;
            })
            .join("");

            // Escrevendo no HTML
        document.querySelector(".characters_slytherin").innerHTML = characterItems;
    }

    async function getCharacters() {
        try {
            const response = await fetch("https://hp-api.onrender.com/api/characters/house/slytherin");
            charactersTable = await response.json();
            displayCharacters(charactersTable);
        } catch (error) {
            console.log(error);
        }
    }

}

function hufflepuff(){

    let charactersTable = [];

    getCharacters();

    function displayCharacters(charactersArray) {
        let characterItems = charactersArray
            .map(character => {

                return `
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
                
                `
                ;
            })
            .join("");

            // Escrevendo no HTML
        document.querySelector(".characters_hufflepuff").innerHTML = characterItems;
    }

    async function getCharacters() {
        try {
            const response = await fetch("https://hp-api.onrender.com/api/characters/house/hufflepuff");
            charactersTable = await response.json();
            displayCharacters(charactersTable);
        } catch (error) {
            console.log(error);
        }
    }

}

function ravenclaw(){

    let charactersTable = [];

    getCharacters();

    function displayCharacters(charactersArray) {
        let characterItems = charactersArray
            .map(character => {

                return `
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
                
                `
                ;
            })
            .join("");

            // Escrevendo no HTML
        document.querySelector(".characters_ravenclaw").innerHTML = characterItems;
    }

    async function getCharacters() {
        try {
            const response = await fetch("https://hp-api.onrender.com/api/characters/house/ravenclaw");
            charactersTable = await response.json();
            displayCharacters(charactersTable);
        } catch (error) {
            console.log(error);
        }
    }

}

gryffindor();
slytherin();
hufflepuff();
ravenclaw();
