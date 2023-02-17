<script lang="ts">
	import PlanOption from './PlanOption.svelte';
    import Switch from '../components/Switch.svelte'

	import {plans} from './config'

	// @ts-ignore
	const monthlyPlans: {name: string, price: number, imgSrc: string}[] = plans.reduce((prev, cur) => {
		return [...prev, {name: cur.name, price: cur.price.monthly, imgSrc: cur.imgSrc}]
	}, [])
	// @ts-ignore
    const yearlyPlans: {name: string, price: number, imgSrc: string}[] = plans.reduce((prev, cur) => {
		return [...prev, {name: cur.name, price: cur.price.yearly, imgSrc: cur.imgSrc}]
	}, [])

    export let yearlyChecked = false
	export let selectedPlan = ""
    
</script>

<div id="card" class="bg-white mx-4 px-4 py-8 rounded-md drop-shadow-xl">
	<h1 class="text-2xl font-bold text-marine mb-2">Select your plan</h1>
	<p class="text-lg text-coolGray">You have the option of monthly or yearly billing.</p>
	<div class="mt-4 gap-4 flex flex-col">
        {#if yearlyChecked}
        {#each yearlyPlans as plan}
			<PlanOption {...plan} period="year" bind:selection={selectedPlan} />
		{/each}
        {:else}
		{#each monthlyPlans as plan}
			<PlanOption {...plan} period="month" bind:selection={selectedPlan} />
		{/each}
        {/if}
	</div>
    <div class="bg-magnolia flex justify-center p-2 gap-4 mt-6">
        <span class="text-coolGray font-bold text-sm my-auto transition" class:text-marine={!yearlyChecked}>Monthly</span>
    <Switch bind:checked={yearlyChecked}></Switch>
        <span class="text-coolGray font-bold text-sm my-auto transition" class:text-marine={yearlyChecked}>Yearly</span>
    </div>
</div>
