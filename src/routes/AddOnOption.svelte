<script lang="ts">
	import { selectedAddons as selectedAddonsStore } from './stores.js';
	let checked = false;
	export let name: string;
	let selectedAddons: string[];

	selectedAddonsStore.subscribe((options) => {
		selectedAddons = options;
		if (options.includes(name)) checked = true;
	});

	function updateOptionsStore() {
		let newOptions = selectedAddons;
		if (checked) {
			if (!selectedAddons.includes(name)) {
				newOptions.push(name);
			}
		} else {
			if (selectedAddons.includes(name)) {
				newOptions = newOptions
					.slice(0, newOptions.indexOf(name))
					.concat(newOptions.slice(newOptions.indexOf(name) + 1, newOptions.length + 1));
			}
		}
		selectedAddonsStore.update(() => newOptions);
	}
</script>

<label for={name}>
	<div
		class="addon-option-box grid grid-cols-12 gap-2 ring-1 ring-lightGray rounded-md p-4 transition cursor-pointer"
		class:ring-purplish={checked}
		class:bg-magnolia={checked}
	>
		<div class="col-span-2 flex justify-center items-center">
			<input
				type="checkbox"
				name="addons"
				id={name}
				class="peer sr-only"
				bind:checked
				value={name}
				on:change={() => updateOptionsStore()}
			/>
			<span
				class="checkbox m-auto w-5 h-5 rounded-sm-md border-1 border-lightGray peer-checked:bg-purplish transition flex justify-center items-center"
			>
				<img alt="checkbox" src="/assets/images/icon-checkmark.svg" class="w-3 h-3" />
			</span>
		</div>
		<div class="col-span-8 flex flex-col">
			<span class="font-bold text-marine text-sm"><slot name="title">Unknown title</slot></span>
			<span class="text-xs text-coolGray"><slot name="description">Unknown description</slot></span>
		</div>
		<div class="col-span-2 flex justify-center items-center">
			<span class="text-sm my-auto text-purplish font-semibold"
				><slot name="price">Unknown price</slot></span
			>
		</div>
	</div>
</label>
