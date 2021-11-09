
function generateCharacterTemplate(item) {
    return `
        <div class="card">
            <img
                src="${item.img}"
                class="card-img-top"
            />
                <h2 class="card-title">
                    ${item.name}
                </h2>
        </div>
    `;
}

const agregaPokemon = () => {
    for(let i = 1; i < 151; i++) {
        fetchApi(i)
    }
}
const charactersDom = document.querySelector('.panel');

const fetchApi = async (index) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        const data = await res.json()
        pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.name
        }
        charactersDom.innerHTML += generateCharacterTemplate(pokemon)

    } catch (error) {
        console.log(error)
    }
}

agregaPokemon()

