<script context="module" lang="ts">
    export async function load({url, params,fetch}:any) {
        url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
        const res = await fetch(url);
        const data = await res.json();
        const loadedPokemon = data.results.map((data:any, index:any) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			    index + 1
		    }.png`
        };
    });
    return {props: { pokemon:loadedPokemon}}
    }
</script>
<script lang="ts">
import PokemanCard from "src/components/PokemanCard.svelte";



    export let pokemon:any;
    
    let searchTerm = "";
    let filteredPokemon:any = [];

    $: {
        if(searchTerm) {
            //search the pokemon
            filteredPokemon = pokemon.filter((pokeman:any) => pokeman.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
        }else {
            filteredPokemon = [...pokemon]
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokdex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200 " type="text" bind:value={searchTerm} placeholder="Serach Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman} />
    {/each}
</div>