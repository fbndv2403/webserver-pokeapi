function generateCharacterTemplate(item) {
  return `
  <div class="contenedor">

        <div class="card">
            <img
                src="${item.img}"
                class="card-img-top"/>
        </div>
                <h2>
                ${modal(item)}
                </h2>
  </div>


    `;
}


const modal = (item) => {
  return `
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop${item.id}">
  <div class="modal-dialog">
      <div class="modal-content text-white bg-dark">
      <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${item.name}</h5>

          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
          <div class="circulo">
            <img id="juegoimg"  src="${item.imgsecu}">
          </div>
          <ul class="list-group list-group-flush">

          <li class="list-group-item list-group-item-dark"><b>Name: </b>${item.name}</li>
          <li class="list-group-item list-group-item-dark"><b>Pokedex Position: </b>${item.id}</li>
          <li class="list-group-item list-group-item-dark"><b>Weight: </b>${item.weight}</li>
          <li class="list-group-item list-group-item-dark"><b>Weight: </b>${item.height}</li>
          <li class="list-group-item list-group-item-dark"><b>Type: </b>${item.type}</li>
          </ul>
      </div>
  </div>
  </div>
  </div>
  <!-- Button trigger modal -->

  <button id="botonpoke" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop${item.id}">
  ${item.name}
  </button>

    `
}

const iterarPokemon = () => {
  for (let i = 1; i <800; i++) {
    fetchApi(i);
  }
}

const charactersDom = document.querySelector(".panel");

const fetchApi = async (index) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await res.json();
    pokemon = {
      img: data.sprites.other.dream_world.front_default,
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      type: data.types.map(type => type.type.name),
      imgsecu: data.sprites.front_default
    };
    charactersDom.innerHTML += generateCharacterTemplate(pokemon);
  } catch (error) {
    console.log(error);
  }
};

iterarPokemon();
