<script>
	import PlanOption from "./PlanOption.svelte";

    const plans = [
        {
            name: "Arcade",
            price: 9,
            imgSrc: "/assets/images/icon-arcade.svg",
        },
        {
            name: "Advanced",
            price: 12,
            imgSrc: "/assets/images/icon-advanced.svg",
        },
        {
            name: "Pro",
            price: 15,
            imgSrc: "/assets/images/icon-pro.svg",
        }
    ]

</script>
<div id="card" class="bg-white mx-4 px-4 py-8 rounded-md drop-shadow-xl">
    <h1 class="text-2xl font-bold text-marine mb-2">Select your plan</h1>
    <p class="text-lg text-coolGray">You have the option of monthly or yearly billing.</p>
    <div class="mt-4 gap-4 flex flex-col">
        {#each plans as plan}
        <PlanOption {...plan} />
        {/each}
    </div>
</div>