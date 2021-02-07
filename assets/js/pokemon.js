let datos;
let resultado;
let url = "https://pokeapi.co/api/v2/pokemon";

function getPokemon(url) {
    // url de la api, mas info en https://pokeapi.co/
    //let url = `<h5 class="card-title">${datos[i].name}</h5>`;

    const pokedexApi = new XMLHttpRequest();

    pokedexApi.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            datos = JSON.parse(this.responseText).results;


            resultado = document.getElementById('#resultado');



            resultado.innerHTML = ''; // Iterador comienza en 0
            for (let i = 0; i <= 500; i++) {
                //obtenerDatos([i+1])
                resultado.innerHTML += `<div class="col mt-4">
                        <div class="card h-100">
                                <img src="https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png" class="card-img-top p-4 img-fluid">
                            <div class="card-body">
                                <h5 class="card-title text-center">${datos[i].name}</h5>
                            </div>
                        </div>
                    </div>`;
            }

        }
    };
    pokedexApi.open('GET', url, true);
    pokedexApi.send();
}

getPokemon(url);

//for(let i = 1;i<=151;i++){
    //$('#images').append(`<img id="${i}" src="http://pokeapi.co/media/img/${i}.png">`);
//}



///
 //let resultado = document.querySelector('#resultado');
            // resultado.innerHTML = '';
             //Codigo de ejemplo para iterar
            //for (let item of datos.character) {
              // resultado.innerHTML = `<li>${item.fecha}</li>`
            //}

