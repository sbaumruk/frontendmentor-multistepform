<script>
	import StepCircle from './StepCircle.svelte';
    import PageOne from './PageOne.svelte'
    import PageTwo from './PageTwo.svelte'

    let page = 1;
</script>

<div id="background" class="absolute z-10">
	<img src="/assets/images/bg-sidebar-mobile.svg" alt="background" />
</div>
<div id="foreground" class="relative z-20 h-full">
	<div id="steps" class="flex justify-center gap-4 py-6">
		<StepCircle active={page==1}>1</StepCircle>
		<StepCircle active={page==2}>2</StepCircle>
		<StepCircle active={page==3}>3</StepCircle>
		<StepCircle active={page==4}>4</StepCircle>
	</div>
    {#if page == 1}
	<PageOne />
    {:else if page == 2}
    <PageTwo />
    {/if}
	<div class="bg-white absolute bottom-0 w-full p-4">
        <button class="text-alabaster bg-marine py-2 px-4 rounded-md float-right" on:click={() => page += 1}>Next Step</button>
        {#if page > 1}
        <button class="float-left py-2 text-coolGray font-semibold text-sm" on:click={() => page -= 1}>Go Back</button>
        {/if}
    </div>
</div>
