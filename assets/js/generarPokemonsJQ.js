//pokemon.js a jquery
$(document).ready(function () {
  let result;

  $("#generate").on("click", function () {

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`,
      type: "GET",
      success: function (data) {
        console.log("se obvtuvo la info de pokeapi", data.results);
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
    //url 2
    $.ajax({
      url: `https://pokeapi.co/api/v2/ability?offset=0&limit=100`,
      type: "GET",
      dataType: 'JSON',
      success: function (data) {
        console.log("se obvtuvo la info de pokemons habilidades", data.results);
       /* */for (let i = 0; i <= 100; i++) {
          let cardBody = $('.card-body');
          cardBody[i].append(`${data.results[i].name}`);

        }
      },
      error: function () {
        console.log("no se obtuvo la info de pokeapi");
      }

    });

  });

  $('#delete').on('click', function () {
    $(".card-div").remove();
  });

});



