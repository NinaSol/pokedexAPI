//pokemon.js a jquery
$(document).ready(function () {
  getPokemon();
  let filter;
  let result;
});

function getPokemon() {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`,
    type: "GET",
    dataType: 'JSON',
    success: function (data) {
      console.log("se obvtuvo la info de pokemons nombres", data.results);
      //busqueda
      $('#button').click(function () {
        let numero = 0;
        numero = $('#pokeNumber').val() - 1;
        let respuesta = $('#busqueda').append(`<div class="col mt-4 card-div">
            <div class="card h-100 text-center">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${numero + 1}.png" id="searchResult" class="mx-auto card-img-top p-4 img-fluid">
                <div class="card-body">
                <h5>id: ${[numero]}</h5>
                <h5>${data.results[numero].name}</h5>
                </div>
            </div>
        </div>`);
      });
      //
      for (let i = 0; i <= 100; i++) {
        result = $('#resultado').append(`<div class="col mt-4 card-div">
                    <div class="card h-100 text-center">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/${i + 1}.png" class="card-img-top p-4 img-fluid">
                        <div class="card-body">
                        <h5>id: ${[i]}</h5>
                        <h5>${data.results[i].name}</h5>
                        </div>
                    </div>
                </div>`);

      }
    },
    error: function () {
      console.log("no se obtuvo la info de pokeapi");
    }

  });
  $.ajax({
    url: `https://pokeapi.co/api/v2/ability?offset=0&limit=100`,
    type: "GET",
    dataType: 'JSON',
    success: function (data) {
      console.log("se obvtuvo la info de pokemons habilidades", data.results);

      for (let i = 0; i <= 100; i++) {
        let cardBody = $('.card-body');
        cardBody[i].append(`${data.results[i].name}`);


      }
    },
    error: function () {
      console.log("no se obtuvo la info de pokeapi");
    }

  });




}



