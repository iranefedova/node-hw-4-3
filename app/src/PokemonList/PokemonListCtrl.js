'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {

    $scope.pokemonListLoaded = false;
    $scope.berriesLoaded = false;
    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    //     $scope.pokemonListLoaded = true;
    //     return BerriesService.getBerries()
    // }).then(function(response) {
    //     $scope.berries = response.data.results;
    //     $scope.berriesLoaded = true;
    // });


    $q.all([
        PokemonsService.getPokemons(),
        BerriesService.getBerries()
    ]).then(function(values){
      $scope.pokemons = values[0].data.results;
      $scope.berries = values[1].data.results;

      $scope.pokemonListLoaded = true;
      $scope.berriesLoaded = true;
    });

});
