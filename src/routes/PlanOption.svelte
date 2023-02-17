<script lang="ts">
	export let name: string;
	export let price: number;
	export let imgSrc: string;
	export let imgAlt: string = `logo for the ${name} plan`;
	export let period: 'year' | 'month';
	export let promo: string = '';

	export let selection: string;
</script>

<label for={name}>
	<input type="radio" name="plan-options" id={name} class="sr-only peer" bind:group={selection} value={name} />
	<div
		class="flex gap-4 py-2 ring-lightGray ring-1 rounded-md peer-checked:bg-alabaster peer-checked:ring-purplish transition-all cursor-pointer"
	>
		<img src={imgSrc} alt={imgAlt} class="relative ml-4" />
		<div class="flex flex-col">
			<span class="text-marine font-bold text-lg">{name}</span>
			<span class="text-sm text-coolGray">${price}/{period === 'year' ? 'yr' : 'mo'}</span>
			<span class="text-xs font-semibold text-marine">{promo}</span>
		</div>
	</div>
</label>
