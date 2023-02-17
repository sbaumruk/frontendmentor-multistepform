<script lang="ts">
	import {createEventDispatcher} from 'svelte'
	export let yearly: boolean;
	export let selectedPlan: string;
	import {plans, addons} from './config'
	let selectedAddons: string[];

	import { selectedAddons as selectedAddonsStore } from './stores.js';
	selectedAddonsStore.subscribe((options) => {
		selectedAddons = options;
	});

	// @ts-ignore
	let calculatedAddons: {title: string, price: number}[] = addons.reduce((prev,cur) => {
		if (!selectedAddons.includes(cur.name)) return prev
		return [...prev,{title: cur.title, price: yearly ? cur.price.yearly : cur.price.monthly}]
	}, [])

	// @ts-ignore
	let planCost = plans.reduce((prev, cur) => {
		if (cur.name === selectedPlan) return yearly ? cur.price.yearly : cur.price.monthly
		return prev
	}, 0)

	// @ts-ignore
	let totalCost = calculatedAddons.reduce((prev, cur) => {
		return prev + cur.price
	}, 0) + planCost

	const dispatch = createEventDispatcher();

</script>

<div id="card" class="bg-white mx-4 px-4 py-8 rounded-md drop-shadow-xl">
	<h1 class="text-2xl font-bold text-marine mb-2">Finishing up</h1>
	<p class="text-lg text-coolGray">Double-check everything looks OK before confirming.</p>
	<div class="items bg-magnolia mt-4 rounded-xl">
		<div class="row flex justify-between p-4 items-center">
			<div class="flex flex-col">
				<span class="text-marine font-bold text-sm">{selectedPlan} ({yearly ? 'Annually' : 'Monthly'})</span
				>
				<a href="#top" class="text-sm text-coolGray underline font-semibold cursor-pointer" on:click={() => dispatch('returnToPlans')}>Change</a>
			</div>
			<span class="text-sm font-bold text-marine">${planCost}/{yearly ? 'yr' : 'mo'}</span>
		</div>
		<hr class="mx-4 text-lightGray" />
		{#each calculatedAddons as addon}
		<div class="row flex justify-between p-2 px-4 items-center">
			<span class="text-coolGray text-sm">{addon.title}</span>
			<span class="text-marine font-semibold text-sm">+${addon.price}/{yearly ? 'yr' : 'mo'}</span>
		</div>
		{/each}
	</div>
	<div class="total flex justify-between px-4 mt-8">
		<span class="text-coolGray text-sm">Total (per {yearly ? 'year' : 'month'})</span>
		<span class="text-purplish font-bold">${totalCost}/{yearly ? 'yr' : 'mo'}</span>
	</div>
</div>
