<script>
    export let active=false;
</script>

{#if active}
<div class="w-8 aspect-square flex justify-center align-middle rounded-full text-marine bg-lightBlue font-bold m-1">
    <p class="text-center relative my-auto"><slot /></p>
</div>
{:else}
<div class="w-8 aspect-square flex justify-center align-middle rounded-full text-white font-bold ring-1 ring-white m-1">
    <p class="text-center relative my-auto"><slot /></p>
</div>
{/if}