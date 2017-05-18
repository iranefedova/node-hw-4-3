'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemon = {};

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
    });

    $scope.editPokemon = function(myPokemon) {

        $scope.editSuccess = true;
        PokemonsService.editPokemon(myPokemon).then(function(response) {

            // $scope.editSuccess = true;

        });

    }

});
