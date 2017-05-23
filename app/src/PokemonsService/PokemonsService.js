angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {
// если применять common для всех запросов, pokeapi.co ругается
            $http.defaults.headers.common = {
                "application-id": "BBE2BD1F-9306-F389-FFCE-0D7310E74300",
                "secret-key": "21A60E66-E921-977A-FF7D-AF3F75E3B400"

            };

            $http.defaults.headers.get = {
                "application-id": "",
                "secret-key": ""
            };


            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonData.name,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId
                    });
                }

            }

        }

    );
