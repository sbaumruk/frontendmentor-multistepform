<script lang="ts">
	import AddOnOption from './AddOnOption.svelte';
	import { addons as options } from './config';
	export let yearly = false;
</script>

<div id="card" class="bg-white mx-4 px-4 py-8 rounded-md drop-shadow-xl">
	<h1 class="text-2xl font-bold text-marine mb-2">Pick add-ons</h1>
	<p class="text-lg text-coolGray">Add-ons help enhance your gaming experience.</p>
	<form class="mt-4 gap-4 flex flex-col">
		{#each options as option}
			<AddOnOption name={option.name}>
				<span slot="title">{option.title}</span>
				<span slot="description">{option.description}</span>
				<span slot="price">
					{#if yearly}
						+${option.price.yearly}/yr
					{:else}
						+${option.price.monthly}/mo
					{/if}
				</span>
			</AddOnOption>
		{/each}
	</form>
</div>
