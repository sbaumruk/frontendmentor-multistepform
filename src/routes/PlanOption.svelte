<script lang="ts">
    export let name: string;
    export let price: number;
    export let imgSrc: string;
    export let imgAlt: string = `logo for the ${name} plan`
</script>

<div class="flex gap-4 p-4 ring-lightGray ring-1 rounded-md hover:bg-alabaster hover:ring-purplish">
    <img src={imgSrc} alt={imgAlt}/>
    <div class="flex flex-col">
        <span class="text-marine font-bold text-lg">{name}</span>
        <span class="text-sm text-coolGray">${price}/mo</span>
    </div>
</div>