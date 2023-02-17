<script lang="ts">
	import StepCircle from './StepCircle.svelte';
	import PageOne from './PageOne.svelte';
	import PageTwo from './PageTwo.svelte';
	import PageThree from './PageThree.svelte';
	import PageFour from './PageFour.svelte';
	import {selectedAddons as selectedAddonsStore} from './stores.js'

	let page = 1;
	let yearly = false;
	let selectedPlan: string = '';
	let selectedAddons: string[] = []

	selectedAddonsStore.subscribe(options => {
		selectedAddons = options
	})

</script>

<div id="background" class="absolute z-10">
	<img src="/assets/images/bg-sidebar-mobile.svg" alt="background" />
</div>
<div id="foreground" class="relative z-20 h-full">
	<div id="steps" class="flex justify-center gap-4 py-6">
		<StepCircle active={page == 1}>1</StepCircle>
		<StepCircle active={page == 2}>2</StepCircle>
		<StepCircle active={page == 3}>3</StepCircle>
		<StepCircle active={page == 4}>4</StepCircle>
	</div>
	<div id="content" class="flex">
		{#if page == 1}
			<PageOne />
		{:else if page == 2}
			<PageTwo bind:yearlyChecked={yearly} bind:selectedPlan />
		{:else if page == 3}
			<PageThree {yearly} />
		{:else if page == 4}
			<PageFour bind:selectedPlan {yearly} on:returnToPlans={() => {page = 2}} />
		{/if}
	</div>
	<div class="bg-white absolute bottom-0 w-full p-4">
		{#if page < 4}
			<button
				class="text-alabaster bg-marine py-2 px-4 rounded-md float-right w-28"
				on:click={() => (page += 1)}>Next Step</button
			>
		{:else}
			<button
				class="text-alabaster bg-purplish py-2 px-4 rounded-md float-right w-28"
				on:click={() => (page = 1)}>Confirm</button
			>
		{/if}
		{#if page > 1}
			<button
				class="float-left py-2 text-coolGray font-semibold text-sm"
				on:click={() => (page -= 1)}>Go Back</button
			>
		{/if}
	</div>
</div>
